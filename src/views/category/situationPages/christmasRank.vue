<template>
  <div>
    <rank-list v-for="item in items" v-bind:itemdata="item"></rank-list>
  </div>
</template>

<script>
  import rankList from '../rankList'
  export default {
    data() {
      return {

      }
    },
    computed: {
      items() {
        return this.$store.state.christmasRank
      }
    },
    components: {
      'rankList': rankList
    }
  }
</script>

<style>

</style>
