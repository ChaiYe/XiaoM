import Vue from 'vue'
import Router from 'vue-router'
import XmHome from '../components/XmHome.vue'
import XmCart from '@/components/XmCart'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xmhome',
      component: XmHome
    },
    {
    	path: '/cart',
      name: 'cart',
      component: XmCart
    }
  ]
});
