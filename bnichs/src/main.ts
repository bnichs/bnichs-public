import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import './assets/main.css'

import {
    disable as disableDarkMode,
} from 'darkreader';

disableDarkMode()


// Spell check
if (process.env.NODE_ENV === 'development'){
    document.designMode = "on"
} else {
    document.designMode = "off"
}



const app = createApp(App)

app.use(router)
// app.use(Markdown)

app.mount('#app')
