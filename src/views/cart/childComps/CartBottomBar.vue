<template>
  <div class="cartBottomBar">
      <div class="cartBottomBar-left"></div>
      <div class="cartBottomBar-right">
          <div class="text">去结算({{}})</div> 
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
    .cartBottomBar{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 52px;
        height: 35px;
        box-shadow: 0px -2px 1px rgba(0, 0, 0, .1);
    }

    .cartBottomBar-left{
        flex: 1;
        width: 70%;
        max-width: 70%;
        background-color: #eee;
    }

    .cartBottomBar-right{
        flex: 1;
        width: 30%;
        max-width: 30%;
        background-color: #FF4401;
        text-align: center;
        line-height: 35px;
    }

    .text{
        color:white;
        font-size: 14px;
    }
</style>