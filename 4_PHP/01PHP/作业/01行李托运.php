<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 18/3/12
 * Time: 下午5:17
 */
header("content-type:text/html;charset=utf-8");

function transMoney($weight) {
    if ($weight <= 50) {
        return $weight * 0.15;
    } else {
        return 50 * 0.15 + ($weight - 50) * (0.15 + 0.1);
    }
}

echo transMoney(75);

?>
