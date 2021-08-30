<template>
  <div class="navbar">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navbar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #FF1493;
        color: white;
        justify-content: space-between;
    }

    .navbar .left,.right{
        width: 60px;
    }

    .center{
        display: flex;
    }
</style>