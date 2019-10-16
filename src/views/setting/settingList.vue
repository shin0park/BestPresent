<template>
  <div class="settingList">
    <span class="listName">{{settingListName}}</span>
    <span class="listIcon">
      <i class="material-icons">chevron_right</i>
    </span>

  </div>
</template>

<script>
  export default {
    props: {
      settingListName: String
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .settingList {
    display: flex;
    padding: 0 26px;
    border-bottom: 1px solid #eeeeee;
    height: 50px;
  }
  .listName {
    flex-grow: 1;
    font-size: 14px;
    font-weight: 400;
    line-height: 50px;
  }
  .listIcon .material-icons {
    line-height: 50px;
  }
</style>
