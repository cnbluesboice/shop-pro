import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 将api里面的index.js引入
import "./api/index"

// 引入初始化css
import './assets/base.css'

// 引入vant-ui
import Vant from 'vant';
import 'vant/lib/index.css';

// // 注册全局tabbar组件
// import TabBarComponent from "./components/tabBar"
// Vue.component("tabBar",TabBarComponent)

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
