var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  //默认会打开public目录下的index.html
  //res.set({
  //  'Expires':'Sun, 25 Dec 2017 11:25:27 GMT',
  //  'Last-Modified':'Sun, 25 Dec 2017 11:25:27 GMT'
  //})
  res.render('index', { title: '2222222222222222' });
});

module.exports = router;
