
import admin from '../components/admin'
import articleAdd from '../components/articleAdd'
import articleAllList from '../components/articleAllList'
import columnAdd from '../components/columnAdd'
import columnList from '../components/columnList'
import managerAdd from '../components/managerAdd'
import managerGroupAdd from '../components/managerGroupAdd'
import managerGroupList from '../components/managerGroupList'
import managersList from '../components/managersList'
//import admin from '../components/admin'
//import admin from '../components/admin'

var root = '/admin/manage/'
const routes = [
  { path: root,name: 'manage',component:admin,children:[
    {
      path:'columnList',name:'columnList',component:columnList  //网站栏目管理
    },
    {
      path:'alldocList',name: 'alldocList',component:articleAllList  //所有档案列表
    },
    {
      path:'mydocList',name: 'mydocList',component:articleAdd //我发布的文档
    },
    {
      path:'groupList',name: 'groupList',component:managerGroupList  //系统用户组
    },
    {
      path:'managersList',name: 'managersList',component:managersList  //管理员列表
    },
    {
      path:'sysCfg',name: 'sysCfg',component:articleAdd  //系统参数
    },
    {
      path:'articleAdd',name: 'articleAdd',component:articleAdd
    },
    {
      path:'columnAdd',name: 'columnAdd',component:columnAdd
    },
    {
      path:'managerAdd',name: 'managerAdd',component:managerAdd
    },
    {
      path:'managerGroupAdd',name: 'managerGroupAdd',component:managerGroupAdd
    }
  ]}
]

export default routes





