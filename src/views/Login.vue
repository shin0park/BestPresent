<template>
    <div>
        <div>로그인</div>
        <button>facebook login</button>
        <button v-on:click="googleLogin()">google login</button>
        <div>{{result}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                test: {},
                result: ""
            }
        },
        methods: {
            async googleLogin() {
                const res = await this.$auth.googleLogin();
                this.$user.email = res.user.email;
                this.$user.displayName = res.user.displayName;
                this.$user.login = true;
                this.$emit('changeIsLogin');
                this.result = "로그인 성공";
            }
            // googleLogin() {
            //
            //     // alert('clickchaagsdfedsfsd');
            //     // console.log('clicksf');
            //     // fetch('/auth', {
            //     //     method: 'POST',
            //     //     headers: new Headers({
            //     //         'Content-Type': 'application/json'
            //     //     }),
            //     //     body: JSON.stringify({
            //     //         msg: "googlelogin"
            //     //     })
            //     // }).then(function (response) {
            //     //     console.log(response);
            //     //     return response.json();
            //     // }).then(function (result) {
            //     //     console.log(result);
            //     // });
            //
            // }
        }
    }
</script>
<style>

</style>