<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/14
 * Time: 上午11:27
 */
header("content-type:text/html;charset=utf-8");

class Person {
    protected $name = "张三";
    public $age = 18;
    public $sex = "man";

    protected function sleep() {
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
print_r($stu);
echo "</br>";
echo $stu->sleep();

//此时在外部打印name，会报错
echo "</br>";
echo $stu->name;


//protected 受保护的，只可以在本类和子类的内部使用，不能在外部使用

?>
