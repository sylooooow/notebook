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
//echo $userName;
//echo $password;

$userArr = file("save.txt");
//print_r($userArr);

$flag = false;
foreach ($userArr as $item) {
    $userInfo = explode(",",$item);
//    echo "<hr>";
//    print_r($userInfo);
    if ($userInfo[0] == $userName && $userInfo[1] == "$password\n") {
        $flag = true;
        break;
    }
}

if ($flag) {
    echo "登录成功!";
} else {
    echo "用户名或密码错误，请重试!";
}

?>
