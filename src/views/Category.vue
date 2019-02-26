<template>
  <div class="category-container">
    <!-- tab栏 -->
    <!-- 在循环的父盒子上面绑定方法，点击时可以将索引和title传入 -->
    <van-tabs v-model="active" @click="getSubGoodsCategories">
      <van-tab
        v-for="(item, index) in goodsCategories"
        :key="index"
        :title="item.name"
        @click="getSubCategories(item.id)"
      ></van-tab>
    </van-tabs>
    <ul class="subCategories">
      <li v-for="(item, index) in subCategory" :key="index">
        <router-link to="/">
          <img :src="item.img" alt>
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
      active: 0,
      goodsCategories: [],
      subCategory: []
    };
  },
  created() {
    //   进入页面获取分类
    this.$http.get("/goods/getGoodsCategories").then(result => {
      //   console.log(result.data);
      this.goodsCategories = result.data;
    });

    // 进入页面默认显示第一个分类的子分类
    this.$http.get("/goods/getGoodsSubCategories/1").then(result => {
      console.log(result.data);
      this.subCategory = result.data;
    });
  },
  methods: {
    //  点击tab栏获取所有二级分类
    getSubGoodsCategories(index, title) {
      let subCategoryId = this.goodsCategories[index]["id"];
      //   console.log(subCategoryId);
      this.$http
        .get("/goods/getGoodsSubCategories/" + subCategoryId)
        .then(result => {
          //   console.log(result.data);
          this.subCategory = result.data;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.category-container {
    padding-bottom: 20px;
  .subCategories {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px;
    li {
      width: 50%;
      text-align: center;
      margin: 10px 0;
      a {
        display: inline-block;
        box-shadow: 0 0 3px 1px #ccc;
        padding: 15px 0;
      }
      img {
        width: 80%;
      }
      p {
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>
