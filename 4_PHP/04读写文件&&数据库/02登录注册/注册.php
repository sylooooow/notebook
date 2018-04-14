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

$userArr = file("save.txt");
//print_r($userArr);

$flag = false;
foreach ($userArr as $item) {
    $userInfo = explode(",",$item);
//    echo "<hr>";
//    print_r($userInfo);

    if ($userInfo[0] == $userName) {
        $flag = true;
        break;
    }
}

if ($flag) {
    echo "注册失败，用户名已存在";
} else {
    $fileW = fopen("save.txt","a");
    $user = "$userName,$password\n";
    fwrite($fileW,$user);
    fclose($fileW);

    echo "注册成功!";
}

?>
