<template>
    <div class="settingList">
        <button @click="logout()">
            <span class="listName">{{settingListName}}</span>
            <span class="listIcon">
      <i class="material-icons">chevron_right</i>
    </span>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            settingListName: String
        },
        data() {
            return {}
        },
        methods: {
            logout() {
                if (this.settingListName === '로그아웃') {
                    this.$auth.googleLogout().then(function () {
                        console.log("logout success");
                        window.location.href = "/";
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .settingList {
        display: flex;
        padding: 0 26px;
        border-bottom: 1px solid #eeeeee;
        height: 50px;
    }

    .listName {
        flex-grow: 1;
        font-size: 14px;
        font-weight: 400;
        line-height: 50px;
    }

    .listIcon .material-icons {
        line-height: 50px;
    }
</style>
