
import axios from "axios";
import {createRouter} from 'vue-router';


import {createAuth}          from '@websanova/vue-auth/src/v3.js';
import driverAuthBearer      from '@websanova/vue-auth/src/drivers/auth/bearer.js';
import driverHttpAxios       from '@websanova/vue-auth/src/drivers/http/axios.1.x.js';
import driverRouterVueRouter from '@websanova/vue-auth/src/drivers/router/vue-router.2.x.js';
import driverOAuth2Google    from '@websanova/vue-auth/src/drivers/oauth2/google.js';
import driverOAuth2Facebook  from '@websanova/vue-auth/src/drivers/oauth2/facebook.js';

driverOAuth2Google.params.client_id = '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com';
driverOAuth2Facebook.params.client_id = '196729390739201';


// Auth base configuration some of this options
// can be override in method calls
const config = {
  auth: driverAuthBearer,
  http: axios,
  router: createRouter,
  tokenDefaultName: 'laravel-vue-spa',
  tokenStore: ['localStorage'],
  rolesVar: 'role',
  registerData: {url: 'auth/register', method: 'POST', redirect: '/login'},
  loginData: {url: 'auth/login', method: 'POST', redirect: '', fetchUser: true},
  logoutData: {url: 'auth/logout', method: 'POST', redirect: '/', makeRequest: true},
  fetchData: {url: 'auth/user', method: 'GET', enabled: true},
  refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30}
}
export default config


// export default (app) => {
//     app.use(createAuth({
//         plugins: {
//             http: app.axios,
//             router: app.router,
//         },
//         drivers: {
//             http: driverHttpAxios,
//             auth: driverAuthBearer,
//             router: driverRouterVueRouter,
//             oauth2: {
//                 google: driverOAuth2Google,
//                 facebook: driverOAuth2Facebook,
//             }
//         },
//         options: {
//             rolesKey: 'type',
//             notFoundRedirect: {name: 'user-account'},
//         },
//         tokenDefaultName: 'laravel-vue-spa',
//         tokenStore: ['localStorage'],
//         rolesVar: 'role',
//         registerData: {url: 'auth/register', method: 'POST', redirect: '/login'},
//         loginData: {url: 'auth/login', method: 'POST', redirect: '', fetchUser: true},
//         logoutData: {url: 'auth/logout', method: 'POST', redirect: '/', makeRequest: true},
//         fetchData: {url: 'auth/user', method: 'GET', enabled: true},
//         refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30}
//     }));
// }

