<template>
    <div>
        <h3>订单详情</h3>
      <div class="main_content">
        <table class="tb" cellspacing="0">
          <tr class="tb_header">
            <th colspan="2">商品</th>
            <th>价格</th>
            <th>数量</th>
            <th>总价</th>
          </tr>
          <tr>
          <td class="tbfirst">
            <img src="http://hotemotion.fun:3389/static/16.jpg" alt="">
          </td>
          <td class="title">
            x小米小爱音箱
          </td>
          <td>
            <span>￥149.00</span>
          </td>
          <td>
            <span>*5</span>
          </td>
          <td>
            <span>￥745.0</span>
          </td>
        </tr>
          <tr>
            <td class="tbfirst">
              <img src="http://hotemotion.fun:3389/static/16.jpg" alt="">
            </td>
            <td class="title">
              x小米小爱音箱
            </td>
            <td>
              <span>￥149.00</span>
            </td>
            <td>
              <span>*5</span>
            </td>
            <td>
              <span>￥745.0</span>
            </td>
          </tr>
          <tr>
            <td class="tbfirst">
              <img src="http://hotemotion.fun:3389/static/16.jpg" alt="">
            </td>
            <td class="title">
              x小米小爱音箱
            </td>
            <td>
              <span>￥149.00</span>
            </td>
            <td>
              <span>*5</span>
            </td>
            <td>
              <span>￥745.0</span>
            </td>
          </tr>
          <tr>
            <td class="tbfirst">
              <img src="http://hotemotion.fun:3389/static/16.jpg" alt="">
            </td>
            <td class="title">
              x小米小爱音箱
            </td>
            <td>
              <span>￥149.00</span>
            </td>
            <td>
              <span>*5</span>
            </td>
            <td>
              <span>￥745.0</span>
            </td>
          </tr>
          <tr>
            <td class="tbfirst">
              <img src="http://hotemotion.fun:3389/static/16.jpg" alt="">
            </td>
            <td class="title">
              x小米小爱音箱
            </td>
            <td>
              <span>￥149.00</span>
            </td>
            <td>
              <span>*5</span>
            </td>
            <td>
              <span>￥745.0</span>
            </td>
          </tr>
        </table>
        <div class="result">
          <ul>
            <li>
              商品总价:
              <span>￥4,679.00</span>
            </li>
            <li>
              快递费:
              <span>￥10.00</span>
            </li>
            <li>
              折扣:
              <span>￥200.00</span>
            </li>
            <li>
              合计:
              <span id="total_price">￥4,489.00</span>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="btn_content">
          <route-link to="/" class="btn previous">上一步</route-link>
          <route-link to="/" class="btn confirm">确认支付</route-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "OrderConfirm"
    }
</script>

<style scoped>
  li{
    list-style: none;
  }
  .main_content{
    width: 90%;
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

</style>
