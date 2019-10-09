<template>
    <div class="friendsList" v-on:click="onClickFriendProfile" v-if="searching">
        <span class="friendsImg"><img v-bind:src="profileImg"></span>
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
                return this.$user.friends_list[this.friendsIndex].name;
            },
            profileImg() {
                return this.$user.friends_list[this.friendsIndex].profile;
            },
            searching() {
                const friendName = this.$user.friends_list[this.friendsIndex].name;
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
        }
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
