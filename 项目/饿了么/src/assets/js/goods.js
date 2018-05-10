import bus from '../../common/eventBus'

//左侧菜品分类点击
function leftNavClick() {
  $(".goods-left-item").click(function (ev) {
    bindFlag = true;
    $(".goods-right").unbind('scroll',rightMenuScroll);
    //先清空所有点击样式,给所有子元素添加border,因为下面点没了
    $(".goods-left-item").removeClass('active-left-item');
    //获取当前点击的目标元素,并添加active类
    let $nowTarget = $(this);
    $nowTarget.addClass('active-left-item');

    //获取点击元素对应的右侧模块,并添加滚动动画
    let $rightTarget = $(".goods-right-item").eq($nowTarget.index());
    $(".goods-right").animate({
      scrollTop: $rightTarget[0].offsetTop - 174
    }, 500);
  })
}

//右侧菜单滚动
let bindFlag = true; //定义绑定时间flag，方式触摸屏幕时绑定多次
let num =0; //定义左侧哪个菜单激活
function rightMenuScroll() {
  //先绑定touch事件，在里面绑定滚动事件，防止在上面点击事件中禁用了滚动事件不再触发
  $(document).bind('touchstart', function () {
    if (bindFlag) {
      bindRightMenuScroll();
      bindFlag = false;
    }
  });

    //获取滚动条滚动距离顶部的距离
    let top = $('.goods-right').scrollTop();
    //取绝对值
    top = Math.abs(top);
    //获取距离页面顶部的位置
    let posTop = 174;
    //获取右侧菜单列表项
    let rightItem = $(".goods-right-item");
    //遍历查看滚动条距离在哪个列表项区间中
    for(var n=0;n<9;n++) {
      let rightItemTop = rightItem.eq(n)[0].offsetTop - posTop;
      if(top >= rightItemTop && top <= rightItem.eq(n).height() + rightItemTop) {
        num=n;
      }
      $(".goods-left-item").removeClass("active-left-item").eq(num).addClass("active-left-item");
    }
}

//给菜品菜单绑定滚动事件
function bindRightMenuScroll() {
  $(".goods-right").bind('scroll',rightMenuScroll);
}

//添加商品点击事件
//定义变量动态保存加减和商品数量的元素等等
var subtractBtn = null;
var countText = null;
var addBtn = null;
var carNum = 0;
var dataArr = [];
var totalPrice = 0;
var payMoney = 20;
function addGoods(app) {
  var app = app;

  //给商品数量元素添加自定义属性
  $(".goodsNum").attr("index", 0);
  $(".goodsNum").attr("flag", 1);

  $(".icon-add_circle").click(function (ev) {
    //使三个变量保存当前加减和商品数量
    addBtn = $(ev.target);
    countText = addBtn.prev();
    subtractBtn = countText.prev();

    //获取商品数量元素的自定义属性值
    let indexNum = countText.attr("index");
    //改变商品数量元素的自定义属性的值
    indexNum++;
    //更新商品数量元素的自定义属性值
    countText.attr("index", indexNum);

    //显示商品数量
    countText.html(indexNum);
    countText.removeClass("pos-hide");
    subtractBtn.removeClass("pos-hide");

    //改变购物车颜色
    $('.icon-shopping_cart').addClass('active-car-style');

    //改变购物车中的商品数量
    carNum += 1;
    $(".car-count").removeClass('hide');
    $(".car-count").html(carNum);

    var foodTitle = addBtn.parent().parent().prev().prev().prev().html();
    var foodPrice = addBtn.parent().prev().find('.goods-right-item-box-nowprice').html();
    var foodNum = addBtn.prev().html();
    let foodObj = {
      "title": foodTitle,
      "price": foodPrice,
      "count": foodNum
    };

    //如果购物车数组长度为0，直接插入信息，否则判断商品名是否在购物车中存在，如果存在替换信息，否则插入信息
    let insertFoodFlag = false;
    if (dataArr.length == 0) {
      dataArr.unshift(foodObj);
    } else {
      $.each(dataArr, function (index,item) {
        if (foodObj.title == item.title) {
          dataArr[index] = foodObj;
          return false;
        } else {
          insertFoodFlag = true;
        }
      });
      //判断flag的是看是否向数组中插入商品信息
      if (insertFoodFlag) {
        dataArr.unshift(foodObj);
        insertFoodFlag = false;
      }
    }
    console.log(dataArr);

    //计算所选商品总价
    totalPrice += Number(foodPrice);
    //显示商品总价
    $(".footer-price-text").html(totalPrice);
    //如果总价大于0，改变字体颜色
    if (totalPrice > 0) {
      // $(".footer-price-text").removeClass("grayFont");
      $(".footer-price-text").addClass("whiteFont");
      $(".money-sign").addClass("whiteFont");
    }
    //计算还剩起送价格
    payMoney -= Number(foodPrice);
    if (payMoney <= 0) {
      $("#haisheng").html("立即支付");
      $("#payMoney").html("");
      $("#qisong").html("");
      $(".footer-price-total").addClass("active-car-style");
      $(".footer-price-total").addClass('whiteFont');
    } else {
      $("#haisheng").html("还剩￥");
      $("#payMoney").html(payMoney);
      $("#qisong").html("起送");
      $(".footer-price-total").removeClass("active-car-style");
      $(".footer-price-total").removeClass("whiteFont");
    }

    //发送购物车中商品信息到购物车菜单组件
    bus.$emit('goodsInfo',dataArr);
  })
}


