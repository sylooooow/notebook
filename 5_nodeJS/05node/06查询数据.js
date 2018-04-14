//引入mongoose模块
var mongoose = require("mongoose");

//链接数据库,如果不给数据库名字,默认连接到test
var url = "mongodb://127.0.0.1:27017/node1211";
var db = mongoose.connect(url, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("连接成功!");
    }
});

//schema: 一种以文件形式存储的数据模型骨架
var schema = new mongoose.Schema({
   name:{type:String},
   age :{type:Number,default:0}
},{
    collection:"person"
});

//model 由schema构造生成的数据模型
var Model = mongoose.model("person", schema);

//查询所有
Model.find({}, (err,doc) => {
    if (err) {
        console.error(err);
    } else {
        console.log(doc);
    }
});

//查询单条
Model.findOne({name:"吴显毅"}, (err,doc) => {
    if (err) {
        console.error(err);
    } else {
        console.log(doc);
    }
});

//根据id查询
Model.findById("id", (err,doc) => {
    if (err) {
        console.error(err);
    } else {
        console.log(doc);
    }
});

//大于$gt 大于等于gte 小于lt 小于等于lte 不等于ne
Model.find({age:{$gt:18}}, (err,doc) => {
    if (err) {
        console.error(err);
    } else {
        console.log(doc);
    }
});

//或者(模糊查询)
Model.find({$or:[{age:{$lte:18}},{age:{$gte:25}}]},(err,doc)=>{
    if(err){
        console.error(err);
    }else {
        console.log(doc);
    }
});

//某一个字段是否存在
Model.find({"__v":{$exists:true}}, (err,doc) => {
    if(err){
        console.error(err);
    }else {
        console.log(doc);
    }
});

//根据条件显示多少条limit
Model.find({}, null, {limit:3}, (err,doc) => {
    if(err){
        console.error(err);
    }else {
        console.log(doc);
    }
});

//skip跳过n个数据
Model.find({}, null, {skip:2}, (err,doc) => {
    if(err){
        console.error(err);
    }else {
        console.log(doc);
    }
});

//skip 和 limit结合使用
Model.find({}, null, {skip:2, limit:2}, (err,doc) => {
    if(err){
        console.error(err);
    }else {
        console.log(doc);
    }
});

//排序 1升序 -1降序
Model.find({}, null, {sort:{age:1}}, (err,doc) => {
    if(err){
        console.error(err);
    }else {
        console.log(doc);
    }
});
