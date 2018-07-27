import Vue from 'vue'
import Vuex from 'vuex'
import useCookie from '../utils/cookie'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.withCredentials = true;

const store = new Vuex.Store({
  strict: true,
  state: {
    cartList: [],
  },
  mutations: {
    setCartList (state, arg) {
      state.cartList = arg;
    },
    editCart (state, arg) {

    },
    cartCheckAll (state, arg) {

    },
    cartDelete (state, arg) {

    }
  },
  actions: {
    async getCartList ({state, commit}, arg) {
      try{
        //set cookie
        useCookie.setCookie('userId', '1', 7)
        useCookie.setCookie('userName', 'sunyu', 7)

        let fetchOptions = { credentials: 'include' }
        let res = await (await fetch(`http://localhost:3000/users/carList`, fetchOptions)).json()
        console.log()
        if(res.status == 0){
          commit('setCartList', res.result)
        }else{
          commit('setCartList', [])
          console.log(cartList.msg)
        }

      }catch(e){
        console.log(e)
      }
    },
    async editCart (state, arg) {
      axios({
        url: 'http://localhost:3000/users/carEdit',
        method: 'POST',
        data: arg,
      }).then(function (res) {
        if(res.data.status == 0){
          store.dispatch('getCartList')
        }else{
          console.log(res)
        }
      }).catch(function (error) {
        console.log(error);
      });
    },
    async cartCheckAll (state, arg) {
      axios.post('http://localhost:3000/users/carCheckAll',{
        checked:arg?'1':'0'
      }).then((res)=>{
        if(res.data.status == '0'){
          console.log('更新成功')
          this.dispatch('getCartList')
        }else{
          console.log(res)
        }
      }).catch(function(error){
        console.log(error)
      });
    },
    async cartDelete (state, arg) {
      axios({
        url: `http://localhost:3000/users/carDel`,
        method: 'POST',
        data: {productId: arg},
        withCredentials: true
      }).then(function(res){
        if(res.data.status == 0){
          store.dispatch('getCartList')
        }else{
          console.log(res)
        }
      }).catch(function(error){
        console.log(error)
      });
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
