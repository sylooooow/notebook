var express = require("express");
var app = express();

//指定渲染引擎(固定写法)
app.set("view engine", "ejs");

//设置模板文件目录
app.set("views", __dirname); //当前目录

app.get("/", (req,res) => {
    //渲染
    res.render("model", {
        name:"张三",
        age:18
    });
});

app.listen(8080);


//模板引擎相当于PHP里的混写，例如可以从数据库里获取信息动态的写到模板里(不借助DOM)