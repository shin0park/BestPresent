<template>
    <div id="app">
        <div v-show="isLogin">
            <app-header></app-header>
            <router-view class="contents"></router-view>
            <app-footer></app-footer>
        </div>
        <app-login v-show="!isLogin" v-on:changeIsLogin="isLogined"></app-login>
    </div>
</template>

<script>
    import appLogin from './appLogin'
    import appHeader from './appHeader'
    import appFooter from './appFooter'
    export default {
        data() {
            return {
                email: undefined,
                password: undefined,
                isLogin: false,
            }
        },
        components: {
            'appLogin': appLogin,
            'appHeader': appHeader,
            'appFooter': appFooter
        },
        methods: {
            isLogined() {
                this.isLogin = true;
            }
        }
    }
</script>

<style>
    * {
        padding: 0;
        border: 0;
        margin: 0;
        font-family: 'NanumSquareOTF', sans-serif;
        color: #212121;
    }
    html, body {
        height: 100%;
    }
    a {text-decoration: none;}
    li {list-style: none;}
    button, input {
        font-family: 'PT Sans', 'NanumSquareOTF', sans-serif;
        background: none;
        outline: none;
    }
    #app {
        height: 100%;
    }
    .contents {
        padding-bottom: 70px;
    }
</style>