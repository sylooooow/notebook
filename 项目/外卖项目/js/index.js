var goods = [
    [{
        "img": "img/pidan.jpg",
        "name": "皮蛋瘦肉粥",
        "sale": "月售628",
        "comment": "好评率100%",
        "price": "8"
    },
        {
            "img": "img/bingtang.jpg",
            "name": "冰糖红豆粥",
            "sale": "月售576",
            "comment": "好评率98%",
            "price": "6"
        },
        {
            "img": "img/jianjiao.jpeg",
            "name": "煎饺",
            "sale": "月售493",
            "comment": "好评率98%",
            "price": "12"
        },
        {
            "img": "img/fengmi.jpg",
            "name": "蜂蜜藏红花粥",
            "sale": "月售400",
            "comment": "好评率99%",
            "price": "15"
        }
    ],
    [{
        "img": "img/taocan.jpg",
        "name": "皮蛋瘦肉粥配包子套餐",
        "sale": "月售1132",
        "comment": "好评率100%",
        "price": "24"
    }],
    [{
        "img": "img/pidan.jpg",
        "name": "牛肉粥",
        "sale": "月售628",
        "comment": "好评率100%",
        "price": "8"
    },
        {
            "img": "img/bingtang.jpg",
            "name": "红豆粥",
            "sale": "月售576",
            "comment": "好评率98%",
            "price": "6"
        },
        {
            "img": "img/babao.jpg",
            "name": "八宝粥",
            "sale": "月售491",
            "comment": "好评率97%",
            "price": "10"
        },
        {
            "img": "img/fengmi.jpg",
            "name": "蜂蜜粥",
            "sale": "月售400",
            "comment": "好评率99%",
            "price": "15"
        },
        {
            "img": "img/guiyuan.jpg",
            "name": "桂圆莲子大枣红糖粥",
            "sale": "月售380",
            "comment": "好评率99%",
            "price": "21"
        },
        {
            "img": "img/shanyao.jpg",
            "name": "桂花山药百合粥",
            "sale": "月售388",
            "comment": "好评率98%",
            "price": "17"
        }
    ],
    [{
        "img": "img/jianjiao.jpg",
        "name": "尖椒土豆丝",
        "sale": "月售702",
        "comment": "好评率100%",
        "price": "16"
    },
        {
            "img": "img/jiangchao.jpg",
            "name": "酱炒鸡蛋",
            "sale": "月售700",
            "comment": "好评率100%",
            "price": "18"
        },
        {
            "img": "img/jiucai.jpg",
            "name": "鸡蛋韭菜",
            "sale": "月售698",
            "comment": "好评率99%",
            "price": "18"
        },
        {
            "img": "img/jingjiang.jpg",
            "name": "京酱肉丝",
            "sale": "月售550",
            "comment": "好评率99%",
            "price": "20"
        },
        {
            "img": "img/yuxiang.jpg",
            "name": "鱼香肉丝",
            "sale": "月售520",
            "comment": "好评率98%",
            "price": "24"
        },
        {
            "img": "img/ganbian.jpg",
            "name": "干煸芸豆",
            "sale": "月售588",
            "comment": "好评率98%",
            "price": "19"
        }
    ]

];

var idArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
//console.log(goods.length)
//添加数据
$.each(goods, function (i, n) {
    $(".main-food-box").append($("<div class='food-cell'></div>"));
    $(".food-cell").eq(i).attr("id", idArr[i]);
    $(".food-cell").eq(i).append("<span class='food-cell-title'></span>");
    $(".food-cell-title").eq(i).html($(".sort").eq(i).text());
    $.each(n, function (j, k) {
        $(".food-cell").eq(i).append($("<div class='food-detail'></div>"));
        $(".food-cell").eq(i).find($(".food-detail")).eq(j).append($("<div class='food-detail-box'></div>"));
        $(".food-cell").eq(i).find($(".food-detail-box")).eq(j).append($("<div class='food-img'></div>"))
            .append("<div class='food-intro'></div>");
        $(".food-cell").eq(i).find($(".food-img")).eq(j).append($("<img />"));
        $(".food-cell").eq(i).find($(".food-img")).eq(j).find("img").attr("src", k["img"]);
        $(".food-cell").eq(i).find($(".food-intro")).eq(j).append($("<span class='food-title'></span>"))
            .append($("<span class='sales'></span>"))
            .append($("<span class='food-price'>¥</span>"));
        $(".food-cell").eq(i).find($(".food-title")).eq(j).html(k["name"]);
        $(".food-cell").eq(i).find($(".sales")).eq(j).append($("<span></span>")).append($("<span></span>"));
        $(".food-cell").eq(i).find($(".sales")).eq(j).find("span").eq(0).html(k["sale"]);
        $(".food-cell").eq(i).find($(".sales")).eq(j).find("span").eq(1).html(k["comment"]);
        $(".food-cell").eq(i).find($(".food-price")).eq(j).append("<i class='price-num'></i>")
            .append($("<div class='add-food'></div>"));
        $(".food-cell").eq(i).find($(".food-price")).eq(j).find($(".price-num")).html(k["price"]);
        $(".food-cell").eq(i).find($(".add-food")).eq(j).append($("<span class='jian hide'></span>"))
            .append($("<span class='count hide'></span>"))
            .append($("<span class='jia'></span>"));
    })

})

//左侧菜单点击
getFoodDetail();

function getFoodDetail() {
    var leftTitle = null;
    var foodCell = null;
    $(".sort").find("a").click(function (ev) {
        if (!leftTitle) {
            //获取左侧点击的目标元素
            leftTitle = $(ev.target);
            foodCell = $("#" + leftTitle.attr("title_id"));
            //给目标元素的div添加类
            leftTitle.parent().parent().addClass("active");
        }
        //给上一个目标元素的div移除类
        leftTitle.parent().parent().removeClass("active");
        //更新左侧改变的目标元素
        leftTitle = $(ev.target);
        foodCell = $("#" + leftTitle.attr("title_id"));
        //给新目标元素的div添加类
        leftTitle.parent().parent().addClass("active");

        $(".main-food-box").animate({
            scrollTop: foodCell[0].offsetTop
        }, 500);
    })
}

//购物车数据数组
var dataArr = [];

//商品总价
var totalPrice = 0;

//起送价格
var payMoney = 20;

//购物车中的商品数量
var carNum = 0;

//添加商品数量
addGoods();

