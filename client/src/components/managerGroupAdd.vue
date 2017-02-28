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
                    <input type="text" v-model="name" placeholder="组名称" id="roleName">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">备注：</div>
                  <div class="col-md-2">
                    <input type="text" v-model="description" placeholder="备注" id="description">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">级别值：</div>
                  <div class="col-md-2">
                    <input type="text" id="roleRank">
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

                    <tr v-for="item in authorities">
                      <td>{{item.description}}</td>
                      <td>
                        <label @click="item.select=0" :class="{'active': item.select === 0 }" class="btn btn-default">无权限</label><label @click="item.select=1" :class="{'active': item.select === 1 }" class="btn btn-default">仅查看</label><label @click="item.select=2" :class="{'active': item.select === 2 }" class="btn btn-default">查看和编辑</label>
                      </td>
                    </tr>

                    </tbody>
                  </table>
                  <div class="addmang_btn">
                    <div @click="saveRole" class="btn btn-default">保存</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

</template>

<script>
  import root from '../setting';
  var _ = require('lodash')
  import parallel from 'async/parallel'

  import { MessageBox } from 'element-ui';
  import Vue from 'vue'
  Vue.component(MessageBox.name, MessageBox)

export default {
  name: 'managerGroupAdd',
  data () {
    return {
      name:'',
      description:'',
      authorities:[]
    }
  },
  methods:{
    saveRole:function(){
      var me = this
      var role = {
        name: me.name,
        description: me.description,
        rank:0,
        authorities: []
      }
      _.forEach(me.authorities, function (authority) {

        switch (authority.select) {
          case 0: break;
          case 1:
            _.forEach(authority.authorities, function (authority) {
              if (authority.name === 'read') role.authorities.push(authority.code);
            });
            break;
          case 2:
            _.forEach(authority.authorities, function (authority) {
              if (authority.name === 'read') role.authorities.push(authority.code);
              if (authority.name === 'edit') role.authorities.push(authority.code);
            });
        }
      });

      if (me.$route.params.groupId) { // 修改
        role._id = me.$route.params.groupId;

        me.$http.put(root.baseurl+'api/roles/' + me.$route.params.groupId, role)
          .then(function () {
            MessageBox.alert('保存角色成功', '提示信息', {
              confirmButtonText: '确定',
              type:'success'
            });
          }, function () {
            MessageBox.alert('保存角色失败', '错误信息', {
              confirmButtonText: '确定',
              type:'error'
            });
          });
      } else {
        me.$http.post(root.baseurl+'api/roles', role)
          .then(function () {
            console.log('新增角色成功')
          }, function () {
            console.log('新增角色失败')
          });
      }
    }
  },
  created:function(){
    var me = this
    parallel({
      authorities: function (callback) {
        me.$http.get(root.baseurl+'api/authorities').then(response => {

          var data = _.reject(response.body, { code: 100000 });
        callback(null, data);

      }, response => {
          callback('获取权限失败');
        });
      },
      role: function (callback) {
        var _id = me.$route.params.groupId
        if (_id) {
          //$scope.action = 'update';
          me.$http.get(root.baseurl+'api/roles/' + _id)
            .then(function (res) {
              var data = res.body;
              callback(null, data);
            }, function () {
              callback('获取角色失败');
            });
        } else {
          callback(null);
        }
      }
    },function(err,results){
      if (err) {
        console.log(err)
        return false;
      }

      me.authorities = _.map(results.authorities, function (authority) {
        authority.select = 0;
        return authority;
      });

      if (results.role) {
        me.name = results.role.name;
        me.description = results.role.description;

        _.forEach(me.authorities, function (authority) {
          authority.select = 0;

          var read = _.find(authority.authorities, { name: 'read' }).code;
          var edit = _.find(authority.authorities, { name: 'edit' }).code;

          var userRead = _.find(results.role.authorities, function (readCode) {
            return readCode === read;
          });

          var userEdit = _.find(results.role.authorities, function (editCode) {
            return editCode === edit;
          });

          if (userRead && userEdit) {
            authority.select = 2;
          } else if (userRead) {
            authority.select = 1;
          }
        });
      }
    })

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
