import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var $ = require('jquery')
import root from '../setting';

import * as types from './mutation-types'


const state = {
  columnListData:[],
  artListData:[]
}

// getters
const getters = {
  getcolumnList: state => state.columnListData,
  getartList: state => state.artListData
}

// actions
const actions = {
  collistData ({ commit }) {
    $.get(root.baseurl + 'api/column/getCol',{},function(_d){
      if(_d.code == 1){
        commit(types.COLUMN_LIST_DATA,_d.data)
      }

    })
  },
  artlistData ({ commit },obj){
    $.post(root.baseurl + 'api/article/getallArt',obj.obj,function(_d){
      if(_d.code == 1){
        commit(types.ARTICLE_LIST_DATA,_d.data)
      }
    })
  }
}

// mutations
const mutations = {
  [types.COLUMN_LIST_DATA] (state,data) {
    state.columnListData = data
  },
  [types.ARTICLE_LIST_DATA] (state, data) {
    state.artListData = data
  }
}


export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