function addGoods() {
    //定义三个变量动态保存加减和商品数量的元素
    var subtractBtn = null;
    var countText = null;
    var addBtn = null;
    //给商品数量元素添加自定义属性
    $(".count").attr("index", 0);
    $(".count").attr("flag", 1);
    //添加点击事件
    $(".jia").click(function (ev) {
        //使三个变量保存当前加减和商品数量
        addBtn = $(ev.target);
        countText = addBtn.prev();
        subtractBtn = countText.prev();

        //获取商品数量元素的自定义属性值
        var indexNum = countText.attr("index");
        //改变商品数量元素的自定义属性的值
        indexNum++;
        //更新商品数量元素的自定义属性值
        countText.attr("index", indexNum);

        //显示商品数量
        countText.html(indexNum);
        countText.removeClass("hide");
        subtractBtn.removeClass("hide");

        //改变购物车中的商品数量
        carNum += 1;
        $(".carCount").html(carNum);

        //首次点击一个商品时会向商品数组中添加当前商品信息的json，点击多次不重复添加
        var countFlag = countText.attr("flag");
        var foodTitle = addBtn.parent().parent().prev().prev().html();
        var foodPrice = addBtn.parent().prev().html();
        if (countFlag == 1) {

            dataArr.unshift({
                "title": foodTitle,
                "price": foodPrice
            });

            //使商品数量对应元素的flag属性值设置为0
            countText.attr("flag", 0);
        }
        //计算所选商品总价
        totalPrice += Number(foodPrice);
        //显示商品总价
        $("#money").html(totalPrice);
        //如果总价大于0，改变字体颜色
        if (totalPrice > 0) {
            $(".fontColor").removeClass("grayFont");
            $(".fontColor").addClass("redFont");
        }
        //计算还剩起送价格
        payMoney -= Number(foodPrice);
        if (payMoney <= 0) {
            $("#haisheng").html("立即支付");
            $("#payMoney").html("");
            $("#qisong").html("");
            $(".bottom-right").addClass("blueBgc");
            $("#haisheng").addClass("whiteFont");
        } else {
            $("#haisheng").html("还剩￥");
            $("#payMoney").html(payMoney);
            $("#qisong").html("起送");
            $(".bottom-right").removeClass("blueBgc");
            $("#haisheng").removeClass("whiteFont");
        }

        console.log(totalPrice)
        console.log(dataArr);

        //如果商品数据的数组里不为空，则激活下面的购物车和价格计算
        if (dataArr.length > 0) {
            $(".money-box").find("img").attr("src", "img/car2.png");
            //显示购物车中的数量
            $(".carCount").removeClass("hide");
        }

        //每次点击都重新创建购物车里的内容
        createHideMenu();
    })

    //减少商品数量事件
    $(".jian").click(function (ev) {
        subtractBtn = $(ev.target);
        countText = subtractBtn.next();
        addBtn = countText.next();

        var indexNum = countText.attr("index");
        indexNum--;
        countText.attr("index", indexNum);
        countText.html(indexNum);

        //改变购物车中的商品数量
        carNum -= 1;
        $(".carCount").html(carNum);

        //获取当前点击的父父级元素的商品标题和商品单价
        var foodTitle = addBtn.parent().parent().prev().prev().html();
        var foodPrice = addBtn.parent().prev().html();
        if (indexNum == 0) {
            //删除数据数组中的值
            for (var a = 0; a < dataArr.length; a++) {
                if (dataArr[a]["title"] == foodTitle) {
                    dataArr.splice(a, 1);
                    countText.attr("flag", 1);
                    break;
                }
            }
            //还原上面定义保存加减和数量的变量，使下次点击仍有效
            countText.html("");
            subtractBtn.addClass("hide");
            subtractBtn = null;
            countText = null;
            addBtn = null;
        }

        //计算所选商品总价
        totalPrice -= Number(foodPrice);
        //显示商品总价
        $("#money").html(totalPrice);
        if (totalPrice == 0) {
            $(".fontColor").removeClass("redFont");
            $(".fontColor").addClass("grayFont");
        }
        console.log(totalPrice);
        console.log(dataArr);

        //计算还剩起送价格
        payMoney += Number(foodPrice);
        if (payMoney > 0 && payMoney < 20) {
            $("#qisong").html("起送");
            $("#haisheng").html("还剩￥");
            $("#payMoney").html(payMoney);
            $(".bottom-right").removeClass("blueBgc");
            $("#haisheng").removeClass("whiteFont");
        }
        if (payMoney == 0) {
            $("#haisheng").html("立即支付");
            $("#payMoney").html("");
            $("#qisong").html("");
            $(".bottom-right").addClass("blueBgc");
            $("#haisheng").addClass("whiteFont");
        }
        if (payMoney >= 20) {
            $("#qisong").html("起送");
            $("#haisheng").html("￥");
            $("#payMoney").html(20);
            $(".bottom-right").removeClass("blueBgc");
            $("#haisheng").removeClass("whiteFont");
        }

        //如果商品数据的数组里为空，使下面的购物车和价格计算变灰,并把购物车里的信息隐藏
        if (dataArr.length == 0) {
            $(".money-box").find("img").attr("src", "img/car.png");
            $(".carCount").addClass("hide");
            $(".car-box").addClass("hide");
            carFlag = true;
        }

        //每次点击都重新创建购物车里的内容
        createHideMenu();
    })

}


