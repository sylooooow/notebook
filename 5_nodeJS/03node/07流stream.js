/*

stream 主要用于大数据文件管理

*/

var fs = require("fs");

var rs = fs.createReadStream("./1.mp4");
var ws = fs.createWriteStream("./2.mp4");

rs.pipe(ws);

//data事件循环被触发，每次读取64k
// var count = 0; //记录写入次数
// rs.on("data", (chunk) => {
//     console.log(chunk);
//     count++;
//     console.log(count);
//     ws.write(chunk, (err) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log("本次拷贝成功");
//         }
//     })
// });
// //数据读完后响应函数
// rs.on("end", () => {
//     console.log("数据读取结束");
// })
