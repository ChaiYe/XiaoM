<template>
  <div>
    <XmHead></XmHead>
    <XmCrunmbs pageName="订单确认" curPath="/OrderConfirm">
    </XmCrunmbs>

    <div class="main">

      <div class="main_content">
        <Orderheader class="Orderheader"></Orderheader>
        <h3 class="alltitle">订单详情</h3>
        <table class="tb" cellspacing="0">
          <tr class="tb_header">
            <th colspan="2">商品</th>
            <th>价格</th>
            <th>数量</th>
            <th>总价</th>
          </tr>
          <tr v-for="item of orderList" v-if="item.checked==1">
            <td class="tbfirst">
              <img :src="'../../static/'+item.productImage" alt="">
            </td>
            <td class="title">
              {{item.productName}}
            </td>
            <td>
              <span>￥{{item.salePrice }}</span>
            </td>
            <td>
              <span>*{{item.productNum}}</span>
            </td>
            <td>
              <span>￥{{(item.productNum*item.salePrice)}}</span>
            </td>
          </tr>

        </table>
        <div class="result">
          <ul>
            <li>
              商品总价:
              <span>￥{{subTotal}}</span>
            </li>
            <li>
              快递费:
              <span>￥{{courier_fees}}</span>
            </li>
            <li>
              折扣:
              <span>￥{{discount}}</span>
            </li>
            <li>
              合计:
              <span id="total_price">￥{{(subTotal+courier_fees-discount)}}</span>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="btn_content">
          <router-link to="{path:'Address'}" class="btn previous">上一步</router-link>
          <div @click="payMent" class="btn confirm">确认支付</div>
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
        return{
          orderList:[
            {
              productName:'文具',
              salePrice:12,
              productNum:2,
              checked:1
            },
            {
              productName:'文具',
              salePrice:12,
              productNum:2,
              checked:1
            }
          ],
          courier_fees:0,
          discount:0,

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
      computed:{
        subTotal(){
          var sub=0;
          this.orderList.forEach((item)=>{
            if(item.checked=='1'){
              sub+=item.productNum*item.salePrice
            }
          })

          return sub;
        }
      },
      methods:{
        init(){
          axios.get('api/users/carList').then((response)=>{
            var res=response.data;
            this.carList=res.result;
          })
        },
        payMent(){
          var addressId=this.$route.query.addressId;
          axios.post('api/users/payMent',{
            productList:this.orderList,
            addressId:addressId,
            orderTotal:this.total_price+this.courier_fees-this.discount,
            shipping:this.courier_fees,
            discount:this.discount
          }).then((response)=>{
            var res= response.data;
            if(res.status=='0'){
              this.$router.push({
                path:'/orederSuccess?orderId='+res.result
              })
            }
          })
        }
      }
    }
</script>

<style lang="less">
  .main{
    padding: 24px;
    background: #F5F7FC;
    li{
      list-style: none;
    }
    .main_content{
      width: 80%;
      margin: 0 auto;
    }
    .alltitle{
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
    }
    .Orderheader{
      width: 100%;
      margin: 0 auto;
    }

    /*单个物品*/
    tr{
      height: 80px;
      padding:10px 0;
    }
    .tb tr img{
      width: 48px;
      height: 48px;
      border: 1px solid rgba(0,0,0,.1);
      margin: 0 24px;
    }
    .item_name{
      vertical-align: middle;
      text-align: center;
      line-height: 48px;
    }
    /*表格*/
    .tb{
      width: 100%;
      margin: 0 auto;
      border: 1px solid rgba(0,0,0,.1);

    }
    .tb_header{
      width: 100%;
      height: auto ;
      margin: 0 auto;
    }
    .tb_header th{
      background: #605f61;
      color: white;
      line-height: 40px;
    }
    /*订单信息汇总*/
    .result{
      float: right;
      width: 240px;
      font-size: 14px;
    }
    .result ul li{
      text-align: left;
    }
    .result ul span{
      float: right;
      width:80px;
      color: black;
    }
    .result ul>li{
      margin: 12px;
      color: #c8c6cd;
    }
    #total_price{
      color: #d1434a;
    }
    /*清除浮动*/
    .clear {
      clear:both;
      height: 0;
      line-height: 0;
      font-size: 0;
    }
    /*按钮*/
    .btn_content{
      margin: 12px 0;
    }
    .btn{
      text-align: center;
      background: brown;
      width: 100px;
      height: 40px;
      color:white;
      line-height: 40px;
    }
    .previous{
      float: left;
    }
    .confirm{
      float: right;
    }
    .tbfirst{
      width: 5%;
    }
    .title{
      text-align: left;
    }
  }


</style>
