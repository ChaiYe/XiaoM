import Vue from 'vue'
import Router from 'vue-router'
import XmHome from '../components/XmHome.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xmhome',
      component: XmHome
    },
    {
      path: '/home',
      name: 'home',
      component: XmHome
    },
  ]
});
