<template>
    <div class="categoryPage">
        <category-nav v-bind:listIndex="listIndex" @sendType="updateType"></category-nav>
        <rank-page v-bind:type="type"></rank-page>
    </div>
</template>

<script>
    import categoryNav from './categoryNav'
    import rankPage from './rankPage'
    export default {
        name: "listPage",
        components: {
            'categoryNav': categoryNav,
            'rankPage': rankPage
        },
        data() {
            return {
                listIndex: this.$route.params.index,
                type: this.$route.params.type
            }
        },
        methods: {
            updateType(newType) {
                this.type = newType;
            }
        },
    }
</script>

<style scoped>
    .categoryPage {
        padding: 0 16px;
        margin-top: 30px;
        width: 100%;
        box-sizing: border-box;
    }
</style>