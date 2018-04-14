<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/16
 * Time: 下午6:57
 */
header("content-type:text/html;charset=utf-8");

require_once ("03tool.php");

$pageNum = $_GET["pageNum"];

if ($pageNum <= 70) {
    $pos = $pageNum * 25;

//    echo "截取位置:".$pos."<br>";

    $mySqli = new mysqli("localhost","root","","information_schema");

    $selectSql = "SELECT TABLE_CATALOG,TABLE_SCHEMA,TABLE_NAME,COLUMN_NAME,ORDINAL_POSITION FROM COLUMNS LIMIT $pos,25";

    $select_result = sql_select($mySqli,$selectSql);

    echo json_encode($select_result);

} else {
    echo "已经是最后一页!";
}

?>
