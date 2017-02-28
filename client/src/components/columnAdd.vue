
<template>
  <!-- 增加栏目 -->
          <div class="row">
            <div class="addCol">
              <div class="pbhead"></div>
              <div class="pbhead_dec">
                <ol class="breadcrumb">
                  <li><router-link :to="{ name: 'columnList'}">栏目管理</router-link></li>
                  <li><a>增加栏目</a></li>
                </ol>
              </div>
              <div class="addCol_tap">
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" @click="type='channel'" :class="type=='channel'?'active':''" ><a>频道</a></li>
                  <li role="presentation" @click="type='column'" :class="type=='column'?'active':''"><a>栏目</a></li>
                  <li role="presentation" @click="type='page'" :class="type=='page'?'active':''"><a>单页</a></li>
                </ul>
              </div>

              <!--<label for="" class="col-sm-8 control-label">最终栏目列表(允许在本栏目发布文档)</label>-->
              <!--<label for="" class="col-sm-8 control-label">频道封面(栏目本身不允许发布文档)</label>-->
              <!---->
              <div class="addCol_tap_con">
                <div class="addCol_tap_0" v-show="type=='channel'">
                  <div class="row">
                    <div class="col-md-1">频道名称</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="name">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">排列顺序</div>
                    <div class="col-md-1">
                      <input type="text" class="form-control"  v-model="sort">
                    </div>
                    <div class="col-md-1">由低到高</div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">显示</div>
                    <div class="col-md-2 checkbox">
                      <label>
                        <input type="checkbox" v-model="isShow" value="" >
                        是否在导航栏中显示
                      </label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">目录</div>
                    <div class="col-md-3">
                      <input type="text" class="form-control" v-model="path" >
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">SEO标题</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="seotitle">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">关键字</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control" v-model="keywords">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">栏目描述</div>
                    <div class="col-md-4">
                      <textarea  class="form-control" v-model="description" cols="30" rows="10"></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">列表模板</div>
                    <div class="col-md-4">
                      <input type="text"  class="form-control">
                    </div>
                  </div>
                </div>
                <div class="addCol_tap_1"  v-show="type=='column'">
                  <div class="row">
                    <div class="col-md-1">栏目名称</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="name">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">内容模型</div>
                    <div class="col-md-2">
                      <select  class="form-control" v-model="model">
                        <option value="0">普通文章 | article</option>
                        <option value="1">图片</option>
                        <option value="2">其他</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">上级分类</div>
                    <div class="col-md-2">
                      <select   class="form-control " id="parentCategory" name="parentCategory"><option value="" class="">作为顶级分类</option><option value="0" label="我的频道">我的频道</option></select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">排列顺序</div>
                    <div class="col-md-1">
                      <input type="text" class="form-control"  v-model="sort">
                    </div>
                    <div class="col-md-1">由低到高</div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">显示</div>
                    <div class="col-md-2 checkbox">
                      <label>
                        <input type="checkbox" value="" v-model="isShow">
                        是否在导航栏中显示
                      </label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">目录</div>
                    <div class="col-md-3">
                      <input type="text" class="form-control" v-model="path">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">SEO标题</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="seotitle">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">关键字</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control" v-model="keywords">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">栏目描述</div>
                    <div class="col-md-4">
                      <textarea  class="form-control" v-model="description" cols="30" rows="10"></textarea>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">列表模板</div>
                    <div class="col-md-4">
                      <input type="text"  class="form-control">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章模板</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="addCol_tap_2"  v-show="type=='page'">

                </div>
                <div class="addCol_con_btn">
                  <div @click="saveCategory" class="btn btn-default">确定</div>
                  <div @click="goBack" class="btn btn-default">返回</div>
                </div>
              </div>

            </div>
          </div>
</template>

<script>

import root from '../setting';
var $ = require('jquery')

import { MessageBox } from 'element-ui';
import Vue from 'vue'
Vue.component(MessageBox.name, MessageBox)

export default {
  name: 'columnAdd',
  data () {
    return {
      type:'channel',//'channel', 'column', 'page', 'link'
      name:'',
      sort:'',
      isShow:true,
      path:'',
      seotitle:'',
      keywords:'',
      description:'',
      content:'',
      model:'',
      views:{
        layout:'layout',
        channel:'channel',
        column:'',
        content:''
      },
      mixed:{
        pageSize:'',
        url:''
      }
    }
  },methods:{
    saveCategory:function(){
      var me = this
      var category = {
        type: me.type,
        name: me.name,
        isShow: me.isShow,
        sort: parseInt(me.sort)
      };

      category.path = '/' + me.path.toLowerCase();

      switch (me.type) {
        case 'channel':

          category['views.layout'] = me.views.layout;
          category['views.channel'] = me.views.channel;
          category.keywords = me.keywords;
          category.description = me.description;

          break;
        case 'column':
          category.model = me.model;

          category['mixed.pageSize'] = me.pageSize;
          category['views.layout'] = me.views.layout;
          category['views.column'] = me.views.column;
          category['views.content'] = me.views.content;
          category.keywords = me.keywords;
          category.description = me.description;

          break;
        case 'page':
          category['views.layout'] = me.views.layout;
          category['views.page'] = me.views.page;
          category['mixed.isEdit'] = me.isEdit;
          category.keywords = me.keywords;
          category.description = me.description;

          break;
        case 'link':
          category['mixed.url'] = me.url;
      }

      if (false) {
//        category._id = $stateParams._id;
//
//        $http.put('/api/categories/' + $stateParams._id, category)
//          .then(function () {
//            me.$emit('notification', {
//              type: 'success',
//              message: '保存分类成功'
//            });
//
//            me.$emit('mainCategoriesUpdate');
//
//            $state.go('main.categories', null, { reload: 'main.categories' });
//          }, function () {
//            me.$emit('notification', {
//              type: 'danger',
//              message: '保存分类失败'
//            });
//          });
      } else {
        this.$http.post(root.baseurl+'api/categories', category)
          .then(function () {
            MessageBox.alert('保存分类成功', '提示信息', {
              confirmButtonText: '确定',
              type:'success'
            });
          }, function () {
            MessageBox.alert('保存分类失败', '错误信息', {
              confirmButtonText: '确定',
              type:'error'
            });
          });
      }
    },
    goBack:function(){
      this.$router.go(-1)
    }
  },
  computed:{
  },
created:function (){

  var type = this.$route.query.type
  if(type && type == 'updateCol'){
    var d = this.$route.query.coldata;
    this.colid = d.colid
    this.type = d.type,
      this.colname = d.colname,
      this.rank = d.rank,
      this.colrule = d.colrule,
      this.colpath = d.colpath,
      this.colprop = d.colprop,
      this.seotitle = d.seotitle,
      this.keywords = d.keywords,
      this.description = d.description,
      this.content = d.content
  }
}
}
</script>
