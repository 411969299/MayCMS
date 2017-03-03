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
                <thead class="text-center">
                <tr>
                  <th>排序</th>
                  <th>显示</th>
                  <th>名称</th>
                  <th>目录</th>
                  <th>类型</th>
                  <th>文档数量</th>
                  <th>内容模型</th>
                  <th class="ng-scope">操作</th>
                </tr>
                </thead>

                <tbody>
                <template v-for="key in collist">
                  <tr>
                    <td>{{key.sort}}</td>
                    <td><i v-if="key.isShow" class="el-icon-arrow-down"></i></td>
                    <td>{{key.name}}</td>
                    <td>{{key.path}}</td>
                    <td>{{translate(key.type)}}</td>
                    <td>120</td>
                    <td>default</td>
                    <td><router-link :to="{ name: 'columnAdd', params: { columnId: key._id }}">修改</router-link> <a href="">删除</a></td>
                  </tr>
                  <tr v-for="cldkey in key.childCateg" v-bind="{'data-parentId':key.colid}"  class="childCol">
                    <td>{{cldkey.sort}}</td>
                    <td><i v-if="cldkey.isShow" class="el-icon-arrow-down"></i></td>
                    <td style="text-indent: 1.5em">└{{cldkey.name}}</td>
                    <td>{{cldkey.path}}</td>
                    <td>{{translate(cldkey.type)}}</td>
                    <td>120</td>
                    <td>default</td>
                    <td><router-link :to="{ name: 'columnAdd', params: { columnId: cldkey._id }}">修改</router-link> <a href="">删除</a></td>
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
  var _ = require('lodash')

  var categorieTypes = [{
    type: 'channel',
    name: '频道'
  }, {
    type: 'column',
    name: '栏目'
  }, {
    type: 'page',
    name: '单页'
  }, {
    type: 'link',
    name: '链接'
  }];

export default {
  name: 'columnList',
  data () {
    return {
      showStore:''
    }
  },
  methods:{
    translate : function (value) {
    for (var i = 0; i < categorieTypes.length; i++) {
      if (value ===categorieTypes[i].type) {
        return categorieTypes[i].name;
      }
    }
  },
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
    collist:function(){
      var source =_.partition(this.$store.getters.getcolumnList,{"parentId": "0"})
      _.map(_.sortBy(source[0], 'sort'),function(n){
        n.childCateg = _.partition(source[1],{"parentId": n._id})[0]
      })
      return source[0]
    }
  },
  created:function(){ /// 需要判断数据是否为空
    this.$store.dispatch('collistData')
  }
}
</script>
