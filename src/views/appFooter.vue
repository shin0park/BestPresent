<template>
    <div>
        <footer>
            <button v-on:click="onClickFriendsTap">
                <i class="material-icons">
                    supervisor_account
                </i>
            </button>
            <button v-on:click="onClickRecommendTap">
                <i class="material-icons">
                    thumb_up
                </i>
            </button>
            <button v-on:click="onClickRankTap">
                <i class="material-icons">
                    cake
                </i>
            </button>
            <button v-on:click="onClickCategoryTap">
                <i class="material-icons">
                    more_horiz
                </i>
            </button>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            onClickFriendsTap() {
                window.scrollTo(0,0);
                this.$router.push({name: 'friendsTap'})
            },
            onClickRecommendTap() {
                window.scrollTo(0,0);
                this.$router.push({name: 'recommendTap'})
            },
            onClickRankTap() {
                window.scrollTo(0,0);
                this.$router.push({name: 'rankTap'})
            },
            onClickCategoryTap() {
                window.scrollTo(0,0);
                this.$router.push({name: 'categoryTap'})
            }
        }
    }
</script>

<style scoped>
    footer {
        display: flex;
        position: fixed;
        padding: 0 16px;
        border-top: 1px solid #eeeeee;
        width: 100%;
        height: 68px;
        background-color: white;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
    }
    button {
        flex-grow: 1;
        margin: 12px 15px;
        width: 44px;
        height: 44px;
        cursor: pointer;
    }
    button:first-child {
        margin-left: 0;
    }
    button:last-child {
        margin-right: 0;
    }
</style>
