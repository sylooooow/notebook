// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import params from '../../common/requestParams'
import style from '../../common/commen.css'
import controlHeader from '../../common/controlHeader'
import backtop from '../../common/backtop'

Vue.config.productionTip = false
//将axios设置成全局
Vue.prototype.$http = axios
Vue.prototype.$util = {} //自定义一个全局的原型属性作为规范(不是必须)
Vue.prototype.$util.params = params
Vue.prototype.$util.controlHeader = controlHeader
Vue.prototype.$util.backtop = backtop
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
