<template>
    <div class="wishPresent">
        <span class="wishPresentImg"><img :src="presentImg"></span>
        <div class="wishPresentInfo">
            <h3 class="wishPresentName">{{presentName}}</h3>
            <p class="wishPresentPrice">{{presentPrice}}</p>
            <button class="wishPresentBtn">
                선물하기
                <i class="material-icons">
                    card_giftcard
                </i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            presentIndex: Number,
            friendIndex: Number
        },
        computed: {
            presentName() {
                return this.$store.state.friendsList[this.friendIndex].presentlist[this.presentIndex].itemName;
            },
            presentPrice() {
                return this.$store.state.friendsList[this.friendIndex].presentlist[this.presentIndex].price;
            },
            presentImg() {
                return this.$store.state.friendsList[this.friendIndex].presentlist[this.presentIndex].image;
            }
        }
    }
</script>

<style>

    .wishPresent {
        display: flex;
        padding: 30px 20px;
        border-radius: 22px;
        margin-bottom: 30px;
        height: 180px;
        box-sizing: border-box;
        box-shadow: 2px 2px 6px #bdbdbd;
    }
    .wishPresentImg {
        flex-basis: 120px;
        height: 120px;
    }
    .wishPresentImg img {
        width: 100%;
        height: 100%;
    }
    .wishPresentInfo {
        display: flex;
        flex-direction: column;
        padding-left: 40px;
        flex-basis: 142px;
        justify-content: flex-end;
        box-sizing: border-box;
        flex-grow: 1;
    }
    .wishPresentName {
        width: 100%;
        font-size: 12px;
        font-weight: 900;
        margin-bottom: 8px;
    }
    .wishPresentPrice {
        width: 100%;
        font-size: 12px;
        font-weight: 700;
        color: #757575;
        margin-bottom: 8px;
    }
    .wishPresentBtn {
        width: 100%;
        height: 40px;
        background-color: #E61923;
        color: white;
        line-height: 40px;
        cursor: pointer;
    }
    .wishPresentBtn .material-icons {
        color: white;
        vertical-align: middle;
    }
</style>
