<template>
    <div class="situationPage">
        <div class="title">
            <router-link to="/birthdayRank" class="situationNav">생일</router-link>
            <router-link to="/anniversaryRank" class="situationNav">기념일(애인)</router-link>
            <router-link to="/schoolRank" class="situationNav">입학/졸업</router-link>
            <router-link to="/weddingRank" class="situationNav">결혼/집들이</router-link>
            <router-link to="/babyRank" class="situationNav">출산/임신</router-link>
            <router-link to="/cheapRank" class="situationNav">저렴한 선물</router-link>
            <router-link to="/expensiveRank" class="situationNav">고급 선물</router-link>
            <router-link to="/christmasRank" class="situationNav">크리스마스 선물</router-link>
        </div>
        <router-view class="routerView"></router-view>
    </div>
</template>

<script>
    import rankList from './rankList'
    export default {
        components: {
            'rankList': rankList
        },
        data() {
            return {
                listIndex: this.$route.params.index
            }
        },
        computed: {

        },
        methods: {

        },
        mounted() {
            if(this.listIndex === 0) {
                this.$router.push("/birthdayRank")
            } else if(this.listIndex === 1) {
                this.$router.push("/anniversaryRank")
            } else if(this.listIndex === 2) {
                this.$router.push("/schoolRank")
            } else if(this.listIndex === 3) {
                this.$router.push("/weddingRank")
            } else if(this.listIndex === 4) {
                this.$router.push("/babyRank")
            } else if(this.listIndex === 5) {
                this.$router.push("/cheapRank")
            } else if(this.listIndex === 6) {
                this.$router.push("/expensiveRank")
            } else if(this.listIndex === 7) {
                this.$router.push("/christmasRank")
            }
        }
    }
</script>

<style scoped>
    .situationPage {
        padding: 0 16px;
        margin-top: 30px;
        width: 100%;
        box-sizing: border-box;
    }
    .title {
        white-space: nowrap;
        overflow-x: auto;
    }
    .situationNav {
        margin: 0 0 16px 10px;
        font-size: 21px;
        font-weight: 900;
        display: inline-block;
        color: #e0e0e0;
    }
    .router-link-active {
        color: #212121;
    }
    .routerView {
        box-shadow: 2px 2px 6px #bdbdbd;
    }
</style>
