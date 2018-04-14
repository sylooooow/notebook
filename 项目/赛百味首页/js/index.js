//显示/隐藏主菜单
$("#foodMenu").mouseover(function() {
	$(".hide-drop_menu").fadeIn(400);
})
$(".hide-drop_menu").mouseover(function() {
	$(".hide-drop_menu").show();
})
$(".hide-drop_menu").mouseout(function() {
	$(".hide-drop_menu").hide();
})

//隐藏所有右侧点开的菜单
function hideMenu() {
	$(".newLi").slideUp();
}

//点击右侧菜单显示/关闭
$("#chaozhi").click(function() {
	hideMenu();
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "");

	if($(".d1").css("display") == "none") {
		$(".d1").slideToggle(300);
		$(this).css("color", "#2E9C4E");
	}
});
$("#jingdian").click(function() {
	hideMenu();
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "");
	if($(".d2").css("display") == "none") {
		$(".d2").slideToggle(300);
		$(this).css("color", "#2E9C4E");
	}
});
$("#jingxuan").click(function() {
	hideMenu();
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "");
	if($(".d3").css("display") == "none") {
		$(".d3").slideToggle(300);
		$(this).css("color", "#2E9C4E");
	}
});
$("#dizhi").click(function() {
	hideMenu();
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "");
	if($(".d4").css("display") == "none") {
		$(".d4").slideToggle(300);
		$(this).css("color", "#2E9C4E");
	}
});
$("#jucan").click(function() {
	hideMenu();
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "");
	if($(".d7").css("display") == "none") {
		$(".d7").slideToggle(300);
		$(this).css("color", "#2E9C4E");
	}
});
$("#yingyang").click(function() {
	hideMenu();
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "");
	if($(".d10").css("display") == "none") {
		$(".d10").slideToggle(300);
		$(this).css("color", "#2E9C4E");
	}
});
$("#baiweijuan").click(function() {
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "#2E9C4E");
	$(".main-data").show();
	$(".main-img").hide();
	$("#dataImg").attr("src", food_list[19]["img"]);
	$("#dataTitle").html(food_list[19]["p1"]);
	$("#dataIntro").html(food_list[19]["p2"]);
});
$("#shala").click(function() {
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "#2E9C4E");
	$(".main-data").show();
	$(".main-img").hide();
	$("#dataImg").attr("src", food_list[20]["img"]);
	$("#dataTitle").html(food_list[20]["p1"]);
	$("#dataIntro").html(food_list[20]["p2"]);
});

$("#yinliao").click(function() {
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "#2E9C4E");
	$(".main-data").show();
	$(".main-img").hide();
	$("#dataImg").attr("src", food_list[24]["img"]);
	$("#dataTitle").html(food_list[24]["p1"]);
	$("#dataIntro").html(food_list[24]["p2"]);
});
$("#zaocan").click(function() {
	$(".aa").css("color", "");
	$(".title").css("color", "");
	$(this).css("color", "#2E9C4E");
	$(".main-data").show();
	$(".main-img").hide();
	$("#dataImg").attr("src", food_list[25]["img"]);
	$("#dataTitle").html(food_list[25]["p1"]);
	$("#dataIntro").html(food_list[25]["p2"]);
});

var orderTitle = "如何点餐";
var orderIntro = "SUBWAY®赛百味快餐店推出多款不同口味的三明治、沙拉和配菜，供您选择。为了确保您每次用餐称心如意，我们总结出最科学的点餐方式。此方法包含多个步骤，但非常简单。如下所示：";

