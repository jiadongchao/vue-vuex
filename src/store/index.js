import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
    state: {
      count: 0
    },
    mutations : {
        add(state){ //state 是上面的state
            state.count ++
        }
    }
  })