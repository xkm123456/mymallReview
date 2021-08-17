<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends" :key="item.index">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div class="title">{{item.title}}</div>
          </a>
       </div>
  </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style>
    .recommend{
        display: flex;
        margin-top: 10px;
        padding-bottom: 28px;
        border-bottom: 10px solid #eeee;
    }
    
    .recommend-item{
        flex: 1;
        font-size: 14px;
        text-align: center;
    }

    .recommend-item img{
        width: 73px;
        margin-bottom: 5px;
    }
</style>