// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/css/style.css'
import 'lib-flexible'
import params from './common/requestParams'

//引入拆分后的store
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$util = {}
Vue.prototype.$util.params = params
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
