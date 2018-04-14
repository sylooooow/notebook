var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable"); //处理表单数据模块

http.createServer((req,res) => {
    //获取请求地址
    var urlStr = req.url;
    //获取请求类型 get post
    var urlMethod = req.method;
    //解析url
    var urlObj = url.parse(urlStr, true);

    if (urlObj.pathname == "/" || urlObj.pathname == "/index.html") {
        //读取HTML数据
        var rs = fs.createReadStream("./index.html");
        //将数据赋值给res
        rs.pipe(res);

    } else if (urlObj.pathname == "/post") {
        //使用formidable模块处理表单数据
        var form = new formidable.IncomingForm();

        //参数：错误、参数(表单中的数据)、上传的文件
        form.parse(req, (err, args, file) => {
            if (err) {
                console.error(err);
            } else {
                console.log(args);
                console.log(file);
                //读取缓存文件
                fs.createReadStream(file.fileId.path).pipe(fs.createWriteStream("./upload/" + file.fileId.name));
            }
        });
        res.end();
    } else if (urlObj.pathname == "/ajax") {
        var date = new Date();
        res.end(date.toString());
    }
    //下面适配所有除HTML以外的文件(包括图片，CSS文件，音频视频等)
    else if (urlObj.pathname != "/favicon.ico") {
        fs.createReadStream("." + urlObj.pathname).pipe(res);
    }

}).listen(8888);