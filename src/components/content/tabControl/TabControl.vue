<template>
  <div class="tabControl">
      <div class="tabControl-item" 
      v-for="(item, index) in proStyle" 
      :key="item.index" 
      @click="changeProStyle(index)">
          <span :class="{active:currentIndex === index}">{{item.name}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex:0
        }
    },
    props:{
        proStyle:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods:{
        changeProStyle(index){
            this.currentIndex = index;

            // 发送点击的商品风格给父组件
            this.$emit('changProStyle',this.proStyle[this.currentIndex].ename);
        }
    }
}
</script>

<style>
    .tabControl{
        display: flex;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-bottom: 14px;
        background-color: white;
        position: sticky;
        top: 44px;
    }

    .tabControl-item{
        flex: 1;
    }

    .tabControl-item span{
        padding: 6px;
    }

    .active{
        color: deeppink;
        border-bottom: 3px solid deeppink;
    }
</style>