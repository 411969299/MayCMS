
var async = require('async');
//var ShortId = require('mongoose-shortid');
var db = require('./index');

/*
权限表
 */
var rolesSchema = db.Schema({
    // 角色名称
    roleid: String,
    name: String,
    rank:Number,
    // 权限备注
    description: String,
    // 权限值
    roleNumber: String
});


var roleModel  =db.model('Roles', rolesSchema)



function addRoles(_o,cb){
    roleModel.create(_o, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function deleteRoles(_o,cb){
    roleModel.remove(_o,function(err, result){
        if (err) {
            return cb(err);
        } else {
            return cb(null, result);
        }
    })
}

function updateRoles(_old,_new,cb){
    roleModel.findOneAndUpdate(_old,_new, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function getallRoles(_o,cb){  // 取出所有数据 组合，，或者是挨个查询
    var query = {}
    if(_o){
        query = _o
    }
    roleModel.find(query,function (err, o) {
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
    addRoles,deleteRoles,updateRoles,getallRoles
}
