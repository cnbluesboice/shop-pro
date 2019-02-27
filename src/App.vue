<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:0
    }
  }
}
</script>

<style lang="less">
#app{
  padding-bottom: 50px;
  // position: relative;
}
</style>
