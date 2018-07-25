import Vue from 'vue'
import Router from 'vue-router'
import XmHome from '../components/XmHome.vue'
import OrderConfirm from '../view/OrderConfirm.vue'
import OrderSuccess from '../view/OrderSuccess.vue'
import Address from '../view/Address.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xmhome',
      component: XmHome
    },
    {
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
    }
  ]
});
