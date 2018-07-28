// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
// import useCookie from './utils/cookie'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/images/err.jpg',
  loading: '../static/images/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

// Vue.prototype.useCookie = useCookie;//全局变量

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
