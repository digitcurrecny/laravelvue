import { createRouter ,createWebHistory} from "vue-router";


import Register from './components/user/Register.vue';
import login from './components/user/Login.vue';
import CompaniesIndex from './components/CompaniesIndex.vue';
import CompaniesCreate from './components/CompaniesCreate.vue';
import CompaniesEdit from './components/CompaniesEdit.vue';
import NotFound from "./components/NotFound.vue"



const routes = [

    { path: '/register', name : "register", component: Register , meta : {auth: false }},
    { path: '/login', name : "login", component: login , meta : {auth: false }},


    { path: '/', name : "companiesIndex", component: CompaniesIndex , meta : {auth: true }},
    { path: '/admin/companies/create', name : "createCompany", component: CompaniesCreate , auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}},
    { path: '/admin/companies/edit/:id', name : "editCompany", component: CompaniesEdit , auth: {roles: 2, redirect: {name: 'login'}, forbiddenRedirect: '/403'}},
    { path: '/:pathMatch(.*)*', name : "NotFound", component: NotFound },

  ]





const routers = createRouter({
    history:  createWebHistory(),
    routes

});

routers.beforeEach((to,fro,next)=>{


    next();
    // next(false);

});


export default routers;
