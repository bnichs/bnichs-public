import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const Markdown = require('vue3-markdown-it');
import 'highlight.js/styles/monokai.css';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import './assets/main.css'


const app = createApp(App)

app.use(router)
app.use(Markdown)

app.mount('#app')
