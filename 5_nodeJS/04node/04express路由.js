/*

express node框架
1.路由
2.中间件
3.模板引擎

*/

//引入express模块
var express = require("express");

//初始化
var app = express();



//参数：url,回调
//创建服务器
app.get("/", (req,res) => {
    //向客户端发送响应
    // res.send("express request");
    res.sendFile(__dirname + "/index.html");
});

app.get("/ajax", (req,res) => {
    var data = new Date();
    res.send(data.toString());
});

app.get("/query",(req,res) => {
    console.log(req.query.name);
    console.log(req.query); //解析url后面传来的参数
});

//如果请求的URL是这种格式http://localhost:8080/article/31346/zhangsan, 需要用下面这种写法
app.get("/article/:id/:name", (req,res) => {
    //使用路径参数
    console.log(req.params);
});

//post
//query解析不了post请求的url,需要引用form
app.post("/form", (req,res) => {
    //见03form使用
    res.send();
});

//任何方式的请求，都可以进这个,*表示任意路径。如果以上没有匹配路由，则进这个
app.all("*", (req,res) => {
   res.sendFile(__dirname + req.path);
});

//设置端口号
app.listen(8080);