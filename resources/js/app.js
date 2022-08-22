/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');


 import { createApp } from 'vue';
 import axios from 'axios';
 import VueAxios from 'vue-axios';
 import routers from './routers.js';
 import auth from './Auth.js';



 const app = createApp();
 app.component('loginlink', require('./Components/layout/LoginLink.vue').default);
 app.use(routers,VueAxios, axios,auth)


 app.mount('#app')
