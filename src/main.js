// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import MintUi from 'mint-ui'
// import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)
// Vue.use(Vux)
Vue.use(MintUi)
router.beforeEach((to, from, next) => {
  if (to.path === '/auth') { }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
