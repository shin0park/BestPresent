<template>
    <div>
        <section class="rankSection">
            <h1 class="title">순위</h1>
            <div class="rankBtnBox">
                <button class="rankBtn clickedBtn" v-on:click="onClickGender">여성</button>
                <button class="rankBtn" v-on:click="onClickGender">남성</button>
                <template v-if="femaleSeen">
                    <rankList v-for="item in femaleItems" v-bind:key="item.name" v-bind:itemdata="item"></rankList>
                </template>
                <template v-if="maleSeen">
                    <rankList v-for="item in maleItems" v-bind:key="item.name" v-bind:itemdata="item"></rankList>
                </template>
            </div>
        </section>
    </div>
</template>

<script>
    import rankList from './rankList'
    export default {
        data() {
            return {
                femaleSeen: true,
                maleSeen: false,
                femaleItems: [{
                    rank: '1',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 운동화(여)',
                    price: '70,000원'
                },{
                    rank: '2',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 목걸이(여)',
                    price: '70,000원'
                },{
                    rank: '3',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 운동화2',
                    price: '70,000원'
                },{
                    rank: '4',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 목걸이2',
                    price: '70,000원'
                },{
                    rank: '5',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 운동화3',
                    price: '70,000원'
                }],
                maleItems: [{
                    rank: '1',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 운동화(남)',
                    price: '70,000원'
                },{
                    rank: '2',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 목걸이(남)',
                    price: '70,000원'
                },{
                    rank: '3',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 운동화2',
                    price: '70,000원'
                },{
                    rank: '4',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 목걸이2',
                    price: '70,000원'
                },{
                    rank: '5',
                    imgSrc: 'https://shopping-phinf.pstatic.net/main_1256026/12560261375.5.jpg',
                    name: '스마일 운동화3',
                    price: '70,000원'
                }]
            }
        },
        components: {
            'rankList': rankList
        },
        methods: {
            onClickGender(e) {
                const Btns = document.querySelectorAll(".rankBtn");
                Btns.forEach(function(v) {
                    v.classList.remove("clickedBtn");
                });
                e.target.classList.add("clickedBtn")
                if(this.femaleSeen === true) {
                    this.femaleSeen = false;
                    this.maleSeen = true;
                } else if(this.maleSeen === true) {
                    this.femaleSeen = true;
                    this.maleSeen = false;
                }
            }
        }
    }
</script>

<style scoped>
    .rankSection {
        width: 100%;
        margin-top: 30px;
    }
    .title {
        margin: 0 0 16px 10px;
        font-size: 21px;
        font-weight: 900;
    }
    .rankBtnBox {
        display: flex;
        box-shadow: 2px 2px 6px #bdbdbd;
        flex-wrap: wrap;
    }
    .rankBtn {
        flex-grow: 1;
        width: 50%;
        height: 40px;
        background-color: #F0F0F0;
        color: #757575;
    }
    .clickedBtn {
        background-color: white;
        color: #212121;
    }
</style>
