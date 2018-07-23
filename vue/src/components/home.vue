<template>
  <div class="home">
    <!--banner-->
    <slider></slider>
    <!--home列表-->
    <div class="newsList">
      <ul>
          <!--:to="{name:'detail,params:{id:item.id}}"-->
        <transition-group
          enter-active-class="animated zoomInDown"
        >
          <li
            v-for="item in list"
            :key="item.id"
          >
            <router-link
              href="javascript:;"
              :to="'/detail/'+item.id"
            >
              <h2>{{item.id}}.{{item.title}}</h2>
              <p>{{item.detail}}</p>
            </router-link>
            <img src="src/assets/img/xing.png" @click="addItem(item)">
          </li>
        </transition-group>

      </ul>
    </div>
  </div>
</template>
<script>
  import slider from './slider.vue';
  import {mapActions} from 'vuex';
  export default{
    data(){
      return {
        list:[]
      }
    },
    components:{
      slider
    },
    mounted(){
//     console.log('home ajax');
//      this.$store.commit('SHOW_LOADING');//发给mutations了,不推荐
      this.$http({
      //  url:'/data/index.data',
        url:'http://localhost:3000/news',
        method:'get'
      }).then((res)=>{
        console.log(res);
        this.list=res.data;//可以丢到状态仓库里面
      }).catch((res)=>{
        console.log(res)
      })
    },
    methods:mapActions([
      'addItem'
    ])
  }
</script>