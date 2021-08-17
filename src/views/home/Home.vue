<template>
  <div>
    <!-- 顶部导航栏 -->
    <NavBar>
      <template v-slot:center>
        <h4>购物街</h4>
      </template>
    </NavBar>
    <!-- 轮播图 -->
    <HomeSwiper :banners="banners"></HomeSwiper>
    <!-- 推荐模块 -->
    <Recommend :recommends="recommends"></Recommend>
    <FeatureView></FeatureView>
  </div>
</template>

<script>
/* 公共部分 */
// 导入顶部导航栏
import NavBar from "components/common/navbar/NavBar";
// 导入轮播图
import HomeSwiper from './childComps/HomeSwiper'

/* 网络请求部分 */
// 导入请求模块
import { getHomeMultidata } from "../../network/home";

/* 模块中的部分 */
// 轮播图下面的推荐模块
import Recommend from './childComps/Recommend'
// 本周流行
import FeatureView from './childComps/FeatureView.vue'

export default {
  data() {
    return {
      banners: [],    // 保存轮播图的数据
      recommends: [],   // 保存推荐模块数据
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView
  },
  created() {
    this.getHomeMultidata();
  },
  methods: {
    /* 
      发送网络请求(获取首页数据)
    */
   // 1.获取轮播图和推荐模块数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        // 保存轮播图数据
        this.banners = res.data.data.banner.list;
        // 保存推荐模块数据
        this.recommends = res.data.data.recommend.list;
        console.log(res.data.data.recommend.list);
        // console.log(this.banners);
      });
    },
  },
};
</script>

<style>
</style>