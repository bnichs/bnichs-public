

const ENV = process.env.NODE_ENV
const isDev = ENV == "development"

const PAGE_TITLE_BASE = "Ben Nichols"
const TITLE_SUFFIX = `${isDev ? " - dev" : "" }`
const PAGE_TITLE = `${PAGE_TITLE_BASE}${TITLE_SUFFIX}`


export default {
    PAGE_TITLE: PAGE_TITLE
}