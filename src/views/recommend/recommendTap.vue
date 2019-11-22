<template>
    <div>
        <section class="recommendTap">
            <h1 class="title">어떤 분에게 선물하시나요?</h1>
            <recommend-option-box @sendItemList="updateItems"></recommend-option-box>
            <div class="recommendList">
                <recommend-list v-for="(item, index) in items" v-bind:key="item.name" v-bind:itemdata="item" v-bind:itemindex="index"></recommend-list>
            </div>
        </section>
    </div>
</template>

<script>
    import recommendOptionBox from './recommendOptionBox'
    import recommendList from './recommendList'
    export default {
        components: {
            'recommendOptionBox': recommendOptionBox,
            'recommendList': recommendList
        },
        data() {
            return {
                items: []
            }
        },
        methods: {
            updateItems(itemList) {
                this.items = itemList;
            }
        },
    }
</script>

<style scoped>
    .recommendTap {
        padding: 0 16px;
        margin-top: 30px;
        width: 100%;
        box-sizing: border-box;
    }
    .title {
        margin: 0 0 16px 10px;
        font-size: 21px;
        font-weight: 900;
    }
    .recommendList {
        margin-top: 30px;
        box-shadow: 2px 2px 6px #bdbdbd;
    }
</style>
