
import Vue from 'vue'
import Vuex  from 'vuex'
//import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/'
import resource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(resource)

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
  router
}).$mount('#BODYMAIN')

