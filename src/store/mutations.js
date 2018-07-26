import {RECIEVE_USER_INFO,RECIEVE_CART_INFO,RECIEVE_GOODS_ADD} from './mutations-type'
export default {
  [RECIEVE_USER_INFO] (state, {userName}) {
    state.userInfo = userName
  },
  [RECIEVE_CART_INFO] (state, {cartInfo}){
    state.cartInfo = cartInfo
  },
  [RECIEVE_GOODS_ADD] (state,{productId}){
    let flag = true
    state.cartInfo.forEach(item => {
      if (item.productId === productId){
        item.productNum++
        flag = false
      }
    })
    if (flag){
      let productNum = 1
      let product = {productId, productNum}
      state.cartInfo.push(product)
    }
  }
}
