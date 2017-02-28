<template>
  <!-- 管理员列表-->
          <div class="row">
            <div class="managersList">
              <div class="pbhead"><div class="tit pull-left">管理员账号</div><div class="corl pull-right"><div class="btn btn-default">管理员绩效统计</div><div @click="changeUrl('managerAdd')" class="btn btn-default">增加管理员</div><div class="btn btn-default">用户组管理</div></div></div>
              <div class="pbhead_dec">
              </div>
              <table class="table table-striped table-hover">
                <thead>
                <tr>
                  <th>邮箱</th>
                  <th>昵称</th>
                  <th>级别</th>
                  <th>频道</th>
                  <th>登录时间</th>
                  <th>登录ID</th>
                  <th>管理项</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="key in adminuserList">
                  <td>{{key.email}}</td>
                  <td>{{key.nickname}}</td>
                  <td>超级管理员</td>
                  <td>所有频道</td>
                  <td>{{key.lastlogintime}}</td>
                  <td>{{key._id}}</td>
                  <td><router-link :to="{ name: 'managerAdd', params: { userID: key._id }}">修改</router-link>|<a @click="deleteUserFun(key._id)">删除</a>|<router-link :to="{ name: 'mydocList', params: { userID: key._id }}">文档</router-link></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

</template>

<script>
  import root from '../setting';
  var $ = require('jquery')
export default {
  name: 'managersList',
  data () {
    return {
      adminuserList:[]
    }
  },
  methods:{
    ['changeUrl']: function (_name) {
      this.$router.push({name: _name})
    },
    ['deleteUserFun'](_userid){

    },
    ['updataUserFun'](_userid){
    },
    ['userArtFun'](_userid){

    }
  },
  created:function(){

    var me = this
    me.$http.get(root.baseurl+'api/admin-users')
      .then(function (res) {
        var data = res.body;
        this.adminuserList = res.data
      }, function () {
        MessageBox.alert('获取用户失败', '错误信息', {
          confirmButtonText: '确定'
        });
      });
  }
}
</script>
