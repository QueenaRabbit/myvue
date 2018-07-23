<template>
  <!--<div class="banner">
    <ul class="clearfix">
      <router-link to="/detail/1?a=1&b=2" tag="li">
        <img src="src/assets/images/img_1.jpg" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房11111</h2>
          <p>刘德华11 / 文</p>
        </div>
      </router-link>
      <router-link to="/detail/2?a=3&b=4" tag="li">
        <img src="src/assets/images/img_2.jpg" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房22</h2>
          <p>刘德华22 / 文</p>
        </div>
      </router-link>
    </ul>

  </div>-->
  <swipe class="my-swipe" :speed="100" :showIndicators="true">
    <swipe-item :class="'slide'+val" v-for="val in 3" :key="val">
      <router-link to="/detail/1?a=1&b=2" tag="li">
        <img src="src/assets/images/img_1.jpg" height="200" alt=""/>
        <div class="text-box">
          <h2>还可以降低首付款健身房11111</h2>
          <p>刘德华11 / 文</p>
        </div>
      </router-link>
    </swipe-item>
  </swipe>
</template>
<script>
//  import $ from 'jquery';
//  import Swipe from 'swipe'; //模块化引入 npm安装后的模块，支持模块化的
//  import Swipe from '../assets/js/swipe'; //引入src(cdn)js，不支持模块化，需要模块化
  import 'vue-swipe/dist/vue-swipe.css';
  import { Swipe, SwipeItem } from 'vue-swipe';
  export default{
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }/*,
    mounted(){
      console.log('slider.....')
      var mySwipe=new Swipe($('.banner')[0],{
        auto:2000,
        continuous:true,
        stopPropation:true,
        callback:function (index,element){
          $('.banner ol li').removeClass('active');
          $('.banner ol li').eq(index).addClass('active');
        }
      })
    }*/
  }
</script>
<style>
  .my-swipe {
    margin-top: 48px;
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
 /* .mint-swipe-items-wrap div{
    float: left;
  }*/
  .slide1 {
    height:inherit;
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    height:inherit;
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    height:inherit;
    background-color: #ff2d4b;
    color: #fff;
  }
</style>