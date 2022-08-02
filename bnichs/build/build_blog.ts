import {PostInfo} from "../src/blog";


const Walk = require('@root/walk');
const path = require('path');
const MarkdownIt = require('markdown-it')
const meta = require('markdown-it-meta')
const fs = require('fs')
const util = require('util');

// Make new instance
const md = new MarkdownIt()
// Add markdown-it-meta
md.use(meta)


// directory path
const blogDir = './public/blog';
const postsDir = path.join(blogDir, 'posts')
const manifestName = "manifest.json"
const manifestPath = path.join(blogDir, manifestName)


async function getFile(fileName: string) {
    // return new Promise((resolve, reject) => {
    return fs.readFile(fileName, (err, data) => {
            if (err) {
                // reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
                return; // and we don't want to go any further
            }
            return data;
        });

};


async function processMd(path: string){
    console.log(`Processing ${path}`)
    // const renderedDocument =  md.render(path)
    // console.log(renderedDocument)
    const fsPromises = require('fs').promises;

    const res = fs.promises.readFile(path, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        const renderedDocument =  md.render(data)
        // console.log(renderedDocument);
        // console.log(md.meta);
        return md.meta
    });

    // return new Promise( (resolve, reject) => {
    //     resolve(res)
    // })
    return res;

    return res
}


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
    // // for (let key in ["title"]){
    // // }
    // console.log(foo)
}

export function buildManifest(){
    let res = walk(postsDir).map(fil =>{
        // const md = new MarkdownIt()
        // // Add markdown-it-meta
        // md.use(meta)
        let data = fs.readFileSync(fil, {encoding:'utf8', flag:'r'});
        // console.log(data)
        const renderedDocument =  md.render(data)
        // console.log(renderedDocument);
        // console.log(md.meta);
        let meta = md.meta as PostInfo
        meta['path'] = `/${fil}`
        // meta['permalink'] = "a-perma"
        meta['preview'] = "A preview"
        return meta
    }).map(md => {
        validateMeta(md)
        console.log(md)
        return md
    })

    let posts = {}
    for (const ind in res){
        const md = res[ind]
        console.log(md)
        posts[md.ref] = md
    }

    let manifest = {
        posts: posts
    }
    console.log(manifest)
    let jstr = JSON.stringify(manifest, null, 4)
    console.log(jstr)

    fs.writeFileSync(manifestPath, jstr, {encoding:'utf8'})

    return
    //
    // const proms = []
    // async function walkFunc(err, pathname, dirent) {
    //     if (err) {
    //         throw err;
    //     }
    //
    //     if (dirent.isDirectory() && dirent.name.startsWith('.')) {
    //         return Promise.resolve(false);
    //     }
    //     // console.log('name:', dirent.name, 'in', path.dirname(pathname));
    //
    //     if (dirent.isFile() && dirent.name.endsWith('.md')) {
    //         const ftext = await getFile(pathname)
    //         proms.push(ftext)
    //         console.log(ftext)
    //         //
    //         // return ftext
    //         // const meta = processMd(pathname)
    //         // console.log(Promise.resolve(meta))
    //         return Promise.resolve(meta);
    //     }
    //     return Promise.resolve(false);
    //
    //     return meta
    //         }
    //
    //     // return new Promise((resolve, reject) => {
    //     //         resolve(meta)
    //     //     }
    // const res = await Walk.walk(postsDir, walkFunc,
    // ).then(function (meta) {
    //     console.log('Done');
    //     console.log(proms);
    //     console.log(meta);
    //     return meta
    // });
    // console.log("proms again")
    // console.log(proms);
    //
    // console.log("result")
    // console.log(res)
    // // list all files in the directory
    // fs.readdir(dir, (err, files) => {
    //     if (err) {
    //         throw err;
    //     }
    //
    //     // files object contains all files names
    //     // log them on console
    //     files.forEach(file => {
    //         console.log(file);
    //     });
    // });
}
