<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// better-scroll
import BScroll from "@better-scroll/core";
// pullup上拉加载插件
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  data(){
    return {
      scroll:null
    }
  },
  updated() {
    this.scroll = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true, // 是否开启上拉刷新
      click:true
    });

    // 监听滚动事件 
    this.scroll.on("scroll", (position) => {
      this.$emit("change_pos", position);
    });

    // 监听上拉刷新事件
    this.scroll.on("pullingUp", () => {
      // 触发了上拉加载事件
      this.$emit("loadMore");

      // 结束上拉加载行为
      this.scroll.finishPullUp();

      setTimeout(() => {
        this.scroll.refresh();
        }, 100);
      
    });
  },
};
</script>

<style>
</style>