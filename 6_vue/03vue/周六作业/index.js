
    var oList = document.getElementById("list");
    var space = 10; //块之间的间隙
    var winW = 1200; //容器宽度
    var cols = 4;

    var colHArr = [];
    for(var i = 0; i < cols; i++) {
        colHArr[i] = 0;
    }

// 遍历进行定位
    var items = document.getElementsByClassName("list-item");
    for (var i = 0; i < items.length; i++) {
        //寻找最短的一列,即colHArr最小数和下标
        var minNum = colHArr[0];
        var minIndex = 0;
        for(var j = 0; j < colHArr.length; j++) {
            if(minNum > colHArr[j]) {
                minNum = colHArr[j];
                minIndex = j;
            }
        }

        items[i].style.top = minNum + space + "px";
        items[i].style.left = minIndex * (290 + space) + space + "px";

        //更新最短列的高度
        colHArr[minIndex] += space + items[i].offsetHeight;
    }

//更新容器的高度
    var maxH = colHArr[0];
    for(var i = 0; i < colHArr.length; i++) {
        if(maxH < colHArr[i]) {
            maxH = colHArr[i];
        }
    }
    oList.style.height = maxH + space + "px";
