var http = require("http");  //引入http模块

//引入url模块,用于解析url路径和参数
var url = require("url");

http.createServer((req,res) => {
    res.write('<head><meta charset="UTF-8"></head>');
    
    //url:
    // '/'前第一个请求地址 IP和端口
    // '/'根目录
    // '?'后是参数
    // method: get post

    //解析url, 当第二个参数为true的时候，query解析为对象，默认为false
    var urlObj = url.parse(req.url, true);

    //判断，忽略掉ico的网站图片请求
    if (urlObj.pathname == "/ajax") {
        console.log(urlObj.query);
        res.write(JSON.stringify(urlObj.query));
    }

    res.end(); //结束请求

}).listen(8888);