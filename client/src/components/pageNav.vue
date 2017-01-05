<template>

    <ul>
      <li><router-link :to="{ name: 'columnList'}">网站栏目管理</router-link></li>
      <li><router-link :to="{ name: 'alldocList'}">所有档案列表</router-link></li>
      <li><router-link :to="{ name: 'mydocList'}">我发布的文档</router-link></li>
      <li><router-link :to="{ name: 'groupList'}">系统用户组</router-link></li>
      <li><router-link :to="{ name: 'managersList'}">管理员列表</router-link></li>
      <li><router-link :to="{ name: 'sysCfg'}">系统参数</router-link></li>
    </ul>
</template>

<script>
export default {
  name: 'pageNav',
  data () {
    return {
    }
  }
}
</script>


