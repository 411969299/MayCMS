
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import article from './modules/article'
import column from './modules/column'

export default new Vuex.Store({
  modules: {
    article,
    column
  }
})
