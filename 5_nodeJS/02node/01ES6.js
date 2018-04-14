{
    var num1 = 5;
    let num2 = 6; //在外面打印不出来
}
console.log(num1);

const a1 = num1;
// a = 15;  //常量在定义时必须就赋值,更改常量报错
console.log(a1);


//解构
let [a,b,c] = [1,2,3];
console.log(a,b,c);


//map
//map是一种类似于对象的一种数据解构，不同于对象的是它可以把任何类型的数值作为key。而对象只能是字符串作为key
const m = new Map();
//给map对象添加值
m.set("name","张三");
m.set(123,"map");
m.set(undefined,"nul");
console.log(m.get(undefined));   //get("key")是获取map里的值
console.log(m.keys());           //获取到所有的key
console.log(m.values());         //获取到所有的value值


//箭头函数
var f = v => v;
console.log(f(4));

//如果函数体里面多于一条语句，需要写大括号
var fun = (a,b) => {
    var c = a + b;
    return c;
}