//顶部菜单
$choo = $(".choo");
var mark = 0;
var dataMark = 0;
$choo.each(function(i) {
	$(this).click(function() {
		mark = i + 1;
		hideMenu();
		$(".d" + mark).slideToggle(300);
		$(".aa").css("color", "");
		$(".title").css("color", "");
		if(mark < 11 && mark != 10) {
			var oTarget = $(".d" + mark).children()[0].getElementsByClassName("title")[0];
			oTarget.style.color = "#2E9C4E";
		}
		var targetTitle = $(".aa")[i];
		targetTitle.style.color = "#2E9C4E";
		console.log(targetTitle)
		switch(mark) {
			case 1:
				dataMark = 0;
				show(dataMark);
				break;
			case 2:
				dataMark = 4;
				show(dataMark);
				break;
			case 3:
				dataMark = 9;
				show(dataMark);
				break;
			case 4:
				dataMark = 14;
				show(dataMark);
				break;
			case 5:
				dataMark = 19;
				show(dataMark);
				break;
			case 6:
				dataMark = 20;
				show(dataMark);
				break;
			case 7:
				dataMark = 21;
				show(dataMark);
				break;
			case 8:
				dataMark = 24;
				show(dataMark);
				break;
			case 9:
				dataMark = 25;
				show(dataMark);
				break;
			case 10:
				break;
			case 11:
				show(dataMark);
				$("#dataImg").attr("src", "img/order0.jpg");
				$("#dataTitle").html(orderTitle);
				$("#dataIntro").html(orderIntro);
				break;
			default:
				break;
		}
	});
});

function show(dataMark) {
	$(".main-data").show();
	$(".main-img").hide();
	$("#dataImg").attr("src", food_list[dataMark]["img"]);
	$("#dataTitle").html(food_list[dataMark]["p1"]);
	$("#dataIntro").html(food_list[dataMark]["p2"]);
}

//如何点餐
$("#diancan").click(function() {
	$(".aa").css("color", "");
	$(this).css("color", "#2E9C4E");
	$(".main-data").show();
	$(".main-img").hide();
	$("#dataImg").attr("src", "img/order0.jpg");
	$("#dataTitle").html(orderTitle);
	$("#dataIntro").html(orderIntro);
});

