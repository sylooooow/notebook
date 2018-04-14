<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/20
 * Time: 下午7:01
 */
header("content-type:text/html;charset=utf-8");

function http_Get($url) {
    //1.创建curl对象
    $curl = curl_init();

    //2.设置$curl的请求网址，返回数据形式等属性
    curl_setopt($curl,CURLOPT_URL,$url);

    //3.设置请求方式
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);

    //执行网络请求
    $res = curl_exec($curl);

    //关闭网络请求
    curl_close($curl);

    //返回结果
    return $res;
}

$url = "http://c.3g.163.com/recommend/getChanRecomNews?channel=duanzi&passport=91153191bdb987ca2bc10b1d3e7a5004@tencent.163.com&devId=CE80EFE4-9CE9-4E06-B117-DFA8DE7893F1&size=20";

$result = http_Get($url);

print_r($result);
?>
