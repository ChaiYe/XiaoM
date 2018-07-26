// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*import store from './store/index'
Vue.config.productionTip = false*/
import store from './store'
import useCookie from './utils/cookie'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.useCookie = useCookie;//全局变量

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

