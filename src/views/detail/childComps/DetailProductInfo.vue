<template>
  <div class="detailProdcutInfoBox">
    <div class="detailProdcutInfo">
      <div>
          <!-- 商品标题 -->
        <h4>{{product.productName}}</h4>
      </div>
      <!-- 商品价格 -->
      <div class="productPricebox">
          <!-- 商品价格 -->
        <span class="productPrice">&yen;{{ product.price}}</span>
        <span class="orgPrice">
            <del>
            &yen;{{ converOrgPrice }}
            </del>
        </span>
        <span class="avtivityprice">活动价</span>
      </div>
      <!-- 商品销量，收藏数 -->
      <div class="productOhter">
          <div class="productOhterLeft">销量{{product.saleTimes}}</div>
          <div>收藏{{product.productFav}}人</div>
          <div class="productOhterRight">72小时发货</div>
      </div>
    </div>
    <!-- 售后 -->
      <div class="productASale">
          <div>
              <i class="productASaleIcon"><img src="~assets/img/完成.png" alt=""></i>
              退货补运费
          </div>
          <div><i class="productASaleIcon"><img src="~assets/img/完成.png" alt=""></i>全国包邮</div>
          <div><i class="productASaleIcon"><img src="~assets/img/完成.png" alt=""></i>7天无理由退货</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  computed:{
      converOrgPrice(){
          return this.product.orgPrice.toFixed(2);
      }
  }
};
</script>

<style>
.detailProdcutInfoBox {
  padding: 7px;
  height: 190px;
  border-bottom: 6px solid #eeee;
}

.detailProdcutInfo{
  position: relative;
  height: 140px;
  border-bottom: 1px solid #eeee;
}

.productPricebox{
    position: relative;
    margin-top: 5px;
}

.productPrice{
    color: #F96B7D;
    font-size: 23px;
}

.orgPrice{
    margin-left: 4px;
}

.avtivityprice{
    position: absolute;
    display: inline-block;
    padding: 3px;
    background-color: #F96B7D;
    color: white;
    font-size: 12px;
    border-radius: 8px;
    margin-left: 7px;
}

.productOhter{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    height: 30px;
    line-height: 30px;
    margin-top: 40px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
}

.productOhter div{
    flex: 1;
}

.productOhterLeft{
    text-align: left;
}

.productOhterRight{
    text-align: right;
}

.productASale{
    display: flex;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    text-align: center;
}

.productASale div{
    flex: 1;
}

.productASaleIcon img{
    width: 20px;
    vertical-align: middle;
}

</style>