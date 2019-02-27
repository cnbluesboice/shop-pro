<template>
  <div class="news-container">
    <van-tabs v-model="active" @click="getSubNewsCategories">
      <van-tab
        v-for="(item, index) in newsCategory"
        :key="index"
        :title="item.name"
        @click="getSubCategories(item.id)"
      ></van-tab>
    </van-tabs>
    <ul class="news-list">
      <li v-for="(item, index) in subNewsCategories" :key="index" @click="goNewsInfo(item.id)">
        <div class="icon">
          <img :src="item.icon">
        </div>
        <div class="content">
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
            <span>发表时间:{{item.ctime}}</span>
            <span>点击次数:{{item.views}}</span>
          </div>
        </div>
      </li>
    </ul>

    <!-- tabbar部分 -->
    <tabBar></tabBar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      newsCategory: [],
      subNewsCategories: [],
      keys: ""
    };
  },
  created() {
    this.$http.get("/news/getNewsCategories").then(result => {
      //   console.log(result.data)
      this.newsCategory = result.data;
    });

    // 进入页面默认加载精选
    this.$http
      .get("/news/getNewsList", { params: { id: 1, page: 1, pageSize: 100 } })
      .then(result => {
        //   console.log(result.data.news,newsCateId);
        this.subNewsCategories = result.data.news;
      });
  },
  methods: {
    getSubNewsCategories(index, title) {
      let newsCateId = this.newsCategory[index].id;
      console.log(newsCateId);
      let paramsInfo = {
        keys: this.keys,
        id: newsCateId,
        page: 1,
        pageSize: 200
      };
      this.$http
        .get("/news/getNewsList", { params: paramsInfo })
        .then(result => {
          //   console.log(result.data.news,newsCateId);
          this.subNewsCategories = result.data.news.splice(newsCateId + 10, 50);
        });
    },
    goNewsInfo(id){
        this.$router.push("/newsInfo/"+id)
    }
  }

};
</script>

<style lang="less">
.news-container {
  //   position: relative;
  .van-tabs {
    // position: absolute;
    // left: 0;
    // top: 0;
    // z-index: 999;
    // overflow: hidden;
  }
  .news-list {
    width: 100%;
    margin-top: 5px;
    li {
      width: 100%;
      display: flex;
      width: 100%;
      border-bottom: 1px solid #ddd;
      margin-bottom: 5px;
      box-sizing: border-box;
      padding: 0 5px;
      .icon {
        width: 100px;
        height: 100%;
        img {
          width: 100px;
          height: 100%;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
        .title {
          font-size: 14px;
        }
        .info {
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
