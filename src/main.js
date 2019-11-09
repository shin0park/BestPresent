import Vue from 'vue';
import _ from 'lodash';
import App from './views/App';
import router from './router';
import store from './store';
import { authModule, dataModule, storageModule} from './firebase/firebase.wrapper';
import Router from 'vue-router';
import profile_img from './assets/defalut_profile.png';

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
};

Vue.prototype.$_ = _;
Vue.prototype.$auth = authModule;
Vue.prototype.$api = dataModule;
Vue.prototype.$storage = storageModule;
Vue.prototype.$user = {
    email: '',
    login: false,
    displayName: '',
    gender: '',
    age: -1,
    birth: false,
    birthRaw: false,
    profile: false,
    friendProfile:[],
    birthdayProfile:[],
    present_list: [],
    friendsList: "",
    birthdayList:"",
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root');
