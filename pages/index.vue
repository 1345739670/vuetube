<template>
  <section class="container">
    <div class="wrapper">
        <channel></channel>
        <channel></channel>
        <channel></channel>
        <channel></channel>
    </div>
  </section>
</template>

<script>

import Channel from '@/components/channel'
export default {
  components: {
    Channel
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container 
  // background #35495e
  margin 30px 0 0 240px
  display flex
  flex-direction column
  align-items center
  .wrapper 
    /* overflow:auto; */
    overflow hidden
    display flex
    flex-direction column
  


</style>
