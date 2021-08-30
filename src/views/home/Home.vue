<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <NavBar class="home-navbar">
      <template v-slot:center>
        <h4>购物街</h4>
      </template>
    </NavBar>
    <Scroll
      id="swip"
      @change_pos="change_pos"
      @loadMore="loadMore"
      ref="scroll"
    >
      <!-- 轮播图 -->
      <HomeSwiper :banners="banners"></HomeSwiper>
      <!-- 推荐模块 -->
      <Recommend :recommends="recommends"></Recommend>
      <!-- 本周流行 -->
      <FeatureView></FeatureView>
      <!-- tabControl商品风格 -->
      <TabControl
        :proStyle="[
          { ename: 'pop', name: '流行' },
          { ename: 'new', name: '新款' },
          { ename: 'sell', name: '精选' },
        ]"
        @changProStyle="changProStyle"
      >
      </TabControl>
      <!-- 商品列表数据 -->
      <GoodsList :goodslist="goods[currentProStyle].list"></GoodsList>
    </Scroll>
    <!-- 回到顶部 -->
    <BackTop v-show="isBackTopShow" @click="toBackTop"></BackTop>
  </div>
</template>

<script>
/* 公共部分 */
// 导入顶部导航栏
import NavBar from "components/common/navbar/NavBar";
// 导入轮播图
import HomeSwiper from "./childComps/HomeSwiper";
// 滚动条
import Scroll from "components/common/scroll/Scroll";

/* 网络请求部分 */
// 导入请求模块
import { getHomeMultidata, getProductByStyle } from "../../network/home";

/* home模块中的部分 */
// 轮播图下面的推荐模块
import Recommend from "./childComps/Recommend";
// 本周流行
import FeatureView from "./childComps/FeatureView.vue";
// 商品风格
import TabControl from "components/content/tabControl/TabControl";
// 商品风格数据展示
import GoodsList from "components/content/goods/GoodsList";
//
import BackTop from "components/content/backTop/BackTop";

export default {
  data() {
    return {
      banners: [], // 保存轮播图的数据
      recommends: [], // 保存推荐模块数据
      goods: {
        // 保存商品风格数据
        pop: { list: [], page: 0 },
        sell: { list: [], page: 0 },
        new: { list: [], page: 0 },
      },
      currentProStyle: "pop",
      isBackTopShow: false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // 获取轮播图和推荐模块
    this.getHomeMultidata();

    // 获取商品风格的数据
    this.getProductByStyle("pop");

    // this.$refs.scroll.scroll.refresh();
  },
  // 组件被销毁时执行
  unmounted() {
    // console.log("home被销毁");
  },
  methods: {
    /* 
      发送网络请求(获取首页数据)
    */
    // 1.获取轮播图和推荐模块数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // 保存轮播图数据
        this.banners = res.data.data.banner.list;
        // 保存推荐模块数据
        this.recommends = res.data.data.recommend.list;
      });
    },
    // 2.获取用户选择的商品风格(从子组件获得)
    changProStyle(proStyle) {
      this.currentProStyle = proStyle;
      this.getProductByStyle(proStyle); // 用户点击哪个风格就获取哪个风格的商品数据
    },
    // 3.根据商品风格获取商品数据
    getProductByStyle(style) {
      let page = this.goods[style].page; // 根据商品风格来获取其对应的页码
      // 根据商品风格和页码从后端获取数据
      getProductByStyle(style, page).then((res) => {
        let prodata = res.data.list[style]; // 获取对应数据
        // 将数据添加到对应的goods集合中
        this.goods[style].list.push(...prodata); // ...就代表for循环
        this.goods[style].page += 1;
      });
    },
    // 获取滑动的位置来显示和隐藏BackTop按钮
    change_pos(position) {
      this.isBackTopShow = position.y <= -1000 ? true : false;
    },
    // 上拉加载更多
    loadMore() {
      this.getProductByStyle(this.currentProStyle); // 用户点击哪个风格就获取哪个风格的商品数据
    },
    // 回到顶部
    toBackTop() {
      let chi_scroll = this.$refs.scroll.scroll;
      chi_scroll.scrollTo(0, 0, 500);
    },
  },
};
</script>

<style>
#home {
  padding-top: 44px;
  height: 100vh;
}

#swip {
  height: calc(100% - 98px); /* 除了顶部的导航栏和下方的tabBar */
  overflow: hidden;
}

.home-navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>