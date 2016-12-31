var express = require('express');
var router = express.Router();
var ShortId = require('shortid');
var colObj = require('../components/db/column')

var getColData = null

router.get('/getCol', function(req, res, next) {
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

router.post('/addTopCol', function(req, res, next) {
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

router.post('/addChildCol', function(req, res, next) {
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

router.post('/updateCol', function(req, res, next) {
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
router.post('/deleteCol', function(req, res, next) {
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
module.exports = router;