//减少商品点击事件
function removeGoods(app) {
  var app = app;

  $(".icon-remove_circle_outline").click(function (ev) {
    subtractBtn = $(ev.target);
    countText = subtractBtn.next();
    addBtn = countText.next();

    var indexNum = countText.attr("index");
    indexNum--;
    countText.attr("index", indexNum);
    countText.html(indexNum);

    //改变购物车中的商品数量
    carNum -= 1;
    $(".car-count").html(carNum);

    //获取当前点击的父父级元素的商品标题和商品单价
    var foodTitle = addBtn.parent().parent().prev().prev().prev().html();
    var foodPrice = addBtn.parent().prev().find('.goods-right-item-box-nowprice').html();
    if (indexNum == 0) {
      //删除数据数组中的值
      for (var a = 0; a < dataArr.length; a++) {
        if (dataArr[a]["title"] == foodTitle) {
          dataArr.splice(a, 1);
          break;
        }
      }
      //还原上面定义保存加减和数量的变量，使下次点击仍有效
      countText.html("");
      subtractBtn.addClass("pos-hide");
      subtractBtn = null;
      countText = null;
      addBtn = null;
    }

    console.log(dataArr);

    //计算所选商品总价
    totalPrice -= Number(foodPrice);
    //显示商品总价
    $(".footer-price-text").html(totalPrice);
    //当总价为0时，改变一些样式
    if (totalPrice == 0) {
      $(".footer-price-text").removeClass("whiteFont");
      $(".money-sign").removeClass("whiteFont");
      $(".car-count").addClass('hide');
      $('.icon-shopping_cart').removeClass('active-car-style');
    }

    //计算还剩起送价格
    payMoney += Number(foodPrice);
    if (payMoney > 0 && payMoney < 20) {
      $("#qisong").html("起送");
      $("#haisheng").html("还剩￥");
      $("#payMoney").html(payMoney);
      $(".footer-price-total").removeClass("active-car-style");
      $(".footer-price-total").removeClass("whiteFont");
    }
    if (payMoney == 0) {
      $("#haisheng").html("立即支付");
      $("#payMoney").html("");
      $("#qisong").html("");
      $(".footer-price-total").addClass("active-car-style");
      $(".footer-price-total").addClass("whiteFont");
    }
    if (payMoney >= 20) {
      $("#qisong").html("起送");
      $("#haisheng").html("￥");
      $("#payMoney").html(20);
      $(".footer-price-total").removeClass("active-car-style");
      $(".footer-price-total").removeClass("whiteFont");
    }

    //发送购物车中商品信息到购物车菜单组件
    bus.$emit('goodsInfo',dataArr);
  })
}



