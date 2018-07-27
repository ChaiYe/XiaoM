<template lang="html">
  <div class="">
    <Header />
    <Crumbs />
    <div class="section-cart">
      <h2>购物车</h2>
      <table>
        <thead>
          <tr>
            <th width="8%"></th>
            <th>商品</th>
            <th>价格</th>
            <th>数量</th>
            <th>总价</th>
            <th width="15%">编辑</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartList" :key="item.Id">
            <td>
              <div class="checkbox" @click="editCart(0, item)" >
                <img v-show="item.checked" src="../../static/images/finish.png">
              </div>
            </td>
            <td>
              <div class="imgBox">
                <img :src="imgUrl(item.productImage)">
              </div>
              <div class="imgTitle">{{ item.productName }}</div>
            </td>
            <td>￥{{ item.salePrice }}</td>
            <td>
              <div class="number">
                <div class="subtract" @click="editCart(-1, item)">-</div> <span ref="productNum">{{ item.productNum }}</span> <div class="add" @click="editCart(1, item)">+</div>
              </div>
            </td>
            <td class="subtotal">￥{{ item.salePrice * item.productNum }}</td>
            <td><i class="iconfont icon-delete" @click="deleteCart(item)"></i></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div class="checkbox" @click="checkAllClick">
                <img v-show="cartCheckAll" src="../../static/images/finish.png">
              </div>
            </td>
            <td class="text-left">全部</td>
            <td colspan="4">
              <span>合计：</span>
              <span class="subtotal">￥{{ cartTotal }}</span>
              <button class="checkoutBtn" type="button">去结算</button>
            </td>
          </tr>
        </tfoot>
      </table>
      <!-- 提示框 -->
      <div class="modal_container" v-if="showModal">
        <div class="modal">
          <div class="md_header"><a href="javascript:;" class="md_close">×</a></div>
          <div class="md_content">
            <div class="confirm_tip">
              <h3>您确认删除这条信息吗？</h3>
            </div>
            <div class="btn_container"><div>
              <button type="button" class="md_btn" @click="modalSure">确认</button>
              <button type="button" class="md_btn" style="margin-left: 20px;" @click="modalCancel">关闭</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/XmHead'
import Footer from '@/components/common/XmFoot'
import Crumbs from '@/components/common/XmCrumbs'


export default {
  name: 'XmCart',
  data () {
    return {
      showModal: false,
      deleteItem: null
    }
  },
  methods: {
    checkAllClick () {
      this.cartCheckAll = !this.cartCheckAll
      this.$store.dispatch('cartCheckAll', this.cartCheckAll)
      this.$store.dispatch('getCartList')
    },
    imgUrl (name){
      return 'http://hotemotion.fun:3389/static/'+name;
    },
    editCart (num, item) {
      let checked = item.checked

      if(num == 0){
        checked = !checked
      }

      if(num < 0){
        num = -num;
        if(item.productNum - num > 0){
          this.$store.dispatch('editCart', {Id: item.Id, checked: Number(checked), productNum: item.productNum - num})
        }else{
          alert('不能再少了哦')
        }
      }else{
        this.$store.dispatch('editCart', {Id: item.Id, checked: Number(checked), productNum: item.productNum + num})
      }
    },
    deleteCart (item) {
      this.showModal = true;
      this.deleteItem = item;
    },
    modalSure () { //确定
      this.$store.dispatch('cartDelete',this.deleteItem.productId)
      this.showModal = false;
    },
    modalCancel () { //取消
      this.showModal = false;
    }
  },
  components:{ Header, Footer, Crumbs },
  computed: {
    cartList () {
      return this.$store.getters.cartList
    },
    checkNum () {
      let num = 0;
      this.cartList.forEach(cart=>{
        if(cart.checked == '1'){
          num++;
        }
      })
      return num;
    },
    cartCheckAll () {
      return this.cartList.length == this.checkNum
    },
    cartTotal () {
      let num = 0
      this.cartList.forEach(cart=>{
        num += cart.salePrice * cart.productNum
      })
      return num
    }
  }
}
</script>

<style lang="less">
@import '../../assets/css/cart.less';
</style>
