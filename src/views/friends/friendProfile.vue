<template>
    <div>
        <section class="userProfileTap">
            <div class="profileBox">
        <span class="userProfileImg">
          <img v-bind:src="profileImg">
        </span>
                <div class="userInfo">
                    <h1 class="userName">{{friendName}}</h1>
                    <p class="userBirth">생일: {{friendBirthday}}</p>
                    <p class="userDday">D - {{dDay}}</p>
                </div>
            </div>
            <div>
                <h2 class="title">받고 싶은 선물</h2>
                <wish-friend-present v-for="(present,index) in friendWishPresent" :key="index" :present-index="index" :friend-index="friendIndex"></wish-friend-present>
            </div>
        </section>
    </div>
</template>

<script>
    import wishFriendPresent from './wishFriendPresent'
    export default {
        props: {

        },
        components: {
            'wishFriendPresent': wishFriendPresent
        },
        computed: {
            profileImg() {
                if(this.$route.params.isBirthday) {
                    return this.$store.state.birthdayList[this.birthdayIndex].friendProfile;
                } else {
                    return this.$store.state.friendsList[this.friendIndex].friendProfile;
                }
            },
            friendName() {
                if(this.$route.params.isBirthday) {
                    return this.$store.state.birthdayList[this.birthdayIndex].name;
                } else {
                    return this.$store.state.friendsList[this.friendIndex].name;
                }
            },
            friendBirthday() {
                if(this.$route.params.isBirthday) {
                    return this.$store.state.birthdayList[this.birthdayIndex].birthday;
                } else {
                    return this.$store.state.friendsList[this.friendIndex].birthday;
                }
            },
            friendWishPresent() {
                if(this.$route.params.isBirthday) {
                    return this.$store.state.birthdayList[this.birthdayIndex].presentlist;
                } else {
                    return this.$store.state.friendsList[this.friendIndex].presentlist;
                }
            },
            dDay() {
                let dDay;
                let today = new Date();
                let nowYear = today.getFullYear();
                let nowMonth = today.getMonth()+1;
                let nowDate = today.getDate();
                let birthday;
                if(this.$route.params.isBirthday) {
                    birthday = this.$store.state.birthdayList[this.birthdayIndex].birthday.split("-");
                } else {
                    birthday = this.$store.state.friendsList[this.friendIndex].birthday.split("-");
                }
                birthday.forEach((v,i) => {
                    birthday[i] = parseInt(v)
                });

                if(nowMonth > birthday[0]) {
                    let nextBirth = new Date(nowYear+1, birthday[0]-1, birthday[1]);
                    dDay = Math.ceil((nextBirth.getTime() - today.getTime())/1000/60/60/24);
                } else if(nowMonth === birthday[0] && nowDate > birthday[1]) {
                    let nextBirth = new Date(nowYear+1, birthday[0]-1, birthday[1]);
                    dDay = Math.ceil((nextBirth.getTime() - today.getTime())/1000/60/60/24);
                } else {
                    let nextBirth = new Date(nowYear, birthday[0]-1, birthday[1]);
                    dDay = Math.ceil((nextBirth.getTime() - today.getTime())/1000/60/60/24);
                }

                if(dDay === 0) {
                    dDay = "day !"
                }
                return dDay
            }
        },
        data() {
            return {
                profileImgData : this.$user.profile,
                friendIndex: this.$route.params.index,
                birthdayIndex: this.$route.params.index
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .userProfileTap {
        padding: 0 16px;
        margin-top: 30px;
        width: 100%;
        box-sizing: border-box;
    }
    .profileBox {
        display: flex;
        padding: 0 20px;
        border-radius: 22px;
        margin-bottom: 50px;
        height: 140px;
        box-sizing: border-box;
        box-shadow: 2px 2px 6px #bdbdbd;
    }
    .userProfileImg {
        flex-basis: 80px;
        height: 80px;
        align-self: center;
    }
    .userProfileImg img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .userInfo {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-self: center;
        padding-left: 30px;
        box-sizing: border-box;
    }
    .userName {
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 8px;
    }
    .userBirth {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 8px;
    }
    .userDday {
        font-size: 16px;
        font-weight: 700;
    }
    .title {
        margin: 0 0 16px 10px;
        font-size: 21px;
        font-weight: 900;
    }
</style>
