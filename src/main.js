import Vue from 'vue';
import App from './views/App'
import router from './router'
import store from './store'
import { authModule, dataModule} from './firebase/firebase.wrapper';
import Router from 'vue-router'

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
};

Vue.prototype.$auth = authModule;
Vue.prototype.$api = dataModule;
Vue.prototype.$user = {
    email: '',
    login: false,
    displayName: '',
    gender: '',
    age: -1,
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root');
