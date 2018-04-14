<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/16
 * Time: 上午10:28
 */
header("content-type:text/html;charset=utf-8");

//引入文件
require_once "../tool.php";

$userName = $_POST["userName"];
$passWord = $_POST["password"];

//链接数据库
$mySqli = new mysqli("localhost","root","","PHP1211");

//查询数据库有没有相同的用户名
$selectSql = "SELECT * FROM users WHERE name = '$userName'";

$select_result = sql_select($mySqli,$selectSql);


//如果返回值是数组，说明SQL语句执行成功
//如果数组长度为0，说明没有相同的用户名
if (is_array($select_result) && count($select_result) == 0) {
    $mySqli2 = new mysqli("localhost","root","","PHP1211");

    $insert_sql = "INSERT INTO users(name,password) VALUES('$userName','$passWord')";

    $insert_result = sql_operation($mySqli2,$insert_sql);

    if ($insert_result) {
        echo "注册成功!";
    } else {
        echo "注册失败!";
    }
} else {
    echo "用户名已存在!";
}


?>
