
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
                  <li role="presentation" @click="changeView(0)" :class="currViewIndex==0?'active':''" ><a>常规选项</a></li>
                  <li role="presentation" @click="changeView(1)" :class="currViewIndex==1?'active':''"><a>高级选项</a></li>
                  <li role="presentation" @click="changeView(2)" :class="currViewIndex==2?'active':''"><a>栏目内容</a></li>
                </ul>
              </div>
              <div class="addCol_tap_con">
                <div class="addCol_tap_0" v-show="currViewIndex==0">
                  <div class="row">
                    <div class="col-md-1">内容模型</div>
                    <div class="col-md-2">
                      <select  class="form-control" v-model="coltype">
                        <option value="0">普通文章 | article</option>
                        <option value="1">图片</option>
                        <option value="2">其他</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">栏目名称</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="colname">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">排列顺序</div>
                    <div class="col-md-1">
                      <input type="text" class="form-control"  v-model="rank">
                    </div>
                    <div class="col-md-1">由低到高</div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">浏览权限</div>
                    <div class="col-md-2">
                      <select  class="form-control"  v-model="colrule">
                        <option value="0">1</option>
                        <option value="1">2</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">目录相对位置</div>
                    <div class="col-md-3">
                      <label for="">
                        <input type="radio" name="colpath" value="0"  v-model="colpath">上级目录
                      </label>
                      <label for="">
                        <input type="radio" name="colpath" value="1"  v-model="colpath">cms跟目录
                      </label>
                      <label for="">
                        <input type="radio" name="colpath" value="2"  v-model="colpath">站点根目录
                      </label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">栏目属性</div>
                    <div class="col-md-4">
                      <div class="form-group clearfix">
                        <div class="col-sm-1">
                          <input type="radio" name="colprop" value="0"  v-model="colprop">
                        </div>
                        <label for="" class="col-sm-8 control-label">最终栏目列表(允许在本栏目发布文档)</label>
                      </div>
                      <div class="form-group clearfix">
                        <div class="col-sm-1">
                          <input type="radio" name="colprop" value="1"  v-model="colprop">
                        </div>
                        <label for="" class="col-sm-8 control-label">频道封面(栏目本身不允许发布文档)</label>
                      </div>
                      <div class="form-group clearfix">
                        <div class="col-sm-1">
                          <input type="radio" name="colprop" value="2"  v-model="colprop">
                        </div>
                        <label for="" class="col-sm-8 control-label">外部链接()</label>
                      </div>
                      <!--<label for="">最终栏目列表</label>-->
                      <!--<input type="password" class="form-control" id="" placeholder="Password">-->
                      <!--<label for="exampleInputPassword1">Password</label>-->
                      <!--<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">-->
                      <!--<label for="exampleInputPassword1">Password</label>-->
                      <!--<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">-->
                    </div>
                  </div>
                </div>
                <div class="addCol_tap_1"  v-show="currViewIndex==1">
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
                  <div class="row">
                    <div class="col-md-1">列表命名规则</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章命名规则</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control">
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
                </div>
                <div class="addCol_tap_2"  v-show="currViewIndex==2">
                  <div class="dsc">说明：栏目内容，简介用途</div>
                  <div class="row">
                    <div class="col-md-10">
                      <textarea class="form-control"  v-model="content" cols="30" rows="10"></textarea>
                    </div>
                  </div>
                </div>
                <div class="addCol_con_btn">
                  <div @click="submitData" class="btn btn-default">确定</div>
                  <div @click="goBack" class="btn btn-default">返回</div>
                </div>
              </div>

            </div>
          </div>
</template>

<script>

//import { Message } from 'element-ui';
import root from '../setting';
var $ = require('jquery')
//console.log(window.location.search)
export default {
  name: 'columnAdd',
  data () {
    return {
      cvi:0,
      coltype:0,
      colname:'',
      rank:'',
      colrule:0,
      colpath:0,
      colprop:0,
      seotitle:'',
      keywords:'',
      description:'',
      content:'',
      colid:0
    }
  },methods:{
    changeView:function(_dom){
      this.cvi = _dom
    },
    submitData:function(){
      //Message.success({message:'操作成功'})
      var pid = this.$route.query.parentId
      var type  = this.$route.query.type;
      var posturl = ''
      var obj = {
        coltype:this.coltype,
        colname:this.colname,
        rank:this.rank,
        colrule:this.colrule,
        colpath:this.colpath,
        colprop:this.colprop,
        seotitle:this.seotitle,
        keywords:this.keywords,
        description:this.description,
        content:this.content
      }

      if(type && type=='addChildCol'){  //添加子类
        obj.parentId = pid
        posturl = 'api/column/addChildCol'
      }else if(type && type=='updateCol'){  //修改当前栏目
        posturl = 'api/column/updateCol'
        obj.colid = this.colid
      }else{  //增加新的顶级栏目
        posturl = 'api/column/addTopCol'
      }

      $.post(root.baseurl+posturl,obj,(res) =>{
        if(res.code == 1){
        this.$router.push({name:'columnList'})
      }else{
        console.log(res.msg)
      }
      })
    },
    goBack:function(){
      this.$router.go(-1)
    }
  },computed:{
    currViewIndex:function(){
      return this.cvi
    }
  },
created:function (){

  var type = this.$route.query.type
  if(type && type == 'updateCol'){
    var d = this.$route.query.coldata;
    this.colid = d.colid
    this.coltype = d.coltype,
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
