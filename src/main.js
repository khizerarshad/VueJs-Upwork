import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.mount('#app')
