import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var $ = require('jquery')
import root from '../setting';

import * as types from './mutation-types'


const state = {
  columnListData: []
}

// getters
const getters = {
  getcolumnList: state => state.columnListData
}

// actions
const actions = {
  getData ({ commit, state }) {
    commit(types.COLUMN_LIST_DATA)
  }
}

// mutations
const mutations = {
  [types.COLUMN_LIST_DATA] (state) {
    $.get(root.baseurl + 'api/column/getCol',{},function(_d){
      state.columnListData = _d.data
    })
  }
}


export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
