
//require引入http模块,实现web服务器
var http = require("http");

//创建一个服务器
var server = http.createServer((req,res) => {
    //req请求对象,来自客户端
    //res响应对象,服务端给客户端的响应
    // console.log(req.url);

    //设置utf8编码
    res.write('<head><meta charset="UTF-8"></head>');

    var urlarr = req.url.split("?");
    console.log(urlarr[0]);
    //相当于一个简单路由,通过不同地址反馈不同数据
    if (req.url == '/home') {
        res.write("这是home页面");
    } else if (urlarr[0] == '/ajax') {
        var param = urlarr[1].split("&");
        var data = {
            "name":param[0].split("=")[1],
            "age":param[1].split("=")[1]
        }
        res.write(JSON.stringify(data));
    } else {
        res.write("页面未找到");
    }


    //向前台响应的内容(数据),内容必须是字符串或者buffer,否则会报错
    res.write("欢迎来到我的网站!");
    res.end();
});

//开启服务，设置一个端口号8080   本地ip:127.0.0.1
server.listen(8080);