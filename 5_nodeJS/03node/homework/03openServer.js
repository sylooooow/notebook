var http = require("http");

var url = require("url");

var fs = require("fs");

var util = require("util");


var server = http.createServer((req,res) => {
    res.write('<head><meta charset="UTF-8"></head>');

    var urlObj = url.parse(req.url, true);

    var pathname = "." + urlObj.pathname;

    if (pathname != "./favicon.ico") {
        if (pathname == "./03open.html") {
            console.log(pathname);
            var data = fs.readFileSync(pathname);
            console.log(data);
            res.write(data);
        }
        if (pathname == "./03open.css") {
            console.log(pathname);
            var data = fs.readFileSync(pathname);
            data = "<style>" + data + "</style>";
            data = new Buffer(data);
            console.log(data);
            res.write(data);
        }
    }

    res.end();


    // if (pathname == "./03open.html") {
    //     console.log(pathname);
    //     fs.readFile(pathname, "utf-8", (err, data) => {
    //         if (err) {
    //             console.log("读取文件失败:" + err);
    //         } else {
    //             console.log("读取成功");
    //             res.end(data);
    //         }
    //     });
    // }

    // res.end();
});

server.listen(8080,"localhost",() => {
    //在服务器启动成功时调用
    console.log("服务器启动成功");
});


