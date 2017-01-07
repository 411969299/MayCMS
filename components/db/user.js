
var async = require('async');
//var ShortId = require('mongoose-shortid');
var db = require('./index');

/*
用户表
 */
var userSchema = db.Schema({
    uname:String,
    sex: String,
    qq: String,
    score: {type:Number,default:0}, //用户积分
    status: String,  //用户状态
    pwd: String,  //密码
    email: String,
    phone: String,  //
    utype: Array,  //
    last_login_time:Date, //
    reg_time: { type: Date, default: Date.now }
})

var userModel  =db.model('user', userSchema)



function addArticle(_o,cb){
    userModel.create(_o, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function deleteArt(_o,cb){
    userModel.remove(_o,function(err, result){
        if (err) {
            return cb(err);
        } else {
            return cb(null, result);
        }
    })
}

function updateArt(_old,_new,cb){
    userModel.findOneAndUpdate(_old,_new, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function getallArt(_o,cb){  // 取出所有数据 组合，，或者是挨个查询
    var query = {}
    if(_o){
        query = _o
    }
    userModel.find(query,function (err, o) {
        if (err){
            return cb(err);
        }else{
            if(o && o.length && o.length > 0){
                return cb(null,o);
            }else{
                return cb('没有数据');
            }
        }
    })
}
module.exports = {
    addArticle,getallArt,deleteArt,updateArt
}
