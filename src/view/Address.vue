<template>

    <div>
      <XmHead></XmHead>
      <XmCrunmbs></XmCrunmbs>

      <div class="ad_main">
        <div class="ad_main_content">
          <Orderheader></Orderheader>
          <!--<ul class="process">
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
          </ul>-->

          <div class="ad_content">
            <h3 class="ad_title">收货地址</h3>
            <ul class="ad_items">
              <li  v-for="(item,index) in addrListFilter" :class="{'li_active':activeIndex==index}" @click="activeIndex=index;selectedId=item.Id">
                <h3 class="ad_name">{{item.Name}}</h3>
                <p class="ad_address">{{item.Address}}</p>
                <p class="ad_tel">{{item.Tel}}</p>
                <div>
                  <h5 class="ad_default" v-show="item.isDefault">默认地址</h5>
                  <h5 class="ad_default set_default" v-show="!item.isDefault" @click="setDefalt(item.Id)">设为默认地址</h5>
                  <span @click="itemId=item.Id;delConfirm=true">&#xe613;</span>
                </div>
              </li>
              <li class="ad_addAdr">
                <span>+</span>
                <p>添加新地址</p>
              </li>
            </ul>
          </div>
          <div class="ad_more" @click="expand " :class="{'ad_more_expand':limit>3}">more<span>&#xe60c;</span></div>
          <div class="ad_next">
            <router-link class="ad_next_a" :to="{path:'orderConfirm',query:{addressId:selectedId}}">下一步</router-link>
          </div>
        </div>
      </div>
     <!-- <modal v-show="delConfirm" @close="delConfirm=false">
        <div slot="message" class="confirm_tip" >
          <p style="margin-left: 123px">您确认删除此地址吗？</p>
        </div>
        <div slot="btnGroup" >
          <button class="md_btn" @click="addrDel">确认</button>
          <button class="md_btn" @click="delConfirm=false" style="margin-left: 20px">关闭</button>
        </div>
      </modal>-->
      <XmFoot></XmFoot>
    </div>


</template>

<script>
  import XmCrunmbs from '../components/common/XmCrumbs.vue'
  import XmHead from '../components/common/XmHead.vue'
  import XmFoot from '../components/common/XmFoot.vue'
  import  Orderheader from '../components/common/Orderheader'
  export default {
    components: {
      XmCrunmbs,
      XmHead,
      Orderheader,
      XmFoot

    },
  }
</script>

<style scoped>
  h1,h2,h3,h4,h5,h6{
    margin: 0;
  }
  .ad_main{
    width: 100%;
    height: auto;
    background-color: #F5F7FC;
  }
  .ad_main_content{
    width: 1220px;
    height: auto;
    margin: 0 auto;
    padding: 0 20px;
  }
  .process{
    display: flex;
    width: 100%;
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
  .ad_content{
    width: 1260px;
    height: auto;
  }
  .ad_title{

  }
  .ad_items{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  .ad_items li{
    width: 290px;
    height: 180px;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    background-color: white;
    border: 2px solid #EFEDF4;
    cursor: pointer;
  }
  .ad_items .li_active,.ad_items li:hover{
    border: 2px solid #ee7a23;
  }
  .ad_items div{

  }
  .ad_items div span{
    font-family: 'iconfont';
    cursor: pointer;
    float: right;
  }
  .ad_address,.ad_tel,.ad_items div{
    margin-top: 15px;
  }
  .ad_items div span:hover,.ad_default{
    color: #ee7a23;
  }
  .ad_default{
    float: left;
  }
  .set_default{
    display: none;
  }
  .ad_items li:hover .set_default{
    display: block;
  }
  .set_default:hover{
    color: #d1434a;
  }
  .ad_items .ad_addAdr{
    text-align: center;
  }
  .ad_items .ad_addAdr span{
    font-size: 60px;
    cursor: pointer;
  }
  .ad_items .ad_addAdr span:hover{
    color: #ee7a23;
  }
  .ad_more{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: #ee7a23;
    cursor: pointer;
  }
  .ad_more span{
    font-family: iconfont;
    display: block;
    transition: all .5s;
  }
  .ad_more_expand span{
    transform: rotate(180deg);
  }
  .ad_next{
    float: right;
    width: 100px;
    height: 40px;
    background-color: #d1434a;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  .ad_next_a{
    color: white;
  }
</style>
