<template>
  <div class="foot-btn" >
    <ul>
      <li class="home"><router-link to="/home"></router-link></li>
      <li class="write"><router-link to="/buycar">{{buycar.length?buycar.length:'0'}}</router-link></li>
      <li class="my"><router-link to="/user"></router-link></li>
    </ul>
    {{show}}
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{
    data(){
      return {msg:'bmw'}
    },
    /* 
    computed:mapGetters([
      'buycar'
    ]) */
    computed:{
      show(){console.log(this.msg);return 'qq'},
      ...mapGetters([
        'buycar'
      ])
    }
  }
</script>
<style>
  .write a{
    text-align: center;
    line-height: 40px;
    color:red;
    font-size: 20px;
  }
</style>