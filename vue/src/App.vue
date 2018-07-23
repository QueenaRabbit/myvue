<template>
  <div id="app">
    <!--头部-->
    <navbar></navbar>
    <navbar v-show="bNav"></navbar>
    <loading v-show="bLoading"></loading>
    <transition
      enter-active-class="animated fadeIn"
    >
      <!--<keep-alive>-->
        <router-view></router-view>
      <!--</keep-alive>-->
    </transition>

    <!--尾部-->
    <footbar v-show="bFoot"></footbar>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue';
  import footbar from './components/footbar.vue';
  import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){
    console.log('app.vue is mounted');
    this.routeChange(this.$route);//刷新后，在mounted时，取到路由对象
  },
  components:{
    navbar,footbar
  },
  methods:{
    routeChange(route){
      console.log(route.path);//路由变化之后的路径
      let path=route.path;
      if(/home|follow|column/.test(path)){
        this.$store.dispatch('showNav');
        this.$store.dispatch('showNav');
        this.$store.dispatch('showFoot');
      }
      if(/login|reg|detail/.test(path)){
        this.$store.dispatch('hideNav');
        this.$store.dispatch('hideFoot');
      }
      if(/user/.test(path)){
        this.$store.dispatch('hideNav');
        this.$store.dispatch('showFoot');
      }
    }
  },
  computed:mapGetters([
    'bNav','bFoot','bLoading'
  ]),
  watch:{
    $route(route){//route==一路由信息对象
      this.routeChange(route)
    }
  }
}
</script>

<style>

  @import "./assets/css/index.css";

</style>
