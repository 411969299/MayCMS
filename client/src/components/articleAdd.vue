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
                  <li role="presentation"  @click="changeView(0)"  :class="currViewIndex==0?'active':''"><a>常规选项</a></li>
                  <li role="presentation" @click="changeView(1)"  :class="currViewIndex==1?'active':''"><a>高级选项</a></li>
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
                      <input type="text" class="form-control"  v-model="tag">
                    </div>
                    <div class="col-md-2">多个标签用英文逗号(,)隔开</div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">权重</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="rank" >
                    </div>
                  </div>
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
                    <div class="col-md-1">作者：</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="writer">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章主栏目</div>
                    <div class="col-md-2">
                      <select name="" id="" class="form-control"  v-model="columnId"><!--multiple-->
                        <option v-for="option in collist" :value="option.value">
                          {{ option.title }}
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
                    <div class="col-md-1">浏览次数</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  v-model="click">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章排序</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control"  >
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">阅读权限</div>
                    <div class="col-md-2">
                      <input type="text" class="form-control" >
                    </div>
                  </div>
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
                      <textarea  class="form-control"  v-model="description" cols="30" rows="10"></textarea>
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
  var $ = require('jquery')

export default {
  name: 'articleAdd',
  data () {
    return {
      cvi:0,
      title:'',
      shorttitle: '',
      writer: '',
      description: '',
      keywords: '',
      seotitle: '',
      source: '',  //来源
      flag: [],  //自定义属性// ['h','c','f','a','s','b','p','j']
      rank: '',
      tag: '',
      click: '',  //点击量
      columnName: '',
      content:'',
      goodpost: 0,  //点赞数
      badpost: 0,  //非点赞数
      columnId:''  //所属栏目ID
    }
  },
  methods:{
    changeView:function(_dom){
      this.cvi = _dom
    },
    submitData:function(){
      var obj = {
        title:this.title,
        shorttitle: this.shorttitle,
        writer: this.writer,
        description: this.description,
        keywords: this.keywords,
        seotitle: this.seotitle,
        source: this.source,  //来源
        flag: this.flag,  //自定义属性
        rank: this.rank,
        tag: [this.tag],
        click: this.click,  //点击量
        columnName: '',
        content:this.content,
        columnId:this.columnId  //所属栏目ID
      }
      this.collist.some(function(d){
        if(d.value == obj.columnId){
          obj.columnName = d.title
          return !0
        }
      })
      //console.log(obj)
      $.post(root.baseurl + 'api/article/addArticle',obj,(_d) =>{//function(_d){
        if(_d.code == 1){
          this.$router.push({name:'alldocList'})
        }
        //console.log(_d)
      })

    },
    goBack:function(){
      this.$router.go(-1)
    }
  },
  computed:{
    currViewIndex:function(){
      return this.cvi
    },
    collist () { //  转化数据结构
      return this.$store.getters.getconvercol
    },
    selectdata(){

    }
  }
}
</script>
