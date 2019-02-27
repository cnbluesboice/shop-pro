<template>
  <div class="goods-list-container">
    <!-- 头部 -->
    <van-nav-bar 
    :title="goodsInfo.name" 
    left-text="返回" 
    left-arrow 
    @click-left="onClickLeft"/>
  
    <!-- 商品详情内容 -->
    <div class="content">
        <div class="imgBox">
            <img :src="img">
            <div class="title">商品名称：{{goodsInfo.name}}</div>
            <p>商品价格：<span class="price">{{goodsInfo.price}}</span></p>
            <div class="num">
                <span>商品数量：</span>
                <input type="button" value="-">
                <input type="text" v-model="number">
                <input type="button" value="+">
            </div>
            <div class="desc">商品描述：{{goodsInfo.description}}</div>
        </div>
        <div class="content-desc" v-html="goodsInfo.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsId: this.$route.params.id,
      goodsInfo:[],
      img:"",
      number:1
    };
  },
  created() {
    this.$http.get("/goods/getGoodsInfo/"+this.goodsId).then(result=>{
        console.log(result.data)
        this.goodsInfo=result.data
        this.img=result.data.big_img[0]
    })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    
  }
};
</script>
<style lang="less">
.goods-list-container{
    .content{
        
        box-sizing: border-box;
        .imgBox{
            padding: 5px;
            img{
                width: 100%;
            }
            .title{
                font-size: 16px;
            }
            .price{
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
            .num{
                input{
                    width: 30px;
                    height: 30px;
                    background-color: transparent;
                    border: none;
                    border: 1px solid #666;
                    margin: 2px;
                    text-align: center;
                    font-size: 14px;
                }
            }
        }
        .content-desc{
            img{
                width: 100%;
            }
        }
    }
}

</style>
