<template>
  <div>
    <!-- 顶部导航栏 -->
    <CartNavBar :cartProCount="cartProCount"></CartNavBar>

    <!-- 购物车数据显示 -->


    <!-- 下方导航栏 -->
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
// 购物车顶部导航栏
import CartNavBar from './childComps/CartNavBar'
// 购物车底部工具栏
import CartBottomBar from './childComps/CartBottomBar'

import {ShowProCart} from '../../network/cart'

export default {
    data(){
      return {
        cartlist:[],
        cartProCount:0
      }
    }
    ,components:{
        CartNavBar,
        CartBottomBar
    },
    created(){
        ShowProCart(2).then(res => {
          this.cartProCount = res.data.data.length  // 获取商品数量
          
        })
    }
}
</script>

<style>

</style>