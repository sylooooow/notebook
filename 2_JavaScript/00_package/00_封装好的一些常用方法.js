//1. 实现随机出一组不重复的数,并放到一个数组里。
//   参数1:随机数的最小值
//   参数2：随机数的最大值
//   参数3：存放随机数数组的长度
function getRandomArr(min, max, n) {
	var arr = [];
	while(arr.length != n) {
		var num = Math.floor(Math.random() * (max - min + 1) + min);
		var flag = true
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == num) {
				flag = false;
				break;
			}
		}
		if(flag) {
			arr.push(num);
		}
	}
	console.log("随机出的一组数:" + arr);
	return arr;
}

//2.冒泡排序(从小到大)
//  参数1：需要排序的数组
function orderBy(arr) {
	for(var j = 0; j < arr.length - 1; j++) {
		for(var i = 0; i < arr.length - j - 1; i++) {
			if(arr[i] > arr[i + 1]) {
				var exChange = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = exChange;
			}
		}
	}
	console.log(arr);
}

//3.正反向匀速移动效果的封装(从左到右或从右到左)
//接受参数：目标元素，目标距离(距离浏览器左侧的距离)，速度
function unifromMove(obj, iTarget, speed) {
	var timer = setInterval(function() {
		if(Math.abs(iTarget - obj.offsetLeft) < Math.abs(speed)) {
			obj.style.left = iTarget + "px";
			clearInterval(timer);
		} else {
			obj.style.left = obj.offsetLeft + speed + "px";
		}
		console.log(obj.style.left)
	}, 20)
}

//4.元素缓冲运动和透明度淡入淡出,也适用于多个元素
//接收参数：目标元素，目标距离，要改变的属性，速度
//原理：给目标元素私有属性，属性为定时器
function easeMove(obj, attr, speed, iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var attrValue = getStyle(obj, attr);
		attrValue = attr == "opacity" ? attrValue * 100 : parseInt(attrValue);
		var speedEnd = (iTarget - attrValue) / speed;
		speedEnd = speedEnd > 0 ? Math.ceil(speedEnd) : Math.floor(speedEnd);
		if(attrValue == iTarget) {
			clearInterval(obj.timer);
		} else {
			obj.style[attr] = attr == "opacity" ? (attrValue + speedEnd) / 100 : attrValue + speedEnd + "px";
		}
	}, 20)
}
//获取元素指定属性值
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		console.log(getComputedStyle(obj)[attr])
		return getComputedStyle(obj)[attr];
	}
}

//5.获取元素的CSS样式
//接受参数：目标元素，目标元素样式名(如border)
//返回目标元素的具体样式
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj)[attr];
	}
}

//6.能够根据不同浏览器给目标元素添加鼠标滚动事件
//接受参数：目标元素(obj)，回调函数(值具体要做的事情)
//使用实例：滚动鼠标滚轮改变div的大小
//mouseWheel(oBox, function(obj, isDown) {
//	if(isDown) {
//		obj.style.width = obj.offsetWidth + 5 + "px";
//		obj.style.height = obj.offsetHeight + 5 + "px";
//	} else {
//		obj.style.width = obj.offsetWidth - 5 + "px";
//		obj.style.height = obj.offsetHeight - 5 + "px";
//	}
//});
function mouseWheel(obj, fn) {
	var isFirefox = window.navigator.userAgent.indexOf("Firefox");
	if(isFirefox == -1) {
		//非火狐浏览器
		obj.onmousewheel = mouseScroll;
	} else {
		obj.addEventListener("DOMMouseScroll", mouseScroll, false);
	}

	function mouseScroll(ev) {
		var ev = ev || window.event;
		//记录滚轮方向默认向下
		var isDown = true;
		if(isFirefox == -1) {
			if(ev.wheelDelta > 0) {
				//页面向上
				isDown = false;
			}
		} else {
			if(ev.detail < 0) {
				isDown = false;
			}
		}
		fn(obj, isDown);
	}
}

//7.随机颜色
function getColor() {
	var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	return "rgb(" + r + "," + g + "," + b + ")";
}

//8.事件绑定函数
//参数：目标元素，事件名，事件函数
function addEvent(obj, theEvent, fn) {
	if(obj.attachEvent) {
		obj.attachEvent("on" + theEvent, fn, false);
	} else {
		//非IE
		obj.addEventListener(theEvent, fn, false);
	}
}

//9.清除所有定时器
function clearTimer() {
	var timer = setTimeout(function() {
		for(var i = 1; i < timer; i++) {
			clearInterval(i);
		}
	}, 10);
}

//10.获取任意元素相对于浏览器的位置(距上或距左)
//参数：目标元素、属性
function getDistance(obj, attr) {
	var result = 0;
	var borders = 0;
	while(obj) {
		result += attr == "left" ? obj.offsetLeft + borders : obj.offsetTop + borders
		obj = obj.offsetParent;
		if(obj) {
			borders = parseInt(getComputedStyle(obj)["border-" + attr]);
		}
	}
	console.log(result);
}