<template>
  <el-container>
    <el-header>
      <my-header/>
    </el-header>
    <el-container>
      <el-aside><SideBar/></el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from '~/components/public/header/index'
import SideBar from '~/components/public/sidebar/index'
export default {
  components: {
    MyHeader,
    SideBar
  }
}
</script>


<style>


</style>
