<template>
    <div class="orderheader">
      <ul class="process">
        <li>
          <span :class="{ad_pro_title_active:(level==1)}">确认地址</span>
          <div class="ad_line" :class="{ ad_line_active: (level==1)|(level==2)|(level==3) }">
            <div class="ad_cirle" :class="{ ad_cirle_active: (level==1)|(level==2)|(level==3) }"></div>
          </div>
        </li>
        <li>
          <span :class="{ad_pro_title_active:(level==2)}">查看订单</span>
          <div class="ad_line"  :class="{ad_line_active: (level==2)|(level==3) }">
            <div class="ad_cirle" :class="{ ad_cirle_active: (level==2)|(level==3) }"></div>
          </div>
        </li>
        <li>
          <span>支付</span>
          <div class="ad_line"  :class="{ ad_line_active: (level==3) }">
            <div class="ad_cirle " :class="{ ad_cirle_active: (level==3) }"></div>
          </div>
        </li>
        <li>
          <span :class="{ad_pro_title_active:(level==3)}">订单确认</span>
          <div class="ad_line" :class="{ ad_line_active: (level==3) }">
            <div class="ad_cirle" :class="{ ad_cirle_active: (level==3) }"></div>
          </div>
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
        data(){
          return{
            link:'',

          }

        },
      computed: {
        level:function () {
          this.link=this.$route.path;

          if(this.link=='/Address'){
            return 1;
          }
          else if(this.link=='/OrderConfirm'){
            return 2;
          }
          else if(this.link=='/OrderSuccess'){
            return 3;
          }
          else{
            return 1;
          }
        }
      }
    }
</script>

<style lang="less">
  .orderheader{
    margin:0 auto;
    .process{
      display: flex;
      width: 100%;
      margin: 0 auto;
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
  }

</style>
