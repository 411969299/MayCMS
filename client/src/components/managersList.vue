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
                  <th>登录ID</th>
                  <th>笔名</th>
                  <th>级别</th>
                  <th>频道</th>
                  <th>登录时间</th>
                  <th>登录IP</th>
                  <th>管理项</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="key in adminuserList">
                  <td>{{key.loginID}}</td>
                  <td>{{key.penName}}</td>
                  <td>超级管理员</td>
                  <td>所有频道</td>
                  <td>{{key.last_login_time}}</td>
                  <td>22222</td>
                  <td><a  @click="updataUserFun(key.userid)">更改</a>|<a @click="deleteUserFun(key.userid)">删除</a>|<a @click="userArtFun(key.userid)">文档</a></td>
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
    $.post(root.baseurl+'api/adminUser/getallUser','',(res) =>{
      if(res.code == 1){
      this.adminuserList = res.data
    }else{
      console.log(res.msg)
    }
  })
  }
}
</script>
