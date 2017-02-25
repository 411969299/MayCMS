<template>
  <!-- 新增系统用户组-->
          <div class="row" id="ManagerGroupAdd">
            <div class="addManagerGroup">
              <div class="pbhead "><div class="tit pull-left">新增系统用户组</div><div class="corl pull-right"></div></div>
              <div class="pbhead_dec clearfix">
              </div>
              <div class="addmang">
                <div class="row">
                  <div class="col-md-1">组名称：</div>
                  <div class="col-md-2">
                    <input type="text">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">备注：</div>
                  <div class="col-md-2">
                    <input type="text">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">级别值：</div>
                  <div class="col-md-2">
                    <input type="text">
                  </div>
                </div>
                <div class="row">
                  <table class="table table-striped">
                    <thead>
                    <tr>
                      <th class="text-center">名称</th>
                      <th class="text-center">权限</th>
                    </tr>
                    </thead>
                    <tbody class="rolesarr">
                    <tr>
                      <td>文章管理</td>
                      <td>
                        <label @click="arc=0" :class="{'active': arc === 0 }" class="btn btn-default">无权限</label><label @click="arc=1" :class="{'active': arc === 1 }" class="btn btn-default">仅查看</label><label @click="arc=2" :class="{'active': arc === 2 }" class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    <tr>
                      <td>频道管理</td>
                      <td>
                        <label class="btn btn-default">无权限</label><label class="btn btn-default active">仅查看</label><label class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    <tr>
                      <td>推荐管理</td>
                      <td>
                        <label class="btn btn-default">无权限</label><label class="btn btn-default active">仅查看</label><label class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    <tr>
                      <td>单页管理</td>
                      <td>
                        <label class="btn btn-default">无权限</label><label class="btn btn-default active">仅查看</label><label class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    <tr>
                      <td>媒体库</td>
                      <td>
                        <label class="btn btn-default">无权限</label><label class="btn btn-default active">仅查看</label><label class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    <tr>
                      <td>个人账号设置</td>
                      <td>
                        <label class="btn btn-default">无权限</label><label class="btn btn-default active">仅查看</label><label class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    <tr>
                      <td>网站配置</td>
                      <td>
                        <label class="btn btn-default">无权限</label><label class="btn btn-default active">仅查看</label><label class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    <tr>
                      <td>权限管理</td>
                      <td>
                        <label class="btn btn-default">无权限</label><label class="btn btn-default active">仅查看</label><label class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    <tr>
                      <td>后台用户管理</td>
                      <td>
                        <label class="btn btn-default">无权限</label><label class="btn btn-default active">仅查看</label><label class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div class="addmang_btn">
                    <div class="btn btn-default">保存</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

</template>

<script>

export default {
  name: 'managerGroupAdd',
  data () {
    return {
      arc:1
    }
  }
}
  /*
  * 先建立一个权限表，一个用户组表，一个角色表 RBAC
  * */
</script>

<style>
  #ManagerGroupAdd .rolesarr label{

  }
  #ManagerGroupAdd .rolesarr label.active{
    color: #333;
    background-color: #d4d4d4;
    border-color: #8c8c8c;
    outline: 0;
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
  }

  #ManagerGroupAdd .rolesarr label:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  #ManagerGroupAdd .rolesarr label:last-child{
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  #ManagerGroupAdd .rolesarr label:first-child{
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
</style>
