import Vue from 'vue'
import VueRouter from 'vue-router'
import friendsTap from "./views/friends/friendsTap"
import recommendTap from "./views/recommend/recommendTap"
import categoryTap from "./views/category/categoryTap"
import userProfile from "./views/friends/userProfile"
import friendProfile from "./views/friends/friendProfile"
import situationPage from "./views/category/situationPage"
Vue.use(VueRouter);
//
export default new VueRouter({
    // mode: 'history',
    routes: [
        {
            name: 'friendsTap',
            path: '/friendsTap',
            component: friendsTap
        },
        {
            name: 'recommendTap',
            path: '/recommendTap',
            component: recommendTap
        },
        {
            name: 'categoryTap',
            path: '/categoryTap',
            component: categoryTap
        },
        {
            name: 'userProfile',
            path: '/userProfile',
            component: userProfile
        },
        {
            name: 'friendProfile',
            path: '/friendProfile',
            component: friendProfile,
            props: true
        },
        {
            name: 'situationPage',
            path: './situationPage',
            component: situationPage
        }
    ]
})
