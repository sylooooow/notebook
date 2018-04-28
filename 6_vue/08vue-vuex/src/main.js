// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

/*
 1.state: 存储状态，也就是变量(数据)
 2.getters: 获取状态,相当于get方法，获取state的值，它有一个参数是state
 3.mutations: 提交状态修改，相当于set方法，设置state的值，它有两个参数，一个是state，一个是要修改的值，不支持异步
 4.actions: 它和mutations功能类似，实际就是调用mutations，支持异步
 modules:store的子模块

 vuex和vue很像
 vue         vuex
 vm          store
 data        state
 methods     mutations
 computed    getters
*/

//创建vuex的store
const store = new Vuex.Store({
  state:{
    name:'zhangsan',
    age:30
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
