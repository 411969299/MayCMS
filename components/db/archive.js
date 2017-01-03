


var mongoose = require('mongoose');
var async = require('async');
//var ShortId = require('mongoose-shortid');
var db = require('./index');


var artSchema = mongoose.Schema({
    artid: {type:String,default:'0'},
    title:String,
    shorttitle: String,
    writer: String,
    description: String,
    content: String,
    keywords: String,
    seotitle: String,
    source: String,  //来源
    flag: Array,  //自定义属性集合
    tag:Array, //tag标签
    rank: String,
    click: String,  //点击量
    goodpost: Number,  //点赞数
    badpost: Number,  //非点赞数
    columnId:String,  //所属栏目ID
    columnName:String,  //所属栏目名称
    pubdate:{ type: Date, default: Date.now },  //发布时间
    creatdate: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
})

var artModel  =mongoose.model('article', artSchema)



function addArticle(_o,cb){
    artModel.create(_o, function (err, o) {
        if (err){
            return cb(err);
        }else{
            return cb(null,o);
        }
    })
}

function deletecol(_o,cb){
    //columnModel.remove({ $or: [ {colid:_o}, {parentId:_o} ] },function(err, result){
    //    if (err) {
    //        return cb(err);
    //    } else {
    //        return cb(null, result);
    //    }
    //})
}

function updatecol(_old,_new,cb){

}

function getallArt(_o,cb){  // 取出所有数据 组合，，或者是挨个查询

}
module.exports = {
    addArticle,getallArt
}
