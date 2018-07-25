<template>
  <div class="login">
    <div class="login-mask"></div>
    <div class="dialog">
      <div class="close" @click="close">
        <i class="iconfont icon-cuowu"></i>
      </div>
      <form>
        <div class="form-title">
          <h3>登录</h3>
        </div>
        <div class="form-group">
          <i class="iconfont icon-yonghu"></i>
          <input type="text" placeholder="请输入用户名" v-model="userName">
        </div>
        <div class="form-group">
          <i class="iconfont icon-suo"></i>
          <input type="password" placeholder="请输入密码" v-model="userPwd">
        </div>
        <button class="foom-submit" @click="formSubmit()">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
import {userLogin} from '../../api/index'
import {mapActions,mapState} from 'vuex'
  export default {
    data () {
      return {
        userName: '',
        userPwd: ''
      }
    },
    methods: {
      ...mapActions(['getUserInfo']),
      close () {
        this.$emit('closeDialog')
      }
      ,
     formSubmit () {
       let {userName,userPwd} = this
       this.getUserInfo({userName,userPwd})
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    components: {
    },
    watch: {
      userInfo (index) {
        if (index) {
          this.close()
          this.$store.dispatch('getCartInfo')
        }
      }
    }
  }
</script>
<!--scoped再当前作用域用-->
<style scoped lang="less">
.login{
  .login-mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 100;
  }
  .dialog{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -260px;
    margin-top: -165px;
    width: 520px;
    height: 330px;
    background: #FFFFFF;
    padding: 40px;
    box-sizing: border-box;
    z-index: 101;
    border-radius: 10px;
    .close{
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    form{
      .form-title{
        height: 40px;
        line-height: 40px;
        h3{
          font-weight: bold;
          font-size: 24px;
        }
      }
      .form-group{
        height: 60px;
        margin-top: 10px;
        border: 1px solid #000;
        padding: 0 10px;
        border-radius: 10px;

        .iconfont{
          font-size: 20px;
        }
        input{
          width: 360px;
          padding-left: 10px;
          box-sizing: border-box;
          height: 60px;
          display: inline-block;
          border: none;
          outline: none;
          font-size: 20px;
        }
      }
      .foom-submit{
        width: 100%;
        margin-top: 20px;
        background-color: #1e90ff;
        color: #FFFFFF;
        cursor: pointer;
        height: 60px;
        font-size: 18px;
        text-align: center;
        line-height: 60px;
        outline: none;
        border: none;
        border-radius: 10px;
      }
    }

  }
}
</style>
