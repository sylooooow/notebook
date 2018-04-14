<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/13
 * Time: 上午9:35
 */
header("content-type:text/html;charset=utf-8");

//内部变量
//运行的操作系统
echo PHP_OS."</br>";

echo PHP_VERSION."</br>";

//魔术变量
//当前文件所在路径
echo __FILE__."</br>"; //打印当前文件所在路径

echo __LINE__."</br>"; //打印当前所在的行数

function aaa() {
    echo __FUNCTION__."</br>";  //打印当前函数名
}
aaa();
?>
