<style>
  .table a{
    cursor: pointer;
  }
</style>
<template>
  <!-- 网站栏目管理-->
          <div class="row">
            <template class="pagebox">
              <div class="pbhead"><div class="tit pull-left">网站栏目管理</div><div class="corl pull-right"><div @click="addtopurl" class="btn btn-default">增加顶级栏目</div></div></div>
              <div class="pbhead_dec"></div>

              <table class="table table-hover">
                <tbody>

                <template v-for="key in collist">
                  <tr @click="showchild(key.colid)">
                    <td><div class="pull-left colMessage"><i class="el-icon-arrow-down"></i><input type="checkbox">{{key.colname}}[id:{{key.colid}}](文档：...)</div>
                      <div class="pull-right colOperate"><a @click="updateColFun(key.colid)">更改</a> | <a @click="addChildColFun(key.colid)">增加子类</a> | <a  @click="previewFun(key.colid)">预览</a> | <a
                        @click="deleteColFun(key.colid)">删除</a></div></td>
                  </tr>
                  <tr v-for="cldkey in key.childCol" v-bind="{'data-parentId':key.colid}"  class="childCol">
                    <td><div class="pull-left colMessage" style="padding-left: 30px;"><input type="checkbox">{{cldkey.colname}}[id:{{cldkey.colid}}](文档：...)</div>
                      <div class="pull-right colOperate"><a @click="updateColFun(key.colid,cldkey.colid)">更改</a> | <a  @click="previewFun(cldkey.colid)">预览</a> | <a
                        @click="deleteColFun(cldkey.colid,key.colid)">删除</a></div></td>
                  </tr>

                </template>

                </tbody>
              </table>
            </div>
          </div>
</template>

<script>
  import root from '../setting';
  import * as types from '../store/mutation-types'

  var $ = require('jquery')
export default {
  name: 'columnList',
  data () {
    return {
      showStore:''
    }
  },
  methods:{
    addtopurl:function(){
      this.$router.push({name:'columnAdd'})
    },
    showchild:function(_d){
      //this.showStore = _d
      // v-show="showStore == key.colid"
    },
    updateColFun:function(_pid,_id){  //第一个父id，第二个子id
      var obj = null
      this.collist.some(function(d,i){
        if(d.colid == _pid ){
          if(_id && _id!=''){
            return d.childCol.some(function(sd){
              if(sd.colid == _id){
                obj = sd
                return !0
              }
            })
          }else{
            obj = d
            return !0
          }
        }
      })
      //console.log(obj)
      this.$router.push({name:'columnAdd',query:{coldata:obj,type:'updateCol'}})
    },
    addChildColFun:function(_id){  //增加子类

      this.$router.push({name:'columnAdd',query:{parentId:_id,type:'addChildCol'}})

    },
    deleteColFun:function(_id,_pid){  //当前id，父id

      var obj = {colid:_id}
      if(_pid){
        obj.pid = _pid
      }
      this.$store.dispatch('deleteCol',obj)

    },
    previewFun:function(){

    }

  },
  computed:{
    collist () {
      return this.$store.getters.getcolumnList
    }
  },
  created:function(){ /// 需要判断数据是否为空
    this.$store.dispatch('collistData')
  }
}
</script>
