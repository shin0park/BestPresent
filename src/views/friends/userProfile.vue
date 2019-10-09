<template>
    <div>
        <section class="userProfileTap">
            <div class="profileBox">
        <span class="userProfileImg" v-on:change="onClickProfile">
          <label for="profileUpload">
            <img v-bind:src="profileImg" class="profileImgEl">
          </label>
          <input type="file" id="profileUpload">
        </span>
                <div class="userInfo">
                    <h1 class="userName">{{userName}}</h1>
                    <p class="userBirth">생일: {{userBirthday}}</p>
                    <p class="userDday">D - {{dDay}}</p>
                </div>
            </div>
            <div>
                <h2 class="title">받고 싶은 선물</h2>
                <wish-user-present v-for="(present,index) in userWishPresent" :key="index" :present-index="index"></wish-user-present>
            </div>
        </section>
    </div>
</template>

<script>
    import {SET_USER_PROFILE} from '../../store'
    import store from '../../store'
    import wishUserPresent from './wishUserPresent'
    export default {
        components: {
            'wishUserPresent': wishUserPresent
        },
        computed: {
            profileImg() {
                return this.$store.state.user.userProfile
            },
            userName() {
                return this.$store.state.user.userID
            },
            userBirthday() {
                return this.$store.state.user.userBirthday
            },
            userWishPresent() {
                return this.$store.state.user.presentlist;
            },
            dDay() {
                let dDay;
                let today = new Date();
                let nowYear = today.getFullYear();
                let nowMonth = today.getMonth()+1;
                let nowDate = today.getDate();
                let birthday = this.$store.state.user.userBirthday.split("-");
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

                return dDay
            }
        },
        data() {
            return {

            }
        },
        methods: {
            onClickProfile() {
                let fr = new FileReader();
                let profileImgEl = document.querySelector(".profileImgEl");
                fr.onload = function() {
                    profileImgEl.src = fr.result;
                    store.commit(SET_USER_PROFILE, profileImgEl.src);
                };
                fr.readAsDataURL(event.target.files[0]);
            }
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
        align-self: center;
    }
    .userProfileImg label {
        display: inline-block;
        height: 80px;
    }
    input[type="file"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding:0;
        margin:-1px;
        overflow:hidden;
        clip:rect(0,0,0,0);
        border:0
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
