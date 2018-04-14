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

$deleteText = $_GET["text"];

//链接数据库
$mySqli = new mysqli("localhost","root","","PHP1211");

//查询数据库有没有相同的
$dateleSql = "DELETE FROM send WHERE text = '$deleteText'";

$datele_result = sql_operation($mySqli,$dateleSql);

//如果返回值是数组，说明SQL语句执行成功
//如果数组长度为0，说明没有相同的用户名
if ($datele_result) {
    echo "删除数据成功!";
} else {
    echo "删除数据失败!";
}

?>
