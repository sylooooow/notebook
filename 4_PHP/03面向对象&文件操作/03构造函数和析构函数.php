<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/14
 * Time: 上午10:26
 */
header("content-type:text/html;charset=utf-8");

class Person{
    public $name;
    public $sex;
    public $age;

    //构造函数 系统内部方法，在创建对象时会自动调用
    //__construct函数名不可以更改
    function __construct($theName,$theAge,$theSex){
        $this->name = $theName;
        $this->age = $theAge;
        $this->sex = $theSex;
        echo "123";
    }


    //析构函数 系统内部方法，整个文件全执行完毕时(即在最后调用)，将创建的对象在内存中释放
    function __destruct(){
        // TODO: Implement __destruct() method.
        echo "</br>";
        echo __FUNCTION__;
    }
}

$dog1 = new Person("旺财",3,"母");
echo "</br>";
echo $dog1->name;

$dog2 = new Person("欢欢",3,"母");
echo "</br>";
print_r($dog2);

$dog3 = new Person("来福",5,"公");
echo "</br>";
print_r($dog3);


for ($i = 0; $i < 10; $i++) {
    echo "</br>".$i;
}

?>
