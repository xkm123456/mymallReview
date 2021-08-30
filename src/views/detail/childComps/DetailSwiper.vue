<template>
  <div>
      <Swiper class="detail_swiper">
          <SwiperItem v-for="item in topImage" :key="item.index">
              <img :src="item" alt="">
          </SwiperItem>
      </Swiper>
  </div>
</template>

<script>
import  {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImage:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style>
    .detail_swiper{
        padding-top: 44px;
        height: 280px;
    }
</style>