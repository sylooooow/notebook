/*

node中的事件，又称订阅者模式，又称观察者模式

当主体对象发生变化时，会通知所有观察者对象，更新自己的行为


*/

//引入事件模块
var event = require("events");

//引入工具类模块
var util = require("util");

//创建女神类
function Girl() {

}
//一个类想要具有事件方法，需要继承自event模块
util.inherits(Girl, event);

function Boy(name, response) {
    this.name = name;
    this.response = response; //事件方法
}

var boy1 = new Boy("张三", () => {
   console.log("买包");
});

var boy2 = new Boy("小李", () => {
    console.log("给张卡");
});

var girl = new Girl();


//注册事件
//第一个参数为事件名字,第二个参数是需要注册事件的对象
girl.on("unhappy", boy1.response);
girl.on("unhappy", boy2.response);
girl.on("unhappy", boy1.response);  //表示可以多次注册事件
girl.addListener("unhappy",boy2.response);  //第二种注册事件写法

//事件只会被触发一次
girl.once("only", () => {
    console.log("只触发一次");
});

//删除事件,一次只删掉一个,若注册过多个事件需要删除多次
girl.removeListener("unhappy",boy1.response);

//删除事件，一次删除所有的注册事件,参数只有一个事件名
girl.removeAllListeners("unhappy");

//发送事件,参数为事件名
girl.emit("unhappy");
girl.emit("only");
girl.emit("only"); //发送第二次不触发

