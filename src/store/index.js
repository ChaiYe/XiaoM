import Vue from 'vue'
import Vuex from 'vuex'
/*import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})*/
import useCookie from '../utils/cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    cartList: [],
  },
  mutations: {
    setCartList (state, arg) {
      state.cartList = arg;
    }
  },
  actions: {
    async getCartList ({state, commit}, arg) {
      try{
        //set cookie
        useCookie.setCookie('userId', '1', 7);
        useCookie.setCookie('userName', 'sunyu', 7);

        let fetchOptions = { credentials: 'include' };
        let res = await (await fetch(`http://localhost:3000/users/carList`, fetchOptions)).json();
        commit('setCartList', res);
      }catch(e){
        console.log(e)
      }
    }
  },
  getters: {
    cartList (state) {
      if(state.cartList.length == 0){
        store.dispatch('getCartList')
      }
      return state.cartList
    }
  }
})

export default store
