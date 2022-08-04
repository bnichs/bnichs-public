
export class PostInfo {
    permalink: string
    preview: string
    title: string
    path: string
    ref: string
    tags: Array<string>

    constructor(payload: Partial<PostInfo>) {
        this.title = payload.title || ""
        this.preview = payload.preview || ""
        this.permalink = payload.permalink || ""
        this.path = payload.path || ""
        this.ref = payload.ref || ""
        this.tags = payload.tags || Array<string>()
    }
}


export declare interface PostManifestI {
    posts: Map<string, PostInfo>
}


export class PostManifest {
    public posts: Map<string, PostInfo>;
    // bam: string;


    loaded(){
        return this.posts.size > 0
    }

    constructor(payload: Partial<PostManifest>) {
        this.posts = new Map() ;

        const entries = Object.entries(payload.posts || new Map())

        entries.forEach( ([key, val]) =>{
            // console.log(key)
            // console.log(val)
            const post: PostInfo = new PostInfo(val)
            console.log(post)
            this.posts.set(key, post);
            // const post = this.posts.get(key)
            // console.log(post)
        })
    }
}


export function fetchManifest(){

    const man = fetch("/blog/manifest.json")
        .then(response => {
            return response.json();
            // console.log(this.posts)
        })
        .then(jsondata => {
            // console.log(jsondata)
            // let j = JSON.parse(jsondata)
            const manifest = new PostManifest(jsondata)
            console.log(manifest)
            return manifest
            }
        );
    return man
}


export function fetchPost(url: string){
    const p = fetch(url)
        .then(resp => {
            return resp.text()
        })
    return p
}