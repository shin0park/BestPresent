<template>
    <div class="friendsList" v-on:click="onClickFriendProfile" v-if="searching">
        <span class="friendsImg"><img v-bind:src="profileImg" class="profileImgEl"></span>
        <h3 class="friendsName">{{friendsName}}</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            friendsIndex: Number,
            searchValue: String
        },
        computed: {
            friendsName() {
                return this.$user.friendsList[this.friendsIndex].name;
            },
            async profileImg() {
                const email = this.$user.friendsList[this.friendsIndex].id;
                const IsProfile  = this.$user.friendsList[this.friendsIndex].profile;
                if(IsProfile=== false) {
                    return await this.$storage.getUrl(`image/profile/defalut_profile.png`);
                }else{
                    return await this.$storage.getUrl(`image/profile/${email}`);
                }
                //console.log(this.$user.friendsList[this.friendsIndex]);
                //console.log("profile img "+this.$user.friendsList[this.friendIndex].friendImg);
                //return this.$user.friendsList[this.friendsIndex].friendImg;
            },
            searching() {
                const friendName = this.$user.friendsList[this.friendsIndex].name;
                if(friendName.includes(this.searchValue)) {
                    return true
                } else {
                    return false
                }
            }
        },
        methods: {
            onClickFriendProfile() {
                window.scrollTo(0,0);
                this.$router.push({name: 'friendProfile', params: {"index": this.friendsIndex}});
            }
        },

    }

</script>

<style scoped>
    .friendsList {
        display: flex;
        padding: 10px 0;
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
</style>
