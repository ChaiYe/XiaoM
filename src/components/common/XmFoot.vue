<template>
  <footer class="foot">
    <section class="foot-content clearfix">
      <div class="foot-left">
        <span>地区</span>
        <select name="" id="" class="state">
          <option value="中国">中国</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
        </select>
      </div>
      <div class="foot-right">
        <p>Copyright © 2018  taoMall.com 版权所有</p>
        <a href="#">隐私策略</a>
        <a href="#">团队合作</a>
        <a href="#">关于我们</a>
      </div>
    </section>
  </footer>
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
.foot{
  width: 100%;
  height: 200px;
  background: #F5F7FC;
  .foot-content{
    box-sizing: border-box;
    width: 1260px;
    height: 100%;
    margin: 0 auto;
    padding-left: 72px;
    position: relative;
    .foot-left{
      position: absolute;
      left: 112px;
      top: 50%;
      transform: translateY(-50%);
    }
    .foot-right{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      p,a{
        float: left;
        margin-right: 20px;
        font-size: 16px;
        color: #a1a1a1;
      }
    }
  }
}
</style>
