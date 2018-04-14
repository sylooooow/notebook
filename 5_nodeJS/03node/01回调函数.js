var http = require("http");

var server = http.createServer((req,res) => {

});

server.listen(8000,"localhost",() => {
    //在服务器启动成功时调用
    console.log("服务器启动成功");
});