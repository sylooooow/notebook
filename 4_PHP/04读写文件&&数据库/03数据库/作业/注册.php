<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/15
 * Time: 上午10:33
 */
header("content-type:text/html;charset=utf-8");

$userName = $_POST["userName"];
$password = $_POST["password"];

//1. 链接数据库 支持PHP5和PHP7
$mySqli = new mysqli("localhost", "root", "", "PHP1211");  //对象


//2.判断是否链接成功，如果正确返回0，如果有错误会返回错误码
if ($mySqli->connect_errno) {
    //终止程序，并提示错误
    die($mySqli->connect_errno);
}

//3.执行数据库操作.
$mySqli->query("set names utf8");

$sql1 = "INSERT INTO users(name,password) VALUES('$userName','$password')";

$sql2 = "SELECT * FROM users";

$result2 = $mySqli->query($sql2);

$arr = $result2->fetch_all(MYSQLI_ASSOC);

$flag = false;

for ($i = 0; $i < count($arr); $i++) {
    $name = $arr[$i]["name"];
//    var_dump($name);
    if ($userName == $name) {
        $flag = true;
        break;
    }
}

if ($flag) {
    echo "注册失败,用户名已被注册!";
} else {
    $result1 = $mySqli->query($sql1);
    if ($result1) {
        echo "注册成功!";
    }
}


$mySqli->close();

?>
