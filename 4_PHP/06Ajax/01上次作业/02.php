
<?php
/**
 * 网络请求01
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/19
 * Time: 上午10:23
 */
header("content-type:text/html;charset=utf-8");

require_once ("03.php");


//如果页面没有拼接参数，说明第一个加载此页面上pageNum = 1
//如果拼接了参数，且参数名有值，说明点击了下一页，进入if判断
if (isset($_GET["pageNum"]) && $_GET["pageNum"]) {
    $pageNum = $_GET["pageNum"];
} else {
    $pageNum = 1;
}

$url = "http://localhost/171211PHP/06Ajax/01%E4%B8%8A%E6%AC%A1%E4%BD%9C%E4%B8%9A/01.php?pageNum=$pageNum";

$resultArr = http_Get($url);

$resultArr = json_decode($resultArr,true);

var_dump($resultArr);

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<table border="1">
    <?php

    echo "<tr>";

    foreach ($resultArr[0] as $key => $value) {
        echo "<th>$key</th>";
    }

    foreach ($resultArr as $item) {
        echo "<tr>";

        foreach ($item as $value) {
            echo "<td>$value</td>";
        }

        echo "</tr>";
    }

    echo "</tr>";

    ?>

    <input type="button" value="下一页" onclick="location.href='02.php?pageNum=<?=$pageNum+1?>'">
    
</table>

</body>
</html>
