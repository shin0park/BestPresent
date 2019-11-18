<template>
    <div class="wishPresent">
        <button class="clearBtn" @click="deleteItem(itemdata.productId)">
            <i class="material-icons">
                clear
            </i>
        </button>
        <span class="wishPresentImg">
                <img v-bind:src="itemdata.image"> <!-- itemdata.imgSrc -->
            </span>
        <div class="wishPresentInfo">
            <h3 class="wishPresentName">{{itemdata.title}}</h3>
            <p class="wishPresentPrice">{{itemdata.lprice}}원</p>
            <button class="wishPresentBtn" v-on:click="goItemSite(itemdata.link)">
                사러가기
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
            return {}
        },
        props: {
            'itemdata': Object,
            'itemindex': Number,
            'email': String,
        },
        methods: {
            goItemSite(address) {
                this.$router.push({name: 'iframePage', params: {'address': address}});
            },
            deleteItem(productId) {
                this.$api.deletePresent(productId, this.email);

            },
        },
        async mounted() {
            console.log("wish");
        },
    }
</script>

<style>

    .wishPresent {
        position: relative;
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

    .clearBtn {
        margin-top: 5px;
        margin-right: 5px;
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
