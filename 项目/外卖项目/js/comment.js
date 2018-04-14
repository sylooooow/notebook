//点击切换
changeOptions()

function changeOptions() {
    $("#comment").click(function () {
        $(".main-content").css("display", "none");
        // $(".bottom").css("display", "none");
        $(".main-comment").css("display", "flex");
        $("#goods").css("color", "black");
        $("#comment").css("color", "red");
    });
    $("#goods").click(function () {
        $(".main-content").css("display", "flex");
        // $(".bottom").css("display", "flex");
        $(".main-comment").css("display", "none");
        $("#goods").css("color", "red");
        $("#comment").css("color", "black");
    })
}

//点击评分
addStar();

function addStar() {
    var starFlag = true;
    var targetNum = "";
    $(".star2").find("img").click(function (ev) {
        var ev = ev || window.event;
        var starTarget = $(ev.target);
        $(".score2").html(Number(starTarget.attr("index")) + 1 + ".0");

        //遍历所有星星
        $(".star2").find("img").attr("src", "img/star24_off@2x.png");
        console.log(targetNum,starTarget.attr("index"))
        if (starFlag || targetNum != starTarget.attr("index")) {
            $(".star2").find("img").each(function (i, n) {
                if (i <= starTarget.attr("index")) {
                    $(n).attr("src", "img/star24_on@2x.png");
                    starFlag = false;
                }
            })
        }
        else {
            $(".star2").find("img").attr("src","img/star24_off@2x.png");
            starFlag = true;
            targetNum = "";
            $(".score2").html("");
        }
        targetNum = starTarget.attr("index");
    })
}
