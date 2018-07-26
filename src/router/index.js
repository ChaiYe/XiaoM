import Vue from 'vue'
import Router from 'vue-router'
import XmHome from '../components/XmHome.vue'
import OrderConfirm from '../view/OrderConfirm.vue'
import OrderSuccess from '../view/OrderSuccess.vue'
import Address from '../view/Address.vue'
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
      path: '/home',
      name: 'home',
      component: XmHome
    },{
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'orderSuccess',
      component: OrderSuccess
    },
    {
      path: '/cart',
      name: 'cart',
      component: XmCart
    },
  ]
});
