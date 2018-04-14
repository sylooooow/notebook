<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/14
 * Time: 上午9:35
 */
header("content-type:text/html;charset=utf-8");

class Person {
    //定义属性
    public $name;
    public $sex;
    public $age;

    function sayHello() {
        echo $this->name."说你好";
    }
}

//创建一个新对象
$person = new Person();
print_r($person);

//给对象的属性赋值
$person->name = "哈哈哈";
$person->age = 9;
$person->sex = "男";
echo "</br>";
print_r($person);

//调用方法
echo "</br>";
$person->sayHello();
?>
