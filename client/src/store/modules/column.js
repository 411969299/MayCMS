
var $ = require('jquery')
import root from '../../setting';

import * as types from '../mutation-types'

import Vue from 'vue'

const state = {
  columnListData:[]
}

// getters
const getters = {
  getcolumnList: state => state.columnListData,
  getconvercol:state => {
    let arr = []
    state.columnListData.map(function(c,i){
      arr.push({title:c.colname,value:c.colid})
      if(c.childCol.length && c.childCol.length > 0){
        c.childCol.map(function(cd,ci){
          arr.push({title:cd.colname,value:cd.colid})
        })
      }
    })
    return arr
  }
}

// actions
const actions = {
  collistData ({ commit },_obj) {
    var obj = ''
    if(_obj && _obj.type && _obj.type !=''){
      obj += '?type='+_obj.type
    }
    Vue.http.get(root.baseurl + 'api/categories'+obj).then(function (_d) {
      console.log(_d.body)
      commit(types.COLUMN_LIST_DATA,_d.body)
    }, function () {
      console.log('get categories error')
    });
  },
  deleteCol({ commit },obj){
    //console.log(obj)
    $.post(root.baseurl + 'api/column/deleteCol',{colid:obj.colid},function(_d){
      if(_d.code == 1){
        commit(types.DELETE_COLUMN_DATA,obj)
      }
    })
  }
}

// mutations
const mutations = {
  [types.COLUMN_LIST_DATA] (state,data) {
    state.columnListData = data
  },
  [types.DELETE_COLUMN_DATA](state,data) {
    state.columnListData.some(function(d,i){
      if(data.pid){  //父ID
        if(d.colid == data.pid){   //找到对应的父id
          return d.childCol.some(function(cd,ci){
            if(cd.colid == data.colid){  //找到对应的子id
              state.columnListData[i].childCol.splice(ci,1)
              return !0
            }
          })
        }

      }else{
        if(d.colid == data.colid){
          state.columnListData.splice(i,1)
          return !0
        }
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

