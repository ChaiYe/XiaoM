<template>
    <div>
      <ul class="process">
        <li>
          <span class="ad_pro_title_active">确认地址</span>
          <div class="ad_line ad_line_active">
            <div class="ad_cirle ad_cirle_active"></div>
          </div>
        </li>
        <li>
          <span>查看订单</span>
          <div class="ad_line">
            <div class="ad_cirle"></div>
          </div>
        </li>
        <li>
          <span>支付</span>
          <div class="ad_line">
            <div class="ad_cirle "></div>
          </div>
        </li>
        <li>
          <span>订单确认</span>
          <div class="ad_line">
            <div class="ad_cirle"></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Orderheader"
    }
</script>

<style scoped>
  .process{
    display: flex;
    width: 100%;
    z-index: 1;
  }
  .process li{
    width: 305px;
    padding: 40px 0;
    text-align: center;
    color: #CAC8CE;
  }
  .ad_line{
    position: relative;
    width: 305px;
    height: 2px;
    margin-top: 20px;
    background-color: #CAC8CE;
  }
  .ad_cirle{
    position: absolute;
    left: 147px;
    top: -6px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #CAC8CE;
  }
  .ad_line_active,.ad_cirle_active{
    background-color: #d1434a;
  }
  .process .ad_pro_title_active{
    color: #d1434a;
  }
  .process_active li{
    color: #d1434a;
  }
</style>
