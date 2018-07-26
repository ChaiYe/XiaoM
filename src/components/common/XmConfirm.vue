<template>
  <div>
    <div class="login-mask"></div>
    <div class="dialog">
      <slot name="msg" class="msg"></slot>
      <div class="btn-container">
        <slot name="l-btn"></slot>
        <slot name="m-btn"></slot>
        <slot name="r-btn"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<!--scoped再当前作用域用-->
<style scoped lang="less">
.login-mask{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
}
.dialog{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 520px;
  height: 330px;
  background: #ffffff;
  z-index: 999;
  border-radius: 20px;
  padding: 20px;
  h3{
    font-size: 24px;
    text-align: center;
    margin-top: 90px;
    .icon-01{
      font-size: 24px;
      color: red;
      margin-right: 5px;
    }
  }
  .btn-container{
    margin-top: 60px;
    text-align: center;
    a{
      width: 150px;
      height: 40px;
      margin: 0 10px;
      display: inline-block;
      background-color: #1E90FF;
      color: #FFFFFF;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
    }
  }
}
</style>
