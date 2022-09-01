import vitePrerender from "vite-plugin-prerender";
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
