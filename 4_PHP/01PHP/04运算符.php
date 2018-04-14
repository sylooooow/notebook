<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/12
 * Time: 下午3:59
 */
header("content-type:text/html;charset=utf-8");

//1.赋值运算符 + - * / %  ++ --
$a = 1;
$m = 1;
$m += 1;
echo $m;

//2.字符串拼接
$b = "banzhang";
$c = "zhenbai";
$d = $b . $c; //点为拼接符号
echo $d;

$b .= $c;
echo $b;

//3.比较运算符 > < >= <= ==  === !=
echo "</br>";
$x = "1" == 1;
$y = "1" === 1;
var_dump($x);
echo "</br>";
var_dump($y);

//4.逻辑运算符 && || !
echo "</br>";
$xx = true;
$yy = false;
$zz = false;

//异或 xor 一真一假为真
if ($xx xor $zz) {
    echo "真";
} else {
    echo "假";
}
if ($xx xor $zz xor $yy) {
    echo "真";
} else {
    echo "假";
}
?>



