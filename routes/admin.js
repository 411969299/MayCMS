var express = require('express');
var router = express.Router();
//var adminUserObj = require('../components/db/adminUser')
//
// 前台用户登录注册逻辑
//router.use(function(req, res,next){
//  if(req.url=="/login"){
//    next()
//  }else {
//    next()
//  }
//})
//router.get('/login', function(req, res) {
//  res.render('login', { title: '登录' });
//});
//
//
//router.post('/login', function(req, res, next) {
//  var field = req.body
//  var date = new Date();
//  var obj = {
//    uname:field.uname,
//    pwd: field.pwd,
//    last_login_time:date
//  }
//
//  adminUserObj.addUser(obj,function(err,result){
//    if(!err){
//      res.send({code:1,data:result,msg:'ok'});
//    }else{
//      res.send({code:0,data:null,msg:err});
//    }
//  })
//
//});
//
//router.post('/register', function(req, res, next) {
//  var field = req.body
//  var date = new Date();
//  var obj = {
//    uname:field.uname,
//    sex: field,
//    qq: field,
//    //score: {type:Number,default:0}, //用户积分
//    //status: String,  //用户状态
//    pwd: field.pwd,  //密码
//    email: field.email,
//    phone: field.phone,  //
//    utype: field.utype,  //  用户类型
//    last_login_time:Date, // 最近一次登录时间
//    reg_time: date
//  }
//
//  adminUserObj.addUser(obj,function(err,result){
//    if(!err){
//      res.send({code:1,data:result,msg:'ok'});
//    }else{
//      res.send({code:0,data:null,msg:err});
//    }
//  })
//
//});
router.get('/manage/*', function(req, res, next) {
  res.render('manage', { title: '网站管理后台' });
});
module.exports = router;
