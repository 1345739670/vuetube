<template>
  <div class="m-header">
    <div class="header-left">
      <svg class="icon icon-mean header-icon cursor-pointer" aria-hidden="true">
        <use xlink:href="#icon-mean"></use>
      </svg>
      <router-link tag="a" to="/">
        <svg class="icon icon-logo" aria-hidden="true">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </router-link>
    </div>
    <div class="header-middle">
      <form class="searchform">
        <div class="input-container">
          <input type="text" placeholder="搜索">
        </div>
        <button class="search-buttom"></button>
      </form>
    </div>
    <div class="header-right">
      <router-link tag="a" class="right-buttom" to="/video">
        <svg class="icon header-icon" aria-hidden="true">
          <use xlink:href="#icon-video"></use>
        </svg>
      </router-link>
      <router-link tag="a" class="right-buttom" to="/application">
        <svg class="icon header-icon" aria-hidden="true">
          <use xlink:href="#icon-application"></use>
        </svg>
      </router-link>
      <router-link tag="a" class="right-buttom" to="/message">
        <svg class="icon header-icon" aria-hidden="true">
          <use xlink:href="#icon-message"></use>
        </svg>
      </router-link>
      <router-link tag="a" class="right-buttom" to="/notice">
        <svg class="icon header-icon" aria-hidden="true">
          <use xlink:href="#icon-notice"></use>
        </svg>
      </router-link>
      <router-link tag="a" class="user" to="/user">
        <i class="icon-avatar"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/css/stylus/variable"
  @import "~assets/css/stylus/mixin"
  .m-header {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    z-index: 1000;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    width: 100%;
    box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, 0.08);
    background-color: $color-background;
  }
  .header-left {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
  .header-middle{
    /* justify-content: center; */
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0 40px;
    max-width: 640px;
  }
  .searchform {
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 640px;
  }
  .input-container {
    display: flex;
    align-items: center;
    color: hsla(0, 0%, 6.7%, .4);
    background-color: hsla(0, 0%, 100%, 1);
    border: 1px solid #ccc;
    border-right: none;
    box-shadow: inset 0 1px 2px #eee;
    padding: 2px 6px;
    border-radius: 2px 0 0 2px;
  }
  .input-container input {
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    background-color: transparent;
    border: none;
    box-shadow: none;
    font-family: 'Roboto','Noto',sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin-left: 4px;
    max-width: 100%;
    outline: none;
    text-align: inherit;
    width: 100%;
  }
  .search-buttom{
    cursor: pointer;
    border: 1px solid #ccc;
    width: 65px;
    height: 32px;
    // background: url(~assets/img/search.png) no-repeat center;
    bg-image('~assets/img/public/header/search.png')
    background-size: 24px;
  }
  .search-buttom:hover{
    background-color: #e9e9e9;
  }
  .header-icon {
    font-size: 24px;
    color: #a0a0a0;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .icon-logo {
    font-size: 32px;
    color: #ff0000;
  }
  .icon-mean {
    font-size: 32px;
    padding: 8px;
    margin-right: 16px;
  }
  .header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 16px;
    width: 252px;
    height: 40px;
  }
  .header-right .icon {
    display: block;
  }
  .user {
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin: 0 8px;
    border-radius: 50%;
    overflow: hidden;
  }
  .icon-avatar {
    display: block;
    width: 32px;
    height: 32px;
    // background: url(~assets/img/avatar.jpg) no-repeat center;
    bg-image('~assets/img/public/header/avatar.jpg')
    background-size: 32px;
  }
  .right-buttom {
    padding: 8px;
  }
</style>
