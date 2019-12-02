<template>
  <div>
    <rank-list v-for="(item, index) in items" v-bind:key="item.name" v-bind:itemdata="item" v-bind:itemindex="index" v-bind:type="type"></rank-list>
  </div>
</template>

<script>
  import rankList from './rankList'
  export default {
    data() {
      return {
        items : [],
      }
    },
    props: {
      type: String
    },
    async created() {
        this.items = await this.$api.readProducts('case', this.type);
    },
    async updated() {
      this.items = await this.$api.readProducts('case', this.type);
    },
    components: {
      'rankList': rankList
    }
  }
</script>

<style>

</style>
