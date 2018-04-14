var oHead = document.getElementById("head");
var oBird = document.getElementById("bird");
var oDuctWrap = document.getElementById("ductWrap");
var oMenu = document.getElementById("menu");
var oSlider = document.getElementById("slider");
var oSlider_img = document.getElementById("slider_img");
var oScore = document.getElementById("score");
var score = 0;

//草坪移动
oSlider_img.style.width = oSlider_img.children[0].offsetWidth * 2 + "px";
var sliderTimer = setInterval(function() {
	oSlider_img.style.left = oSlider_img.offsetLeft - 1 + "px";
	if(oSlider_img.offsetLeft <= -oSlider_img.children[0].offsetWidth) {
		oSlider_img.style.left = 0;
	}
}, 20)

//点击按钮开始
oMenu.onclick = function(ev) {
	var ev = ev || window.event;
	//取消事件冒泡
	ev.stopPropagation();

	this.style.display = "none";
	oHead.style.display = "none";
	oBird.style.display = "block";
	oDuctWrap.style.display = "block";
	//柱子移动
	ductMove();
	//鸟移动
	birdMove();
}

//柱子移动函数
function ductMove() {
	//每隔3秒创建一个柱子
	var ductTimer = setInterval(function() {
		var ductSmall = document.createElement("div");
		ductSmall.className = "ductSmall";
		oDuctWrap.appendChild(ductSmall);

		//添加ductSmall的子元素，即上下管道
		createDuctChild(ductSmall);
		ductSmall.style.left = "320px";

		//一个柱子只加分一次
		ductSmall.flag = true;
		//柱子移动
		ductSmall.timer = setInterval(function() {
			//如果柱子从鸟身上过去，加分
			if(ductSmall.offsetWidth + ductSmall.offsetLeft < oBird.offsetLeft) {
				if(ductSmall.flag) {
					//加分
					addScore();
					ductSmall.flag = false;
				}
			}
			ductSmall.style.left = ductSmall.offsetLeft - 2 + "px";

			//柱子移出屏幕，柱子移除
			if(ductSmall.offsetLeft <= -62) {
				oDuctWrap.removeChild(ductSmall);
			}
		}, 25)
	}, 3000)
}

//创建上下管道函数
function createDuctChild(ductS) {
	var ductUp = document.createElement("div");
	ductUp.className = "duct_up";
	//随机高度
	//柱子最短占25%，最高占50%, 上下整体占75%
	var upHeight = getRandom(25, 50);
	ductUp.style.height = upHeight + "%";
	ductS.appendChild(ductUp);
	//上面柱子图片
	var upImg = document.createElement("img");
	upImg.src = "img/up_pipe.png";
	ductUp.appendChild(upImg);

	//下面柱子
	var ductDown = document.createElement("div");
	ductDown.className = "duct_down";
	ductDown.style.height = (75 - upHeight) + "%";
	ductS.appendChild(ductDown);
	//下面柱子图片
	var downImg = document.createElement("img");
	downImg.src = "img/down_pipe.png";
	ductDown.appendChild(downImg);
}

//随机高度函数
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//加分函数
function addScore() {
	score++;
	//数字转字符串
	var scoreStr = String(score);
	oScore.innerHTML = "";
	for(var i = 0; i < scoreStr.length; i++) {
		//创建图片
		var theImg = document.createElement("img");
		theImg.src = "img/" + scoreStr[i] + ".jpg";
		oScore.appendChild(theImg);
	}
}

//鸟移动的函数
function birdMove() {
	//鸟下落的速度
	var speed = 2;
	var birdTimer = setInterval(function() {
		speed += 0.5;
		if(speed >= 6) {
			speed = 6;
		}
		//如果鸟的速度大于0时向上动，否则向下动
		if(speed < 0) {
			oBird.src = "img/up_bird1.png";
		} else {
			oBird.src = "img/down_bird0.png";
		}
		//判断鸟是否超出上下边界，如果超出则游戏结束，清空所有定时器
		if(oBird.offsetTop <= 0 || oBird.offsetTop + oBird.offsetHeight >= oSlider.offsetTop) {
			setTimeout(function() {
				alert("游戏结束!");
			}, 10);
			clearTimer();
		} else {
			oBird.style.top = oBird.offsetTop + speed + "px";
		}

		//和柱子碰撞检测
		for(var i = 0; i < oDuctWrap.children.length; i++) {
			var ductS = oDuctWrap.children[i];
			for(var j = 0; j < ductS.children.length; j++) {
				var duct = ductS.children[j];
				var flag = isTouch(oBird, duct);
				if(flag) {
					setTimeout(function() {
						alert("游戏结束!");
					}, 10);
					clearTimer();
				}
			}
		}
		document.onkeydown = function() {
			speed = -6;
		}
	}, 20);
}

//碰撞检测函数,obj1小鸟，obj2柱子
function isTouch(obj1, obj2) {
	var theLeft = obj1.offsetLeft + obj1.offsetWidth >= obj2.parentNode.offsetLeft;
	var theTop = obj1.offsetTop + obj1.offsetHeight >= obj2.offsetTop;
	var theBottom = obj1.offsetTop <= obj2.offsetHeight + obj2.offsetTop;
	var theRight = obj1.offsetLeft <= obj2.offsetLeft + obj2.offsetWidth;
	return theLeft && theRight && theTop && theBottom;
}

//清除所有定时器
function clearTimer() {
	var timer = setTimeout(function() {
		for(var i = 1; i < timer; i++) {
			clearInterval(i);
		}
	}, 10);
}