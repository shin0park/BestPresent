<template>
    <div>
        <div>로그인</div>
        <button v-on:click="facebookLogin()">facebook login</button>
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
            async isUser(uid, uname) {
                const flag = await this.$api.readUser(uid);
                if (flag == null) {
                    await this.$api.addUser(uid, uname);
                    alert("가입되었습니다!");
                    this.$user.email = uid;
                    this.$user.displayName = uname;
                    this.$user.login = true;
                    this.$emit('changeIsLogin');

                }

            },
            async facebookLogin() {
                const res = await this.$auth.facebookLogin();
                const uid = (res.user.providerData[0].email == null) ? (res.user.providerData[0].uid) : (res.user.providerData[0].email);
                const uname = res.user.displayName;
                //console.log(uid);
                this.isUser(uid, uname);
                this.$user.email = uid;
                this.$user.displayName = uname;
                this.$user.login = true;
                this.$emit('changeIsLogin');
                this.result = "로그인 성공";
            },
            async googleLogin() {
                const res = await this.$auth.googleLogin();
                this.isUser(res.user.email, res.user.displayName);
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