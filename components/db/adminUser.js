
var async = require('async');
//var ShortId = require('mongoose-shortid');
var db = require('./index');

/*
后台用户表
 */
var userSchema = db.Schema({
    userid:String,
    loginID:String,
    penName:String,
    trueName:String,
    score: {type:Number,default:0}, //用户积分
    groupid:String,
    status: String,  //用户状态
    pwd: String,  //密码
    email: String,
    role: {
        type: db.Schema.Types.ObjectId,
        ref: 'Roles'
    },
    last_login_time:Date, // 最近一次登录时间
    reg_time: { type: Date, default: Date.now }  //注册时间
})

var userModel  =db.model('user', userSchema)



function addUser(_o,cb){
    userModel.create(_o, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function deleteUser(_o,cb){
    userModel.remove(_o,function(err, result){
        if (err) {
            return cb(err);
        } else {
            return cb(null, result);
        }
    })
}

function updateUser(_old,_new,cb){
    userModel.findOneAndUpdate(_old,_new, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function getallUser(_o,cb){  // 取出所有数据 组合，，或者是挨个查询
    userModel.find(_o,function (err, o) {
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
    addUser,deleteUser,updateUser,getallUser
}
