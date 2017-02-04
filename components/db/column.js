
var async = require('async');
//var ShortId = require('mongoose-shortid');
var db = require('./index');

var colSchema = db.Schema({
    colid: {type:String,default:'0'},
    parentId: {type:String,default:'0'},
    childCol:Array,
    colname: String,
    colname2: { type: String , index: true},
    coltype: String,
    description: String,
    keywords: String,
    seotitle: String,
    colprop: String,
    rank: String,
    colrule: String,
    content: String,
    creatdate: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})

var columnModel  =db.model('column', colSchema)


function addTopCol(_o,cb){
    columnModel.create(_o, function (err, o) {
        //db.close()  加上之后 未知原因的卡死 待解决
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}
function addChildCol(_o,cb){

    columnModel.findOne({colid:_o.parentId},function(err, o){
        if (err){
            return cb(err);
        }else {
            if(o){
                columnModel.create(_o, function (err, o) {
                    //db.close()  加上之后 未知原因的卡死 待解决
                    if (err){
                        return cb(err);
                    }else{
                        return cb(null,o);
                    }
                })
            }else{
                return cb('没有数据');
            }
        }
    })
}

function deletecol(_o,cb){
    columnModel.remove({ $or: [ {colid:_o}, {parentId:_o} ] },function(err, result){
        if (err) {
            return cb(err);
        } else {
            return cb(null, result);
        }
    })
}

function updatecol(_old,_new,cb){
    //console.log(_new)
    columnModel.findOneAndUpdate(_old,_new, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function getcol(_o,cb){  // 取出所有数据 组合，，或者是挨个查询
    var query = {}
    if(_o){
        query.colid = _o
    }else{
        query.parentId = "0"  //一级分类
    }

    columnModel.find(query, function (err, o) {
        if (err){
            return cb(err);
        }else{
            if(o && o.length && o.length > 0){
                var arr = o.map(function(c){
                    return function (callback){
                        columnModel.find({parentId:c.colid}, callback)
                    }
                })
                //console.log(arr)
                async.parallel(arr,function(err, results){  //并行
                    if (err){
                        return cb(err);
                    }else{
                        for(var i =0;i<o.length;i++){
                            o[i].childCol = results[i]?results[i]:[]
                            //console.log(i)
                        }
                        //console.log(results)
                        return cb(null,o);
                    }

                })
            }else{
                return cb('没有数据');
            }
        }
    })
}
module.exports = {
    addTopCol:addTopCol,
    addChildCol:addChildCol,
    deletecol:deletecol,
    updatecol:updatecol,
    getcol:getcol
}
