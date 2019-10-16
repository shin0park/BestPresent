<template>
    <div style="width: 100%">
        <div class="rankListBox">
            <span class="rankNumber">{{itemdata.rank}}.</span>
            <span class="itemImg">
                <img v-bind:src="itemdata.imgSrc">
            </span>
            <div class="itemInfo">
                <h2 class="itemName">{{itemdata.name}}</h2>
                <p class="itemPrice">{{itemdata.price}}</p>
            </div>
            <button class="itemPresentBtn">
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
        props: ['itemdata']
    }
</script>

<style scoped>
    .rankListBox {
        display: flex;
        padding: 20px 10px;
    }
    .rankNumber {
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
    }
    .itemImg img {
        width: 100%;
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
    .itemPresentBtn {
        padding: 0 10px;
    }
    .itemPresentBtn .material-icons {
        font-size: 21px;
        color: #E61923;
    }
</style>
