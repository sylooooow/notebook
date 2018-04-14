<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/16
 * Time: 上午9:26
 */
header("content-type:text/html;charset=utf-8");

//增删改函数封装
$mysqli = new mysqli("localhost","root","","PHP1211");

function sql_operation($mysqli,$sql) {
    if ($mysqli->connect_errno) {
        die($mysqli->connect_errno);
    }

    $mysqli->query("set names utf8");

    $result = $mysqli->query($sql);

    $mysqli->close();

    return $result;
}


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

?>
