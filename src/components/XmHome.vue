<template>
  <div class="home">
    <XmHead></XmHead>
    <XmCrumbs pageName="商品" curPath="home"></XmCrumbs>
    <XmHMain @changeConfirmS="confirmS = true"></XmHMain>
    <XmFoot></XmFoot>
    <XmConfirm v-if="confirmS">
      <h3 slot="msg" v-if="userInfo"><i class="iconfont icon-01"></i>加入购物车成功</h3>
      <h3 slot="msg" v-else>请登录,否则无法加入购物车</h3>
      <a href="javascript:;" slot="l-btn" v-if="userInfo" @click="closeConfirm">继续购物</a>
      <a href="javascript:;" slot="r-btn" v-if="userInfo" @click="$router.push('cart')">查看购物车</a>
      <a href="javascript:;" slot="m-btn" v-else @click="closeConfirm">关闭</a>
    </XmConfirm>
  </div>
</template>
<script>
import XmHead from './common/XmHead.vue'
import XmCrumbs from './common/XmCrumbs.vue'
import XmHMain from './XmHMai.vue'
import XmFoot from './common/XmFoot.vue'
import XmConfirm from './common/XmConfirm.vue'
import {getCookie} from '../utils/utils'
import {mapState} from 'vuex'
export default {
  data () {
    return {
        confirmS:false
      }
    },
  created () {
    this.loginStatus ()
  },
  methods: {
    loginStatus () {
      /*页面手动更新后，保持VUEX中有数据*/
      let userName = getCookie('userName')
      userName = typeof userName === 'undefined'? '' :userName
      this.$store.commit('RECIEVE_USER_INFO',{userName})
      if (userName) {
        this.$store.dispatch('getCartInfo')
      }
    },
    closeConfirm () {
      this.confirmS = false
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    XmHead,
    XmCrumbs,
    XmHMain,
    XmFoot,
    XmConfirm
  }
}
</script>
<!--scoped再当前作用域用-->
<style scoped>

</style>
