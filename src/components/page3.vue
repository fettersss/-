<template>
<div id="show">
<h1>家常菜</h1>
<div v-for="blog in blogs" :key="blog.title" class="single">
<h2 v-titlecolor>{{blog.title}}</h2>
<article>
<p>配料： {{blog.burden}}</p >
<p>简介： {{blog.imtro}} </p >
<div v-for="item in blog.steps" :key="item.step" class="single">
<p>步骤： {{item.step}}</p>
<img :src='item.img' width="200" height="150"></div>
</article>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
name: 'show',
data(){
return{
blogs:[]
}
},
created(){
this.$http.jsonp('http://apis.juhe.cn/cook/index?key=c588e52f1a84b2a0bf1a0136c79c05ee&cid=4',
//axios.get('http://apis.juhe.cn/cook/query?key=1ea4ce7c2fdfd61530f1ad2a8eeab606&menu=%E8%A5%BF%E7%BA%A2%E6%9F%BF&rn=10&pn=3',
{
emulateJSON:true}
)
.then(function(data){
this.blogs=data.body.result.data.slice(0,10);
console.log(this.blogs);
})
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show{
max-width: 800px;
margin:0 auto;
}

.single{
padding: 20px;
margin: 20px 0;
box-sizing: border-box;
background: rgba(235, 235, 226,.8);
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