//购物车添加商品点击事件
function goodsCarAdd(ev) {
    var ev = ev || window.event;
    //获取当前点击的是哪个加号
    var nowObj = $(ev.target);
    //获取点击这个加号对应的商品数量
    var goodsNum = nowObj.prev().html();
    console.log(nowObj)
    console.log(goodsNum)
    goodsNum++;
    //获取商品价格
    var foodPrice = nowObj.parent().prev().find($(".goods-car-item-price")).html();
    //计算所选商品总价
    totalPrice += Number(foodPrice);
    //显示商品总价
    $(".footer-price-text").html(totalPrice);
    //重新对商品数量进行赋值
    nowObj.prev().html(goodsNum);
    //改变购物车中的数量
    carNum++;
    $(".car-count").html(carNum);

    //计算还剩起送价格
    payMoney -= Number(foodPrice);
    if (payMoney <= 0) {
      $("#haisheng").html("立即支付");
      $("#payMoney").html("");
      $("#qisong").html("");
      $(".footer-price-total").addClass("active-car-style");
      $(".footer-price-total").addClass('whiteFont');
    } else {
      $("#haisheng").html("还剩￥");
      $("#payMoney").html(payMoney);
      $("#qisong").html("起送");
      $("#haisheng").removeClass("whiteFont");
    }

    //寻找点击元素对应菜单中的元素，并对其自定义属性进行赋值
    var goodsTitle = nowObj.parent().parent().prev().html();
    console.log(goodsTitle)
    $(".goods-right-item-box-title").each(function (i, v) {
      if (goodsTitle == $(v).html()) {
        //给菜单中的商品数量元素的自定义属性进行重新赋值
        $(v).next().next().next().find($(".goods-right-item-box-option")).find($('.goodsNum')).attr("index",goodsNum);
        //改变菜单中的商品数量元素的数量
        $(v).next().next().next().find($(".goods-right-item-box-option")).find($('.goodsNum')).html(goodsNum);
      }
    })
}


//购物车减少商品点击事件
function goodsCarReduce(ev) {
  var ev = ev || window.event;
  //获取当前点击的是哪个减号
  var nowObj = $(ev.target);
  //获取点击这个减号对应的商品数量
  var goodsNum = nowObj.next().html();
  goodsNum--;
  console.log(nowObj)
  console.log(goodsNum)

  //重新对商品数量进行赋值
  nowObj.next().html(goodsNum);

  //改变购物车中的数量
  carNum--;
  $(".car-count").html(carNum);

  //获取商品价格
  var fodPrice = nowObj.parent().prev().find($(".goods-car-item-price")).html();
  //计算所选商品总价
  totalPrice -= Number(fodPrice);
  //显示商品总价
  $(".footer-price-text").html(totalPrice);

  //计算还剩起送价格
  payMoney += Number(fodPrice);
  if (payMoney > 0 && payMoney < 20) {
    $("#qisong").html("起送");
    $("#haisheng").html("还剩￥");
    $("#payMoney").html(payMoney);
    $(".footer-price-total").removeClass("active-car-style");
    $(".footer-price-total").removeClass('whiteFont');
  }
  if (payMoney == 0) {
    $("#haisheng").html("立即支付");
    $("#payMoney").html("");
    $("#qisong").html("");
    $(".footer-price-total").addClass("active-car-style");
    $(".footer-price-total").addClass('whiteFont');
  }
  if (payMoney >= 20) {
    $("#qisong").html("起送");
    $("#haisheng").html("￥");
    $("#payMoney").html(20);
    $(".footer-price-total").removeClass("active-car-style");
    $(".footer-price-total").removeClass('whiteFont');
  }

  //寻找点击元素对应菜单中的元素，并对其自定义属性进行赋值
  var goodsTitle = nowObj.parent().parent().prev().html();
  $(".goods-right-item-box-title").each(function (i, v) {
    if (goodsTitle == $(v).html()) {
      //给菜单中的商品数量元素的自定义属性进行重新赋值
      $(v).next().next().next().find($(".goods-right-item-box-option")).find($('.goodsNum')).attr("index",goodsNum);
      //改变菜单中的商品数量元素的数量
      if (goodsNum != 0) {
        $(v).next().next().next().find($(".goods-right-item-box-option")).find($('.goodsNum')).html(goodsNum);
      }
    }

    if (goodsNum == 0) {
      var foodTitle = nowObj.parent().parent().prev();
      //遍历dataArr寻找标题为foodTitle的json，并从数组中删除
      for (var k = 0; k < dataArr.length; k++) {
        if (foodTitle.html() == dataArr[k]["title"]) {
          dataArr.splice(k,1);
          //发送购物车中商品信息到购物车菜单组件
          bus.$emit('goodsInfo',dataArr);

          $(".goods-right-item-box-title").each(function (a, b) {
            if (foodTitle.html() == $(b).html()) {
              var $countEle = $(b).next().next().next().find($(".goods-right-item-box-option")).find($('.goodsNum'))
              $countEle.attr("flag",1);
              $countEle.html("");
              $countEle.prev().addClass("pos-hide");
            }
          });
          break;
        }
      }
    }
  });

  //如果商品数据的数组里为空，使下面的购物车和价格计算变灰,并把购物车里的信息隐藏
  if (dataArr.length == 0 || totalPrice == 0) {
    $('.icon-shopping_cart').removeClass('active-car-style');
    $(".car-count").addClass("hide");
    $('.goods-car-menu').slideUp(300);
    setTimeout(function () {
      $(".goods-car-hide-bg").addClass("hide");
    },300);
    carFlag = true;
  }
}


