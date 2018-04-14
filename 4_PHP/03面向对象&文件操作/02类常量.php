<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/14
 * Time: 上午9:47
 */
header("content-type:text/html;charset=utf-8");

class Person {
    //定义常量,即不可变的量
    const Country = "China";
    public $name;
    function say() {
        //self帮助去用类里的常量,类内部使用
        echo self::Country;
    }
}

$person = new Person();
$person->say();

//在类外面使用常量
//1.通过对象获取
echo "</br>";
echo $person::Country;

//2.通过类名获取
echo "</br>";
echo Person::Country;
?>
