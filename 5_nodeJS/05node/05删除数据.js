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

Model.remove({name:"吴显毅"}, (err) =>{
    if (err) {
        console.error(err);
    } else {
        console.log("删除成功!");
    }
});

