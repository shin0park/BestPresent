<template>
    <div>
        <div>
            <router-view :key="this.$route.fullPath"></router-view>
        </div>
        <section class="userProfileTap">
            <div class="profileBox">
        <span class="userProfileImg" v-on:change="onClickProfile">
          <label for="profileUpload">
            <img v-bind:src="profileImg" class="profileImgEl">
          </label>
          <input type="file" id="profileUpload" accept="image/*" @change="detectFiles($event.target.files)">
        </span>
                <div class="userInfo">
                    <h1 class="userName">{{userName}}</h1>
                    <p class="userBirth">생일: {{userBirthday}}
                        <button class="birthdayModify" @click="showModal = true">
                            <i class="material-icons">create</i>
                        </button>
                    </p>
                    <p class="userDday">D - {{dDay}}</p>
                </div>
                <birthdayModal v-if="showModal" @close="showModal = false">
                    <h3 slot="header" style="flex-grow: 1">생일 정보 입력</h3>
                    <button slot="header" class="clearBtn" @click="showModal = false">
                        <i class="material-icons">
                            clear
                        </i>
                    </button>
                </birthdayModal>
            </div>
            <div>
                <h2 class="title">받고 싶은 선물</h2>
                <div>
                    <wish-user-present v-for="(item, index) in items" v-bind:email="email" v-bind:key="item.name"
                                       v-bind:itemdata="item"
                                       v-bind:itemindex="index"></wish-user-present>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import wishUserPresent from './wishUserPresent'
    import birthdayModal from './birthdayModal'

    export default {
        components: {
            'wishUserPresent': wishUserPresent,
            'birthdayModal': birthdayModal
        },
        computed: {
            profileImg() {
                return this.$user.profile
            },
            userName() {
                return this.$user.displayName
            },
            userBirthday() {
                return this.$user.birth
            },
            dDay() {
                let dDay;
                let today = new Date();
                let nowYear = today.getFullYear();
                let nowMonth = today.getMonth() + 1;
                let nowDate = today.getDate();
                if (this.$user.birthRaw === "false" || this.$user.birthRaw === false) {
                    console.log("birthRaw false");
                    return " "
                }
                let birthday = this.$user.birthRaw.split("-");
                console.log(this.$user.birthRaw);
                console.log(typeof this.$user.birthRaw);
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
                return dDay;
            }
        },
        data() {
            return {
                showModal: false,
                file: this.$user.profile,
                items: [],
                email: this.$user.email,

            }
        },
        methods: {
            detectFiles(files) {
                this.file = files[0];
            },
            async onClickProfile() {
                let profileImgEl = document.querySelector(".profileImgEl");
                const email = this.email;
                if (this.file !== this.$user.profile) {
                    profileImgEl.src = URL.createObjectURL(this.file);
                    await this.$api.updateProfile(email, this.file);
                }

            }
        },
        async mounted() {
            this.items = await this.$api.readPresent(this.email);
            console.log(this.items);
        },
        async beforeUpdate() {
            console.log("before update");
            this.items = await this.$api.readPresent(this.email);
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
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0
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
        position: relative;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    .birthdayModify {
        position: absolute;
        top: -10px;
        right: 0;
        width: 36px;
        height: 36px;
        vertical-align: middle;
    }

    .userDday {
        font-size: 14px;
        font-weight: 700;
    }

    .title {
        margin: 0 0 16px 10px;
        font-size: 21px;
        font-weight: 900;
    }

    .clearBtn {
        position: absolute;
        top: 10px;
        right: 10px;
    }
</style>
