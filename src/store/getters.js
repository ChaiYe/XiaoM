import store from './index'

export default {
  goodsNum (state) {
    return  state.cartInfo.reduce(function (prev,next) {
      console.log()
      return prev + next.productNum
    },0)
  },
  // 获取购物车列表
  cartList (state) {
    if(state.cartList.length == 0){
      store.dispatch('getCartList')
    }
    return state.cartList
  }
}
