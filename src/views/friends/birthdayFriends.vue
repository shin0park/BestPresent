<template>
    <div class="friendsBirthdayList" v-on:click="onClickFriendProfile">
        <span class="friendsImg"><img v-bind:src="profileImg"></span>
        <h3 class="friendsName">{{birthdayName}}</h3>
        <span class="d-day">
      D-day
    </span>
    </div>
</template>

<script>
    export default {
        props: {
            birthdayIndex: Number
        },
        computed: {
            birthdayName() {
                return this.$user.birthdayList[this.birthdayIndex].name;
            },
            async profileImg() {
                const email = this.$user.birthdayList[this.birthdayIndex].id;
                const IsProfile  = this.$user.birthdayList[this.birthdayIndex].profile;
                if(IsProfile=== false) {
                    return await this.$storage.getUrl(`image/profile/defalut_profile.png`);
                }else{
                    return await this.$storage.getUrl(`image/profile/${email}`);
                }
                //return this.$user.birthdayList[this.birthdayIndex].profile;
            }
        },
        methods: {
            onClickFriendProfile() {
                this.$router.push({name: 'friendProfile', params: {"index": this.birthdayIndex, "isBirthday": true}});
            }
        }
    }
</script>

<style scoped>
    .friendsBirthdayList {
        display: flex;
        padding: 10px 0;
    }
    .friendsBirthdayList:last-child {
        padding-bottom: 0;
    }
    .friendsImg {
        flex-basis: 50px;
        height: 50px;
        align-self: center;
        margin-left: 10px;
    }
    .friendsImg img {
        width: 100%;
        height: 100%;
    }
    .friendsName {
        flex-grow: 1;
        align-self: center;
        padding-left: 30px;
        font-size: 12px;
        font-weight: 700;
        box-sizing: border-box;
    }
    .d-day {
        flex-basis: 50px;
        align-self: center;
        display: inline-block;
        margin-right: 10px;
        border: 1px solid #E61923;
        border-radius: 10px;
        width: 50px;
        height: 20px;
        font-size: 10px;
        font-weight: 700;
        color: #E61923;
        text-align: center;
        line-height: 20px;
    }
</style>
