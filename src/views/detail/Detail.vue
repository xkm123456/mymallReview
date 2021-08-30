<template>
  <div id="detail">
    <DetailNavBar :title="['商品', '参数', '评论', '推荐']" @changeItem="changeItem"></DetailNavBar>
    <!-- <Scroll class="content"> -->
    <!-- 轮播图 -->
      <DetailSwiper :topImage="topImage"></DetailSwiper>
      
       <!-- <Swiper class="detail_swiper">
           <SwiperItem v-for="item in topImage" :key="item.index">
              <img :src="item" alt="">
          </SwiperItem>
       </Swiper> -->
      <!-- 商品详情信息显示 -->
      <DetailProductInfo :product="product"></DetailProductInfo>
      <!-- 店铺信息 -->
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <!-- <ul>
        <li>商品列表1</li>
        <li>商品列表2</li>
        <li>商品列表3</li>
        <li>商品列表4</li>
        <li>商品列表5</li>
        <li>商品列表6</li>
        <li>商品列表7</li>
        <li>商品列表8</li>
        <li>商品列表9</li>
        <li>商品列表10</li>
        <li>商品列表11</li>
        <li>商品列表12</li>
        <li>商品列表13</li>
        <li>商品列表14</li>
        <li>商品列表15</li>
        <li>商品列表16</li>
        <li>商品列表17</li>
        <li>商品列表18</li>
        <li>商品列表19</li>
        <li>商品列表20</li>
      </ul> -->
    <!-- </Scroll> -->
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <p>测试信息</p>
    <h1>参数</h1>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <p>参数测试信息</p>
    <h1>评论</h1>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <p>评论测试信息</p>
    <h1>推荐</h1>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <p>推荐测试信息</p>
    <DetailBottomBar @addProCart="addProCart"></DetailBottomBar>
  </div>
</template>

<script>
// 导入顶部导航栏
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
// 导入详情页轮播图
import DetailSwiper from './childComps/DetailSwiper'
import  {Swiper,SwiperItem} from 'components/common/swiper'
// 导入商品详情
import DetailProductInfo from './childComps/DetailProductInfo'
// 导入店铺详情
import DetailShopInfo from './childComps/DetailShopInfo'
// 导入底部导航栏
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import {getProDetailById,getShop,addProToCart} from '../../network/detail'

import Scroll from "components/common/scroll/Scroll"


export default {
    data(){
        return {
            pid:0,
            uid:1,
            topImage:[],
            product:null,
            shop:null
        }
    },
    created(){
        // console.log(this.$route.params.id);         // 获取动态路由传值过来的参数
        console.log(this.$route.query.id);       // 获取query传值过来的参数
        this.pid = this.$route.query.id;
        // 1.根据商品id获取对应商品信息
        this.getProDetailById(this.pid)

        // 2.获取店铺信息
        getShop().then(res => {
            console.log(res);
            this.shop = res.data[0];   // 获取店铺
        })
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        Swiper,
        SwiperItem,
        DetailProductInfo,
        DetailShopInfo,
        Scroll,
        DetailBottomBar
    },
    methods:{
        // 根据商品id获取商品
        getProDetailById(id){
            getProDetailById(id).then(res => {
                this.topImage.push(res.data.productImage);
                this.topImage.push('https://s5.mogucdn.com/mlcdn/c45406/200712_077iacd4gfk5269ecbk0f8aak5c6i_3800x5700.jpg');
                this.product = res.data;
            })
        },

        // 改变顶部导航栏选项
        changeItem(index){
            console.log(index);
        },

        addProCart(){
            // 当点击添加购物车后
            // 向后端发送请求，将商品添加到购物车中
            console.log(this.pid);
            addProToCart(this.uid,this.pid).then(res => {
                console.log(res);
            });   
        }
    }
}
</script>

<style>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail_swiper{
    height: 280px;
}
.content {
    background-color: #fff;
    height: calc(100vh - 44px);
}
</style>