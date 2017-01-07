
var async = require('async');
//var ShortId = require('mongoose-shortid');
var db = require('./index');

/*
角色表
 */

var roleSchema = db.Schema({
    rolename:String,
    parent_rid:{ type: String, default:'0' }, //父级id
    description:String,
    creatdate: { type: Date, default: Date.now }
})

var roleModel  =db.model('role', roleSchema)



function addArticle(_o,cb){
    roleModel.create(_o, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function deleteArt(_o,cb){
    roleModel.remove(_o,function(err, result){
        if (err) {
            return cb(err);
        } else {
            return cb(null, result);
        }
    })
}

function updateArt(_old,_new,cb){
    roleModel.findOneAndUpdate(_old,_new, function (err, o) {
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
    addArticle,getallArt,deleteArt,updateArt
}
