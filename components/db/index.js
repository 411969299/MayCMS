var cfg = require('./config')
var mongoose = require('mongoose');
mongoose.connect(cfg.URL);

//var db = mongoose.connection;
module.exports = mongoose;
