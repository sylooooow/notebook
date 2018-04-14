/*
工具类功能:

1.实现继承
2.输出对象
3.验证类型

*/

//引入工具类,不常用 event会用到
var util = require("util");



//1.类的继承（JS的里的继承方法）
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.say = () => {
        console.log("hello");
    }
}
//定义一个原型方法
Person.prototype.showName = function () {
    console.log(this.name);
};
//创建一个学生类，来继承Person
function Student(name,age) {
    // //要继承构造函数内部属性和方法可以使用call和apply
    // //call使用参数列表传递，apply使用数组传递
    //
    // //call 将Person里的属性和方法替换自己的上下文
    // Person.call(this, name, age);
    //
    // //apply
    Person.apply(this, [name,age]); //只继承父类内部，而node中的util只能继承原型中的，将两者结合使用则能继承父类所有的属性和方法
}

//node里继承:
//util只能继承原型链的属性和方法
util.inherits(Student, Person);
var student = new Student("张三",18);
student.say();
student.showName();


//es6中的继承
class Car {
    //构造方法
    constructor(color,price) {
        this.color = color;
        this.price = price;
    }

    //相当于ES5中的原型方法，不需要function
    move() {
        console.log("车跑了");
    }
}
var car = new Car("红","100w");
console.log(car.color);
car.move();

//定义比亚迪继承车
class Byd extends Car {
    constructor(color,price,speed) {
        super(color,price);
        this.speed = speed;
    }
    nowSpeed() {
        console.log(this.speed);
    }
}
var byd = new Byd("red","15W","180km/h");
byd.nowSpeed();
console.log(byd.color);




//2.输出对象
console.log(util.inspect(byd));




//3.验证类型
console.log(typeof []);
//可以验证任何类型的数据
console.log(util.isArray([]));