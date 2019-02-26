import Vue from 'vue'
import Router from 'vue-router'
import SignInComponent from "./views/SignIn"
import SignUpComponent from "./views/SignUp"
import HomeComponent from "./views/Home"
import CategoryComponent from "./views/Category"
import NewsComponent from "./views/News"
import ShopCarComponent from "./views/ShopCar"
import MineComponent from "./views/Mine"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path: '/signIn',component: SignInComponent},
    {path: '/signUp',component: SignUpComponent},
    {path: '/home',component: HomeComponent},
    {path: '/category',component: CategoryComponent},
    {path: '/news',component: NewsComponent},
    {path: '/shopCar',component: ShopCarComponent},
    {path: '/mine',component: MineComponent},

  ]
})
