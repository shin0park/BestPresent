<template>
    <div style="width: 100%">
        <div class="rankListBox">
            <div class="rankNumber">{{itemindex+1}}</div> <!-- itemdata.rank -->
            <span class="itemImg" v-on:click="goItemSite(itemdata.link)">
                <img v-bind:src="itemdata.image"> <!-- itemdata.imgSrc -->
            </span>
            <div class="itemInfo" v-on:click="goItemSite(itemdata.link)">
                <h2 class="itemName">{{itemdata.title}}</h2> <!-- itemdata.name -->
                <p class="itemPrice">{{itemdata.lprice}}원</p> <!-- itemdata.price -->
            </div>
            <button class="itemCartBtn" v-on:click="addCart(itemdata)">
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
            'itemdata': Object,
            'itemindex': Number
        },
        methods: {
            goItemSite(address) {
                window.open(address, '_blank');
            },
            addCart(itemdata) {
                console.log(itemdata);
            }
        }
    }
</script>

<style scoped>
    .rankListBox {
        display: flex;
        padding: 20px 10px;
    }
    .rankNumber {
        background-color: dodgerblue;
        flex-basis: 26px;
        align-self: center;
        font-family: 'Arial', sans-serif;
        font-size: 21px;
        font-style: italic;
        font-weight: 700;
    }
    .itemImg {
        display: inline-block;
        padding-left: 20px;
        flex-shrink: 0;
        width: 60px;
        height: 60px;
    }
    .itemImg img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
    .itemInfo {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-self: center;
        padding-left: 30px;
        min-width: 0;
    }
    .itemName {
        font-size: 12px;
        font-weight: 900;
        margin-bottom: 8px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .itemPrice {
        font-size: 12px;
        font-weight: 700;
        color: #757575;
    }
    .itemCartBtn {
        padding: 0 10px;
    }
    .itemCartBtn .material-icons {
        font-size: 21px;
        color: #E61923;
    }
</style>
