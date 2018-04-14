<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/14
 * Time: 下午3:34
 */
header("content-type:text/html;charset=utf-8");

print_r($_POST);
echo "<hr>";

print_r($_FILES); //超全局变量，获取上传来的所有文件，格式为一个关联数组
echo "<hr>";

print_r($_FILES["img"]); //取到文件数组中的指定文件
echo "<hr>";

print_r($_FILES["img"]["tmp_name"]); //取到文件数组中指定文件的路径
echo "<hr>";

//move_uploaded_file(临时路径，文件相对当前所在文件夹的相对路径)
move_uploaded_file($_FILES["img"]["tmp_name"],"img/18届毕业生就业协议填写模板2.jpg");
?>
