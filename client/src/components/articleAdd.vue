<template>
  <!-- 增加文章 -->
          <div class="row">
            <div class="addArticle">
              <div class="pbhead"></div>
              <div class="pbhead_dec">
                <ol class="breadcrumb">
                  <li><a href="#">文章列表</a></li>
                  <li><a href="#">增加文章</a></li>
                </ol>
              </div>
              <div class="addArticle_tap">
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation"  @click="currViewIndex=0"  :class="currViewIndex==0?'active':''"><a>常规选项</a></li>
                  <li role="presentation" @click="currViewIndex=1"  :class="currViewIndex==1?'active':''"><a>高级选项</a></li>
                </ul>
              </div>
              <div class="addArticle_tap_con">
                <div class="addArticle_tap_0" v-show="currViewIndex==0">
                  <div class="row">
                    <div class="col-md-1">文章标题</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="title">
                    </div>
                    <div class="col-md-1">简略标题</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="shorttitle" >
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">自定义属性</div>
                    <div class="col-md-10">
                      <label for="">
                        <input type="checkbox"  value="h" v-model="flag">头条h
                      </label>
                      <label for="">
                        <input type="checkbox" value="c" v-model="flag">推荐c
                      </label>
                      <label for="">
                        <input type="checkbox" value="f" v-model="flag">幻灯f
                      </label>
                      <label for="">
                        <input type="checkbox" value="a" v-model="flag">特荐a
                      </label>
                      <label for="">
                        <input type="checkbox" value="s" v-model="flag">滚动s
                      </label>
                      <label for="">
                        <input type="checkbox" value="b" v-model="flag">加粗b
                      </label>
                      <label for="">
                        <input type="checkbox" value="p" v-model="flag">图片p
                      </label>
                      <label for="">
                        <input type="checkbox" value="j" v-model="flag">跳转j
                      </label>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">TAG标签</div>
                    <div class="col-md-4">
                      <input type="text" class="form-control"  v-model="tags">
                    </div>
                    <div class="col-md-2">多个标签用英文逗号(,)隔开</div>
                  </div>
                  <!--<div class="row">-->
                    <!--<div class="col-md-1">权重</div>-->
                    <!--<div class="col-md-2">-->
                      <!--<input type="text" class="form-control"  v-model="rank" >-->
                    <!--</div>-->
                  <!--</div>-->
                  <div class="row">
                    <div class="col-md-1">缩略图</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章来源</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="source">
                    </div>
                    <!--<div class="col-md-1">作者：</div>-->
                    <!--<div class="col-md-2">-->
                      <!--<input type="text" class="form-control"  v-model="writer">-->
                    <!--</div>-->
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章主栏目</div>
                    <div class="col-md-2">
                      <select name="" id="" class="form-control"  v-model="category"><!--multiple-->
                        <option value="0">
                          请选择栏目
                        </option>
                        <option v-for="option in collist" :value="option._id">
                          {{ option.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章内容</div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <textarea  class="form-control"  v-model="content" cols="30" rows="10"></textarea>
                    </div>
                  </div>


                </div>
                <div class="addArticle_tap_1"  v-show="currViewIndex==1">
                  <div class="row">
                    <div class="col-md-1">评论选项</div>
                    <div class="col-md-2">
                      <label for="">
                        <input type="radio" name="pl">允许评论
                      </label>
                      <label for="">
                        <input type="radio" name="pl" checked>禁止评论
                      </label>
                    </div>
                    <!--<div class="col-md-1">浏览次数</div>-->
                    <!--<div class="col-md-2">-->
                      <!--<input type="text" class="form-control"  v-model="click">-->
                    <!--</div>-->
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章排序</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="sort" >
                    </div>
                  </div>
                  <!--<div class="row">-->
                    <!--<div class="col-md-1">阅读权限</div>-->
                    <!--<div class="col-md-2">-->
                      <!--<input type="text" class="form-control" >-->
                    <!--</div>-->
                  <!--</div>-->
                  <div class="row">
                    <div class="col-md-1">自定义文件名</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">关键字</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="keywords" >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章摘要</div>
                    <div class="col-md-5">
                      <textarea  class="form-control"  v-model="abstract" cols="30" rows="10"></textarea>
                      <!--<input type="text" class="form-control"  v-model="description">-->
                    </div>
                  </div>

                </div>
                <div class="addArticle_con_btn">
                  <div @click="submitData" class="btn btn-default">确定</div>
                  <div @click="goBack" class="btn btn-default">返回</div>
                </div>
              </div>
            </div>
          </div>

</template>

<script>
  import root from '../setting';
  var moment = require('moment')
  var $ = require('jquery')

  import { MessageBox } from 'element-ui';
  import Vue from 'vue'
  Vue.component(MessageBox.name, MessageBox)

export default {
  name: 'articleAdd',
  data () {
    return {
      currViewIndex:0,
      status:'draft',//'draft'草稿 'pushed' 发布
      deleted:false, //是否放入回收站
      sort:0,  //文章排序
      category:'0',  //所属栏目ID
      title:'',
      shorttitle: '',
      alias:'aaaa',//别名
      user: '',  //ObjectId
      date:'',
      abstract: '',//摘要
      content:'',//内容
      keywords: '',
      source: '',  //来源
      flag: [],  //自定义属性// ['h','c','f','a','s','b','p','j']
      tags: '',
      thumbnail:'',//ObjectId 缩略图
      media:'' //ObjectId 媒体
      //collist:[]//栏目列表数据
    }
  },
  methods:{
    msgAlert:function(_obj){
      MessageBox.alert(_obj.msg, '提示信息', {
        confirmButtonText: '确定',
        type:_obj.type
      })
    },
    submitData:function(){
      var me = this
      var obj = {
        status:this.status,
        deleted:this.deleted,
        sort:this.sort,
        title:this.title,
        shorttitle: this.shorttitle,
        alias:this.alias,
        user: this.user,
        date:moment().format('YYYY-MM-DD HH:mm'),
        keywords: this.keywords,
        source: this.source,  //来源
        flag: this.flag,  //自定义属性
        tags: this.tags,
        category:this.category  //所属栏目ID
      }


      this.$http.post(root.baseurl + 'api/contents',obj).then(function(_d){
        console.log(_d)
        me.$router.push({name:'alldocList'})
      },function(_err){
        console.log(_err)
      })

//      if ($scope.thumbnail._id) content.thumbnail = $scope.thumbnail._id;
//      if (!_.isEmpty($scope.media)) content.media = _.map($scope.media, '_id');

      if (this.abstract !== '' || this.abstract !== undefined) {
        obj.abstract = this.abstract;
      }

      if (this.content !== '' || this.content !== undefined) {
        obj.content = this.content;
      }

      if (this.tags !== '' && this.tags !== undefined) {
        var tags = this.tags
        tags = tags.replace(/，| /g, ',');
        obj.tags = tags.split(',');
      }
      console.log(obj)
//      if (!$.isEmptyObject($scope.extensions)) {
//        content.extensions = $scope.extensions;
//      }

//      if ($stateParams.content) {
//        $http.put('/api/contents/' + $stateParams.content, content)
//          .then(function () {
//            $scope.$emit('notification', {
//              type: 'success',
//              message: '修改内容成功'
//            });
//
//            $state.go('main.contents', { category: $scope.$parent.category._id }, { reload: 'main.contents' });
//          });
//      } else {
//
//      }

      this.$http.post(root.baseurl+'api/contents', obj)
        .then(function (res) {
          var msg = ''
          if (me.status === 'draft') {
            msg = '保存草稿成功'
          } else if (me.status === 'pushed') {
            msg = '发布内容成功'
          }
          me.msgAlert({
            msg:msg,
            type:'success'
          })

          //$state.go('main.contents', { category: $scope.$parent.category._id }, { reload: 'main.contents' });
        }, function () {
          me.msgAlert({
            msg:'发布内容失败',
            type:'error'
          })
        });


//      var type  = this.$route.query.type;
//      if(type == 'updateArt'){
//        obj.artid = this.artid
//        $.post(root.baseurl + 'api/article/updateArt',{jsonobj:JSON.stringify(obj)},(_d) =>{//function(_d){
//          if(_d.code == 1){
//          me.$router.push({name:'alldocList'})
//        }
//      })
//      }else{
//
//
//      }


    },
    goBack:function(){
      this.$router.go(-1)
    }
  },
  computed:{
    collist () {
      return this.$store.getters.getcolumnList
    },
    selectdata(){

    }
  },
  created:function (){
    this.$store.dispatch('collistData',{type:'column'})
    var artdata = this.$router.artData
    if(artdata){
      this.artid = artdata.artid,
      this.title = artdata.title,
        this.shorttitle = artdata.shorttitle,
        this.writer = artdata.writer,
        this.description = artdata.description,
        this.keywords = artdata.keywords,
        this.seotitle = artdata.seotitle,
        this.source = artdata.source,  //来源

        this.flag = artdata.flag,  //自定义属性// ['h','c','f','a','s','b','p','j']
        this.rank = artdata.rank,
        this.tag = artdata.tag,
        this.click = artdata.click,  //点击量
        this.columnName = artdata.columnName,
        this.content = artdata.content,
        this.goodpost = artdata.goodpost,  //点赞数
        this.badpost = artdata.badpost,  //非点赞数
        this.columnId = artdata.columnId  //所属栏目ID

      this.$router.artData = null
    }
  }
}
</script>
