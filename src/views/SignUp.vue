<template>
  <div class="signIn-container">
    <!-- 头部 -->
    <van-nav-bar title="个人中心"/>

    <!-- 表单部分 -->
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名"/>
      <van-field v-model="nickname" required clearable label="昵称" placeholder="请输入昵称"/>
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
      <van-field v-model="mobile" label="手机号码" placeholder="请输入手机号码" required/>
      <van-field v-model="vCode" label="验证码" placeholder="请输入验证码" @keyup.native.enter="signUp"/>
    </van-cell-group>
    <!-- 验证码svg -->
    <div class="svg" v-html="vCodeSvg" @click="getVCode"></div>
    <div class="button">
      <van-button type="info" size="large" class="logIn" @click="signUp">注册</van-button>
      <router-link to="/signIn">已有账号？去登录！</router-link>
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
      username: "",
      nickname: "",
      password: "",
      mobile: "",
      vCode: "",
      vCodeSvg: ""
    };
  },
  created() {
    this.getVCode();
  },
  methods: {
    getVCode() {
      this.$http.get("/users/getVCode").then(result => {
        // console.log(result);
        this.vCodeSvg = result;
      });
    },
    signUp() {
      let { username, nickname, password, mobile, vCode } = this;
      if (
        !username.trim() ||
        !nickname.trim() ||
        !password.trim() ||
        !mobile.trim() ||
        !vCode.trim()
      ) {
        return this.$toast("请检查输入是否为空!");
      }
      this.$http
        .post("/users/register", {
          username,
          nickname,
          password,
          mobile,
          vCode
        })
        .then(result => {
          // console.log(result)
          if (result.status === 200) {
            this.$toast.success(result.succMsg)
            localStorage.setItem("token", result.data.token)
            localStorage.setItem("userInfo", JSON.stringify(result.data))
            // 注册成功后跳转到首页
            this.$router.push("/mine")
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.signIn-container {
  .button {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    .logIn {
      margin: 10px 0;
    }
  }
  .svg {
    margin: 5px 0;
  }
}
</style>
