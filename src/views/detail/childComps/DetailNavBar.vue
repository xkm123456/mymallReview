<template>
  <div>
      <NavBar class="detail_nav">
          <template v-slot:left>
               <img src="~assets/img/detail/返回.png" alt="" class="detail_back_icon" @click="back">
          </template>
          <template v-slot:center>
                <div v-for="(item,index) in title" 
                :key="item.index" 
                class="detail_title_item" 
                @click="chooseItem(index)" 
                :class="{title_active:currentIndex === index}">{{item}}</div>
          </template>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    data(){
        return {
            currentIndex:0
        }
    },
    props:{
        title:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    components:{
        NavBar
    },
    methods:{
        back(){
            this.$router.back();
        },
        chooseItem(index){
            this.currentIndex = index
            this.$emit('changeItem',index)
        }
    }
}
</script>

<style>
    .detail_nav{
        position: fixed;
        left: 0;
        right: 0;
        z-index: 9;
        background-color: #fff;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
        color: black;
    }

    .detail_title_item{
        flex: 1;
        width: 40px;
        max-width: 40px;
    }

    .title_active{
        color: deeppink;
    }

    .detail_back_icon{
        width: 30px;
        margin-top: 6px;
    }
</style>