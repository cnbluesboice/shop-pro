<template>
  <div class="goods-list-container">
    <!-- 头部 -->
    <van-nav-bar :title="$route.query.title" left-text="返回" left-arrow @click-left="onClickLeft"/>
  
  <!-- 商品列表页面 -->
  <ul class="goodsList">
      <li v-for="(item, index) in goodsList" :key="index" @click="goGoodsInfo(item.id)">
          <div class="imgBox">
              <img :src="item.cover_img" alt="">
          </div>
          <div class="goodsInfo">
              <div class="title">{{item.name}}</div>
              <div class="desc">市场价：{{item.price}}</div>
          </div>
      </li>
  </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cateId: this.$route.query.id,
      page: 1,
      pageSize: 300,
      goodsList:[]
    };
  },
  created() {
      this.getGoodsList()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getGoodsList() {
      let { cateId, page, pageSize } = this;
      this.$http
        .get("/goods/getGoodsList", { params: { cateId,page,pageSize } })
        .then(result => {
          console.log(result.data.goods);
            this.goodsList=result.data.goods
        });
    },
    goGoodsInfo(id){
        this.$router.push("/goodsInfo/"+id)
    }
  }
};
</script>
<style lang="less" scoped>
.goods-list-container{
    .goodsList{
        padding: 5px 10px;
        li{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 10px 0;
            padding: 10px 0;
            box-sizing: border-box;
            box-shadow: 0 0 2px 1px #ccc;
            .imgBox{
                width: 100px;
                padding: 10px;
                box-sizing: border-box;
                img{
                    width: 100%;
                }
            }
            .goodsInfo{
                // display: flex;
                // flex-direction: column;
                // justify-content: space-around;
                padding:0 10px;
                box-sizing: border-box;
                font-size: 14px;
            }
        }
    }
}
</style>
