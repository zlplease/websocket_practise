import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuescroll from 'vuescroll/dist/vuescroll-slide';

Vue.use(vuescroll);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
