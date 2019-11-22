import Vue from 'vue'
import VueRouter from 'vue-router'
import mainTap from "./views/App"
import friendsTap from "./views/friends/friendsTap"
import recommendTap from "./views/recommend/recommendTap"
import rankTap from "./views/rank/rankTap"
import userProfile from "./views/friends/userProfile"
import friendProfile from "./views/friends/friendProfile"
import situationPage from "./views/rank/situationPage"
import rankPage from './views/rank/rankPage'
import settingTap from './views/setting/settingTap'
import categoryTap from './views/category/categoryTap'
import iframePage from './views/rank/iframePage'
import categoryPage from './views/category/categoryPage'
Vue.use(VueRouter);
//
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'mainTap',
            path: '/',
            component: mainTap
        },
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
            name: 'rankTap',
            path: '/rankTap',
            component: rankTap
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
            path: '/situationPage',
            component: situationPage,
            props: true,
        },
        {
            name: 'rankPage',
            path: '/rankPage',
            component: rankPage
        },
        {
            name: 'settingTap',
            path: '/settingTap',
            component: settingTap
        },
        {
            name: 'categoryTap',
            path: '/categoryTap',
            component: categoryTap
        },
        {
            name: 'iframePage',
            path: '/iframePage',
            component: iframePage,
            props: true
        },
        {
            name: 'categoryPage',
            path: '/categoryPage',
            component: categoryPage,
            props: true
        }
    ]
})
