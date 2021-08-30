<template>
  <div class="cartnavbar">
      <NavBar>
          <template v-slot:center>
              <h4>购物车({{cartProCount}})</h4>
          </template>
      </NavBar>
  </div>
</template>

<script>
// 导入navbar组件
import NavBar from 'components/common/navbar/NavBar'

export default {
    components:{
        NavBar
    },
    props:{
        cartProCount:0
    }
}
</script>

<style>

</style>