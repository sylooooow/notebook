var express = require("express");
var app = express();


/*
中间件：
1.每个中间件都可以控制流程是否继续执行,如果没有next,下面的程序则执行不了
2.每一个中间件中的req和res都是同一个对象
3.如果出错,转交给错误处理中间件
4.一个中间件处理完数据可以把响应传递给下一个中间件

中间件的好处：
在错误传入服务器处理之前就找到错误，避免服务器崩掉
*/

//朝廷拨款赈灾，每个发100两
app.use((req,res,next) => {
    req.money = 100;
    next();
});

//支府
app.use((req,res,next) => {
    req.money -= 20;
    next("钱丢了");
});

//如果next里传了值(如上),会报错, 会执行下面的错误处理中间件
app.use((err,req,res,next) => {
    //err中的错误信息就是next中传的值
    console.error(err);
    res.send(err);
});


//衙门
app.use((req,res,next) => {
    req.money -= 50;
    next();
});

//发钱请求
app.all("*", (req, res) => {
    res.send("每人发:" + req.money);
});

app.listen(8080);