
export declare interface Post {
    permalink: string,
    preview: string
    title: string
}


export class PostManifest {
    posts: Map<string, Post>;
    // bam: string;

    constructor(jsonData: Object) {
        console.log(jsonData)
        jsonData.posts.forEach(post =>{
            console.log(post)

        })
        this.posts = ""
    }
}


export function fetchManifest(){
    // let posts: PostManifest = {} // = {} as PostManifest

    fetch("./blog/manifest.json")
        .then(response => {
            return response.json();
            // console.log(this.posts)
        })
        .then(jsondata => {
            // console.log(jsondata)
            // let j = JSON.parse(jsondata)
            let manifest = new PostManifest(jsondata)
            console.log(manifest)
            //
            // let foo = <PostManifest>JSON.parse(jsondata)
            // foo.onFoo()
            // let bar = foo as PostManifest
            // // let bar = Object.setPrototypeOf(jsondata, PostManifest.prototype);
            // console.log(foo)
            // console.log(bar)
            // // posts = jsondata.posts as PostManifest
            // // if (jsondata){
            // //   } else{
            // //     this.posts = []
            // //   }
            // console.log("fooo")
            // console.log(posts)
            // return posts
            }
        );
    // return posts
    // return posts
}
