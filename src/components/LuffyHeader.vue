<template>
<div class="tab-head">
<ul class="tab-list">
<li v-for="(item,index) in headerList" v-on:click="addClass(index)" v-bind:class="{ active:index==current}">
  <router-link :to="{path:item.url}">{{ item.title }}</router-link></li>
</ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      headerList: [
          {id: '1', name: 'HelloWorld', title: 'home',url: '/HelloWorld'},
          {id: '2', name: 'item', title: 'item',url: '/item'},
          {id: '3', name: 'me', title: 'me',url: '/me'},
        ],
      current:0
    };
  },
  methods: {
    addClass: function(index) {
      this.current = index;
    }
  }
};
</script>

<style scoped>
.tab-list{
  width: 100%;
  height: 45px;
  background: rgba(70,87,55,255);
  position: absolute;
  top: 0;
  left: 0;
}
.tab-list li{
  float: left;
  width: 5%;
  cursor: pointer;
  height: 41px;
  line-height: 45px;
  padding: 0 30px;
  color: #fff;
}
.tab-list li:hover{
  color: rgb(255, 208, 75);
  background: rgba(50,70,33,255);
  border-bottom: 4px solid rgba(50,70,33,255);
}
.tab-list li.active{
  border-bottom: 4px solid rgb(255, 208, 75);
}
.active{
  color: rgb(255, 208, 75);
  background: rgba(50,70,33,255)
}

a {
text-decoration: none;
color:antiquewhite;}


</style>