//清空购物车
function clearCar() {
  let msg = "确定要清空吗？";
  if (confirm(msg)) {
    dataArr = [];
    bus.$emit('goodsInfo',dataArr);

    $(".goodsNum").attr("index", 0);
    $(".goodsNum").attr("flag", 1);

    $(".goodsNum").html("");
    $(".icon-remove_circle_outline").addClass("pos-hide");

    payMoney = 20;
    $("#qisong").html("起送");
    $("#haisheng").html("￥");
    $("#payMoney").html(20);
    $(".footer-price-total").removeClass("active-car-style");
    $(".footer-price-total").removeClass('whiteFont');

    carNum = 0;
    $(".car-count").html("");
    $(".car-count").addClass("hide");
    $('.icon-shopping_cart').removeClass('active-car-style');

    totalPrice = 0;
    $(".footer-price-text").html(totalPrice);
    $(".footer-price-text").removeClass("whiteFont");
    $(".money-sign").removeClass("whiteFont");

    $('.goods-car-menu').slideUp(300);
    setTimeout(function () {
      $(".goods-car-hide-bg").addClass("hide");
    },300);
    carFlag = true;
  }
}



//点击购物车显示隐藏菜单函数
var carFlag = true;
function clickGoodsCar() {
  $(".footer-car").click(function () {
    if (dataArr.length != 0 && carFlag == true) {
      $(".goods-car-hide-bg").removeClass("hide");
      $('.goods-car-menu').slideDown(300);
      // $(".car-box").removeClass("hide");
      carFlag = false;
    } else {
      $('.goods-car-menu').slideUp(300);
      setTimeout(function () {
        $(".goods-car-hide-bg").addClass("hide");
      },300);
      carFlag = true;
    }
  });

  //给模糊背景添加点击事件，使之隐藏
  $(".goods-car-hide-bg").click(function () {
    $('.goods-car-menu').slideUp(300);
    setTimeout(function () {
      $(".goods-car-hide-bg").addClass("hide");
    },300);
    carFlag = true;
  })

  //取消点击购物车菜单的默认行为，即不影响背景
  $('.goods-car-menu').click(function (ev) {
    ev.stopPropagation();
  })
}


function showHideSeller() {
  $('.hide-seller').slideDown(200);
}
function concealHideSeller() {
  $('.hide-seller').slideUp(200);
}


export default {
  leftNavClick,
  bindRightMenuScroll,
  addGoods,
  removeGoods,
  goodsCarAdd,
  goodsCarReduce,
  clearCar,
  clickGoodsCar,
  showHideSeller,
  concealHideSeller
}
