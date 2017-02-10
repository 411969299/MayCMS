var express = require('express');
var router = express.Router();
var ShortId = require('shortid');
var colObj = require('../components/db/column')
var artObj = require('../components/db/archive')
var adminUserObj = require('../components/db/adminUser')
var rolesObj = require('../components/db/role')

// 栏目接口开始
var getColData = null

router.get('/column/getCol', function(req, res, next) {
  var colid = (req.query.colid && req.query.colid != '')?req.query.colid:null
  //console.log(req.body)
  //if(getColData){
  //  res.send({code:1,data:getColData,msg:'reok'});
  //}else{
  //
  //}

  colObj.getcol(colid,function(err,result){
    if(!err){
      getColData = result
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })
});

router.post('/column/addTopCol', function(req, res, next) {
  var field = req.body
  var date = new Date();
  var obj = {
    colid: ShortId.generate(),
    parentId:0,
    colname: field.colname,
    colname2: field.colname2,
    coltype: field.coltype,
    description: field.description,
    keywords: field.keywords,
    seotitle: field.seotitle,
    colprop: field.colprop,
    rank: field.rank,
    colrule: field.colrule,
    content: field.content,
    creatdate: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    updated: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  }

  colObj.addTopCol(obj,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })

});

router.post('/column/addChildCol', function(req, res, next) {
  var field = req.body
  var date = new Date();
  var obj = {
    colid: ShortId.generate(),
    parentId:field.parentId,
    colname: field.colname,
    colname2: field.colname2,
    coltype: field.coltype,
    description: field.description,
    keywords: field.keywords,
    seotitle: field.seotitle,
    colprop: field.colprop,
    rank: field.rank,
    colrule: field.colrule,
    content: field.content,
    creatdate: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    updated: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  }

  colObj.addChildCol(obj,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })

});

router.post('/column/updateCol', function(req, res, next) {
  var field = req.body
  var date = new Date();
  var obj = {
    colname: field.colname,
    colname2: field.colname2,
    coltype: field.coltype,
    description: field.description,
    keywords: field.keywords,
    seotitle: field.seotitle,
    colprop: field.colprop,
    rank: field.rank,
    colrule: field.colrule,
    content: field.content,
    updated: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  }
  //console.log({colid: field.colid,})
  //console.log('----------')
  colObj.updatecol({colid: field.colid},obj,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })

  //if(field && field!=''){
  //
  //
  //}else{
  //  //res.send({code:0,data:null,msg:'参数错误'});
  //}
});
router.post('/column/deleteCol', function(req, res, next) {
  var field = req.body.colid
  //var field = req.query.colid
  if(field && field!=''){
    colObj.deletecol(field,function(err,result){
      if(!err){
        res.send({code:1,data:result,msg:'ok'});
      }else{
        res.send({code:0,data:null,msg:err});
      }
    })
  }else{
    res.send({code:0,data:null,msg:'参数错误'});
  }

});

//----------------------------------------------
// 文章接口开始artObj


router.post('/article/getallArt', function(req, res, next) {
  //console.log(req.body)
  //var artobj = (req.body && req.body != '')?req.body:null

  artObj.getallArt(req.body,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })
});

router.post('/article/addArticle', function(req, res, next) {
  var field = req.body.jsonobj
  field = JSON.parse(field)
  var date = new Date();
  var obj = {
    artid: ShortId.generate(),
    title:field.title,
    shorttitle: field.shorttitle,
    writer: field.writer,
    description: field.description,
    keywords: field.keywords,
    seotitle: field.seotitle,
    source: field.source,  //来源
    flag: field.flag,  //自定义属性
    rank: field.rank,
    tag: field.tag,
    click: field.click,  //点击量
    columnName: field.columnName,
    content:field.content,
    columnId:field.columnId,  //所属栏目ID
    creatdate: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    updated: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  }

  artObj.addArticle(obj,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })

});



router.post('/article/updateArt', function(req, res, next) {
  var field = req.body.jsonobj
  field = JSON.parse(field)
  var date = new Date();
  var obj = {
    title:field.title,
    shorttitle: field.shorttitle,
    writer: field.writer,
    description: field.description,
    keywords: field.keywords,
    seotitle: field.seotitle,
    source: field.source,  //来源
    flag: field.flag,  //自定义属性
    rank: field.rank,
    tag: field.tag,
    click: field.click,  //点击量
    columnName: field.columnName,
    content:field.content,
    columnId:field.columnId,  //所属栏目ID
    updated: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  }

  artObj.updateArt({artid: field.artid},obj,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })

  //if(field && field!=''){
  //
  //
  //}else{
  //  //res.send({code:0,data:null,msg:'参数错误'});
  //}
});
router.post('/article/deleteArt', function(req, res, next) {
  var field = req.body.artid
  //var field = req.query.colid
  //console.log(field)
  if(field && field!=''){
    artObj.deleteArt({artid:field},function(err,result){
      if(!err){
        res.send({code:1,data:result,msg:'ok'});
      }else{
        res.send({code:0,data:null,msg:err});
      }
    })
  }else{
    res.send({code:0,data:null,msg:'参数错误'});
  }

});


//----------------------------------------------
//后台用户接口开始


router.post('/adminUser/getallUser', function(req, res, next) {
  var rb = req.body,query = {}
  if(rb.userid && rb.userid !=''){
    query._id = rb.userid
  }
  adminUserObj.getallUser(query,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })
});

router.post('/adminUser/addUser', function(req, res, next) {
  var field = req.body
  var date = new Date();
  var obj = {
    userid: ShortId.generate(),
    loginID:field.loginID,
    uname:field.uname,
    penName:field.penName,
    trueName:field.trueName,
    score: 0,
    groupid:field.groupid,
    status: '',  //用户状态
    pwd: field.pwd,  //密码
    email: field.email,
    last_login_time:date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(), // 最近一次登录时间
    reg_time: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()  //注册时间
  }

  adminUserObj.addUser(obj,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })

});



router.post('/adminUser/updateUser', function(req, res, next) {
  var field = req.body.jsonobj
  field = JSON.parse(field)
  var date = new Date();
  var obj = {
    title:field.title,
    shorttitle: field.shorttitle,
    writer: field.writer,
    description: field.description,
    keywords: field.keywords,
    seotitle: field.seotitle,
    source: field.source,  //来源
    flag: field.flag,  //自定义属性
    rank: field.rank,
    tag: field.tag,
    click: field.click,  //点击量
    columnName: field.columnName,
    content:field.content,
    columnId:field.columnId,  //所属栏目ID
    updated: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  }

  adminUserObj.updateUser({artid: field.artid},obj,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })

});
router.post('/adminUser/deleteUser', function(req, res, next) {
  var field = req.body.artid
  //var field = req.query.colid
  //console.log(field)
  if(field && field!=''){
    adminUserObj.deleteUser({artid:field},function(err,result){
      if(!err){
        res.send({code:1,data:result,msg:'ok'});
      }else{
        res.send({code:0,data:null,msg:err});
      }
    })
  }else{
    res.send({code:0,data:null,msg:'参数错误'});
  }

});
router.get('/role/addRoles', function(req, res, next) {
  //var field = req.body
  var obj = {
    name: '超级管理员',
    rank:1,
    description: '超级管理员',
    // 权限列表
    authorities: [99999,22222]
  }

  rolesObj.addRoles(obj,function(err,result){
    if(!err){
      res.send({code:1,data:result,msg:'ok'});
    }else{
      res.send({code:0,data:null,msg:err});
    }
  })

});

module.exports = router;
