
import Vue from 'vue'
import root from '../../setting';

import * as types from '../mutation-types'


const state = {
  artListData:[],
  myartlist:[]
}

// getters
const getters = {
  getartList: state => state.artListData,
  getmyArtList: state => state.myartlist
}

// actions
const actions = {
  artlistData ({ commit },obj){
    Vue.http.get(root.baseurl + 'api/contents',obj).then(function(_d){

      commit(types.ARTICLE_LIST_DATA,_d.body)
    },function(err){
      console.log(err)
      console.log('获取文章列表失败')
    })
  },
  //artlistData ({ commit },obj){
  //  $.post(root.baseurl + 'api/article/getallArt',obj,function(_d){
  //    if(_d.code == 1){
  //      commit(types.ARTICLE_LIST_DATA,_d.data)
  //    }
  //  })
  //},
  deleteArt({ commit },obj){
    //console.log(obj)
    Vue.http.post(root.baseurl + 'api/article/deleteArt',obj).then(function(_d){
      commit(types.DELETE_ARTICLE_DATA,obj)
    },function(err){
      console.log(err)
      console.log('删除文章列表失败')
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
