<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/12
 * Time: 下午5:24
 */
header("content-type:text/html;charset=utf-8");

function narcissisticNumber($num) {
    $total = 0;
    for ($i = 0; $i < $num; $i++) {
        $baiwei = (int)floor($i / 100);
        $shiwei = (int)floor(($i - $baiwei * 100) / 10);
        $gewei = (int)floor($i % 10);
        if ($baiwei * $baiwei * $baiwei + $shiwei * $shiwei * $shiwei + $gewei * $gewei * $gewei == $i && $i >= 100) {
            $total++;
            echo $i."</br>";
        }
    }
    echo "一共".$total."个";
}
narcissisticNumber(1000);

?>
