<template>
  <!-- 系统用户组-->
          <div class="row">
            <div class="managerGroupList">
              <div class="pbhead "><div class="tit pull-left">系统用户组管理</div><div class="corl pull-right"><div @click="changeUrl('groupAdd')" class="btn btn-default">增加一个用户组</div><div class="btn btn-default">管理系统用户</div></div></div>
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
                <tr v-for="(item,index) in grouplist">
                  <td>{{index}}</td>
                  <td>{{item.name}}</td>
                  <td><router-link :to="{ name: 'groupAdd', params: { groupId: item._id }}">修改</router-link><a href="">删除</a></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

</template>

<script>
  import root from '../setting';

  import { MessageBox } from 'element-ui';
  import Vue from 'vue'
  Vue.component(MessageBox.name, MessageBox)

//  信息发布员
//  频道管理员
//  系统管理员
export default {
  name: 'groupList',
  data () {
    return {
      grouplist:[]
    }
  },
  methods:{
    ['changeUrl']: function (_name) {
      this.$router.push({name: _name})
    }
  },
  created:function(){
    var me = this
    me.$http.get(root.baseurl+'api/roles')
      .then(function (res) {
        var data = res.body;
        me.grouplist = data
      }, function () {
        MessageBox.alert('获取角色失败', '错误信息', {
          confirmButtonText: '确定'
        });
      });
  }
}
</script>
