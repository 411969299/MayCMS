<template>
  <!-- 所有档案列表-->
          <div class="row">
            <div class="alldocumentlist">
              <div class="pbhead clearfix">
                <div class="col-md-6 col-md-offset-3">
                  <div @click="changeUrl('articleAdd')" class="btn btn-default">添加文档</div>
                  <div class="btn btn-default">我的文档</div>
                  <div class="btn btn-default">审核稿件</div>
                  <div class="btn btn-default">文档回收站</div>
                </div>
              </div>
              <div class="pbhead_dec">
                <ol class="breadcrumb">
                  <li><a href="#">所有栏目</a></li>
                  <li><a href="#">文档列表</a></li>
                </ol>
              </div>
              <table class="table table-bordered table-striped table-hover">
                <thead>
                <tr>
                  <th>序号</th>
                  <th>选择</th>
                  <th>文章标题</th>
                  <th>所属栏目</th>
                  <th>阅读量</th>
                  <th>更新时间</th>
                  <th>发布人</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(key,index) in artlist.contents">
                  <td>{{index}}</td>
                  <td><input type="checkbox" :value="key._id" v-model="checkLists"></td>
                  <td>{{key.title}}</td>
                  <td>{{key.category.name}}</td>
                  <td>{{key.reading.total}}</td>
                  <td>{{key.updated}}</td>
                  <td>{{key.user.nickname}}</td>
                  <td><a  @click="updataArtFun(key._id)">编辑</a> | <a @click="deleteArtFun(key._id)">删除</a> | <a >预览</a></td>
                </tr>

                </tbody>
              </table>
              <div class="adl_crl">
                <div class="btn btn-default">全选</div>
                <div class="btn btn-default">取消</div>
                <div class="btn btn-default">删除</div>
              </div>
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li><a href="">首页</a></li>
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">上一页</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">下一页</span>
                    </a>
                  </li>
                  <li><a href="">末页</a></li>
                  <li><a>第1页/共11页</a></li>
                </ul>
              </nav>
              <!--<div class="col-md-10 col-md-offset-1" style="display: none">-->
                <!--<form class="form-horizontal" role="form">-->
                  <!--<div class="form-group">-->
                    <!--<label for="" class="col-sm-2 control-label">选择栏目</label>-->
                    <!--<div class="col-sm-2">-->
                      <!--<select name="" id="" class="form-control" >-->
                        <!--<option v-for="option in collist" :value="option.value">-->
                          <!--{{ option.title }}-->
                        <!--</option>-->
                      <!--</select>-->
                    <!--</div>-->
                    <!--<label for="" class="col-sm-2 control-label">关键字</label>-->
                    <!--<div class="col-sm-2">-->
                      <!--<input type="text" class="form-control" id="" placeholder="关键字">-->
                    <!--</div>-->
                    <!--<label for="" class="col-sm-2 control-label">排序</label>-->
                    <!--<div class="col-sm-1">-->
                      <!--<input type="text" class="form-control" id="" placeholder="排序">-->
                    <!--</div>-->
                    <!--<div class="col-sm-1">-->
                      <!--<button type="submit" class="btn btn-default">搜索</button>-->
                    <!--</div>-->

                  <!--</div>-->
                <!--</form>-->
              <!--</div>-->

            </div>

          </div>

</template>

<script>
  import * as types from '../store/mutation-types'
  var moment = require('moment')
export default {
  name: 'articleAllList',
  data () {
    return {
      currentPage:1,
      totalPages:1,
      checkLists:[]
    }
  },
  methods: {
    ['changeUrl']: function (_name) {
      this.$router.push({name: _name})
    },
    ['deleteArtFun'](_artid){
      this.$store.dispatch('deleteArt',{artid:_artid})
    },
    ['updataArtFun'](id){
      this.$router.push({ name: 'articleAdd',params:{_id:id}})
    }

  },
  computed:{
    artlist () {

      var arr = this.$store.getters.getartList
      //console.log(arr)
      if(arr.contents){
        arr.contents.map(function(c,i){
          c.updated = moment(c.updated).format('YYYY-MM-DD HH:mm:ss')
          return c
        })
      }
      return arr
    }
//    collist(){
//      console.log(this.$store.getters.getcolumnList)
//      return this.$store.getters.getcolumnList
//    }
  },
  created:function(){
    //console.log(this.$router)

    this.$store.dispatch('artlistData',{ deleted: false, currentPage: this.currentPage, pageSize: 20 })  //"artid":"BJ_MJNore"
  }
}
</script>