//json
var food_list = [{
	"p1": "意大利香辣 Spicy Italian",
	"p2": "意大利辣香肠、萨拉米香肠和奶酪，搭配每日烘焙的面包，满足你的味蕾。",
	"img": "img/超值1.jpg",
}, {
	"p1": "培根 B.L.T",
	"p2": "热烤培根、清爽生菜和鲜美多汁的西红柿，三种食材的绝佳组合，口感丰盈。",
	"img": "img/超值2.jpg",
}, {
	"p1": "火腿 Ham",
	"p2": "鲜嫩味美的火腿配上SUBWAY®赛百味餐厅特有的蜜汁芥末酱，搭配您自选最爱的蔬菜，美味难以阻挡。",
	"img": "img/超值3.jpg",
}, {
	"p1": "新鲜蔬菜 Veggie Delite™",
	"p2": "各种新鲜蔬菜和每日烘焙面包的组合，配上爽口开胃的调味品，沙拉般的清爽美味。生菜、西红柿、青椒、洋葱、橄榄和酸黄瓜，多样蔬菜膳食平衡。",
	"img": "img/超值4.jpg",
}, {
	"p1": "意大利经典 Italian B.M.T.™",
	"p2": "有人说意大利经典是赛百味最大、最多肉、最美味的一款三明治。热那亚式萨拉米香肠、意大利辣香肠和火腿切片造就的经典美味倍受青睐。",
	"img": "img/经典1.jpg",
}, {
	"p1": "意大利香肠 Italian Sausage",
	"p2": "意大利风味香肠肉香汁浓，热烤奶酪入口即融，搭配喜欢的面包、酱料和蔬菜，味香萦绕齿间回味无穷",
	"img": "img/经典2.jpg",
}, {
	"p1": "香烤鸡排 Roasted Chicken",
	"p2": "柔嫩无骨的鸡排烤得恰到好处，配上自选的新鲜蔬菜和独特调味品，每日烘焙的面包，鲜香四溢。",
	"img": "img/经典3.jpg",
}, {
	"p1": "火鸡胸 Turkey Breast",
	"p2": "柔嫩火鸡胸切片，配以自选的新鲜蔬菜和酱料，风味独特。搭配墨西哥辣椒，酸辣美味挡不住。",
	"img": "img/经典4.jpg",
}, {
	"p1": "日式照烧鸡 Chicken Teriyaki",
	"p2": "在柔嫩的鸡肉切片上淋上少量照烧调味酱，搭配自选的新鲜蔬菜和调味品，一起裹入每日烘焙的面包，亚洲口味心动不已。",
	"img": "img/经典5.jpg",
}, {
	"p1": "金枪鱼 Tuna",
	"p2": "金枪鱼与奶油蛋黄酱的混合，创造出世上最妙不可言的滋味。SUBWAY®赛百味金枪鱼三明治可自选新鲜蔬菜、调味品以及每日烘焙的各式面包。",
	"img": "img/精选1.jpg",
}, {
	"p1": "香热奇士 Subway Melt™",
	"p2": "柔嫩的鸡胸肉，烟熏的火腿，松脆的培根，热融融的奶酪，配以清脆的蔬菜和独特的调味品，一切都融合在每日烘焙的面包内，这种美妙滋味只能意会不可言传。",
	"img": "img/精选2.jpg",
}, {
	"p1": "香烤牛肉 Roast Beef",
	"p2": "一款受人欢迎的经典美味，低于6克脂肪含量，柔嫩的香烤牛肉切片搭配自选的新鲜蔬菜和调味品，更健康更美味。",
	"img": "img/精选3.jpg",
}, {
	"p1": "奇士牛排 Steak & Cheese",
	"p2": "令人垂涎三尺的柔嫩牛排切片，佐以洋葱和青椒，覆上一层热融融的奶酪，再配上各种自选的新鲜蔬菜和调味品，夹在每日烘焙的面包里，热气腾腾，美味难敌。",
	"img": "img/精选4.jpg",
}, {
	"p1": "百味俱乐部 Subway Club™",
	"p2": "柔嫩的精选鸡胸肉，烟熏的香烤牛肉，美味的火腿切片，每日烘焙的面包，配以自选的清脆蔬菜和调味品，真正的百味融合，舍我其谁！",
	"img": "img/精选5.jpg",
}, {
	"p1": "火腿 Ham",
	"p2": "鲜嫩味美的火腿配上SUBWAY®赛百味餐厅特有的蜜汁芥末酱，搭配您自选最爱的蔬菜，美味难以阻挡。",
	"img": "img/低脂1.jpg",
}, {
	"p1": "火鸡胸 Turkey Breast",
	"p2": "柔嫩火鸡胸切片，配以自选的新鲜蔬菜和酱料，风味独特。搭配墨西哥辣椒，酸辣美味挡不住。",
	"img": "img/低脂2.jpg",
}, {
	"p1": "香烤鸡排 Roasted Chicken",
	"p2": "柔嫩无骨的鸡排烤得恰到好处，配上自选的新鲜蔬菜和独特调味品，每日烘焙的面包，鲜香四溢。",
	"img": "img/低脂3.jpg",
}, {
	"p1": "香烤牛肉 Roast Beef",
	"p2": "一款受人欢迎的经典美味，低于6克脂肪含量，柔嫩的香烤牛肉切片搭配自选的新鲜蔬菜和调味品，更健康更美味。",
	"img": "img/低脂4.jpg",
}, {
	"p1": "百味俱乐部 Subway Club™",
	"p2": "柔嫩的精选鸡胸肉，烟熏的香烤牛肉，美味的火腿切片，每日烘焙的面包，配以自选的清脆蔬菜和调味品，真正的百味融合，舍我其谁！",
	"img": "img/低脂5.jpg",
}, {
	"p1": "百味卷 Wrap",
	"p2": "按照自己的喜好，可将任意一款SUBWAY® 赛百味三明治更换为百味卷，柔香饼皮与自选肉类和蔬菜的组合，别有一番风味。",
	"img": "img/百味卷.jpg",
}, {
	"p1": "沙拉 Salad",
	"p2": "按照自己的喜好，加入最爱的 SUBWAY® 赛百味肉类和蔬菜，制作令人垂涎的沙拉。",
	"img": "img/沙拉.jpg",
}, {
	"p1": "三明治拼盘 Sandwich Platter",
	"p2": "办公室开会，聚会或家人朋友小聚享用。一个三明治拼盘可供5-9人食用，您可以选择5个您最爱的冷餐三明治，或者在我们的两种特色拼盘中选择。蔬菜三明治、火腿、百味俱乐部、火鸡胸、香烤牛肉5种口味12英寸冷三明治。火腿、意大利经典、香烤牛肉、意大利香辣、金枪鱼5种口味12英寸冷三明治。任意5个12英寸冷餐三明治。*请至少提前24小时通知，咨询门店了解更多信息。",
	"img": "img/182.jpg",
}, {
	"p1": "甜饼拼盘 Cookie Platter",
	"p2": "精心烤制的甜蜜烘香饼干，黑巧克力，双色巧克力，花生，提子燕麦口味任你混搭。*请至少提前24小时通知，咨询门店了解更多信息。",
	"img": "img/191.jpg",
}, {
	"p1": "巨型三明治 Giant Sub",
	"p2": "不管你要来场闺蜜派对，游戏联机狂欢夜，节假小聚，还是户外踏青，巨型三明治都是满足你们的首选。— 三英尺巨型三明治（0.9米长）可以切分成18个2英寸的三明治，供10-12人食用 — 六英尺巨型三明治（1.8米长）可以切分为36个2英寸的三明治，供20-25人食用 *请至少提前24小时通知，咨询门店了解更多信息。",
	"img": "img/20.jpg",
}, {
	"p1": "饮料和小食 DRINKS & SIDES",
	"p2": "SUBWAY®三明治美味可口，搭配饮料和小食更加丰盛，尽享诱人滋味。*饮料因城市而异，详情请查阅门店信息",
	"img": "img/056.png",
}, {
	"p1": "早餐 BREAKFAST",
	"p2": "每日烘焙的面包，搭配精选肉料或奶酪，以及喷香营养的鸡蛋，SUBWAY®早餐为您唤醒全天活力。 \b *部分餐厅供应早餐，详情请查阅门店信息。",
	"img": "img/早餐.jpg",
}, ];

