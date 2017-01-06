
var $ = require('jquery')
import root from '../../setting';

import * as types from '../mutation-types'


const state = {
  artListData:[],
  myartlist:[]
}

// getters
const getters = {
  getartList: state => state.artListData
}

// actions
const actions = {
  artlistData ({ commit },obj){
    $.post(root.baseurl + 'api/article/getallArt',obj,function(_d){
      if(_d.code == 1){
        commit(types.ARTICLE_LIST_DATA,_d.data)
      }
    })
  },
  deleteArt({ commit },obj){
    //console.log(obj)
    $.post(root.baseurl + 'api/article/deleteArt',obj,function(_d){
      if(_d.code == 1){
        commit(types.DELETE_ARTICLE_DATA,obj)
      }
    })
  }
}

// mutations
const mutations = {
  [types.ARTICLE_LIST_DATA] (state, data) {
    state.artListData = data
  },
  [types.DELETE_ARTICLE_DATA] (state, data) {
    //console.log(data)
    state.artListData.some(function(d,i){
      if(d.artid == data.artid){
        state.artListData.splice(i,1)
        return !0
      }
    })
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
