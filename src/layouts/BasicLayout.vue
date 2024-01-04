<template>
  <van-sticky>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </van-sticky>
  <div class="content">
    <router-view/>
  </div>
  <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o">home</van-tabbar-item>
    <van-tabbar-item to="/about" icon="search">about</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
</script>

<style scoped>

</style>
