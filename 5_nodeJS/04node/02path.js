/*
path模块 路径处理
*/

var path = require("path");

var str = "./a/v/../d/y/u/../../../q";

//规范化路径
str1 = path.normalize(str);
console.log(str1);


//获取当前路径
str2 = __dirname
console.log(str2);


//连接路径
var str3 = path.join(str2,str1,"m");
console.log(str3);