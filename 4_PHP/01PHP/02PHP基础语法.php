<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/12
 * Time: 上午11:40
 */
header("content-type:text/html;charset=utf-8");

//1.常量。不可以改变
//参数1：常量名
//参数2：常量的值
//参数3：后面的布尔值表示支不支持大小写
define("NAME","战延平");
define("CAT_NAME","蓝猫",false);
echo NAME;
echo "是";
echo CAT_NAME;


//2.变量 弱类型语言
$name = "何文静";
$age = 18;
echo $name;
//一般在返回给前端使用
$flag = false;
echo $flag;

//3.var_dump()常用语输出对象、数组。比如类型，长度，值
var_dump($flag);
echo "</br>";
var_dump($name);
echo "</br>";
$arr = [1,2,3,4];
var_dump($arr);
echo $arr; //报错。不能打印数组和对象
echo $name,$age,$flag; //可以打印多个变量

//4.print()
print ("<hr>");
print ($name);
print ($arr); //也不能输出数组
print ("<hr>");
printf("name的值是%s,age的值是%d",$name,$age); //格式化输出
echo "</br>";
print_r($arr);  //可以输出数组，只输出数组的值和下标，不输出值得类型。也可以输出对象

//5.引用
$m = 10;
$n = &$m; //$m的地址赋值给$n
print ("<hr>");
echo $n;
$n = 20;
echo "</br>";
echo $m;

//6.变量的变量
$value1 = "hello";
$$value1 = "world";
echo "<hr>";
echo $hello;
?>
