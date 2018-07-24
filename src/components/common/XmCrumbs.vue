<template>
  <div class="crumbs">
    <div class="crumbs-content">
      <a href="#">主页</a>
      <span>/</span>
      <a href="#">商品</a>
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
.crumbs{
  width: 100%;
  height: 90px;
  background: #F0F0F0;
  .crumbs-content{
    width: 1220px;
    height: 100%;
    margin: 0 auto;
    line-height: 90px;
    a,span{
      display: inline-block;
      color: #a1a1a1;
      font-size: 14px;
      line-height:1.5;
    }
  }
}
</style>
