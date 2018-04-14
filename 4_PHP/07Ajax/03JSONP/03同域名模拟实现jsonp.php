<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/20
 * Time: 下午5:35
 */
header("content-type:text/html;charset=utf-8");

$type = $_GET["type"];

function abc($type) {
    if ($type == 1) {
        $carArr = ["mini","smart","别克","甲壳虫"];
        return json_encode($carArr);
    } else {
        $animalArr = ["猪","狗","牛","马"];
        return json_encode($animalArr);
    }
}

if (isset($_GET["callback"]) && $_GET["callback"]) {
    $fnName = $_GET["callback"]; //函数名
    $data = abc($type); //请求返回的数据
    echo $fnName."($data)"; //函数调用的形式,即调用前台的调用函数，即04里的getData()
} else {
    echo abc($type);  //如果没有拼接callback,说明没有用jsonp,那么直接按ajax的方式返回
}

?>
