<template>
  <main class="main">
    <section class="main-content">
      <section class="main-product-sort">
        <div class="sort-block">
          <span>排序:</span>
          <a href="#" class="sort-type">默认</a>
          <a href="#" @click="arrows = !arrows">价格</a>
          <span class="font-arrow" :class="{'rotate':arrows}">
            <i class="iconfont icon-totop"></i>
          </span>
        </div>
      </section>
      <section class="main-product-wrap clearfix">
        <section class="main-left">
          <h3>价 格:</h3>
          <ul>
            <li>
              <a href="javascript:;" :class="{'active':tabIndex === 0}" @click="changeTab(0)">全部</a>
            </li>
            <li>
              <a href="javascript:;" :class="{'active':tabIndex === 1}" @click="changeTab(1)">0.00-100.00</a>
            </li>
            <li>
              <a href="javascript:;" :class="{'active':tabIndex === 2}" @click="changeTab(2)">100.00-500.00</a>
            </li>
            <li>
              <a href="javascript:;" :class="{'active':tabIndex === 3}" @click="changeTab(3)">500.00-1000.00</a>
            </li>
            <li>
              <a href="javascript:;" :class="{'active':tabIndex === 4}" @click="changeTab(4)">1000.00-8000.00</a>
            </li>
          </ul>
        </section>
        <section class="main-right">
          <ul class="product-list clearfix">
            <li>
              <div class="p-picture">
                  <img src="../../static/images/pic002.jpg" alt="小米6x">
              </div>
              <span>小米6X 极简保护壳</span>
              <p>￥29.00</p>
              <a href="javascript:;">加入购物车</a>
            </li>
            <li>
              <div class="p-picture">
                  <img src="../../static/images/pic002.jpg" alt="小米6x">
              </div>
              <span>小米6X 极简保护壳</span>
              <p>￥29.00</p>
              <a href="javascript:;">加入购物车</a>
            </li>
            <li>
              <div class="p-picture">
                  <img src="../../static/images/pic002.jpg" alt="小米6x">
              </div>
              <span>小米6X 极简保护壳</span>
              <p>￥29.00</p>
              <a href="javascript:;">加入购物车</a>
            </li>
            <li>
              <div class="p-picture">
                  <img src="../../static/images/pic002.jpg" alt="小米6x">
              </div>
              <span>小米6X 极简保护壳</span>
              <p>￥29.00</p>
              <a href="javascript:;">加入购物车</a>
            </li>
            <li>
              <div class="p-picture">
                  <img src="../../static/images/pic002.jpg" alt="小米6x">
              </div>
              <span>小米6X 极简保护壳</span>
              <p>￥29.00</p>
              <a href="javascript:;">加入购物车</a>
            </li>
            <li>
              <div class="p-picture">
                  <img src="../../static/images/pic002.jpg" alt="小米6x">
              </div>
              <span>小米6X 极简保护壳</span>
              <p>￥29.00</p>
              <a href="javascript:;">加入购物车</a>
            </li>
            <li>
              <div class="p-picture">
                  <img src="../../static/images/pic002.jpg" alt="小米6x">
              </div>
              <span>小米6X 极简保护壳</span>
              <p>￥29.00</p>
              <a href="javascript:;">加入购物车</a>
            </li>
            <li>
              <div class="p-picture">
                  <img src="../../static/images/pic002.jpg" alt="小米6x">
              </div>
              <span>小米6X 极简保护壳</span>
              <p>￥29.00</p>
              <a href="javascript:;">加入购物车</a>
            </li>

          </ul>
        </section>
      </section>
    </section>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        arrows:false,
        tabIndex: 0
      }
    },
    methods: {
      changeTab (index) {
        this.tabIndex = index
      }
    },
    computed: {},
    components: {}
  }
</script>
<!--scoped再当前作用域用-->
<style scoped lang="less">
.main{
  width: 100%;
  background: #F5F7FC;
  .main-content{
    width: 1220px;
    margin: 0 auto;
    padding: 120px 20px 100px;
    border-bottom: 2px solid #e9e9e9;
    .main-product-sort{
      width: 100%;
      height: 110px;
      background: #FFFFFF;
      .sort-block{
        float: right;
        padding-right: 40px;
        height: 100%;
        line-height: 110px;
        font-size: 0;
        a,span{
          display: inline-block;
          font-size: 16px;
          color: #605f5f;
        }
        a:hover{
          color: #ee7a23;
        }
        span:hover{
          color: #ee7a23;
        }
        .sort-type{
          margin: 0 40px 0 20px;
          color: #ee7a23;
        }
        .font-arrow{
          transition: .5s;
          i{
            font-size: 20px;
          }
          &.rotate{
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}
.main-product-wrap {
  padding-top: 60px;
  .main-left{
    width: 215px;
    padding-left: 40px;
    float: left;
    h3{
      height: 40px;
      line-height: 40px;
      padding-bottom: 60px;
      font-weight: bold;
      color: #605f5f;
      font-size: 16px;
    }
    ul>li{
      height: 52px;
      margin-bottom: 40px;
      position: relative;
      a{
        position: absolute;
        line-height: 20px;
        top: 50%;
        margin-top: 10px;
        font-size: 16px;
        color: #605f5f;
        transition: padding .3s;
        &.active{
          border-left: 3px solid #EE7A23;
          padding-left: 20px;
          color: #EE7A23;
        }
        &:hover{
          border-left: 3px solid #EE7A23;
          padding-left: 20px;
          color: #EE7A23;
        }
      }
    }
  }
}

.main-right{
    margin-left: 255px;
  .product-list>li{
    float: left;
    border: 2px solid #e9e9e9;
    width: 23%;
    margin-right: 2%;
    box-sizing: border-box;
    margin-bottom: 2%;
    padding: 20px;
    background: #ffffff;
    transition: .5s;
    &:hover{
      box-shadow: 2px 2px 5px #ee7a23;
    }
    .p-picture>img{
      width: 100%;
      margin-bottom: 40px;
    }
    span{
      font-size: 16px;
      color: #605f5f;
      font-weight: bold;
    }
    p{
      margin-top: 40px;
      margin-bottom: 18px;
      color: #d1434a;
      font-size: 16px;
    }
    a{
      width: 100%;
      height: 40px;
      border: 2px solid #d1434a;
      text-align: center;
      line-height: 40px;
      color: #d1434a;
      &:hover{
        background: #E38E92;
        color: #FFFFFF;
      }
    }
  }
}
</style>
