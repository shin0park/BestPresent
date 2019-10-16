import Vue from 'vue'
import Vuex from 'vuex'

export const SET_USER = 'SET_USER';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            userID: '박용재',
            userProfile: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
            userBirthday: '07-10',
            presentlist: [{
                itemName: "스마일 운동화",
                price: "70,000원",
                image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
            }, {
                itemName: "스마일 목걸이",
                price: "20,000원",
                image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
            }]
        },
        friendsList: [
            {
                name: '정민철',
                friendProfile: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
                birthday: '11-08',
                presentlist: [{
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'
                }, {
                    itemName: "스마일 목걸이",
                    price: "20,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }, {
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'
                }]
            },
            {
                name: '박신영',
                friendProfile: 'https://en.pimg.jp/023/182/267/recommend/23182267.jpg',
                birthday: '11-01',
                presentlist: [{
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }, {
                    itemName: "스마일 목걸이",
                    price: "20,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }]
            },
            {
                name: '정민철',
                friendProfile: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
                birthday: '01-01',
                presentlist: [{
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }, {
                    itemName: "스마일 목걸이",
                    price: "20,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }]
            },
            {
                name: '박신영',
                friendProfile: 'https://en.pimg.jp/023/182/267/recommend/23182267.jpg',
                birthday: '06-20',
                presentlist: [{
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }, {
                    itemName: "스마일 목걸이",
                    price: "20,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }]
            },
            {
                name: '정민철',
                friendProfile: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
                birthday: '12-25',
                presentlist: [{
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }, {
                    itemName: "스마일 목걸이",
                    price: "20,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }]
            },
            {
                name: '박신영',
                friendProfile: 'https://en.pimg.jp/023/182/267/recommend/23182267.jpg',
                birthday: '03-02',
                presentlist: [{
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }, {
                    itemName: "스마일 목걸이",
                    price: "20,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }]
            },
        ],
        birthdayList: [
            {
                name: '정민철',
                friendProfile: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
                birthday: '10-09',
                presentlist: [{
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }, {
                    itemName: "스마일 목걸이",
                    price: "20,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }]
            },
            {
                name: '박신영',
                friendProfile: 'https://en.pimg.jp/023/182/267/recommend/23182267.jpg',
                birthday: '10-09',
                presentlist: [{
                    itemName: "스마일 운동화",
                    price: "70,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }, {
                    itemName: "스마일 목걸이",
                    price: "20,000원",
                    image: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg'
                }]
            },
        ]
    },
    getters: {

    },
    mutations: {
        [SET_USER](state, {userNickname, userProfile}) {
            state.user.userID = userNickname;
            state.user.userProfile = userProfile;
        },
        [SET_USER_PROFILE](state, userProfile) {
            state.user.userProfile = userProfile;
        }
    },
    actions: {

    },
})
