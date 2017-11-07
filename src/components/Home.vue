<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="count">
    <input type="button" value="+" @click="$store.commit('add')"> 
    <br>
    <p>横线下是子组件，属于嵌套关系</p>
    <hr>

    <!--子组件-->
    <page-1></page-1>    
  </div>
</template>

<script>
import page1 from './page1'

export default {
  name: 'Home',
  components:{
    "page-1":page1
  }, 
  data () {
    return {
      msg: 'Home组件----实现 父-子组件双向通信',      
    }
  },
  computed:{ //两种方式实现 页面数据实时更新，这是利用vue计算属性
    count:function(){
      return this.$store.state.count
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
