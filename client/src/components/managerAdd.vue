<template>
  <!-- 添加管理员-->
          <div class="row">
            <div class="addManager">
              <div class="pbhead "><div class="tit pull-left">新增管理员账号</div><div class="corl pull-right"><div class="btn btn-default">管理账号</div></div></div>
              <div class="pbhead_dec clearfix">
              </div>
              <div class="addform ">
                <div class="row">
                  <div class="col-md-1">Email</div>
                  <div class="col-md-2">
                    <input type="text" id="email">
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-1">昵称</div>
                  <div class="col-md-2">
                    <input type="text" id="nickName">
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-1">用户密码</div>
                  <div class="col-md-2">
                    <input type="password" id="password">
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-1">用户组</div>
                  <div class="col-md-2">
                    <select name="" id="groupid">
                      <option value="1">1111111111</option>
                    </select>
                  </div>
                  <div class="col-md-1"><a href="">用户组设定</a></div>
                </div>

                <div class="row">
                  <div class="col-md-1">授权栏目</div>
                  <div class="col-md-2">
                    <select name="" id="">
                      <option value="1">所有栏目</option>
                      <option value="1">1栏目</option>
                      <option value="1">1栏目目</option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-1">真实姓名</div>
                  <div class="col-md-2">
                    <input type="text" id="trueName">
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-1">安全验证串</div>
                  <div class="col-md-2">
                    <input type="text">
                  </div>
                  <div class="col-md-1">1111111111111111111111</div>
                </div>
              </div>
              <div class="addform">
                <div @click="addUserFun()" class="btn btn-default">增加用户</div>
              </div>
            </div>
          </div>

</template>

<script>
  import root from '../setting';
  var $ = require('jquery')
export default {
  name: 'managerAdd',
  data () {
    return {

    }
  },
  methods: {
    ['addUserFun']: function () {
      var obj = {
        email:$('#email').val(),
        nickName:$('#nickName').val(),
        password:$('#password').val(),
        groupid:$('#groupid').val(),
        trueName:$('#trueName').val()
      }
      $.post(root.baseurl+'api/admin-users',obj,(res) =>{
        if(res.code == 1){
        this.$router.push({name: 'managersList'})
      }else{
        console.log(res.msg)
      }
    })
    }
  }
}
</script>
