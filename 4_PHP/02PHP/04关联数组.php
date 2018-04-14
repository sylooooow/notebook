<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/13
 * Time: 下午4:13
 */
header("content-type:text/html;charset=utf-8");

//关联数组
$arr = ["name"=>"郝伟","age"=>3];
print_r($arr);
echo "</br>";

//取值
echo $arr["name"];
echo "</br>";

//添加键值对
$arr["sex"] = "man";
echo "</br>";
print_r($arr);

//修改
$arr["age"] = 5;
echo "</br>";
print_r($arr);

//遍历,相当于JS里遍历json的 for in
//方法1,只遍历value值
echo "</br>";
foreach ($arr as $v) {
    //$v 代表数组中每个value的值
    echo $v."</br>";
}
echo "</br>";
//方法2，遍历key和value
foreach ($arr as $k=>$v) {
    echo $k.":".$v."</br>";
}
echo "</br>";

//也可以遍历索引数组,$a是数组中的元素
$arr1 = [1,2,3,4];
foreach ($arr1 as $a) {
    echo $a."</br>";
}


//取出所有的key值或所有的value值
echo "</br>";
$keyArr = array_keys($arr);
$valueArr = array_values($arr);
print_r($keyArr);
echo "</br>";
print_r($valueArr);


//判断某个key在关联数组中是否存在
echo "</br>";
var_dump(isset($arr["name"]));
var_dump(array_key_exists("name",$arr));


?>
