<template>
  <div class="signIn-container">
    <!-- 头部 -->
    <van-nav-bar title="个人中心"/>

    <!-- 表单部分 -->
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入用户名')"
      />

      <van-field v-model="password" @keyup.native.enter="signIn" type="password" label="密码" placeholder="请输入密码" required/>
    </van-cell-group>
    <div class="button">
      <van-button type="info" size="large" class="logIn" @click="signIn">登录</van-button>
      <router-link to="/signUp">没有注册？去注册</router-link>
    </div>

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
      active: 4,
      username:"",
      password:""
    }
  },
  methods:{
    signIn(){
      let {username,password}=this
      if(!username.trim() || !password.trim()){
        return  this.$toast('输入内容为空！')
      }
      this.$http.post("/users/login",{username,password}).then(result=>{
        if(result.status===200){
          this.$toast.success(result.succMsg)
          localStorage.setItem("token",result.data.token)
          localStorage.setItem("userInfo",JSON.stringify(result.data))
          // 登录成功后跳转到首页
          this.$router.push("/")
        }
      })
    }
  }
};
</script>
<style lang="less" scoped>
.signIn-container {
  .button{
    display: flex;
     flex-wrap: wrap;
     padding: 0 10px;
     .logIn{
       margin: 10px 0;
     }
  }
}
</style>
