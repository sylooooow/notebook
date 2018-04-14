//引入文件处理模块, 可以读写文件
var fs = require("fs");


//异步处理
// fs.readFile("./00.txt", "utf-8", (err,data) => {
//    console.log(err);
//    console.log(data);
// });



//同步处理
var data = fs.readFileSync("./00.txt", "utf-8");
console.log(data);