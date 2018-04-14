<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/16
 * Time: 下午3:57
 */
header("content-type:text/html;charset=utf-8");

$user = $_GET["username"];
$pass = $_GET["password"];

if ($user == "何欣" && $pass == "123") {
    $stu1 = ["name"=>"孙红雷","age"=>48,"sex"=>"男"];
    $stu2 = ["name"=>"黄渤","age"=>44,"sex"=>"男"];
    $stu3 = ["name"=>"王宝强","age"=>38,"sex"=>"男"];

    $stuArr = [$stu1,$stu2,$stu3];

    $JSON = ["学生"=>$stuArr];

    echo json_encode($JSON);
}

?>
