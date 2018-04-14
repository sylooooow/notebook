<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/15
 * Time: 下午5:21
 */
header("content-type:text/html;charset=utf-8");

/*

1.链接数据库
2.判断是否链接成功
3.执行数据库操作
4.执行完毕，关闭数据库

*/

//1. 链接数据库 支持PHP5和PHP7
$mySqli = new mysqli("localhost","root","","PHP1211");  //对象


//2.判断是否链接成功，如果正确返回0，如果有错误会返回错误码
if ($mySqli->connect_errno) {
    //终止程序，并提示错误
    die($mySqli->connect_errno);
}

//3.执行数据库操作
$mySqli->query("set names utf8");  //names表示所有的字段，设置编码格式为utf8

$sql = "SELECT * FROM user";

$result = $mySqli->query($sql); //此时数据库操作为查询,返回的是mysqli_result对象

if ($result) {
    echo "查询成功!";
    $arr = $result->fetch_all(MYSQLI_ASSOC);
    print_r($arr);
} else {
    echo "查询失败!";
}

//4.关闭
$mySqli->close();
?>
