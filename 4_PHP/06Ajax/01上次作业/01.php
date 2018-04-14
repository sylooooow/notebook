<?php
/**
 * 接口文件
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/19
 * Time: 上午10:23
 */
header("content-type:text/html;charset=utf-8");
require_once ("03.php");

//get请求 参数：第几页 每次提供20条
$pageNum = $_GET["pageNum"];

$startNum = ($pageNum - 1) * 20;

$mySqli = new mysqli("localhost","root","","information_schema");

$sql = "SELECT * FROM COLUMNS LIMIT $startNum,20";

$result = sql_select($mySqli,$sql);

echo json_encode($result);

?>
