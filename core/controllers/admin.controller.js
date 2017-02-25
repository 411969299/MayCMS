/**
 * 后台首页
 * @param {Object} req
 * @param {Object} res
 */

exports.manage = function (req, res) {
  res.render('manage', { title: '网站管理后台' });
};