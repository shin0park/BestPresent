import Vue from 'vue'
import VueRouter from 'vue-router'
import friendsTap from "./views/friends/friendsTap"
import recommendTap from "./views/recommend/recommendTap"
import rankTap from "./views/rank/rankTap"
import userProfile from "./views/friends/userProfile"
import friendProfile from "./views/friends/friendProfile"
import situationPage from "./views/rank/situationPage"
import birthdayRank from './views/rank/situationPages/birthdayRank'
import anniversaryRank from './views/rank/situationPages/anniversaryRank'
import schoolRank from './views/rank/situationPages/schoolRank'
import weddingRank from './views/rank/situationPages/weddingRank'
import babyRank from './views/rank/situationPages/babyRank'
import cheapRank from './views/rank/situationPages/cheapRank'
import expensiveRank from './views/rank/situationPages/expensiveRank'
import christmasRank from './views/rank/situationPages/christmasRank'
import settingTap from './views/setting/settingTap'
import categoryTap from './views/category/categoryTap'
import iframePage from './views/rank/iframePage'
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
        }
    ]
})
