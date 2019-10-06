import Vue from 'vue';
import Login from './views/Login';
import { authModule, dataModule} from './firebase/firebase.wrapper';


Vue.prototype.$auth = authModule;
Vue.prototype.$api = dataModule;
Vue.prototype.$user = {
    email: '',
    login: false,
    displayName: '',
    gender: '',
    age: -1,
};

new Vue(Login).$mount('#root');
