import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    uid: 0,
    nickname: '',
    othername: '',
  },
  mutations: {
    change(state,n) {
      console.log(n)
        state.uid = n;
        if (n === 1) {
            state.nickname = '鸿'
            state.othername = '涛'
        }else {
            state.nickname = '涛'
            state.othername = '鸿'
        }
        router.push('/chat')
    }
  }
})

export default store