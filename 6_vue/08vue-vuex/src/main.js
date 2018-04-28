// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'

// Vue.use(Vuex)
Vue.config.productionTip = false

//引入拆分后的store
import store from './store'

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
// const store = new Vuex.Store({
//   //1.状态，保存数据
//   state:{
//     name:'zhangsan',
//     age:30
//   },


  //2.取值
  // getters:{
  //   //getters用于取值，可以保护对象属性，对值进行加工
  //   //方法
  //   nameInfo:function (state) {
  //     return `my name is ${state.name}`
  //   }
  // },


  //3.更改store状态的唯一方法
  // mutations:{
  //   //在这里方法名一般用大写
  //   SET_NAME(state,person) {
  //     state.name = person.name;
  //   }
  // },


  //4.支持异步更改state,实际的作用是调用mutations,即通过异步调用mutations来实现异步改值
  // actions:{
  //   //content: 是个对象，例如{name:123, age:232, commit:fn} 在其中只引用commit
  //   nameAsyn(commit,person) {
  //     setTimeout(function () {
  //       commit.commit('SET_NAME',person);
  //     },1000)
  //   }
  // },


  //5.允许我们将 store 分割成模块（module）每个模块拥有自己的 state、mutation、action、getter
  // modules:{
  //   // a:moduleA,
  //   // b:moduleB
  // }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
