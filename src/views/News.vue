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
  </div>
</template>

<script>
export default {
  data() {
    return {
        newsCategory:[]
    }
  },
  created(){
      this.$http.get().then(result=>{
          console.log(result)
      })
  }
};
</script>

<style lang="less" scoped>

</style>
