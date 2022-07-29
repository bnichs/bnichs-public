

const ENV = process.env.NODE_ENV
const isDev = ENV == "development"

const PAGE_TITLE_BASE = "Ben Nichols"
const TITLE_PREFIX = `${isDev ? "dev - " : "" }`
export const PAGE_TITLE = `${TITLE_PREFIX}${PAGE_TITLE_BASE}`




export default {
    PAGE_TITLE: PAGE_TITLE
}