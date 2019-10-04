import Vue from 'vue';
import Login from './views/Login';
import { authModule } from './firebase/firebase.wrapper';


Vue.prototype.$auth = authModule;

Vue.prototype.$user = {
    email: '0108257@gmail.com',
    login: false,
};

new Vue(Login).$mount('#root');
