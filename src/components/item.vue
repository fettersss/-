<template>
<div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu id=one default-active="1" class="el-menu-vertical-demo" style="height:50%" @select="handleSelect">
              <el-menu-item class="two" index="1">快手<i class="el-icon-star-on" style="width:5%"></i></el-menu-item>
              <el-menu-item class="three" index="2">创意<i class="el-icon-star-on" style="width:5%"></i></el-menu-item>
              <el-menu-item class="four" index="3">家常<i class="el-icon-star-on" style="width:5%"></i></el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div>
            <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; background-color: white">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>

          <div style="margin-top:10px">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        searchCriteria: '',
        breadcrumbItems: [' ☜导航一 点击左侧标签生成快手菜谱'],
      }
    },

    methods:{
      handleIconClick(ev) {
        console.log(ev);
      },

      handleSelect(key, keyPath){
        switch(key){
          case '1':
            this.$router.push('/Page1');
            this.breadcrumbItems  = [' ☜导航一 点击左侧标签生成快手菜谱']
            break;
          case '2':
            this.$router.push('/Page2')
            this.breadcrumbItems  = [' ☜导航二 点击左侧标签生成创意菜谱']
            break;
          case '3':
            this.$router.push('/Page3')
            this.breadcrumbItems  = [' ☜导航三 点击左侧标签生成家常菜谱']
            break;
        }
      },

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

