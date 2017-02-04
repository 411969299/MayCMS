var express = require('express');
var router = express.Router();
var ShortId = require('shortid');

/* GET home page. */

//router.use('//',function(req, res, next) {  //后续Redis持久化
//  console.log('is session')
//  var sess = req.session
//  if (sess.views) {
//    next()
//  } else {
//    //res.render('login', { title: '登录' })
//    res.render('register', { title: '注册' })
//  }
//})

router.get('/', function(req, res, next) {
  res.render('index', { title: '2222222222222222' });
});
router.get('/details/:id', function (req, res, next) {

  var id = req.params.id;
  if(ShortId.isValid(id)){

  }else{

  }

});
module.exports = router;
