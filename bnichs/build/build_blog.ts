import type {PostInfo} from "../src/blog";


const path = require('path');
const fs = require('fs')


const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const hljs = require('highlight.js/lib/core')
const languages = ["javascript", "python"]


languages.forEach(lang => {
    const lib = `highlight.js/lib/languages/${lang}`
    hljs.registerLanguage(
        lang,
        require(lib)
    )
})

const md = require('markdown-it')()
    .use(require('markdown-it-highlightjs'), { hljs })
    .use(require('markdown-it-meta'))


// directory path
const blogDir = './blog';
const blogOutDir = './public/blog_out';
const postsDir = path.join(blogDir, 'posts')
const manifestName = "manifest.json"
const manifestPath = path.join(blogOutDir, manifestName)



// https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
// thank god for this person
let walk = function(dir: string) {
    let results: Array<string> = [];
    let list = fs.readdirSync(dir);
    list.forEach(function(file: string) {
        file = path.join(dir, file)
        let stat = fs.lstatSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}

function validateMeta(md: Object){
    const reqKeys = ["title", "tags"]
    reqKeys.forEach(key => {
        if (! md.hasOwnProperty(key)){
            throw new Error(`Missing key "${key} in ${md.path}"`)
        }
    })
}

function gen_preview(doc: String){
    // console.log(doc)
    const dom = new JSDOM("<!DOCTYPE html>"+doc)
    const pars = dom.window.document.querySelectorAll("p")

    let txt = ""
    for (let i = 0; i < pars.length; i++) {
        console.log(pars[i].textContent)
        txt += pars[i].outerHTML
    }
    console.log(txt)

    return txt
}

export function buildManifest(){
    let res = walk(postsDir).map(fil =>{
        let data = fs.readFileSync(fil, {encoding:'utf8', flag:'r'});
        const renderedDocument =  md.render(data)
        let meta = md.meta as PostInfo
        console.log(meta)

        console.log(blogOutDir)
        const f_out_path = path.join(blogOutDir, "posts", meta.ref) + ".html"
        const f_out_dir = path.dirname(f_out_path)
        fs.mkdirSync(f_out_dir, {recursive: true})

        console.log(f_out_path)
        fs.writeFileSync(f_out_path, renderedDocument, {encoding:'utf8'})


        meta['path'] = `/${f_out_path}`
        meta['preview'] = gen_preview(renderedDocument)
        return meta
    }).map(md => {
        validateMeta(md)
        // console.log(md)
        return md
    })

    let posts = {}
    for (const ind in res){
        const md = res[ind]
        // console.log(md)
        posts[md.ref] = md
    }

    let manifest = {
        posts: posts
    }
    console.log(manifest)
    let jstr = JSON.stringify(manifest, null, 4)
    fs.writeFileSync(manifestPath, jstr, {encoding:'utf8'})
    return
}
