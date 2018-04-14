<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/15
 * Time: 上午10:01
 */
header("content-type:text/html;charset=utf-8");

$fileW = fopen("01.txt","a");

fwrite($fileW,"小乔晚上要打车\n");

fclose($fileW);

?>
