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
                    <input type="text" id="email" v-model="email" placeholder="Email">
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-1">昵称</div>
                  <div class="col-md-2">
                    <input type="text" id="nickName" v-model="nickname" placeholder="昵称">
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-1">用户密码</div>
                  <div class="col-md-2">
                    <input type="password" id="password" v-model="password" placeholder="用户密码">
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-1">用户组</div>
                  <div class="col-md-2">
                    <select name="" id="groupID">
                      <option v-for="item in group" :value="item._id">{{item.name}}</option>
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
                    <input type="text" id="trueName" v-model="trueName" placeholder="真实姓名">
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
                <div @click="saveUser()" class="btn btn-default">增加用户</div>
              </div>
            </div>
          </div>

</template>

<script>
  import root from '../setting';
  var _ = require('lodash')
  var $ = require('jquery')
  import parallel from 'async/parallel'

  import { MessageBox } from 'element-ui';
  import Vue from 'vue'
  Vue.component(MessageBox.name, MessageBox)


export default {
  name: 'managerAdd',
  data () {
    return {
      email:'',
      nickname:'',
      role:'',
      password:'',
      trueName:'',
      group:[]
    }
  },
  methods: {
    ['saveUser']: function () {
      var me = this
      var user = {
        email: me.email,
        nickname: me.nickname,
        password : me.password,
        role:$('#groupID').val()
      };

      if(false) {
//        user._id = $stateParams._id;
//
//        $http.put('/api/admin-users/' + $stateParams._id, user)
//          .then(function () {
//            $scope.$emit('notification', {
//              type: 'success',
//              message: '保存用户成功'
//            });
//
//            $scope.$emit('mainUserUpdate');
//
//            $state.go('main.adminUsers', null, { reload: 'main.adminUsers' });
//          }, function () {
//            $scope.$emit('notification', {
//              type: 'danger',
//              message: '保存用户失败'
//            });
//          });
      } else {
        me.$http.post(root.baseurl+'api/admin-users', user)
          .then(function () {
            MessageBox.alert('创建用户成功', '提示信息', {
              confirmButtonText: '确定',
              type:'success',
              callback:action =>{
                me.$router.push({name: 'managersList'})
              }
            });
          }, function () {
            MessageBox.alert('创建用户失败', '提示信息', {
              confirmButtonText: '确定',
              type:'error'
            })
          });
      }

    }

  },
  created:function(){
    var me = this
    parallel({
      // 获取权限列表
      roles: function (callback) {
        me.$http.get(root.baseurl+'api/roles')
          .then(function (res) {
            var data = res.body;

            var newRoles= _.reject(data, function (role) {
              return _.find(role.authorities, function (authority) {
                return authority === 100000;
              });
            });

            callback(null, newRoles);
          }, function () {
            callback('获取角色列表失败');
          });
      },

      // 获取当前用户
      user: function (callback) {
//        if ($stateParams._id) {
//          $scope.action = 'update';
//
//          $http.get('/api/admin-users/' + $stateParams._id)
//            .then(function (res) {
//              callback(null, res.data);
//            }, function () {
//              callback('获取用户失败');
//            })
//        } else {
//          callback(null);
//        }
        callback(null);
      }
    }, function (err, results) {
      if (err) {
        return false
      }
      me.group = results.roles;
//
//      if ($stateParams._id && results.user) {
//        $scope.oldEmail = angular.copy(results.user.email);
//        $scope.email = results.user.email;
//        $scope.nickname = results.user.nickname;
//        $scope.role = results.user.role._id;
//      } else if ($stateParams._id) {
//        //跳转管理员列表页
//      }
    });
  }
}
</script>
