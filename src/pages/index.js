//路由配置js
import Home from './Home/Home.vue'
import category from './Category/Category.vue'
import topic from './topic/topic.vue'

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
    path:'/topic',
    component:topic
  },
  {
    path:'/',
    component:Home
  }
]





