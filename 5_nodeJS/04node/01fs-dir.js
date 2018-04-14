/*

rwx r:4 w:2 x:1  这三个数不管怎么组合相加不会出现重复,可以利用这个特性给定一个数就可以知道是哪怎么组合而成的

权限分类:  所有者 用户组 其他

命令行管理文件权限: chmod 777 01fs-dir.js
*/

var fs = require("fs");

//创建目录 mkdir
// 1.目录名
// 2.mode: 设置读写执行权限
// 3.回调
// fs.mkdir("test","0777", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("创建成功!");
//     }
// });


//读取目录 readdir
fs.readdir("test", (err,file) => {
    if (err) {
        console.error(err);
    } else {
        console.log(file);
    }
});


//查看目录详情
fs.stat("test", (err,file) => {
    if (err) {
        console.error(err);
    } else {
        console.log(file);
    }
});


//判断某个文件是否存在
fs.exists("test/01.txt", (bool) => {
    if (bool) {
        console.log("存在");
    } else {
        console.error("不存在");
    }
});


//更改文件名字
fs.rename("test/02.txt", "test/1.txt", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("修改成功");
    }
});

