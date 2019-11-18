<template>
    <div class="situationPage">
        <situation-nav v-bind:listIndex="listIndex" @sendType="updateType"></situation-nav>
        <rank-page v-bind:type="type"></rank-page>
    </div>
</template>

<script>
    import rankList from './rankList';
    import rankPage from './rankPage';
    import situationNav from './situationNav'
    export default {
        components: {
            'rankList': rankList,
            'rankPage': rankPage,
            'situationNav': situationNav
        },
        data() {
            return {
                listIndex: this.$route.params.index,
                type: this.$route.params.type
            }
        },
        computed: {

        },
        methods: {
            updateType(newType) {
                this.type = newType;
            }
        },

    }
</script>

<style scoped>
    .situationPage {
        padding: 0 16px;
        margin-top: 30px;
        width: 100%;
        box-sizing: border-box;
    }
</style>
