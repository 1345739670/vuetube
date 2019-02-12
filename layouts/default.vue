<template>
  <el-container>
    <el-header height="56px">
      <my-header/>
    </el-header>
    <el-container>
      <el-aside width="240px"><SideBar/></el-aside>
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
