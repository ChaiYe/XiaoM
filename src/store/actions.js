import {loginVerify,logoutVerify,getCartInfo,addGoods} from '../api/index'
import {RECIEVE_USER_INFO,RECIEVE_CART_INFO,RECIEVE_GOODS_ADD} from './mutations-type'
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
    console.log(result)
    if (result.status === "0"){
      commit(RECIEVE_GOODS_ADD,{productId})
    }
  }
}
