const request = require("request");
const cheerio = require("cheerio");
const url = require("url");
const path = require("path");
const fs = require("fs");

//爬取地址
let doubanUrl = "https://book.douban.com/tag/";


//爬取数据函数
let requestData = (reqUrl, tag, page, maxPage) => {
    //计数器
    let index = 0;

    //构建url,encode编码 将中文转化为传输格式
    let newUrl = reqUrl + encodeURIComponent(tag) + "?start=" + (page * 20) + "&type=T";

    //请求
    request(newUrl, (err,res,body) => {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(body);

        $ = cheerio.load(body);

        let datas = []; //解析出来的数据

        //遍历取值
        $('.subject-item').each((index, element) => {

            let imgUrl = download($(element).find('img').attr('src'),'doubanImage');

            let obj = {
                'title':$(element).find('h2').text().trim(),
                'author':$(element).find('.pub').text().trim(),
                'star':$(element).find('.rating_nums').text().trim(),
                'details':$(element).find('p').text().trim(),
                'url':$(element).find('h2 a').attr('href'),
                'img':imgUrl
            };
            // console.log(obj);

            datas.push(obj);
            console.log(datas);
        });
        console.log("**********************"  page over *************************");
    });
        //递归,调用自己
    index++;
    if (index < maxPage) {
        requestData(reqUrl, "小说", index, maxPage);
    }
}









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
requestData(doubanUrl, "小说", 0, 50);
