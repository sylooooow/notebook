<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/15
 * Time: 上午9:23
 */
header("content-type:text/html;charset=utf-8");

//判断文件是否存在
//is_file(文件相对路径)
if (is_file("01.txt")) {
    echo "文件存在";

    //打开文件,返回值是resource类型
    //参数: 文件目录、文件操作
    $fileR = fopen("01.txt","r");
    var_dump($fileR);

    echo "<br>";

    //获取文件长度
    //参数: 文件相对路径
    $fileL = filesize("01.txt");
    echo $fileL;

    echo "<br>";

    //读取文件
    //参数: 文件的resource、读取长度
    $result = fread($fileR,$fileL);
    var_dump($result);

    //关闭文件(必须)
    fclose($fileR);
}

echo "<hr>";
print_r(file("01.txt")); //以换行为间隔，输出一个数组


?>
