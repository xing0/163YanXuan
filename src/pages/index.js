//路由配置js
import Home from './Home/Home.vue'
import category from './category/category.vue'

export default [
  {
    path:'/home',
    component:Home,

  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/',
    component:Home
  }
]





