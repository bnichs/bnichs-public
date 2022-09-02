import vitePrerender from "vite-plugin-prerender";
import {buildManifest} from "./build_blog";

const path = require('path');
const Renderer = vitePrerender.PuppeteerRenderer

export function prerender(){
    let res = vitePrerender({
        // Required - The path to the vite-outputted app to prerender.
        staticDir: path.join(__dirname, "..", 'dist'),
        // Required - Routes to render.
        routes: [
            '/',
            // '/about',
            // '/contact',
            // '/resume',
            // '/services',
            // '/contact',
            // '/card',
            '/blog/a-custom-blog',
            '/blog/test-blog',
            '/blog',
        ],
        indexPath: path.join(__dirname, "..", 'dist', 'index.html'),
        renderer: new Renderer({
            // Optional - The name of the property to add to the window object with the contents of `inject`.
            // injectProperty: '__PRERENDER_INJECTED',
            // // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
            // inject: {
            //   foo: 'bar',
            // },
            //
            // // Optional - defaults to 0, no limit.
            // // Routes are rendered asynchronously.
            // // Use this to limit the number of routes rendered in parallel.
            // maxConcurrentRoutes: 1,

            // Optional - Wait to render until the specified event is dispatched on the document.
            // eg, with `document.dispatchEvent(new Event('custom-render-trigger'))`
            // renderAfterDocumentEvent: 'fully-mounted',

            renderAfterTime: 1000,

            consoleHandler: function(route, message){
                console.log(`${route} - ${message._text}`)
            }

            // Optional - Wait to render until the specified element is detected using `document.querySelector`
            // renderAfterElementExists: 'my-app-element',
        })

    })
    return res
}

export function buildBlog() {
    return {
        name: 'build-blog', // this name will show up in warnings and errors
        buildStart(opts) {
            buildManifest()
        },
    };
}

// Convert svg to pngs and favicon
export function convertImages() {
    return {
        name: 'convert-images', // this name will show up in warnings and errors
        async buildStart(opts) {
            const sharp = require("sharp")

            let input = "public/bn-logo-full.svg"

            const metadata = await sharp(input).metadata();

            sharp(input)
                .resize({
                    width: metadata.width,
                    height: metadata.height,
                })
                .png()
                .toFile("public/bn-logo-full.png")
                .then(function (info) {
                    // console.log(info)
                })
                .catch(function (err) {
                    console.log(err)
                })


            let top_crop = 0
            sharp(input)
                .resize({
                    width: metadata.width,
                    height: metadata.height,
                })
                .extract({left: 160, top: top_crop, width: 565, height: metadata.height-top_crop})
                .png()
                .toFile("public/favicon.png")
                .then(function (info) {
                    // console.log(info)
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
    };
}