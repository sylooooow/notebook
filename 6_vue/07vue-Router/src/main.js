// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Router from 'vue-router'
// import Hello from './components/HelloWorld'

Vue.config.productionTip = false

//使用路由
// Vue.use(Router);
//
// //创建一个路由
// let router = new Router({
//   routes:[
//     //定义一个路由，路径为'/' 指定组件为Hello
//     {
//       path:'/hello',
//       component:Hello
//     }
//   ]
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
