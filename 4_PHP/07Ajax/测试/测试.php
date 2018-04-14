<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/20
 * Time: 上午10:50
 */
header("content-type:text/html;charset=utf-8");

select();


function select() {
    $mySqli = new mysqli("localhost","root","","PHP1211");

    $sql = "SELECT text FROM ceshi";

    $res = sql_select($mySqli,$sql);

    if ($res) {
        $resArr = ["result"=>$res,"status"=>1];
        echo json_encode($resArr);
    } else {
        $resArr = ["result"=>"","status"=>0];
        echo json_encode($resArr);
    }
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
