import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll/dist/vuescroll-slide';

Vue.use(vuescroll);

Vue.config.productionTip = false

Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
