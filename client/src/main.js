
import Vue from 'vue'

//import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/'

import resource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(resource)

Vue.filter('collist-select', function (value) {  // 改为循环注册
  return 1
})

import store from './store/'

var router = new VueRouter({
  mode:'history',
  linkActiveClass: 'active',
  saveScrollPosition: true,
  suppressTransitionError: true,
  routes:routes
})


/* eslint-disable no-new */


//VueRouter.start(App, '#BODYMAIN')
const app = new Vue({
  router,store
}).$mount('#BODYMAIN')

