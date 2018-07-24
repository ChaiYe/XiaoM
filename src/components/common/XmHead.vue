<template>
  <header class="head-wrap">
    <div class="head-content clearfix">
      <h1 class="head-logo">
        <a href="#">
          <img src="../../../static/images/pic001.jpg" alt="logo">
        </a>
      </h1>
      <div class="head-login">
        <a href="#" class="login-btn" v-if="!loginStatus" >登录</a>
        <div class="login-info clearfix" v-if="loginStatus">
          <span>sunyu</span>
          <a href="#" class="logout-btn">退出</a>
          <a href="#" class="cart-link iconfont icon-icon"></a>
          <div class="car-count">
            <a href="#">21</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        loginStatus: false
      }
    },
    methods: {

    },
    computed: {},
    components: {}
  }
</script>
<!--scoped再当前作用域用-->
<style scoped>
.head-wrap{
  width: 100%;
  height: 140px;
}
.head-wrap .head-content{
  width: 1180px;
  height: 100%;
  background: #ffffff;
  margin: 0 auto;
  padding: 0 40px;
}
.head-wrap .head-content .head-logo{
  float: left;
  margin-top: 32.5px;
}
.head-wrap .head-content .head-login{
  float: right;
  height: 100%;
}
.head-wrap .head-content .head-login>.login-btn{
  height: 100%;
  font-size: 16px;
  line-height: 140px;
  color: #605f5f;
}
.head-wrap .head-content .head-login .login-info{
  height: 100%;
  line-height: 140px;
  position: relative;
}
.head-wrap .head-content .head-login .login-info>a,.head-wrap .head-content .head-login .login-info>span{
  float: left;
  font-size: 16px;
  color: #605f5f ;
  margin-left: 10px;
}
.head-wrap .head-content .head-login .login-info span{
  font-size: 14px;
  font-weight: bold;
}
.head-wrap .head-content .head-login .login-info .cart-link{
  font-size: 30px;
}
.head-wrap .head-content .head-login .login-info .cart-link:hover{
  color: #d1434a;

}
.head-wrap .head-content .head-login .login-info .logout-btn:hover{
  color: #d1434a;
}
.head-wrap .head-content .head-login .login-info .car-count{
  position: absolute;
  right: -15px;
  top: 32px;
  width: 30px;
  height: 30px;
  background: #D1434A;
  border-radius: 50%;
}
.head-wrap .head-content .head-login .login-info .car-count a{
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: #FFFFFF;
}
</style>
