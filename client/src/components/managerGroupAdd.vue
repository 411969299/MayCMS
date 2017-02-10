<template>
  <!-- 新增系统用户组-->
          <div class="row">
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
                  <div class="col-md-1">级别值：</div>
                  <div class="col-md-2">
                    <input type="text">
                  </div>
                </div>
                <div class="row">
                  <table class="table table-striped">
                    <tbody>
                    <tr>
                      <td>1,特别权限</td>
                    </tr>
                    <tr>
                      <td>
                        <label for=""><input type="checkbox">权限1</label><label for=""><input type="checkbox">权限1</label>
                      </td>
                    </tr>
                    <tr>
                      <td>2,特别权限</td>
                    </tr>
                    <tr>
                      <td>
                        <label for=""><input type="checkbox">权限1</label><label for=""><input type="checkbox">权限1</label>
                      </td>
                    </tr>
                    <tr>
                      <td>3,特别权限</td>
                    </tr>
                    <tr>
                      <td>
                        <label for=""><input type="checkbox">权限1</label><label for=""><input type="checkbox">权限1</label>
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

    }
  }
}
  /*
  * 先建立一个权限表，一个用户组表，一个角色表 RBAC
  * */
</script>
