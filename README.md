# project

> A Vue + vuex 实现父子组件双向通信的demo！！！！

## Build Setup 

# install dependencies//安装依赖
npm install      

# serve with hot reload at localhost:8080
npm run dev

```
## 使用Vuex

本文档是基于vue-cli 实现vuex

> ###安装： <pre><code>npm install vuex  --save </code></pre>

> 引用：为了便于维护，我们单独在 src 创建一个文件夹 store，在store建立一个index.js文件
>><pre><code>import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
    state: {
      count: 0
    },
    mutations : {
        add(state){ 
            state.count ++
        }
    }
  }
</code></pre>

>下面还要在main.js里引用一下
>><pre><code>import store from './store'
new Vue({
	el: '#app',
  	router,
  	store,
 	template: '<App/>',
  	components: { App }
})
</code></pre>



>###使用方法：

>#### state负责存储整个应用的状态数据,
>
>>在store文件下的 index.js，定义一个count：0
>>要想在其他组件里获取，我知道有两种方式
>
>><pre><code>1.在标签里v-model="count"   //参考home.vue
>  computed:{ //利用vue计算属性
    count:function(){
      return this.$store.state.count  //注意不能落掉this
    }
  }
</code></pre>

>><pre><code>2.在标签里 v-model="$store.state.count" //参考page1.vue
</code></pre>

>#### mutationName 利用它可以更改状态，本质就是用来处理数据的函数，其接收唯一参数值state,就是它上面的state对象。

>><pre><code>  1.定义了一个函数add，每次执行count+1；
	mutations : {
    	    add(state){ 
    	        state.count ++
    	    }
    	}
</code></pre>

>><pre><code>  2.在组件标签里 通过@click="$store.commit('add')" 触发 mutationName里的add函数
>各组件里的 $store.state.count 都会发生变化
</code></pre>



