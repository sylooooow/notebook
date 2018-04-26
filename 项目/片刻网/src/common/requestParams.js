import dateformat from 'dateformat/'
import MD5 from 'md5/md5'
import Base64 from 'Base64'

var getParams = function (secondTime) {
  if (secondTime) {
      var times = secondTime * 1000;
      var addTime1 = dateformat(times, 'yyyy-mm-dd');
      var addTime2 = dateformat(times, 'HH:MM');
      var addTime = addTime1 + " " + addTime2;
  } else {
      var monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      var date = new Date();
      var time = dateformat(date.getTime(), 'yyyymmddHHMMss');
      var sig = MD5('0' + '' + time).toUpperCase();
      var formatString = '' + ':' + time;
      var Authorization = Base64.btoa(formatString);
      var timeDay = dateformat(date.getTime(), 'yyyy-mm-dd');
      var day = dateformat(date.getTime(), 'dd');
      var month = monthArr[date.getMonth()];
      var h = date.getHours();
  }

  return {
    h,
    time,
    timeDay,
    sig,
    Authorization,
    day,
    month,
      addTime,
      addTime1
  }
};

//导出
export default {
  getParams
}
