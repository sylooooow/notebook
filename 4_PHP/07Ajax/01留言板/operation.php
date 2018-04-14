<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/20
 * Time: 上午10:50
 */
header("content-type:text/html;charset=utf-8");

require_once "tour.php";

//type为1的时候代表插入，2代表查询，3代表删除
$type = $_GET["type"];

if ($type == 1) {
    insert();
}
if ($type == 2) {
    select();
}
if ($type == 3) {
    delete();
}


function delete() {
    $mySqli = new mysqli("localhost","root","","PHP1211");

    $theId = $_GET["id"];

    $sql = "DELETE FROM message WHERE id = '$theId'";

    $res = sql_operation($mySqli,$sql);

    if ($res) {
        $resArr = ["status"=>1];
        echo json_encode($resArr);
    } else {
        $resArr = ["status"=>0];
        echo json_encode($resArr);
    }
}


function select() {
    $mySqli = new mysqli("localhost","root","","PHP1211");

    $sql = "SELECT * FROM message";

    $res = sql_select($mySqli,$sql);

    if ($res) {
        $resArr = ["result"=>$res,"status"=>1];
        echo json_encode($resArr);
    } else {
        $resArr = ["result"=>"","status"=>0];
        echo json_encode($resArr);
    }
}

function insert() {
    $mes = $_GET["mes"];
    $date = $_GET["date"];

    $mySqli = new mysqli("localhost","root","","PHP1211");

    $mySqli2 = new mysqli("localhost","root","","PHP1211");

    $sql = "INSERT INTO message(message,date) VALUES('$mes','$date')";

    $sql2 = "SELECT max(id) FROM message";

    $res = sql_operation($mySqli,$sql);

    $resID = sql_select($mySqli2,$sql2);

    if ($res) {
        $resArr = ["status"=>1,"id"=>$resID[0]["max(id)"]];
        echo json_encode($resArr);
    } else {
        $resArr = ["status"=>0,"id"=>""];
        echo json_encode($resArr);
    }
}

?>
