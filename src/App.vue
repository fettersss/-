
<template>
  <div id="app">
    <!-- 导航区域 -->
    <LuffyHeader/>
    <img src="./assets/logo4.png" width="200px" height="200px" border:0>
    <router-view/>
  </div>
</template>

<script>
import LuffyHeader from '@/components/LuffyHeader'
export default {
  name: 'App',
  components:{
      LuffyHeader
    }
}
</script>

<style>
  
</style>
