
var async = require('async');
//var ShortId = require('mongoose-shortid');
var db = require('./index');


var permSchema = db.Schema({
    permname:String,
    parent_permid: String,
    description: String,
    creatdate: { type: Date, default: Date.now }
})

var permModel  =db.model('permis', permSchema)



function addArticle(_o,cb){


    permModel.create(_o, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function deleteArt(_o,cb){
    permModel.remove(_o,function(err, result){
        if (err) {
            return cb(err);
        } else {
            return cb(null, result);
        }
    })
}

function updateArt(_old,_new,cb){
    permModel.findOneAndUpdate(_old,_new, function (err, o) {
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
    permModel.find(query,function (err, o) {
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
