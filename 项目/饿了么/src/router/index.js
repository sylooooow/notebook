import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Container from '../components/Container'
import Goods from '../components/Goods'
import Ratings from '../components/Ratings'
import Seller from '../components/Seller'
import FoodDetail from '../components/FoodDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children:[
        {
          path:'/',
          component:Goods
        },
        {
          path:'/ratings',
          component:Ratings
        },
        {
          path:'/seller',
          component:Seller
        }
      ]
    },
    {
      path: '/foodDetail',
      name: 'foodDetail',
      component: FoodDetail,
    }
  ]
})
