import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //@表示是上级目录
import MyCom from '../components/MyCom'
import phone from '../components/phone'
import qq from '../components/qq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    //第二个路由
    {
      name:'qqqq',
      // path: '/mycom/',

      //这样写可以在URL上传值,对应组件上可以进行接收$route.params.id, 在js方法中要加this(this.$route.params.id) 。
      //注意，加参数后必须传入，否则不显示页面内容。 并且通过js方法也可以传值,例如var id = '123' var name = 'sasa' this.$router.push('./mycom/' + id + '/' + name);
      // path: '/mycom/',  //链接不传值
      path: '/mycom/:id/:name', //链接传值
      component: MyCom,
      //子路由
      // children:[
      //   {
      //     path:'/phone',
      //     component:phone
      //   },
      //   {
      //     path:'/qq',
      //     component:qq
      //   }
      // ]

      //这样可以写多个组件，对应多个路由视图，通过给路由视图name属性连接组件名，这样可以实现一次路由跳转显示多个视图
      children:[
        {
          path:'/phone',
          components:{
            phone,
            qq
          }
        },
      ]


    },

  ]
})
