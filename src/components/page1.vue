<template>
  <div class="page1">
    <h1>{{ msg }}</h1>
    <!-- 两种方式实现 页面数据实时更新，这是直接绑定-->
    <input type="text" v-model="$store.state.count"> 
    <input type="button" value="子组件 +" @click="$store.commit('add')">
  </div>
</template>

<script>
export default {
  name: 'Page1',
  data () {
    return {
      msg: 'pag1 子组件',
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
