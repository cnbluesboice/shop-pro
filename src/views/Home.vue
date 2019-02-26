<template>
  <div class="home-container">
    <!-- 头部固定搜索框部分 -->
    <div class="header">
      <div class="left">
        <router-link to="/category">
          <van-icon class="category-icon" name="label-o"/>
        </router-link>
      </div>
      <div class="search">
        <input type="text">
        <van-icon name="search" class="search-icon"/>
      </div>
      <div class="right">
        <router-link to="signIn">登录</router-link>
      </div>
    </div>
    <!-- 轮播图部分 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>

    <!-- 商品分类列表 -->
    <ul class="indexCategories">
      <li v-for="(item, index) in indexCategories" :key="index">
        <router-link to="/">
          <img :src="item.img">
          <p>{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      page: 1,
      pageSize: 20,
      indexCategories: []
    };
  },
  created() {
    this.getSwiper();
    this.getGoodsSubCategories();
  },
  methods: {
    getSwiper() {
      this.$http.get("/home/getBanners").then(result => {
        // console.log(result.data);
        this.images = result.data;
      });
    },
    getGoodsSubCategories() {
      let { page, pageSize } = this;
      this.$http
        .get(`/goods/getGoodsSubCategories?page=${page}&pageSize=${pageSize}`)
        .then(result => {
          //   console.log(result.data.cates);
          this.indexCategories = result.data.cates;
          console.log(this.indexCategories, 111);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  position: relative;
  .header {
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 60px;
      height: 40px;
      text-align: center;
      line-height: 45px;
      .category-icon {
        font-size: 20px;
        color: #fff;
      }
    }
    .search {
      position: relative;
      width: 65%;
      height: 30px;
      input {
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 15px;
        padding-left: 35px;
        box-sizing: border-box;
        border: none;
        color: #666;
      }
      .search-icon {
        position: absolute;
        left: 10px;
        top: 7px;
        font-size: 20px;
        color: #ccc;
      }
    }
    .right {
      width: 60px;
      height: 40px;
      text-align: center;
      line-height: 45px;
      a{
          color: #fff;
      }
    }
  }
  .van-swipe {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .indexCategories {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    padding: 5px;
    li{
        width: 33%;
        text-align: center;
        margin: 10px 0;
        box-sizing: border-box;
        img{
            width: 50%;
        }
        p{
            color: #666;
            font-size: 14px;
        }
    }
  }
}
</style>
