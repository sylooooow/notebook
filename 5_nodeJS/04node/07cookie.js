var express = require("express");

var app = express();

var cookie = require("cookie-parser");

//对cookie初始化,使用中间件初始化
app.use(cookie());

app.get("/", (req,res) => {

    //判断是否第一次打开本网站
    if (req.cookies.login) {
        res.send("你已经访问过这个网站");
    } else {
        //配置时间,给cookie添加日期方法
        // var date = new Date();
        // date.setDate(date.getDate() + 3);

        res.cookie("login", "1", {
            // expires:date

            //第二种给cookie添加日期方法
            maxAge:1000 * 30
        });

        res.send("第一次访问网站");
    }
});

app.listen(8080);