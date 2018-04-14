<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/12
 * Time: 下午5:58
 */
header("content-type:text/html;charset=utf-8");

function goal($h) {
    $s = 100;
    $last = 0;
    for ($i = 0; $i < 9; $i++) {
        $h /= 2;
        $s += $h * 2;
        if ($i == 8) {
            $last = $h /= 2;
        }
    }
    echo "总路程:".$s."</br>";
    echo "最后一次弹上的距离:".$last;
}
goal(100);
?>
