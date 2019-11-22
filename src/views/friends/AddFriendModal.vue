<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">

                        </slot>

                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            <input type="email" v-model="friendId" name="friendIdInput" placeholder="아이디를 입력해주세요.">
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" @click="onClickBirth()">
                                친구추가
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                friendId: "",

            }
        },
        created() {

        },
        methods: {
            async onClickBirth() {
                console.log('click');
                console.log(this.friendId);
                const email = this.$user.email;
                const friendData = await this.$api.readUser(this.friendId);
                await this.$api.addFriend(email, this.friendId, friendData.name, friendData.birth, friendData.profile);
                const friendsList = await this.$api.readFriendsList(email);
                this.$user.friendsList = friendsList;
                const birthdayList = await this.$api.addBirthdayFriend(email);
                this.$user.birthdayList = birthdayList;
                this.$user.friendProfile = [];
                this.$user.birthdayProfile = [];
                for(let i = 0; i < friendsList.length; i++){
                    if (friendsList[i].profile === false || friendsList[i].profile === "false") {
                        this.$user.friendProfile.push(await this.$storage.getUrl(`image/profile/defalut_profile.png`));
                    } else {
                        this.$user.friendProfile.push(await this.$storage.getUrl(`image/profile/${friendsList[i].id}`));
                    }
                }
                this.$user.birthdayList = birthdayList;
                for(let i = 0; i < birthdayList.length; i++){
                    if (birthdayList[i].profile === false || birthdayList[i].profile === "false") {
                        this.$user.birthdayProfile.push(await this.$storage.getUrl(`image/profile/defalut_profile.png`));
                    } else {
                        this.$user.birthdayProfile.push(await this.$storage.getUrl(`image/profile/${birthdayList[i].id}`));
                    }
                }
                this.$emit('close');
                await this.$router.push({name: 'settingTap'});
                await this.$router.push({name: 'friendsTap'});
            }
        }
    }
</script>

<style>
    select {
        padding: 10px 0;
    }

    .selectDay {
        margin-left: 20px;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        position: relative;
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        display: flex;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #E61923;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-footer {
        padding-bottom: 10px;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    .clearBtn {
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>
