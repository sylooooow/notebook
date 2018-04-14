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

//插入数据
Model.create({name:"迟晓楠",age:22}, (err,doc) => {
    if (err) {
        console.error(err);
    } else {
        console.log(doc);
    }
});

//插入多条
// Model.create([{name:"张勇",age:22},{name:"李俊琴",age:23}], (err,doc) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(doc);
//     }
// });
