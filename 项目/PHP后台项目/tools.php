<?php
/**
 * Created by PhpStorm.
 * User: HeXin
 * Date: 17/3/28
 * Time: 上午9:15
 */
header("content-type:text/html;charset=utf-8");
function sql_operation($mysqli,$sql){
    if ($mysqli->connect_errno){
        //终止程序，并且提示错误
        die($mysqli->connect_errno);
    }
    $mysqli->query("set names utf8");
    $result = $mysqli->query($sql);
    $mysqli->close();
    return $result;
}
function sql_select($mysqli,$sql){
    if ($mysqli->connect_errno){
        die($mysqli->connect_errno);
    }
    $mysqli->query("set names utf8");
    $result = $mysqli->query($sql);
    if($result){
        $arr = $result->fetch_all(MYSQLI_ASSOC);
        return $arr;
    } else {
        return false;
    }
    $mysqli->close();
}

function httpPost($url,$data){
    $curl = curl_init();
    //设置请求方式
    curl_setopt($curl,CURLOPT_POST,true);
    curl_setopt($curl,CURLOPT_URL,$url);
    //post请求所传的参数
    //设置数据包
    curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
    $res = curl_exec($curl);
    curl_close($curl);
    return $res;
}


function httpGet($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    $req = curl_exec($curl);
    if (curl_errno($curl)){
        echo curl_errno($curl);
    }
    curl_close($curl);
    return $req;
}












?>
