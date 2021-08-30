<template>
  <div class="detailshop">
    <!-- 店铺，名称与logo -->
    <div class="shoptl">
      <span class="shoplogo">
        <img :src="shop.shopLogo" alt="" />
      </span>
      <span class="shopname">芜湖</span>
    </div>
    <!-- 店铺的详情信息 -->
    <div class="shopinfo">
      <!-- 销量和商品数 -->
      <span class="shopsalepro">
        <span class="shopsalepro_sale acblod">
          <div class="acbold">{{ shopmale }}</div>
          <div>总销量</div>
        </span>
        <span class="shopsalepro_pro">
          <div class="acbold">{{ shop.shopGoodsCount }}</div>
          <div>全部宝贝</div>
        </span>
      </span>
      <!-- 店铺评分 -->
      <span class="shopmark">
        <span>店铺评分</span>
        <span style="color: red" v-show="isAceShop">{{ shop.shopScore }}</span>
        <span style="color: green" v-show="!isAceShop">{{
          shop.shopScore
        }}</span>
        <span style="color: white; background-color: red" v-show="isAceShop"
          >高</span
        >
        <span style="color: white; background-color: green" v-show="!isAceShop"
          >低</span
        >
      </span>
    </div>
    <!-- 进店逛逛 -->
    <a href="#" class="shopinto">
      进店逛逛
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAceShop: false,
    };
  },
  props: {
    shop: {
      type: Object,
      default: null,
    },
  },
  created() {
    if(this.shop.shopScore != null){
      this.isAceShop = this.shop.shopScore >= 5 ? true : false;
    }
  },
  computed: {
    shopmale() {
      return this.shop.shopSells >= 10000
        ? (this.shop.shopSells / 10000).toFixed(2) + "万"
        : (this.shop.shopSells / 10000).toFixed(2);
    },
  },
};
</script>

<style>
.detailshop {
  padding: 10px;
  height: 400px;
  font-size: 13px;
  border-bottom: 2px solid red;
}

.shoptl {
  margin-top: 20px;
}

.shoplogo {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
}
.shoplogo img {
  width: 100%;
  height: 100%;
}

.shopname {
  margin-left: 10px;
}

.shopinfo {
  margin-top: 5px;
  height: 130px;
}

.shopsalepro {
  display: inline-block;
  width: 45%;
  height: 50px;
  margin-top: 40px;
  text-align: center;
  line-height: 25px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 20px;
  vertical-align: top;
}
.shopsalepro span {
  display: inline-block;
  width: 50%;
  height: 50px;
}

.shopmark {
  display: inline-block;
  width: 48%;
  height: 100%;
  text-align: center;
  line-height: 130px;
}

.shopmark span {
  margin-left: 10px;
}

.acbold {
  font-size: 17px;
  font-weight: bold;
}

.shopinto {
  display: block;
  width: 140px;
  height: 40px;
  margin: 0px auto;
  text-align: center;
  line-height: 40px;
  background-color: #f1f5f9;
  border-radius: 8px;
}
</style>