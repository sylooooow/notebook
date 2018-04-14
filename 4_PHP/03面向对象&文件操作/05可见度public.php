<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/14
 * Time: 上午11:27
 */
header("content-type:text/html;charset=utf-8");

class Person {
    public $name;
    public $age;
    public $sex;

    function sleep() {
        echo "吃饭饭";
    }
}

class Student extends Person {
    public $score;

    function sleep() {
        echo $this->name."睡觉觉";
    }
}

$stu = new Student();
$stu->age = 12;


//可见度
//父类的属性和方法，在子类中是否可以使用(对象里面)，子类的对象(外面创建的对象)是否可以使用父类的方法

//public 公开的 父类子类都可以使用 其对象也都可以访问
//protect
//private
//对比例子见06



?>
