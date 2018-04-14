function sameSign(a,b) {
	return (a ^ b) >= 0 ;
}
//定义向量函数，ab为两点坐标(末减初)
function vector(a, b) {
	return {
		x: b.x - a.x,
		y: b.y - a.y
	}
}
//向量叉乘公式x1y2 - x2y1
function vectorProduct(v1, v2) {
	return v1.x * v2.y - v2.x * v1.y ;
}
//判断是否在三角形内
function isPointInTrangle(p, a, b, c) {
	var pa = vector(p, a);
	var pb = vector(p, b);
	var pc = vector(p, c);

	var t1 = vectorProduct(pa, pb);
	var t2 = vectorProduct(pb, pc);
	var t3 = vectorProduct(pc, pa);
	return sameSign(t1, t2) && sameSign(t2, t3);
}
//是否延迟函数
function needDelay(obj, firstMousePos, currMousePos) {
	var offset = obj.offset();
	//获取二级菜单的左上坐标
	var topLeft = {
		x: offset.left,
		y: offset.top
	}
    //获取二级菜单的左下坐标
	var bottomLeft = {
		x: offset.left,
		y: offset.top + obj.height()
	}

	return isPointInTrangle(currMousePos, firstMousePos, topLeft, bottomLeft);
}