<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/13
 * Time: 下午2:31
 */
header("content-type:text/html;charset=utf-8");

//索引数组  通过下标取值
$arr = [1,2,3,4,5];
$arr1 = array(1,"2",3,4,5);

//打印数组之后以下两种方式
print_r($arr);
var_dump($arr1);

$arr[3] = "张勇";
echo "</br>";
print_r($arr);

$arr[] = "齐颜";
echo "</br>";
print_r($arr); //如果不指定数组下标，会默认在数组尾部添加值

//获取下标对应的值
echo "</br>";
print_r($arr[3]);

//删除元素
unset($arr[3]);
echo "</br>";
print_r($arr);  //此时删除了下标为3的值，但是数组不重新进行排序，第三个位置会没有，下标变为0，1，2，4，5

//判断元素是否在当中。返回布尔值
echo "</br>";
var_dump(in_array("小乔",$arr));
echo "</br>";
var_dump(in_array("1",$arr));

//数组去重
$arr2 = [1,2,3,4,5,5,4,3,2,1];
$arr3 = array_unique($arr2);
echo "</br>";
var_dump($arr3);

//在数组尾部删除一个元素
array_pop($arr2);
echo "</br>";
var_dump($arr2);

//在数组头部删除一个元素,此时数组会重新进行排序
array_shift($arr);
echo "</br>";
var_dump($arr);


//在数组头部添加一个元素,此时数组会重新进行排序
array_unshift($arr,999);
echo "</br>";
var_dump($arr);


//如果这样给数组赋值，中间的下标将会没有，直接到下标100
$arr[100] = 666;
echo "</br>";
var_dump($arr);
echo "</br>";

//遍历数组
for ($i = 0; $i < count($arr); $i++) {
   echo $arr[$i]."</br>";
}
?>
