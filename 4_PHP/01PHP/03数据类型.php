<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/12
 * Time: 下午3:34
 */
header("content-type:text/html;charset=utf-8");

/*
数据类型
1.标量类型
整型int 浮点型float/double 字符串string 布尔true/false

2.复合类型
数组array 对象object

3.资源类型

4.空值 null

*/
$a = 1.0;
$b = 1.1336465;
$c = (double)$b;
var_dump($a);
var_dump($b);
var_dump($c);
echo gettype($c); //获取变量的类型
echo "</br>";

$m = "123";
//强制类型转换
$n = (int)$m;
var_dump($n);

$x = 3.14;
$y = (string)$x;
var_dump($y); //小数点也算一位
?>
