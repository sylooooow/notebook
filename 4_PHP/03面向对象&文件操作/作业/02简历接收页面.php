<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style type="text/css">
        .tg  {border-collapse:collapse;border-spacing:0;}
        .tg td{font-family:Arial, sans-serif;font-size:14px;padding:20px 20px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
        .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:20px 20px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
        .tg .tg-yw4l{vertical-align:top}
    </style>
</head>
<body>

<?php
header("content-type:text/html;charset=utf-8");

move_uploaded_file($_FILES["img"]["tmp_name"],"img/".$_FILES["img"]["name"]);
?>

<table class="tg" style="undefined;table-layout: fixed; width: 100px">
    <colgroup>
        <col style="width: 120px">
        <col style="width: 120px">
        <col style="width: 120px">
        <col style="width: 120px">
        <col style="width: 120px">
    </colgroup>
    <tr>
        <th class="tg-yw4l">姓名</th>
        <td class="tg-yw4l"><?php echo $_POST["userName"] ?></td>
        <th class="tg-yw4l">性别</th>
        <td class="tg-yw4l"><?php echo $_POST["sex"] ?></td>
        <th class="tg-yw4l" rowspan="5">
            <img src="<?php echo "img/".$_FILES["img"]["name"] ?>" alt="">
        </th>
    </tr>
    <tr>
        <th class="tg-yw4l">民族</th>
        <td class="tg-yw4l"><?php echo $_POST["nation"] ?></td>
        <th class="tg-yw4l">籍贯</th>
        <td class="tg-yw4l"><?php echo $_POST["native"] ?></td>
    </tr>
    <tr>
        <th class="tg-yw4l">出生日期</th>
        <td class="tg-yw4l"><?php echo $_POST["date"] ?></td>
        <th class="tg-yw4l">政治面貌</th>
        <td class="tg-yw4l"><?php echo $_POST["face"] ?></td>
    </tr>
    <tr>
        <th class="tg-yw4l">学历</th>
        <td class="tg-yw4l"><?php echo $_POST["xueli"] ?></td>
        <th class="tg-yw4l">婚姻状况</th>
        <td class="tg-yw4l"><?php echo $_POST["hunyin"] ?></td>
    </tr>
    <tr>
        <th class="tg-yw4l">专业</th>
        <td class="tg-yw4l"><?php echo $_POST["zhuanye"] ?></td>
        <th class="tg-yw4l">健康状况</th>
        <td class="tg-yw4l"><?php echo $_POST["jiankang"] ?></td>
    </tr>
</table>
</body>
</html>
<script>

</script>
