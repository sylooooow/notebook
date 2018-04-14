<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/21
 * Time: 下午2:56
 */
header("content-type:text/html;charset=utf-8");

require_once "tools.php";

//接收前台type的值,0为跨域请求数据,1为请求数据库里数据，2为请求要跳转页面的数据，3为搜索，4为单行删除，5为添加
$type = $_GET["type"];

if ($type == 0) {
    crossRequest();
}
if ($type == 1) {
    getData();
}
if ($type == 2) {
    getJumpData();
}
if ($type == 3) {
    getSearchData();
}
if ($type == 4) {
    deleteData();
}
if ($type == 5) {
    addData();
}




//0.使用PHP的curl来进行跨域请求,将远程接口中的数据插入到数据库
function crossRequest() {
    $url = "https://movie.douban.com/j/search_subjects?type=movie&tag=热门&sort=recommend&page_limit=1000&page_start=0";
    $result = httpGet($url);
    if ($result) {
        $result = json_decode($result,true)["subjects"];
        foreach ($result as $key => $value) {
            $id = $value['id'];
            $title = $value['title'];
            $img = $value['cover'];
            $rate = $value['rate'];
            $hot = rand(0,1);
            $chinese = rand(0,1);
            $america = rand(0,1);
            $korea = rand(0,1);

            $mySqli1 = new mysqli("localhost","root","","PHP1211");
            $insert_sql = "INSERT INTO movies(id,title,img,rate,hot,chinese,america,korea) VALUES('$id','$title','$img','$rate','$hot','$chinese','$america','$korea')";
            $insert_result = sql_operation($mySqli1,$insert_sql);
        }
    } else {
        echo "请求数据失败!";
    }
}


//1.拿数据库里的数据
function getData() {
    $mySqli1 = new mysqli("localhost","root","","PHP1211");
    $sql1 = "SELECT * FROM movies LIMIT 0,30";
    $result1 = sql_select($mySqli1,$sql1);

    $mySqli2 = new mysqli("localhost","root","","PHP1211");
    $sql2 = "SELECT count(*) FROM movies";
    $result2 = sql_select($mySqli2,$sql2);

    $dataArr = ["data"=>$result1,"count"=>$result2];
    print_r(json_encode($dataArr));
}


//2.请求要跳转页面的数据
function getJumpData() {
    $pageIndex = ($_GET["pageIndex"] - 1) * 30;
    $mySqli = new mysqli("localhost","root","","PHP1211");
    $sql = "SELECT * FROM movies LIMIT $pageIndex,30";
    $result = sql_select($mySqli,$sql);
    print_r(json_encode($result));
}


//3.搜索
function getSearchData(){
    $searchText = $_GET["searchText"];
    $mySqli1 = new mysqli("localhost", "root", "", "PHP1211");
    $sql1 = "SELECT * FROM movies WHERE title like '%$searchText%'";
    $result1 = sql_select($mySqli1, $sql1);

    $result2 = count($result1);
    $dataArr = ["data"=>$result1,"count"=>$result2];
    print_r(json_encode($dataArr));
}


//4.单行删除
function deleteData() {
    $deleteId = $_GET["dataId"];
    $mySqli = new mysqli("localhost","root","","PHP1211");
    $sql = "DELETE FROM movies WHERE id = '$deleteId'";
    $result = sql_operation($mySqli,$sql);

    $mySqli2 = new mysqli("localhost","root","","PHP1211");
    $sql2 = "SELECT count(*) FROM movies";
    $result2 = sql_select($mySqli2,$sql2);

    $dataArr = ["flag"=>"1","count"=>$result2];

    if ($result) {
        print_r(json_encode($dataArr));
    } else {
        echo "0";
    }
}


//5.添加数据
function addData() {
    $name_text = $_GET["name_text"];
    $rate_text = $_GET["rate_text"];
    $img_text = $_GET["img_text"];
    $id_text = $_GET["id_text"];
    $hot_text = $_GET["hot_text"];
    $chinese_text = $_GET["chinese_text"];
    $america_text = $_GET["america_text"];
    $korea_text = $_GET["korea_text"];

    $mySqli = new mysqli("localhost","root","","PHP1211");
    $sql = "INSERT INTO movies(id,title,img,rate,hot,chinese,america,korea) VALUES('$id_text','$name_text','$img_text','$rate_text','$hot_text','$chinese_text','$america_text','$korea_text')";

    $result = sql_operation($mySqli,$sql);
    if ($result) {
        echo "1";
    } else {
        echo "0";
    }
}

?>
