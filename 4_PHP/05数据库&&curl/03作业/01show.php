<?php

header("content-type:text/html;charset=utf-8");

require_once("03tool.php");

$pageNum = $_GET["pageNum"];
//echo $pageNum;
//echo "<br>";

//接口拼接
$request_url = "http://localhost/171211PHP/05数据库&&curl/03作业/02interface.php?pageNum=$pageNum";

$result = http_Get($request_url);

$result_arr = json_decode($result,true);

//var_dump($result_arr[0]);

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<table border="1" cellspacing="0">
    <tr style="color: blue">
        <th>TABLE_CATALOG</th>
        <th>TABLE_SCHEMA</th>
        <th>TABLE_NAME</th>
        <th>COLUMN_NAME</th>
        <th>ORDINAL_POSITION</th>
    </tr>
    <?php
    foreach ($result_arr as $a){
        $resArr = $a;
        echo "<tr>";
        foreach ($resArr as $k=>$v) {
            switch ($k) {
                case "TABLE_CATALOG":
                    echo "<td>$v</td>";;
                    continue;
                case "TABLE_SCHEMA":
                    echo "<td>$v</td>";;
                    continue;
                case "TABLE_NAME":
                    echo "<td>$v</td>";;
                    continue;
                case "COLUMN_NAME":
                    echo "<td>$v</td>";;
                    continue;
                case "ORDINAL_POSITION":
                    echo "<td>$v</td>";;
                    continue;
                default:
                    continue;
            }
        }
        echo "</tr>";
    }
    ?>
</table>

<input type="button" value="下一页" onclick="location.href='01show.php?pageNum=<?= $pageNum + 1 ?>'">
</body>
</html>
