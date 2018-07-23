<template>
  <div class="buycar">
    <dl v-for="(item,index) in buycar" :key="item.id">
      <dt>标题:{{item.title}}/{{index}}</dt>
      <dd>描述:{{item.detail}}</dd>
      <dd>
        <input  type="button" value="+" @click="changeItem({id:item.id,num:1})">
        {{item.number}}
        <input  type="button" value="-" @click="changeItem({id:item.id,num:-1})">
      </dd>
      <dd><input  type="button" value="删除" @click="removeItem({id:item.id})"></dd>
    </dl>
    <input type="button" value="清空购物车" @click="clearBuycar">
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex';
  export default{
    computed:mapGetters([
      'buycar'
    ]),
    methods:mapActions([
      'changeItem','removeItem','clearBuycar'
    ])

  }
</script>
<style>
  .buycar{
    margin-top: 50px;
  }
</style>