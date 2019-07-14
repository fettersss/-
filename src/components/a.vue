<template>
<div class="bar">
    <input type="text" v-model="searchStr" palceholder="搜索"/>
    <button @click="searchFor(articles,searchStr)">搜索</button>
    <ul v-for="a in searchFor(articles,searchStr)">
        <li>
            <p>{{a.title}}</p>
  			<p>{{a.burden}}</p>
  			<p>{{a.depart}}</p>
        <div v-for="item in a.steps" :key="item.step" class="single">
            <p>步骤： {{item.step}}</p></div>    
        </li>
       </ul>
   </div>  
</template>
 
<script>
export default{
name: 'HelloWorld',
data(){
        return{
            list:[],
            searchStr:"",
             articles: []

   }

},
created(){
	  this.$http.jsonp('http://apis.juhe.cn/cook/index?key=c588e52f1a84b2a0bf1a0136c79c05ee&cid=1',
	  //axios.get('http://apis.juhe.cn/cook/query?key=1ea4ce7c2fdfd61530f1ad2a8eeab606&menu=%E8%A5%BF%E7%BA%A2%E6%9F%BF&rn=10&pn=3',
	  {
		  emulateJSON:true}
		  ).then(function(data){
			  this.articles=data.body.result.data.slice(0,10);
			  console.log(this.articles);
			  })
			  },
methods:{
    searchFor(value,searchStr) {

        var result=[];  //用result来存放查到的结果

         if(!searchStr){return value;}

       searchStr=searchStr.trim().toLowerCase();   //把查询的内容转为小写的

       result=value.filter(function(item){        //这里value是个数组,他也有filter方法的.item是value里面的。
               if(item.title.toLowerCase().indexOf(searchStr)!=-1){   //如果搜索的内容在title标题里面有的话就返回那个项目
                   return item;
               }
           });
    return result;
    
  }

}}
</script>
<style scoped>
</style>
