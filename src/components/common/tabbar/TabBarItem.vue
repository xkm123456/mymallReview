<template>
  <div class="tabbar-item" @click="change_path">
    <div v-if="isActive"><slot name="tabbar-item-img-active"></slot></div>
    <div v-else><slot name="tabbar-item-img"></slot></div>
    <div :class="{activeTitle:isActive}"><slot name="tabbar-item-title"></slot></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props:{
    // 接收父组件发送过来的路由值
    path:{
      type:String
    }
  },
  methods:{
    change_path(){
      this.$router.replace(this.path);
    }
  },
  computed:{
    isActive(){
      // 判断当前活跃的路由是否和父组件传入的路由相同
      return this.$route.path == this.path;
    }
  }
}
</script>

<style>
  .tabbar-item{
    flex: 1;
    text-align: center;
    font-size: 13px;
    vertical-align: middle;
  }

  .tabbar-item img{
    width: 32px;
    height: 32px;
    margin-bottom: -1px;
  }

  .activeTitle{
    color: #FF1493;
  }
</style>