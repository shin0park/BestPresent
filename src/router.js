import Vue from 'vue'
import VueRouter from 'vue-router'
import friendsTap from "./views/friends/friendsTap"
import recommendTap from "./views/recommend/recommendTap"
import categoryTap from "./views/category/categoryTap"
import userProfile from "./views/friends/userProfile"
import friendProfile from "./views/friends/friendProfile"
import situationPage from "./views/category/situationPage"
import birthdayRank from './views/category/situationPages/birthdayRank'
import anniversaryRank from './views/category/situationPages/anniversaryRank'
import schoolRank from './views/category/situationPages/schoolRank'
import weddingRank from './views/category/situationPages/weddingRank'
import babyRank from './views/category/situationPages/babyRank'
import cheapRank from './views/category/situationPages/cheapRank'
import expensiveRank from './views/category/situationPages/expensiveRank'
import christmasRank from './views/category/situationPages/christmasRank'
import settingTap from './views/setting/settingTap'
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
        },
        {
            name: 'situationPage',
            path: '/situationPage',
            component: situationPage,
            props: true,
            children: [
                {
                    name: 'birthdayRank',
                    path: '/birthdayRank',
                    component: birthdayRank
                },
                {
                    name: 'anniversaryRank',
                    path: '/anniversaryRank',
                    component: anniversaryRank
                },
                {
                    name: 'schoolRank',
                    path: '/schoolRank',
                    component: schoolRank
                },
                {
                    name: 'weddingRank',
                    path: '/weddingRank',
                    component: weddingRank
                },
                {
                    name: 'babyRank',
                    path: '/babyRank',
                    component: babyRank
                },
                {
                    name: 'cheapRank',
                    path: '/cheapRank',
                    component: cheapRank
                },
                {
                    name: 'expensiveRank',
                    path: '/expensiveRank',
                    component: expensiveRank
                },
                {
                    name: 'christmasRank',
                    path: '/christmasRank',
                    component: christmasRank
                },
            ],
        },
        {
            name: 'settingTap',
            path: '/settingTap',
            component: settingTap
        }
    ]
})
