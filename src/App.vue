<template>
  <div>
    <router-view v-slot="{ Component }">
      <!-- 保持缓存 -->
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <!-- 不保持缓存 -->
      <component :is="Component" v-if="!$route.meta.keepAlive"/>
    </router-view>
    <!-- 底部导航栏 -->
    <TabBar>
      <TabBarItem path="/home">
        <template v-slot:tabbar-item-img>
          <img
            src="~assets/img/tabbar/icon01.png"
            alt=""
            slot="tabbaritem-img"
          />
        </template>
        <template v-slot:tabbar-item-img-active>
          <img
            src="~assets/img/tabbar/icon01_active.png"
            alt=""
            slot="tabbaritem-img"
          />
        </template>
        <template v-slot:tabbar-item-title>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category">
        <template v-slot:tabbar-item-img>
          <img
            src="~assets/img/tabbar/icon02.png"
            alt=""
            slot="tabbaritem-img"
          />
        </template>
        <template v-slot:tabbar-item-img-active>
          <img
            src="~assets/img/tabbar/icon02_active.png"
            alt=""
            slot="tabbaritem-img"
          />
        </template>
        <template v-slot:tabbar-item-title>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/cart">
        <template v-slot:tabbar-item-img>
          <img
            src="~assets/img/tabbar/icon03.png"
            alt=""
            slot="tabbaritem-img"
          />
        </template>
        <template v-slot:tabbar-item-img-active>
          <img
            src="~assets/img/tabbar/icon03_active.png"
            alt=""
            slot="tabbaritem-img"
          />
        </template>
        <template v-slot:tabbar-item-title>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/mine">
        <template v-slot:tabbar-item-img>
          <img
            src="~assets/img/tabbar/icon04.png"
            alt=""
            slot="tabbaritem-img"
          />
        </template>
        <template v-slot:tabbar-item-img-active>
          <img
            src="~assets/img/tabbar/icon04_active.png"
            alt=""
            slot="tabbaritem-img"
          />
        </template>
        <template v-slot:tabbar-item-title>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
/* 导入TabBar组件 */
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

import { request } from "./network/request";
import { getHomeData } from "./network/home";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>


<style>
/* 导入基本配置 */
@import "./assets/css/base.css";
</style>
