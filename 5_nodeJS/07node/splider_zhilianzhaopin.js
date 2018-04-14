const request = require("request");
const cheerio = require("cheerio");
const url = require("url");
const path = require("path");
const fs = require("fs");

//爬取地址
let zhaopinUrl = "https://sou.zhaopin.com/jobs/searchresult.ashx?jl=";


//爬取数据函数
let requestData = (reqUrl, city, job, page) => {

    //构建url,encode编码 将中文转化为传输格式
    let newUrl = reqUrl + encodeURIComponent(city) + "&kw=" + encodeURIComponent(job) + "&sg=1da8518786c145068ce0927b8459b163&p=" + page;

    //请求
    request(newUrl, (err, res, body) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(newUrl);
        // console.log(body);

        $ = cheerio.load(body);
        let datas = []; //解析出来的数据

        //遍历取值
        $('.newlist').each((index, element) => {

            if (index != 0) {
                let detailUrl = $(element).find('tr').find('.zwmc').find('a').attr('href');
                let title = $(element).find('tr').find('.zwmc').find('a').text();

                // let obj = {
                //     'title':$(element).find('tr').find('.zwmc').find('a').text(),
                //     'detailUrl':$(element).find('tr').find('.zwmc').find('a').attr('href')
                // }

                // console.log(title);
                // console.log(detailUrl);

                getDetail(detailUrl);
            }

        });
    });

    // //递归,调用自己
    // index++;
    // if (index < maxPage) {
    //     requestData(reqUrl, "小说", index, maxPage);
}


//里层详情
let getDetail = (detailUrl) => {
    //请求
    request(detailUrl, (err, res, body) => {
        if (err) {
            console.log(err);
            return;
        }

        $ = cheerio.load(body);

        //遍历取值
        $('.terminalpage-left').find('.terminal-ul').each((index, element) => {

            let obj = {
                'wage':$(element).find('li').find('strong').text().trim()
            };

            console.log(obj);

        });
    });
};


//开启请求
requestData(zhaopinUrl, "北京", "web前端", 1);
