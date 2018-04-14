<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/16
 * Time: 下午6:57
 */
header("content-type:text/html;charset=utf-8");


//查询函数封装
function sql_select($mysqli,$sql) {
    if ($mysqli->connect_errno) {
        die($mysqli->connect_errno);
    }

    $mysqli->query("set names utf8");

    $result = $mysqli->query($sql);

    $mysqli->close();

    //查询失败返回false,成功返回mysqli_result对象
    if (is_bool($result)) {
        return $result;
    } else {
        return $result->fetch_all(MYSQLI_ASSOC);
    }
}

    $pageNum = $_GET["pageNum"];

    $pos = $pageNum * 25;

    $mySqli = new mysqli("localhost","root","","information_schema");

    $selectSql = "SELECT TABLE_CATALOG,TABLE_SCHEMA,TABLE_NAME,COLUMN_NAME,ORDINAL_POSITION FROM COLUMNS LIMIT $pos,25";

    $select_result = sql_select($mySqli,$selectSql);

    echo json_encode($select_result);

?>
