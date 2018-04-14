<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/12
 * Time: 下午4:35
 */
header("content-type:text/html;charset=utf-8");

function strcat($str1,$str2) {
    return $str1.$str2;
}
$result = strcat("班长","真白");
echo $result;

$a = 10;
function text() {
    global $a;  //在函数里想用全局变量用不了，需要添加global关键字
    echo $a + 1;
    $a = 100;
    $b = 1;
}
text();
echo $a;
echo $b; //报错

function counter() {
    static $count = 0; //static把变量永久保存在函数内，但作用域只是当前函数
    return $count++;
}
counter();
echo counter()."</br>";
echo counter()."</br>";
echo counter()."</br>";
echo counter()."</br>";
echo counter()."</br>";
?>
