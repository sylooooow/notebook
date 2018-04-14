<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/13
 * Time: 上午9:51
 */
header("content-type:text/html;charset=utf-8");

$name = "大哥";
$age = 17;

//1.拼接
$value = $name."今年".$age."岁";
echo $value."</br>";

$value1 = "郝伟是{$name},今年{$age}";
echo $value1."</br>";

$value2 = "郝伟是$name,今年 $age"; //拼接时如果变量后面有汉字或字母，打印会报错，需要用空格隔开、加点、或者加大括号
echo $value2."</br>";


//2.定界符
//以<<<开头，命名可以随意，结束前不能有空格。里面可以写标签、文字、字母
$str = "<a href='http://www.baidu.com'>百度一下</a><p>这是一个P标签</p>";
echo $str."</br>";

$str1 = <<<name
    <a href='http://www.baidu.com'>百度一下</a>
    <p>这是一个P标签</p>
    <div>这是一个div</div>
name;

echo $str1;


//3.长度
$str4 = "abc";
$str5 = "无嫌疑";
echo strlen($str4)."</br>";  //输出3
echo strlen($str5)."</br>";  //输出9，一个汉字占3个字节


//4.去首尾空格
$str6 = "   Hello World   ";
echo "~~~~".trim($str6)."~~~~"."</br>";
echo "~~~~".ltrim($str6)."~~~~"."</br>"; //表示去除左边的空格
echo "~~~~".rtrim($str6)."~~~~"."</br>"; //表示去除右边的空格


//5.大小写转换
$str7 = "li jun qin";
$str8 = "YAN ZI YE";
echo strtolower($str8)."</br>"; //转换成小写
echo strtoupper($str7)."</br>"; //转换成大写

echo ucwords($str7)."</br>"; //首字母大写,每个单词的首字母都大写
echo ucfirst($str7)."</br>"; //首字母大写，仅仅第一个字母大写


//6.倒序输出
echo strrev($str8); //倒序输出


//7.拆分字符串
$str9 = "迟晓楠,无嫌疑,张勇";
$arr = explode(",",$str9);   //两个参数，以什么拆分，和拆分的字符串
var_dump($arr);
echo "</br>";


//8.把数组连接成字符串
$str10 = implode("~",$arr);
echo $str10."</br>";


//9.子串在字符串中的位置
$str11 = "hello world";
echo strpos($str11,"ll")."</br>";
var_dump(strpos($str11,"a")); //如果输入的子串不存在，则输出false
echo "</br>";


//10.取子串
$str12 = "Good Good Study";
echo substr($str12,3)."</br>";  //取指定位置及后面的子串
echo substr($str12,3,8)."</br>"; //从第3个开始截取8个，包括空格
echo substr_count($str12,"o")."</br>";  //打印有几个相同的子串


//11.字符串替换
echo  substr_replace($str12,"123",2)."</br>";  //从第二个位置开始替换到最后
echo  substr_replace($str12,"123",2,4)."</br>";  //从第二个位置开始替换到第四个

echo  substr_replace($str12,"",2,4)."</br>";  //从第二个位置开始删除到第四个
echo  substr_replace($str12,"123",2,0)."</br>";  //从第二个位置插入一个字符串
?>



