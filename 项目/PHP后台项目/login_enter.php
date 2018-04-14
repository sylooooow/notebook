<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/23
 * Time: 上午11:14
 */
header("content-type:text/html;charset=utf-8");

require_once "tools.php";

$username = $_GET["username"];
$password = $_GET["password"];

$mySqli = new mysqli("localhost","root","","PHP1211");
$sql = "SELECT * FROM users WHERE name = '$username'";
$result = sql_select($mySqli,$sql);

//如果返回的结果是数组类型并且长度为0，说明数据库里没有此用户名
if (is_array($result) && count($result) == 0) {
    echo "0";
} else {
    $mySqli2 = new mysqli("localhost","root","","PHP1211");
    $sql2 = "SELECT * FROM users WHERE password = '$password'";
    $result2 = sql_select($mySqli2,$sql2);

    if (is_array($result2) && count($result2) != 0) {
        echo "1";
    } else {
        echo "0";
    }
}

?>
