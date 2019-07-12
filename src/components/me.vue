<!--基本html代码区域-->
<template>
<div>
<router-link to="a">点此处搜索菜谱</router-link>
<h1>欢迎你,请记录心得{{this.$route.params.user}} ：</h1>
<me v-if='floder' style="width:800px"><span @click='edit()'>点击一下</span></me>
<input type="text" v-else @change='input()'>

</div>
</template>
<script>
export default{
data(){
folder:true
return{
}
},
methods:{
edit(){
this.folder=false;
},
input(){
this.folder=true;
}
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
text-decoration: none;
color:rgb(14, 13, 13);}
</style>