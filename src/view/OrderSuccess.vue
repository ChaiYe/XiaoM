<template>
  <div>
    <XmHead></XmHead>
    <XmCrunmbs pageName="订单结果" curPath="/OrderSuccess">
    </XmCrunmbs>

      <div class="main">
        <div class="orderheader">
          <Orderheader></Orderheader>
        </div>

        <div><img class="order_img" src="data:image/png;base64,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" alt=""></div>
        <div class="message">
          <p>恭喜您！</p>
          <p>您的订单已完成！</p>
        </div>
        <div class="order_details">
          <span>订单号：{{orderId}}</span>
          <span>订单合计：￥{{orderCount}}</span>
        </div>
        <div class="btn_content">
          <div class="btn to_car">
            <route-link to="{path:'cart'}">购物车</route-link>
          </div>
          <div class="btn to_list">
            <route-link to="{path:'home'}">商品列表</route-link>
          </div>
        </div>
      </div>

    <XmFoot></XmFoot>
  </div>
</template>

<script>
  import XmCrunmbs from '../components/common/XmCrumbs.vue'
  import XmHead from '../components/common/XmHead.vue'
  import XmFoot from '../components/common/XmFoot.vue'
  import  Orderheader from '../components/common/Orderheader'
  import axios from 'axios'
  export default {
    data(){
      return {
        orderId:'123456',
        orderCount:'123456'
      }
    },
    components: {
      XmCrunmbs,
      XmHead,
      XmFoot,
      Orderheader
    },
    mounted(){
      this.init();
    },
    methods:{
      init(){

        this.orderId=this.$route.query.orderId;
        axios.get('/users/getOrderTotal',{
            params:{orderId:this.orderId}
        }).then((response)=>{
          var res=response.data;
          if(res.status=='0'){
            this.orderCount=res.result.OrderTotal;
          }
        })
      }
    }

  }
</script>

<style lang="less">

  .main *{
    text-align: center;
  }
  .main{
    background: #F5F7FC;
    padding: 24px;
  }
  .order_img{
    width: 80%;
    margin: 0 auto;
    height: 120px;
    width: 120px;
  }
  .orderheader{
    width: 80%;
    margin: 0 auto;
  }
  /*订单详情*/
  .message{
    font-size: 21px;
  }
  .message p{
    margin:12px;
  }
  .order_details span{
    margin: 12px;
    color: #a1a1a1;
    font-size:small;

  }
  /*按钮*/
  .btn_content{
    margin: 24px auto;
    width: 250px;
  }
  .btn{
    text-align: center;
    background: #d1434a;
    width: 100px;
    height: 40px;
    color: white;
    line-height: 40px;
    cursor: pointer;
  }
  .to_car{
    float: left;
  }
  .to_list{
    float: right;
  }
</style>
