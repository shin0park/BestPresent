<template>
  <div>
    <rank-list v-for="(item, index) in items" v-bind:key="item.name" v-bind:itemdata="item" v-bind:itemindex="index" v-bind:type="type"></rank-list>
  </div>
</template>

<script>
  import rankList from '../rankList'
  export default {
    data() {
      return {
        items : [],
        type:'c_birth',
      }
    },
    async mounted() {
        const itemList = await this.$api.readProducts(this.type);
        this.items = itemList;
        console.log(this.items);
    },
    components: {
      'rankList': rankList
    }
  }
</script>

<style>

</style>
