import { createApp } from 'vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import './permission' // permission control
import App from './App.vue';

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')