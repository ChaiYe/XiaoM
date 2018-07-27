import {loginVerify,logoutVerify,getCartInfo,addGoods} from '../api/index'
import {RECIEVE_USER_INFO,RECIEVE_CART_INFO,RECIEVE_GOODS_ADD} from './mutations-type'
import axios from 'axios'
import store from './index'

axios.defaults.withCredentials = true;

export default {
  async getUserInfo ({commit},{userName,userPwd}) {
   let result = await loginVerify({userName,userPwd})
    if (result.status === 0) {
      let userName = result.result.userName
      commit(RECIEVE_USER_INFO,{userName})
    }
  },
  async userLogout ({commit}) {
    let result = await logoutVerify()
    if (result.status === '0') {
      let userName = result.result
      commit(RECIEVE_USER_INFO,{userName})
    }
  },
  async getCartInfo ({commit}) {
    /*登陆成功后立即获取购物车信息*/
    let result = await getCartInfo()
    if (result.status === '0') {
      let cartInfo = result.result
      commit(RECIEVE_CART_INFO,{cartInfo})
    }
  },
  /*添加购物车*/
  async addCartGoods ({commit},{productId}) {
   let result = await addGoods({productId})
    if (result.status === "0"){
      commit(RECIEVE_GOODS_ADD,{productId})
    }
  },
  // 获取购物车列表
  async getCartList ({state, commit}, arg) {
    try{
      //set cookie
      // useCookie.setCookie('userId', '1', 7)
      // useCookie.setCookie('userName', 'sunyu', 7)
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
  // 加减购物车数量+check
  async editCart (state, arg) {
    axios({
      url: 'http://localhost:3000/users/carEdit',
      method: 'POST',
      data: arg,
    }).then(function (res) {
      if(res.status == 0){
        store.dispatch('getCartList')
      }else{
        console.log(res)
      }
    }).catch(function (error) {
      console.log(error);
    });
  },
  // 全选按钮
  async cartCheckAll (state, arg) {
    axios.post('http://localhost:3000/users/carCheckAll',{
      checked:arg?'1':'0'
    }).then((res)=>{
      if(res.status == '0'){
        console.log('更新成功')
        this.dispatch('getCartList')
      }else{
        console.log(res)
      }
    }).catch(function(error){
      console.log(error)
    });
  },
  // 删除购物车货物
  async cartDelete (state, arg) {
    axios({
      url: `http://localhost:3000/users/carDel`,
      method: 'POST',
      data: {productId: arg},
      withCredentials: true
    }).then(function(res){
      if(res.status == 0){
        store.dispatch('getCartList')
      }else{
        console.log(res)
      }
    }).catch(function(error){
      console.log(error)
    });
  }
}
