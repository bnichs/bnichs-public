export function setScheme(scheme: string)
{
    console.log(`Setting scheme to ${scheme}`)
    localStorage.setItem('theme', scheme);
    document.documentElement.setAttribute('data-theme', scheme);
}

export function detectColorScheme(defaultScheme: string){
    let theme = defaultScheme;

    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            let theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        return defaultScheme;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        let theme = "dark";
    }
    return theme

    // this.setScheme(theme)
}

export function getScheme(){
    return localStorage.getItem('theme')
}
