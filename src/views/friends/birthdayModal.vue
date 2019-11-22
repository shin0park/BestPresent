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
                            <select class="selectMonth" v-model="pickMonth">
                                <option v-for="month in months">{{month}}</option>
                            </select>
                            월
                            <select class="selectDay" v-model="pickDay">
                                <option v-for="day in days">{{day}}</option>
                            </select>
                            일
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" @click="onClickBirth()">
                                OK
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
                newBirthday: "",
                months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                pickMonth: "",
                pickDay: ""
            }
        },
        created() {

        },
        methods: {
            async onClickBirth() {
                const email = this.$user.email;
                let birthday = `${this.pickMonth}-${this.pickDay}`;
                await this.$api.updateBirthday(email, birthday);
                this.$user.birth = `${this.pickMonth}월 ${this.pickDay}일`;
                this.$user.birthRaw = birthday;
                await this.$router.push({name: 'friendsTap'});
                await this.$emit('close');
            },
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
</style>
