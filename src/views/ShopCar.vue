<template>
  <div class="shop-car-container">
    <h1>shopCar</h1>

    <!-- 底部tabbar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="search" to="news">新闻</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="20" to="shopCar">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:3
    };
  }
};
</script>

<style lang="less" scoped>
</style>
