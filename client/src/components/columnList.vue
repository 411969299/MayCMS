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
                      <div class="pull-right colOperate"><a @click="updateColFun(cldkey.colid)">更改</a> | <a  @click="previewFun(cldkey.colid)">预览</a> | <a
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
  var $ = require('jquery')
export default {
  name: 'columnList',
  data () {
    return {
      collist:[],
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
    updateColFun:function(_id){
      console.log(_id)
    },
    addChildColFun:function(_id){  //增加子类
      this.$router.push({name:'columnAdd',params:{parentId:_id}})

    },
    deleteColFun:function(_id,_pid){
      //alert('确定删除')
      var obj = {
        colid:_id
      }
      var _this = this
      $.post(root.baseurl + 'api/deleteCol',obj,function(_d){
        _this.collist.some(function(d,i){
          if(_pid){  //父ID
            if(d.colid == _pid){   //找到对应的父id
              return d.childCol.some(function(cd,ci){
                if(cd.colid == _id){  //找到对应的子id
                  _this.collist[i].childCol.splice(ci,1)
                  return !0
                }
              })
            }

          }else{
            if(d.colid == _id){
              _this.collist.splice(i,1)
              return !0
            }
          }
        })

      })

    },
    previewFun:function(){

    }

  },
  computed:{
  },
  created:function(){
    this.$http.get(root.baseurl+'api/getCol').then((res) => {
      this.collist = res.data.data
      //console.log(res.data.data)
  }, (res) => {
      console.log(res.data.msg)
    })
  }
}
</script>
