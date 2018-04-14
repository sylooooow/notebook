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

//查询数据库有没有相同的
$selectSql = "SELECT max(id) FROM send WHERE text = '$sendText'";

$select_result = sql_select($mySqli,$selectSql);

//如果返回值是数组，说明SQL语句执行成功
//如果数组长度为0，说明没有相同的用户名

if ($select_result) {
    $dataId = json_encode($select_result[0]);
    echo $dataId;
}

//if (is_array($select_result) && count($select_result) == 0) {
//    echo 0;
//} else {
//    echo 1;
//}

?>
