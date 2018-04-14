<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/16
 * Time: 下午4:36
 */
header("content-type:text/html;charset=utf-8");

//网络请求GET函数
//function http_Get($url) {
//    //1.创建curl对象
//    $curl = curl_init();
//
//    //2.设置$curl的请求网址，返回数据形式等属性
//    curl_setopt($curl,CURLOPT_URL,$url);
//
//    //3.设置请求方式
//    curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
//
//    //执行网络请求
//    $res = curl_exec($curl);
//
//    //关闭网络请求
//    curl_close($curl);
//
//    //返回结果
//    return $res;
//}
//
////接口拼接格式
//
////url?参数名1=值1&参数名2=值2&参数值3=...   url必须是绝对路径
//
//$request_url = "http://localhost/171211PHP/05数据库&&curl/02curl/01%E6%8E%A5%E5%8F%A3.php?userName=何欣&passWord=123";
//
//$result = http_Get($request_url);
//
//print_r($result);





////网络请求POST函数
//function http_post($url,$data) {
//    //创建对象
//    $curl = curl_init();
//
//    //设置请求网址
//    curl_setopt($curl,CURLOPT_URL,$url);
//
//    //设置请求方式
//    curl_setopt($curl,CURLOPT_POST,true);
//
//    //设置请求参数
//    curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
//
//    //返回数据，如果不设置返回布尔值
//    curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
//
//    //执行网络请求
//    $result = curl_exec($curl);
//
//    //关闭
//    curl_close($curl);
//
//    return $result;
//
//}
//
//$request_url = "http://localhost/171211PHP/05数据库&&curl/02curl/01%E6%8E%A5%E5%8F%A3.php";
//
//$data = "userName=何欣&passWord=123";
//
//$res = http_post($request_url,$data);
//
//print_r($res);

?>
