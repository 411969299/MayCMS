var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/manage/*', function(req, res, next) {
  res.render('manage', { title: '网站管理后台' });
});

module.exports = router;
