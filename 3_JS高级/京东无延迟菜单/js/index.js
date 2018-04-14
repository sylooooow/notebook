$(function() {
	//标记li的激活状态
	var activeRow = null;
	//定义一个变量用来标记二级菜单
	var activeMenu = null;
    //定义定时器
	var timer = null;
	//定义一个变量标记鼠标是否在二级菜单内
	var mouseInSecond = false;
	$("#secondMenu").mouseenter(function() {
			mouseInSecond = true;
		})
		.mouseleave(function() {
			mouseInSecond = false;
		})

	var mouseMoveArr = [];

	//为一级菜单添加鼠标悬浮事件
	$("#firstMenu").mouseenter(function() {
			$("#secondMenu").removeClass("none");
			$(document).mousemove(function(ev) {
				mouseMoveArr.push({
					"x": ev.pageX,
					"y": ev.pageY
				})
				if(mouseMoveArr.length > 2) {
					mouseMoveArr.shift();
				}
			})
		})
		.mouseleave(function() {
			$("#secondMenu").addClass("none");
//			$(document).mousemove = null;
		})
	//为li增加鼠标悬浮事件
	$("li").mouseenter(function(ev) {
		if(!activeRow) {
			activeRow = $(ev.target);
			activeRow.addClass("active");
			activeMenu = $("#" + activeRow.attr("title-id"));
			activeMenu.removeClass("none");
			return;
		}
        //当一个事件频繁触发时，只执行最后一次
		if(timer) {
			clearTimeout(timer);
		}
		//获取鼠标当前坐标
		var currMousePos = mouseMoveArr[mouseMoveArr.length-1];
		//第一次鼠标位置
		var firstMousePos = mouseMoveArr[mouseMoveArr.length-2];

		var delay = needDelay($("#secondMenu"), firstMousePos, currMousePos);
		if(delay) {
			console.log("1")
			timer = setTimeout(function() {
				if(mouseInSecond) {
					return;
				}
				activeRow.removeClass("active");
				activeMenu.addClass("none");

				activeRow = $(ev.target);
				activeRow.addClass("active");
				activeMenu = $("#" + activeRow.attr("title-id"));
				activeMenu.removeClass("none");
				timer = null;
			}, 200);
		} else {
			console.log("2")
			var preActiveRow = activeRow ;
			var preActiveMenu = activeMenu ;
			
			activeRow = $(ev.target);
			activeMenu = $('#' + activeRow.attr("title-id"));

			preActiveRow.removeClass('active') ;
			preActiveMenu.addClass('none') ;

			activeRow.addClass('active') ;
			activeMenu.removeClass('none') 
		}
	})
})