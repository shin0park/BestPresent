<template>
  <section class="settingTap">
    <div class="profileBox">
      <span class="userProfileImg">
        <img src="../../assets/user.png">
      </span>
      <div class="userInfo">
        <h1 class="userName">{{userName}}</h1>
        <p class="userEmail">{{userEmail}}</p>
      </div>
    </div>
    <setting-list v-for="name in settingListName" :setting-list-name="name"></setting-list>
  </section>
</template>

<script>
  import settingList from './settingList'
  export default {
    components: {
      'settingList': settingList
    },
    computed: {
      userName() {
        return this.$store.state.user.userID;
      },
      userEmail() {
        return this.$store.state.user.userEmail;
      },
      settingListName() {
        return this.$store.state.settingList;
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .settingTap {
    width: 100%;
    box-sizing: border-box;
  }
  .profileBox {
    display: flex;
    padding: 0 26px;
    border-bottom: 1px solid #eeeeee;
    height: 110px;
    box-sizing: border-box;
  }
  .userProfileImg {
    flex-basis: 70px;
    align-self: center;
  }
  .userProfileImg img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .userInfo {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-self: center;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .userName {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
  }
  .userEmail {
    font-size: 12px;
    font-weight: 400;
    color: #757575;
  }
</style>
