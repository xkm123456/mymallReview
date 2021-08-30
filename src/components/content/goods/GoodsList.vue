<template>
  <div class="goodslist">
      <GoodsListItem v-for="item in goodslist" :key="item.index" :goodsItem="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  props:{
    goodslist:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0px 2px;
  }
</style>