//创建购物车中隐藏的商品信息
function createHideMenu() {
    $(".car-box").html("");
    if (dataArr.length != 0) {
        $(".car-box").append($("<div class='carbox-title'></div>"));
        $(".car-box").append($("<div class='carbox-content'></div>"));
        $(".carbox-content").append($("<div class='carbox-content-detail'></div>"));
        $(".carbox-title").append($("<div class='carbox-title-box'></div>"));
        $(".carbox-title").find($(".carbox-title-box")).append($("<span>购物车</span>")).append($("<span class=\"clear-car\">清空</span>"));
    }

    for (var i = 0; i < dataArr.length; i++) {
        $(".carbox-content-detail").append($("<div class='goods-detail-box'></div>"));
        $(".goods-detail-box").eq(i).append($("<div class='goods-detail'></div>"));
        $(".goods-detail").eq(i).append($("<span class='goodTitle'></span>")).append($("<div class='goodsControl'></div>"));
        $(".goods-detail").eq(i).find($(".goodTitle")).html(dataArr[i]["title"]);
        $(".goodsControl").eq(i).append($("<span class='goodsPrice'>￥</span>")).append($("<span class='goodsChange'></span>"));
        $(".goodsControl").eq(i).find($(".goodsPrice")).append($("<span class='priceNum'></span>"));
        $(".goodsControl").eq(i).find($(".goodsPrice")).find($(".priceNum")).html(dataArr[i]["price"]);
        $(".goodsControl").eq(i).find($(".goodsChange")).append($("<span class='jianfa'><img src='img/jian.png'/></span>"))
            .append($("<span class='shuliang'></span>"))
            .append($("<span class='jiafa'><img src='img/jia.png'/></span>"));


        //每次循环时商品的标题元素
        var titleEle = $(".goods-detail").eq(i).find($(".goodTitle"));
        //保存每次循环时商品的数量元素
        var priceEle = $(".goodsControl").eq(i).find($(".goodsChange")).find($(".shuliang"));


        //遍历商品列表，通过商品名找出对应的那个商品项，取出这个商品项对应的自定义属性作为商品数量
        $(".food-title").each(function (i, v) {
            //判断点击元素与对应的菜单元素的标题是否相等
            if (titleEle.html() == $(v).html()) {
                var ele = $(v).next().next().find($(".add-food")).find($(".count")).html();
                priceEle.html(ele);

                // console.log(priceEle)
                // console.log(ele);
            }
        });


        //清空购物车
        $(".clear-car").click(function () {
            dataArr = [];
            createHideMenu();

            $(".count").attr("index", 0);
            $(".count").attr("flag", 1);

            $(".count").html("");
            $(".jian").addClass("hide");

            $(".car-box").addClass("hide");
            carFlag = true;

            payMoney = 20;
            $("#qisong").html("起送");
            $("#haisheng").html("￥");
            $("#payMoney").html(20);
            $(".bottom-right").removeClass("blueBgc");
            $("#haisheng").removeClass("whiteFont");

            carNum = 0;
            $(".carCount").html("");
            $(".carCount").addClass("hide");
            $(".money-box").find("img").attr("src", "img/car.png");

            totalPrice = 0;
            $("#money").html(totalPrice);
            $(".fontColor").removeClass("redFont");
            $(".fontColor").addClass("grayFont");

            $(".hidecar-box").addClass("hide");
        })
    }


    //改变购物车中商品数量的事件
    //增加数量
    $(".jiafa").find("img").click(function (ev) {
        var ev = ev || window.event;
        //获取当前点击的是哪个加号
        nowObj = $(ev.target);
        //获取点击这个加号对应的商品数量
        var goodsNum = nowObj.parent().prev().html();
        goodsNum++;
        //获取商品价格
        var foodPrice = nowObj.parent().parent().prev().find($(".priceNum")).html();
        //计算所选商品总价
        totalPrice += Number(foodPrice);
        //显示商品总价
        $("#money").html(totalPrice);
        //重新对商品数量进行赋值
        nowObj.parent().prev().html(goodsNum);
        //改变购物车中的数量
        carNum++;
        $(".carCount").html(carNum);

        //计算还剩起送价格
        payMoney -= Number(foodPrice);
        if (payMoney <= 0) {
            $("#haisheng").html("立即支付");
            $("#payMoney").html("");
            $("#qisong").html("");
            $(".bottom-right").addClass("blueBgc");
            $("#haisheng").addClass("whiteFont");
        } else {
            $("#haisheng").html("还剩￥");
            $("#payMoney").html(payMoney);
            $("#qisong").html("起送");
            $(".bottom-right").removeClass("blueBgc");
            $("#haisheng").removeClass("whiteFont");
        }
        console.log(payMoney)

        //寻找点击元素对应菜单中的元素，并对其自定义属性进行赋值
        var goodsTitle = nowObj.parent().parent().parent().prev().html();
        $(".food-title").each(function (i, v) {
            if (goodsTitle == $(v).html()) {
                //给菜单中的商品数量元素的自定义属性进行重新赋值
                $(v).next().next().find($(".add-food")).find($(".count")).attr("index",goodsNum);

                //改变菜单中的商品数量元素的数量
                $(v).next().next().find($(".add-food")).find($(".count")).html(goodsNum);
            }
        })
    });
    //减少数量
    $(".jianfa").find("img").click(function (ev) {
        var ev = ev || window.event;
        //获取当前点击的是哪个减号
        nowObj = $(ev.target);
        //获取点击这个减号对应的商品数量
        var goodsNum = nowObj.parent().next().html();
        goodsNum--;

        //重新对商品数量进行赋值
        nowObj.parent().next().html(goodsNum);

        //改变购物车中的数量
        carNum--;
        $(".carCount").html(carNum);

        //获取商品价格
        var fodPrice = nowObj.parent().parent().prev().find($(".priceNum")).html();
        //计算所选商品总价
        totalPrice -= Number(fodPrice);
        //显示商品总价
        $("#money").html(totalPrice);
        if (totalPrice == 0) {
            $(".fontColor").removeClass("redFont");
            $(".fontColor").addClass("grayFont");

            $(".hidecar-box").addClass("hide");
        }

        //计算还剩起送价格
        payMoney += Number(fodPrice);
        if (payMoney > 0 && payMoney < 20) {
            $("#qisong").html("起送");
            $("#haisheng").html("还剩￥");
            $("#payMoney").html(payMoney);
            $(".bottom-right").removeClass("blueBgc");
            $("#haisheng").removeClass("whiteFont");
        }
        if (payMoney == 0) {
            $("#haisheng").html("立即支付");
            $("#payMoney").html("");
            $("#qisong").html("");
            $(".bottom-right").addClass("blueBgc");
            $("#haisheng").addClass("whiteFont");
        }
        if (payMoney >= 20) {
            $("#qisong").html("起送");
            $("#haisheng").html("￥");
            $("#payMoney").html(20);
            $(".bottom-right").removeClass("blueBgc");
            $("#haisheng").removeClass("whiteFont");
        }
        console.log(payMoney + "减")


        //寻找点击元素对应菜单中的元素，并对其自定义属性进行赋值
        var goodsTitle = nowObj.parent().parent().parent().prev().html();
        $(".food-title").each(function (i, v) {
            if (goodsTitle == $(v).html()) {
                //给菜单中的商品数量元素的自定义属性进行重新赋值
                $(v).next().next().find($(".add-food")).find($(".count")).attr("index",goodsNum);

                //改变菜单中的商品数量元素的数量
                if (goodsNum != 0) {
                    $(v).next().next().find($(".add-food")).find($(".count")).html(goodsNum);
                }
            }

            if (goodsNum == 0) {
                var foodTitle = nowObj.parent().parent().parent().prev();
                //遍历dataArr寻找标题为foodTitle的json，并从数组中删除
                for (var k = 0; k < dataArr.length; k++) {
                    if (foodTitle.html() == dataArr[k]["title"]) {
                        dataArr.splice(k,1);
                        createHideMenu();
                        $(".food-title").each(function (a, b) {
                            if (foodTitle.html() == $(b).html()) {
                                var $countEle = $(b).next().next().find($(".add-food")).find($(".count"));
                                $countEle.attr("flag",1);
                                $countEle.html("");
                                $countEle.prev().addClass("hide");
                            }
                        });
                        break;
                    }
                }
            }
        });

        //如果商品数据的数组里为空，使下面的购物车和价格计算变灰,并把购物车里的信息隐藏
        if (dataArr.length == 0) {
            $(".money-box").find("img").attr("src", "img/car.png");
            $(".carCount").addClass("hide");
            $(".car-box").addClass("hide");
            carFlag = true;
        }
    });


    //给购物车容器进行定位
    $(".car-box").css("top", -$(".car-box").height());
}



//点击购物车显示隐藏菜单
var carFlag = true;
$(".money-box").find("img").click(function () {
    if (dataArr.length != 0 && carFlag == true) {
        $(".hidecar-box").removeClass("hide");
        $(".car-box").removeClass("hide");
        carFlag = false;
    } else {
        $(".car-box").addClass("hide");
        carFlag = true;
    }
});



