var express = require("express");
var formidable = require("formidable");
var app = express();


//引入mongoose模块
var mongoose = require("mongoose");

//链接数据库,如果不给数据库名字,默认连接到test
var url = "mongodb://127.0.0.1:27017/adduser";
var db = mongoose.connect(url, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("连接成功!");
    }
});

//schema: 一种以文件形式存储的数据模型骨架
var schema = new mongoose.Schema({
    xing: {type: String},
    ming: {type: String},
    password:{type:Number}
}, {
    collection: "user"
});

//model 由schema构造生成的数据模型
var Model = mongoose.model("user", schema);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/addUser.html");
});

app.get("/ajax", (req, res) => {
    var data = null;
    //查询数据库里所有数据
    Model.find({}, (err, doc) => {
        if (err) {
            console.error(err);
        } else {
            data = doc;
            res.send(data);
        }
    });
});

app.post("/post", (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, args, file) => {
        if (err) {
            console.error(err);
        } else {
            var data = args;
            //插入数据
            Model.create(data, (err, doc) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(doc);
                    res.send("添加用户成功!");
                }
            });
        }
    });
});

app.all("*", (req, res) => {
    res.sendFile(__dirname + req.path);
});

app.listen(8080);