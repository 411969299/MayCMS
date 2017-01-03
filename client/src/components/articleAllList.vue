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
                  <th>id</th>
                  <th>选择</th>
                  <th>文章标题</th>
                  <th>更新时间</th>
                  <th>所属栏目</th>
                  <th>点击</th>
                  <th>权限</th>
                  <th>发布人</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="key in artlist">
                  <td>1</td>
                  <td><input type="checkbox"></td>
                  <td>文章标题文章标题文章标题</td>
                  <td>1999-9-9</td>
                  <td>所属栏目所属栏目</td>
                  <td>1111</td>
                  <td>权限权限</td>
                  <td>admin</td>
                  <td><a href="">编辑</a>|<a href="">删除</a>|<a href="">预览</a></td>
                </tr>

                <tr>
                  <td>1</td>
                  <td><input type="checkbox"></td>
                  <td>文章标题文章标题文章标题</td>
                  <td>1999-9-9</td>
                  <td>所属栏目所属栏目</td>
                  <td>1111</td>
                  <td>权限权限</td>
                  <td>admin</td>
                  <td><a href="">编辑</a>|<a href="">删除</a>|<a href="">预览</a></td>
                </tr>

                <tr>
                  <td>1</td>
                  <td><input type="checkbox"></td>
                  <td>文章标题文章标题文章标题</td>
                  <td>1999-9-9</td>
                  <td>所属栏目所属栏目</td>
                  <td>1111</td>
                  <td>权限权限</td>
                  <td>admin</td>
                  <td><a href="">编辑</a>|<a href="">删除</a>|<a href="">预览</a></td>
                </tr>

                <tr>
                  <td>1</td>
                  <td><input type="checkbox"></td>
                  <td>文章标题文章标题文章标题</td>
                  <td>1999-9-9</td>
                  <td>所属栏目所属栏目</td>
                  <td>1111</td>
                  <td>权限权限</td>
                  <td>admin</td>
                  <td><a href="">编辑</a>|<a href="">删除</a>|<a href="">预览</a></td>
                </tr>
                </tbody>
              </table>
              <div class="adl_crl">
                <div class="btn btn-default">全选</div>
                <div class="btn btn-default">取消</div>
                <div class="btn btn-default">删除</div>
              </div>
              <nav><ul class="pagination pagination-sm">
                  <li>共100条记录</li>
                  <li>首页</li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">&laquo;</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&raquo;</a></li>
                </ul></nav>
              <div class="col-md-10 col-md-offset-1">
                <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label for="" class="col-sm-2 control-label">选择栏目</label>
                    <div class="col-sm-2">
                      <select name="" id="">
                        <option value="1">栏目11111111111111111111111111111</option>
                        <option value="1">栏目</option>
                      </select>
                    </div>
                    <label for="" class="col-sm-2 control-label">关键字</label>
                    <div class="col-sm-2">
                      <input type="text" class="form-control" id="" placeholder="关键字">
                    </div>
                    <label for="" class="col-sm-2 control-label">排序</label>
                    <div class="col-sm-1">
                      <input type="text" class="form-control" id="" placeholder="排序">
                    </div>
                    <div class="col-sm-1">
                      <button type="submit" class="btn btn-default">搜索</button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>

</template>

<script>

export default {
  name: 'articleAllList',
  data () {
    return {
      artlist:[]
    }
  },
  methods: {
    changeUrl: function (_name) {
      this.$router.push({name: _name})
    }
  }
}
</script>
