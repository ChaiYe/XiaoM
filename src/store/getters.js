export default {
  goodsNum (state) {
  return  state.cartInfo.reduce(function (prev,next) {
    console.log()
    return prev + next.productNum
  },0)
  }
}
