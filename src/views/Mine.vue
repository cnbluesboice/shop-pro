<template>
  <div class="mine-container">
    <!-- 头部 -->
    <van-nav-bar title="个人中心"/>

    <!-- 子路由 -->
    <router-view></router-view>

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
      active:4
    };
  }
};
</script>

<style lang="less" scoped>
</style>
