<template>
  <div class="detailbottombar">
    <div class="detailbottombar-left">
      <div>
        <i class="icon serve"></i>
        <div class="text">客服</div>
      </div>
      <div>
        <i class="icon shop"></i>
        <div class="text">店铺</div>
      </div>
      <div>
        <i class="icon fav"></i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="detailbottombar-right">
      <div class="joincart" @click="addProCart">加入购物车</div>
      <div class="sell">购买</div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        addProCart(){
            this.$emit("addProCart")
        }
    }
};
</script>

<style>
.detailbottombar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 49px;
  background-color: #fff;
  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.1);
}

.detailbottombar-left{
    flex: 1;
    display: flex;
}
.detailbottombar-left>div,.detailbottombar-right>div{
    flex:1;
}

.detailbottombar-right{
    flex: 1;
    display: flex;
    line-height: 49px;
}

.detailbottombar > div {
  flex: 1;
  text-align: center;
}

.detailbottombar .icon {
  display: inline-block;
  width: 22px;
  height: 22px;
  vertical-align: top;
  margin-top: 5px;
}

.serve {
  background-image: url("~assets/img/detail/icon01.png");
  background-size: 22px;
}

.shop {
  background-image: url("~assets/img/detail/icon02.png");
  background-size: 22px;
}

.fav {
  background-image: url("~assets/img/detail/icon03.png");
  background-size: 22px;
}

.joincart{
    
    background-color: #FFE513;
}

.sell{
    background-color: #FF669A;
    color: white;
}
.text {
  font-size: 13px;
  margin-top: 4px;
}
</style>