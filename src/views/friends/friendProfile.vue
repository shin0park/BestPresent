<template>
    <div>
        <section class="userProfileTap">
            <div class="profileBox">
        <span class="userProfileImg">
          <img v-bind:src="profileImg">
        </span>
                <div class="userInfo">
                    <h1 class="userName">{{this.friendName}}</h1>
                    <p class="userBirth">생일: {{this.friendBirth}}</p>
                    <p class="userDday">D - {{dDay}}</p>
                </div>
            </div>
            <div>
                <h2 class="title">받고 싶은 선물</h2>
                <div>
                    <wish-friend-present v-for="(item, index) in items" v-bind:key="item.name" v-bind:itemdata="item"
                                         v-bind:itemindex="index"></wish-friend-present>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
    import wishFriendPresent from './wishFriendPresent'

    export default {
        props: {},
        components: {
            'wishFriendPresent': wishFriendPresent
        },
        computed: {
            profileImg() {
                if (this.$route.params.isBirthday) {
                    return this.$user.birthdayProfile[this.birthdayIndex];
                } else {
                    return this.$user.friendProfile[this.friendIndex];
                }
            },
            friendName() {
                if (this.$route.params.isBirthday) {
                    return this.$user.birthdayList[this.birthdayIndex].name;
                } else {
                    return this.$user.friendsList[this.friendIndex].name;
                }
            },
            friendBirth() {
                let birth;
                if (this.$route.params.isBirthday) {
                    birth = this.$user.birthdayList[this.birthdayIndex].birth;
                    console.log("birthday list false " + typeof this.$user.birthdayList[this.birthdayIndex].birth);
                    if (birth !== false || birth !== false) {
                        return birth;
                    } else {
                        return "아직 생일을 입력하지 않았습니다."
                    }

                } else {
                    console.log("friend list false " + typeof birth);
                    birth = this.$user.friendsList[this.friendIndex].birth;
                    if (birth !== false || birth !== false) {
                        return birth;
                    } else {
                        return "아직 생일을 입력하지 않았습니다."
                    }
                }
            },
            dDay() {
                let dDay;
                let today = new Date();
                let nowYear = today.getFullYear();
                let nowMonth = today.getMonth() + 1;
                let nowDate = today.getDate();
                let birthday;
                console.log("friend " + typeof this.$user.friendsList[this.friendIndex].birth);
                if (this.$route.params.isBirthday) {
                    if (this.$user.birthdayList[this.birthdayIndex].birth !== false) {
                        birthday = this.$user.birthdayList[this.birthdayIndex].birth.split("-");
                    } else {
                        return " "
                    }
                } else {
                    if (this.$user.friendsList[this.friendIndex].birth !== false) {
                        birthday = this.$user.friendsList[this.friendIndex].birth.split("-");
                    } else {
                        return " "
                    }
                }
                birthday.forEach((v, i) => {
                    birthday[i] = parseInt(v)
                });

                if (nowMonth > birthday[0]) {
                    let nextBirth = new Date(nowYear + 1, birthday[0] - 1, birthday[1]);
                    dDay = Math.ceil((nextBirth.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
                } else if (nowMonth === birthday[0] && nowDate > birthday[1]) {
                    let nextBirth = new Date(nowYear + 1, birthday[0] - 1, birthday[1]);
                    dDay = Math.ceil((nextBirth.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
                } else {
                    let nextBirth = new Date(nowYear, birthday[0] - 1, birthday[1]);
                    dDay = Math.ceil((nextBirth.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
                }

                if (dDay === 0) {
                    dDay = "day !"
                }
                return dDay
            }
        },
        data() {
            return {
                friendIndex: this.$route.params.index,
                birthdayIndex: this.$route.params.index,
                items: [],
            }
        },
        methods: {},
        async mounted() {
            const itemList = await this.$api.readPresent(this.$user.friendsList[this.friendIndex].id);
            this.items = itemList;
            console.log(this.items);
        },

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
