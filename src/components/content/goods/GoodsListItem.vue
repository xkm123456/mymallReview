<template>
  <div class="goodslist-item" @click="itemDetail(goodsItem.Id)">
    <img :src="goodsItem.productImage" alt="">
    <div class="goodslist-item-proname">{{goodsItem.productName}}</div>
    <div>
      <span class="goodslist-item-price">{{goodsPriceConversion}}</span>
      <i class="goodslist-item-icon">
      </i>
      <span>{{goodsItem.productFav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsItem:{
      type:Object,
      default:null
    }
  },
  computed:{
    // 将商品价格精确到小数点后2位
    goodsPriceConversion(){
      return this.goodsItem.price.toFixed(2);
    }
  },
  methods:{
    itemDetail(){
      // this.$router.push("/detail/" + this.goodsItem.id);    // 动态路由方式跳转传参
      // query传值
      this.$router.push({
        path:'/detail',
        query:{
          id:this.goodsItem.id
        }
      })
    }
  }
}
</script>

<style>
  .goodslist-item{
    width: 48%;
    min-width: 48%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 13px;
  }

  .goodslist-item img{
    width: 100%;
    border-radius: 6px;
  }

  .goodslist-item-proname{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 3px;
  }

  .goodslist-item-price{
    color: deeppink;

  }
  
  .goodslist-item-icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url('~assets/img/collect_icon.png');
    background-repeat: no-repeat;
    background-size: 14px;
    background-position: 3px 4px;
    padding: 0 2px;
  }
</style>