//console.log(food_list.length);

var dataDivs = document.getElementsByClassName("title");

//右侧隐藏li数据显示
getData();

function getData() {
	for(var i = 0; i < dataDivs.length; i++) {
		var oTitle = dataDivs[i];
		oTitle.innerHTML = food_list[i]["p1"];
	}
}
//添加主题数据
$(".title").each(function(i) {
	//	console.log(i);
	$(this).click(function() {
		$(".title").css("color", "");
		$(this).css("color", "#279E63");
		$(".main-data").show();
		$(".main-img").hide();
		$("#dataImg").attr("src", food_list[i]["img"]);
		$("#dataTitle").html(food_list[i]["p1"]);
		$("#dataIntro").html(food_list[i]["p2"]);
	})
})

//下面广告图片
var imgArr = ["img/home-box-1_CN_hover.jpg", "img/home-box-2_CN_hover.jpg", "img/home-box-3_CN_hover.jpg", "img/weibo_CN_hover.jpg", "img/weixin_CN_hover.jpg"];
var imgArr2 = ["img/home-box-1_CN.jpg", "img/home-box-2_CN.jpg", "img/home-box-3_CN.jpg", "img/weibo_CN.jpg", "img/weixin_CN.jpg"];
$imgs = $(".activity").find("img");
$imgs.each(function(i) {
	$(this).mouseover(function() {
		$(this).attr("src", imgArr[i]);
	});
	$(this).mouseout(function() {
		$(this).attr("src", imgArr2[i]);
	});
});

//点菜进度条
var num = 0;
var orderArr = ["img/order0.jpg", "img/order1.jpg", "img/order2.jpg", "img/order3.jpg", "img/order4.jpg", "img/order5.jpg", "img/order6.jpg"];
$btns = $("#groupBtn").find("div");
$btns.each(function(i) {
	$(this).click(function() {
		$("#dataImg").attr("src", orderArr[i]);
		num = i;
	})
});

//下面两个前后按钮

$("#last").click(function() {
	if(num == 0) {
		return;
	} else {
		num -= 1;
		$("#dataImg").attr("src", orderArr[num]);
	}
});
$("#next").click(function() {
	if(num == 6) {
		return;
	} else {
		num += 1;
		$("#dataImg").attr("src", orderArr[num]);
	}
});

//二级菜单显示
showMenu();

function showMenu() {
	$(".hiddenMenu").click(function() {
		$(".secondMenu").slideToggle();
//		var timer = setInterval(function() {
//			console.log($(".secondMenu").innerWidth());
//			if ($(".secondMenu").innerWidth() = 910) {
//				$(".secondMenu").hide();
//				clearInterval(timer)
//			}
//		},10)
	});
}

//美食与营养点击
$("#hide").click(function() {
	location.reload(true);
})