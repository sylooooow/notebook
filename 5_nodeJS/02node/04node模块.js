/*
node是模块化开发，将功能拆分成一个个模块，每个模块只具有特定的功能。
需要使用想用功能时，引入模块即可

*/

//引用自定义模块,需要写路径
// var fuc = require("./05自定义模块");


//在node_modules里创建目录可以实现公共模块(不用填路径),在该目录下创建package.json在路面可以设置一个main对外入口,其他js文件借助该主入口文件的引入实现对外
var computer = require("computer");
console.log(computer.add(5,9));

// console.log(fuc.add(5,9));
// console.log(fuc.y);
// console.log(m)