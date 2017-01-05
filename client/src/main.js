
import Vue from 'vue'

//import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/'
import * as filters from './filters'

import resource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(resource)


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
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

