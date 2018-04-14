const request = require("request");
const cheerio = require("cheerio");
const url = require("url");
const path = require("path");
const fs = require("fs");

//爬取地址
let zhihuUrl = "http://daily.zhihu.com";

//爬取数据
let requestData = (reqUrl) => {
    //request 网络请求组件
    request(reqUrl, (err,res,body) => {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(body);
        //cheerio 类似于jQuery
        $ = cheerio.load(body);
        //console.log($);
        let datas = []; //解析出来的数据
        // console.log($('.link-button'));
        //取到标签遍历解析
        $('.link-button').each((index,element) => {
            //获取图片路径
            var imgPath = download($(element).find('img').attr("src"), 'img');

            let obj = {
                'title':$(element).text(),
                'img':imgPath,
                'url':zhihuUrl + $(element).attr('href')
            }
            // console.log(obj);
            datas.push(obj);
        });
        console.log(datas);
    });
};

//下载图片
let download = (imgUrl, savePath) => {
    //解析图片URL
    let srcObj = url.parse(imgUrl);

    //拼接路径
    let newPath = path.join(__dirname, savePath);
    //判断存储图片的路径是否存在,不存在就创建
    let isExists = fs.existsSync(newPath);
    if (!isExists) {
        fs.mkdir(newPath, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("创建路径成功!");
            }
        });
    }

    //提取名字 pathname 可能会包含路径，需要解析出名字
    //解析文件名
    let newImageName = path.parse(srcObj.pathname).base;

    //img存储路径
    let newImagePath = path.join(newPath,newImageName);

    //从网络下载图片，拷贝到本地指定目录
    request(imgUrl).pipe(fs.createWriteStream(newImagePath));
    return newImagePath;

};

//开启请求
requestData(zhihuUrl);