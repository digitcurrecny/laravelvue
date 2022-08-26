import { createRouter ,createWebHistory} from "vue-router";



import Index from './components/Index.vue';


import Register from './components/user/Register.vue';
import login from './components/user/Login.vue';
import CompaniesIndex from './components/CompaniesIndex.vue';
import CompaniesCreate from './components/CompaniesCreate.vue';
import CompaniesEdit from './components/CompaniesEdit.vue';
import Tasks from './components/Tasks/Tasks.vue';
import Products from './Components/Products/Products.vue';
import Cart from './Components/Products/Cart.vue';

import NotFound from "./components/NotFound.vue"
import Auth from './Auth.js';


const routes = [
    { path: '/', name : "Index", component: Index , meta : {auth: false }},
    { path: '/tasks', name : "tasks", component: Tasks , meta : {auth: false }},
    { path: '/products', name : "products", component: Products , meta : {auth: false }},
    { path: '/cart', name : "Cart", component: Cart , meta : {auth: false }},


    { path: '/register', name : "register", component: Register , meta : {auth: false }},
    { path: '/login', name : "login", component: login , meta : {auth: false }},


    { path: '/companies', name : "companiesIndex", component: CompaniesIndex ,   meta: { requiresAuth: true }},
    { path: '/admin/companies/create', name : "createCompany", component: CompaniesCreate ,  meta: { requiresAuth: true } },
    { path: '/admin/companies/edit/:id', name : "editCompany", component: CompaniesEdit ,   meta: { requiresAuth: true }},
    { path: '/:pathMatch(.*)*', name : "NotFound", component: NotFound },

  ]





const routers = createRouter({
    history:  createWebHistory(),
    routes

});

routers.beforeEach((to,fro,next)=>{

    if (to.matched.some(record => record.meta.requiresAuth) ) {
        if (Auth.check()) {
            next();
            return;
        } else {
            routers.push({ name: 'login' });


        }
    } else {
        next();
    }

});


export default routers;
