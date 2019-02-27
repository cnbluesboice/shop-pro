<template>
  <div class="newsInfo-container">
    <!-- 头部 -->
    <van-nav-bar 
    :title="newsInfo.title" 
    left-text="返回" 
    left-arrow 
    @click-left="onClickLeft"/>
    
    <!-- 内容部分 -->
    <div class="newsContent" v-html="newsInfo.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsInfoId: this.$route.params.id,
      newsInfo: []
    };
  },
  created() {
    this.$http.get("/news/getNewsInfo/" + this.newsInfoId).then(result => {
      console.log(result);
      this.newsInfo = result.data;
    });
  },
  methods: {
    //   点击返回按钮
    onClickLeft() {
        this.$router.go(-1)
    }
  }
};
</script>
<style lang="less">
.newsInfo-container {
  .newsContent {
      padding: 10px;
    img {
      width: 100%;
    }
    p {
      font-size: 14px;
      text-indent: 2em;
      line-height: 30px;
      color: #666;
    }
    div {
      font-size: 14px;
      line-height: 25px;
      color: #666;
    }
  }
}
</style>
