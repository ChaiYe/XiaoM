<template>
  <header class="head-wrap">
    <div class="head-content clearfix">
      <h1 class="head-logo">
        <a href="#">
          <img src="../../../static/images/pic001.jpg" alt="logo">
        </a>
      </h1>
      <div class="head-login">
        <a href="#" class="login-btn" v-if="!userInfo" @click="dialogStatus = true">登录</a>
        <div class="login-info clearfix" v-if="userInfo">
          <span>{{userInfo}}</span>
          <a href="#" class="logout-btn" @click="logoutAll()">退出</a>
          <a href="#" class="cart-link iconfont icon-icon"></a>
          <div class="car-count">
            <a href="#">{{goodsNum}}</a>
          </div>
        </div>
      </div>
    </div>
    <XmLogin v-if="dialogStatus" @closeDialog="dialogStatus = false"></XmLogin>
  </header>
</template>
<script>
  import XmLogin from './XmLogin.vue'
  import {mapState,mapActions,mapGetters} from 'vuex'
  export default {
    data () {
      return {
        loginStatus: false,
        dialogStatus: false
      }
    },
    methods: {
      ...mapActions(['userLogout']),
      logoutAll () {
        /*此处退出用户与购物车*/
        this.userLogout()
        this.$store.commit('RECIEVE_CART_INFO',{cartInfo:[]})

      }
    },
    computed: {
      ...mapState(['userInfo','cartInfo']),
      ...mapGetters(['goodsNum'])
    },
    components: {
      XmLogin
    },
    watch: {
      cartInfo (index) {
//        this.goodsNum()
      }
    }
  }
</script>
<!--scoped再当前作用域用-->
<style scoped lang="less">
.head-wrap{
  width: 100%;
  height: 140px;
  .head-content{
  width: 1180px;
  height: 100%;
  background: #ffffff;
  margin: 0 auto;
  padding: 0 40px;
    .head-logo{
      float: left;
      margin-top: 32.5px;
    }
    .head-login{
      float: right;
      height: 100%;
      .login-btn{
        height: 100%;
        font-size: 16px;
        line-height: 140px;
        color: #605f5f;
      }
      .login-info{
        height: 100%;
        line-height: 140px;
        position: relative;
        a,span{
          float: left;
          font-size: 16px;
          color: #605f5f ;
          margin-left: 10px;
        }
        span{
          font-size: 14px;
          font-weight: bold;
        }
        .cart-link{
          font-size: 30px;
          &:hover{
            color: #d1434a;
          }
        }
        .logout-btn:hover{
          color: #d1434a;
        }
        .car-count{
          position: absolute;
          right: -15px;
          top: 32px;
          width: 30px;
          height: 30px;
          background: #D1434A;
          border-radius: 50%;
          a{
            width: 100%;
            text-align: center;
            line-height: 30px;
            font-size: 16px;
            color: #FFFFFF;
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
