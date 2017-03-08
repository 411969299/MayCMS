
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

router.beforeEach((to,from,next) => {

  //if(to.name == 'mydocList'){
  //  router.app.$store.dispatch('')
  //}else{
  //  next();
  //}
  next();
});
/* eslint-disable no-new */


Vue.http.interceptors.push(function(request, next){
  next(function(response){
    if(response.body.error && response.body.error.code == "NOT_LOGGED_IN"){
      router.push({name:'login'})
      //console.log({VueRouter})
    }
  })
})

const app = new Vue({
  router,store
}).$mount('#BODYMAIN')

