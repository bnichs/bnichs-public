import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import Markdown from 'vue3-markdown-it';

// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);

// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import './assets/main.css'


const app = createApp(App)

app.use(router)
// app.use(Markdown)

app.mount('#app')
