import { createRouter ,createWebHistory} from "vue-router";

import CompaniesIndex from './components/CompaniesIndex.vue';
import CompaniesCreate from './components/CompaniesCreate.vue';
import CompaniesEdit from './components/CompaniesEdit.vue';
import NotFound from "./components/NotFound.vue"



const routes = [
    { path: '/companies', name : "companiesIndex", component: CompaniesIndex },
    { path: '/admin/companies/create', name : "createCompany", component: CompaniesCreate },
    { path: '/admin/companies/edit/:id', name : "editCompany", component: CompaniesEdit },
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
