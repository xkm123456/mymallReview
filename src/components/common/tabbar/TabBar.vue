<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style>
#tabbar{
    display: flex;
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    background-color: white;
    box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.2);
  }
</style>