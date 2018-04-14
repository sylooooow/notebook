<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/14
 * Time: 上午10:55
 */
header("content-type:text/html;charset=utf-8");

class Person {
    public $name;
    public $age;
    public $sex;

    function __construct($theName="范冰冰",$theAge=32,$theSex="女"){
        $this->name = $theName;
        $this->sex = $theSex;
        $this->age = $theAge;
    }
    function eat() {
        echo $this->name."在吃好吃的";
    }
}


//继承 使用关键字Person
class Student extends Person {
    public $score;
    //这时候想用新定义的$score属性，需要重写父类方法，在父类的基础上添加属性
    //使用场景：既想实现父类的方法功能，又想在此类上添加新功能并使用
    function __construct($theName,$theAge,$theSex,$theScore){
        //实现父类方法
        parent::__construct($theName,$theAge,$theSex);
        $this->score = $theScore;
    }
}

//$stu = new Student();
//print_r($stu);
//echo "</br>";
//echo $stu->eat();

$stu1 = new Student("齐颜",19,"男",99);
echo "</br>";
print_r($stu1);
echo "</br>";
echo $stu1->eat();
?>
