import Vue from 'vue'
import Vuex from 'vuex'

export const SET_USER = 'SET_USER';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        birthdayRank: [
            {
                rank: '1',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '생일선물',
                price: '70,000원'
            },
            {
                rank: '2',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '3',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '4',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '5',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '6',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '7',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '8',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '9',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            }
        ],
        anniversaryRank: [
            {
                rank: '1',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '기념일선물',
                price: '70,000원'
            },
            {
                rank: '2',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '3',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '4',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '5',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '6',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '7',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '8',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '9',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            }
        ],
        schoolRank: [
            {
                rank: '1',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '입학/졸업선물',
                price: '70,000원'
            },
            {
                rank: '2',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '3',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '4',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '5',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '6',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '7',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '8',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '9',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            }
        ],
        weddingRank: [
            {
                rank: '1',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '결혼/집들이선물',
                price: '70,000원'
            },
            {
                rank: '2',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '3',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '4',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '5',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '6',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '7',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '8',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '9',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            }
        ],
        babyRank: [
            {
                rank: '1',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '출산/임신선물',
                price: '70,000원'
            },
            {
                rank: '2',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '3',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '4',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '5',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '6',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '7',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '8',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '9',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            }
        ],
        cheapRank: [
            {
                rank: '1',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '저렴한선물',
                price: '70,000원'
            },
            {
                rank: '2',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '3',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '4',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '5',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '6',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '7',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '8',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '9',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            }
        ],
        expensiveRank: [
            {
                rank: '1',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '고급선물',
                price: '70,000원'
            },
            {
                rank: '2',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '3',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '4',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '5',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '6',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '7',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '8',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '9',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            }
        ],
        christmasRank: [
            {
                rank: '1',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '크리스마스선물',
                price: '70,000원'
            },
            {
                rank: '2',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '3',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '4',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '5',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '6',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '7',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '8',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            },
            {
                rank: '9',
                imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                name: '스마일 운동화(여)',
                price: '70,000원'
            }
        ],
        user: {
            userID: '박용재',
            userEmail: 'abc1234@gmail.com',
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
        ],
        settingList: ['공지사항', '버전', '제작자 정보','로그아웃'],
        femaleItems: {
            "lastBuildDate": "Wed, 02 Oct 2019 20:17:47 +0900",
            "total": 9723262,
            "start": 1,
            "display": 10,
            "items": [
                {
                    "title": "나이키 에어맥스 95 에센셜 AT9865-100",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=20255291266",
                    "image": "https://shopping-phinf.pstatic.net/main_2025529/20255291266.20190716140532.jpg",
                    "lprice": "121710",
                    "hprice": "269600",
                    "mallName": "네이버",
                    "productId": "20255291266",
                    "productType": "1"
                },
                {
                    "title": "나이키 에어맥스 95 에센셜 AT9865-100",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=20255291266",
                    "image": "https://shopping-phinf.pstatic.net/main_2025529/20255291266.20190716140532.jpg",
                    "lprice": "121710",
                    "hprice": "269600",
                    "mallName": "네이버",
                    "productId": "20255291266",
                    "productType": "1"
                },
                ]
    },
        maleItems: {
            "lastBuildDate": "Wed, 02 Oct 2019 20:18:17 +0900",
            "total": 36972246,"start": 1,"display": 10,
            "items": [
                {
                    "title": "프라다 명품직구 사피아노 토트백 S 1BA113",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=17114971032",
                    "image": "https://shopping-phinf.pstatic.net/main_1711497/17114971032.20190928014136.jpg",
                    "lprice": "908000",
                    "hprice": "2305540",
                    "mallName": "네이버",
                    "productId": "17114971032",
                    "productType": "1"
                },
                {
                    "title": "조셉앤스테이시 Lucky Pleats Knit M Jelly Green 0JSJ1SH40311F",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=19932003569",
                    "image": "https://shopping-phinf.pstatic.net/main_1993200/19932003569.20190802115033.jpg",
                    "lprice": "50800",
                    "hprice": "79800",
                    "mallName": "네이버",
                    "productId": "19932003569",
                    "productType": "1"
                },
                {
                    "title": "조셉앤스테이시 Lucky Pleats Knit S Berrymix Magenta",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=20542697345",
                    "image": "https://shopping-phinf.pstatic.net/main_2054269/20542697345.20190928020117.jpg",
                    "lprice": "38920",
                    "hprice": "70680",
                    "mallName": "네이버",
                    "productId": "20542697345",
                    "productType": "1"
                },
                {
                    "title": "구찌 오피디아 스몰 GG 버킷백 550621",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=19338464918",
                    "image": "https://shopping-phinf.pstatic.net/main_1933846/19338464918.20191001004609.jpg",
                    "lprice": "1231000",
                    "hprice": "2127000",
                    "mallName": "네이버",
                    "productId": "19338464918",
                    "productType": "1"
                },
                {
                    "title": "[신세계 여주 아울렛 구찌매장 당일발송] 구찌 인터로킹 미니 크로스백 모음",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=82176997172",
                    "image": "https://shopping-phinf.pstatic.net/main_8217699/82176997172.jpg",
                    "lprice": "538000",
                    "hprice": "0",
                    "mallName": "스토리아울렛",
                    "productId": "82176997172",
                    "productType": "2"
                },
                {
                    "title": "캉골 컨버스 앨리스 버킷백 3738 3종",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=20092300075",
                    "image": "https://shopping-phinf.pstatic.net/main_2009230/20092300075.20190706142649.jpg",
                    "lprice": "22680",
                    "hprice": "43920",
                    "mallName": "네이버",
                    "productId": "20092300075",
                    "productType": "1"
                },
                {
                    "title": "생로랑 모노그램 클러치 라지 440222",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=19720535241",
                    "image": "https://shopping-phinf.pstatic.net/main_1972053/19720535241.20190708002438.jpg",
                    "lprice": "758900",
                    "hprice": "1193000",
                    "mallName": "네이버",
                    "productId": "19720535241",
                    "productType": "1"
                },
                {
                    "title": "NEW 스타벅스 고급 에코백 지퍼형/키링증정",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=82155090003",
                    "image": "https://shopping-phinf.pstatic.net/main_8215509/82155090003.4.jpg",
                    "lprice": "9500",
                    "hprice": "0",
                    "mallName": "글리오",
                    "productId": "82155090003",
                    "productType": "2"
                },
                {
                    "title": "프라다 버킷 화장품 파우치 파우치백 1NA369",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=18608323039",
                    "image": "https://shopping-phinf.pstatic.net/main_1860832/18608323039.20191002010228.jpg",
                    "lprice": "154300",
                    "hprice": "569000",
                    "mallName": "네이버",
                    "productId": "18608323039",
                    "productType": "1"
                },
                {
                    "title": "생로랑 WCB1 모노그램 클러치 뉴미듐 559193",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=20155437540",
                    "image": "https://shopping-phinf.pstatic.net/main_2015543/20155437540.20190920003059.jpg",
                    "lprice": "712500",
                    "hprice": "1015560",
                    "mallName": "네이버",
                    "productId": "20155437540",
                    "productType": "1"
                }
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
}})
