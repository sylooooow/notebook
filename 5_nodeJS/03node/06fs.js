/*
fs
文件/目录操作
*/

//引入文件流模块
var fs = require("fs");

//异步
fs.readFile("./1.png", "utf-8", (err, data) => {
    console.log(data);
});

//同步
var data = fs.readFileSync("./1.png");
console.log(data);

//写数据
//w覆盖写 a追加写

//异步
//参数：要写入的文件路径、要写入的数据、设置写入的方式、返回是否成功
fs.writeFile("./00.txt", "我要写的数据", {
    flag:"w"
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("写入成功");
    }
});


//同步
// fs.writeFileSync("./00.txt", "同步要写的数据", {flag:"a"});