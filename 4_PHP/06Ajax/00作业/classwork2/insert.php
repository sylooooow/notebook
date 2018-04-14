<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/16
 * Time: 上午10:28
 */
header("content-type:text/html;charset=utf-8");

//引入文件
require_once "tour.php";

$sendText = $_GET["text"];

//链接数据库
$mySqli = new mysqli("localhost","root","","PHP1211");

$insert_sql = "INSERT INTO send(text) VALUES('$sendText')";

$insert_result = sql_operation($mySqli,$insert_sql);

if ($insert_result) {
    echo "数据里没有此消息,已插入数据库!";
} else {
    echo "插入数据库失败!";
}


?>
