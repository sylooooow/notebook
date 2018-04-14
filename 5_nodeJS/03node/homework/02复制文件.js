//引入文件流模块
var fs = require("fs");

var copy = require("copy-file");


//调用异步
// copy.copy("./test.txt", "./cc.txt");


//调用同步
copy.copySync("./test.txt", "./cc.txt");