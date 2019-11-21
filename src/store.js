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
                    "title": "입생로랑 르 쿠션 엉크르드뽀 SPF 23 PA++ 14g 본품, 리필 별매 (백화점상품)",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=9543852407",
                    "image": "https://shopping-phinf.pstatic.net/main_9543852/9543852407.3.jpg",
                    "lprice": "36900",
                    "hprice": "0",
                    "mallName": "beautygo",
                    "productId": "9543852407",
                    "productType": "2"
                },
                {
                    "title": "맥 립스틱 3g",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=2600057221",
                    "image": "https://shopping-phinf.pstatic.net/main_2600057/2600057221.20140629200311.jpg",
                    "lprice": "13500",
                    "hprice": "110970",
                    "mallName": "네이버",
                    "productId": "2600057221",
                    "productType": "1"
                },
                {
                    "title": "에스티로더 더블웨어 파운데이션 30ml  포슬린 1N0  1개",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=19771505551",
                    "image": "https://shopping-phinf.pstatic.net/main_1977150/19771505551.1.jpg",
                    "lprice": "47950",
                    "hprice": "0",
                    "mallName": "쿠팡",
                    "productId": "19771505551",
                    "productType": "2"
                },
                {
                    "title": "지오다노 여 크루넥 경량다운 자켓 378905",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=15337277338",
                    "image": "https://shopping-phinf.pstatic.net/main_1533727/15337277338.20191104105358.jpg",
                    "lprice": "30000",
                    "hprice": "58550",
                    "mallName": "네이버",
                    "productId": "15337277338",
                    "productType": "1"
                },
                {
                    "title": "에잇세컨즈 캐시미어 블렌디드 솔리드 베이직 터틀넥 니트 329951LYKQ",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=20943788562",
                    "image": "https://shopping-phinf.pstatic.net/main_2094378/20943788562.20191025014545.jpg",
                    "lprice": "31970",
                    "hprice": "69900",
                    "mallName": "네이버",
                    "productId": "20943788562",
                    "productType": "1"
                },
                {
                    "title": "아디다스 팔콘  B28128",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=17252900905",
                    "image": "https://shopping-phinf.pstatic.net/main_1725290/17252900905.20191010153330.jpg",
                    "lprice": "49810",
                    "hprice": "210340",
                    "mallName": "네이버",
                    "productId": "17252900905",
                    "productType": "1"
                },
                {
                    "title": "나이키 헤리티지 86 스우시캡",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=82116625674",
                    "image": "https://shopping-phinf.pstatic.net/main_8211662/82116625674.jpg",
                    "lprice": "16500",
                    "hprice": "0",
                    "mallName": "플라이박스",
                    "productId": "82116625674",
                    "productType": "2"
                },
                {
                    "title": "골든구스 슈퍼스타 GCOWS590 W77 화이트",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=10197448510",
                    "image": "https://shopping-phinf.pstatic.net/main_1019744/10197448510.20160818103515.jpg",
                    "lprice": "343170",
                    "hprice": "686430",
                    "mallName": "네이버",
                    "productId": "10197448510",
                    "productType": "1"
                },
                {
                    "title": "캐논 PowerShot G7X Mark 2",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=9721774188",
                    "image": "https://shopping-phinf.pstatic.net/main_9721774/9721774188.20160719141254.jpg",
                    "lprice": "599750",
                    "hprice": "63360000",
                    "mallName": "네이버",
                    "productId": "9721774188",
                    "productType": "1"
                },
                {
                    "title": "뉴발란스 운동화 남여공용 운동화 캐주얼화 트레이닝화 커플화 뉴발452 WX452SR NBPT9F001I",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=21023432387",
                    "image": "https://shopping-phinf.pstatic.net/main_2102343/21023432387.20191020042709.jpg",
                    "lprice": "84390",
                    "hprice": "124050",
                    "mallName": "네이버",
                    "productId": "21023432387",
                    "productType": "1"

                }


            ]
    },
        maleItems: {
            "items": [
                {
                    "title": "나이키 에어 포스 1 GTX CK2630-001",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=21152593810",
                    "image": "https://shopping-phinf.pstatic.net/main_2115259/21152593810.20191024174658.jpg",
                    "lprice": "127790",
                    "hprice": "261000",
                    "mallName": "네이버",
                    "productId": "21152593810",
                    "productType": "1"
                },
                {
                    "title": "앨빈클로 데일리 베이직 무지 기모 맨투맨 티 MAR630",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=15136784802",
                    "image": "https://shopping-phinf.pstatic.net/main_1513678/15136784802.20180920211644.jpg",
                    "lprice": "22000",
                    "hprice": "26877",
                    "mallName": "네이버",
                    "productId": "15136784802",
                    "productType": "1"
                },
                {
                    "title": "MILLET 남성용 에수스구스다운 MUOUD454",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=20811176077",
                    "image": "https://shopping-phinf.pstatic.net/main_2081117/20811176077.20191102012315.jpg",
                    "lprice": "125494",
                    "hprice": "179000",
                    "mallName": "네이버",
                    "productId": "20811176077",
                    "productType": "1"
                },
                {
                    "title": "헤라 옴므 블랙 퍼펙트 2종 세트",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=5378259262",
                    "image": "https://shopping-phinf.pstatic.net/main_5378259/5378259262.20150205164353.jpg",
                    "lprice": "55060",
                    "hprice": "189920",
                    "mallName": "네이버",
                    "productId": "5378259262",
                    "productType": "1"
                },
                {
                    "title": "필립스 5000시리즈 S5650/12",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=11949076362",
                    "image": "https://shopping-phinf.pstatic.net/main_1194907/11949076362.20170825143444.jpg",
                    "lprice": "97690",
                    "hprice": "275800",
                    "mallName": "네이버",
                    "productId": "11949076362",
                    "productType": "1"
                },
                {
                    "title": "센트룸 종합비타민 남성/여성 실버 포맨 코스트코",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=11927356299",
                    "image": "https://shopping-phinf.pstatic.net/main_1192735/11927356299.1.jpg",
                    "lprice": "24320",
                    "hprice": "0",
                    "mallName": "한국인터넷물류",
                    "productId": "11927356299",
                    "productType": "2"
                },
                {
                    "title": "컬럼비아 남성 오레곤 에비뉴3 구스 다운 자켓 CZ4-YMP303",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=20689408709",
                    "image": "https://shopping-phinf.pstatic.net/main_2068940/20689408709.20190905104822.jpg",
                    "lprice": "179280",
                    "hprice": "210450",
                    "mallName": "네이버",
                    "productId": "20689408709",
                    "productType": "1"
                },
                {
                    "title": "나이키 축구공 4호 5호",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=11853318962",
                    "image": "https://shopping-phinf.pstatic.net/main_1185331/11853318962.5.jpg",
                    "lprice": "21000",
                    "hprice": "0",
                    "mallName": "스트릿스포츠",
                    "productId": "11853318962",
                    "productType": "2"
                },
                {
                    "title": "아디다스 x남여공용 3ST LONG PARKA 롱파카 롱패딩 2종택 1-EH3993EH3991",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=21062284246",
                    "image": "https://shopping-phinf.pstatic.net/main_2106228/21062284246.20191119004258.jpg",
                    "lprice": "133540",
                    "hprice": "299900",
                    "mallName": "네이버",
                    "productId": "21062284246",
                    "productType": "1"
                },
                {
                    "title": "뉴발란스 운동화 남여공용 운동화 캐주얼화 트레이닝화 커플화 뉴발452 WX452SR NBPT9F001I",
                    "link": "https://search.shopping.naver.com/gate.nhn?id=21023432387",
                    "image": "https://shopping-phinf.pstatic.net/main_2102343/21023432387.20191020042709.jpg",
                    "lprice": "84390",
                    "hprice": "124050",
                    "mallName": "네이버",
                    "productId": "21023432387",
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
