//不设置cookie有效时间，直接设置
function createCookie(name) {
    document.cookie = "username=" + name + ";";
}

//设置cookie  假设time以天为单位
function setCookie(name,value,time) {
    var date = new Date();
    date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));

    var expires = "expires=" + date.toUTCString(); //时间格式化方法,时间参数

    document.cookie = name + "=" + value + ";" + expires;
}

// setCookie("username","zhangsan",0.5);


//读取
function getCookie(name) {
    var fname = name + "=";
    // console.log(document.cookie);

    //分割cookie字符串
    var arr = document.cookie.split(';');
    for (var i = 0; i < arr.length; i++) {
        var param = arr[i];
        param = param.trim();
        if (param.indexOf(fname) != -1) {
            return param.substring(fname.length, param.length);
        }
    }
    return "";
}
// console.log(getCookie("username"));


//删除
function clearCookie(name) {
    //通过设置负时间删除cookie
    setCookie(name, "", -1);
}
// clearCookie("username");

module.exports = {
    createCookie:createCookie,
    setCookie:setCookie,
    getCookie:getCookie
};