<template>
  <!-- 系统用户组-->
          <div class="row">
            <div class="managerGroupList">
              <div class="pbhead "><div class="tit pull-left">系统用户组管理</div><div class="corl pull-right"><div class="btn btn-default">增加一个用户组</div><div class="btn btn-default">管理系统用户</div></div></div>
              <div class="pbhead_dec clearfix">
              </div>
              <table class="table table-striped table-hover">
                <thead>
                <tr>
                  <th>Rank</th>
                  <th>组名称</th>
                  <th>管理</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>信息发布员</td>
                  <td><a href="">权限设定</a><a href="">组用户</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>频道管理员</td>
                  <td><a href="">权限设定</a><a href="">组用户</a></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>超级管理员</td>
                  <td><a href="">权限设定</a><a href="">组用户</a></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          
</template>

<script>

export default {
  name: 'managerGroupList',
  data () {
    return {

    }
  }
}
</script>
