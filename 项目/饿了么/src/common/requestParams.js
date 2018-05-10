import dateformat from 'dateformat/'

var getParams = function (secondTime) {
  if (secondTime) {
      var times = secondTime;
      var addTime1 = dateformat(times, 'yyyy-mm-dd');
      var addTime2 = dateformat(times, 'HH:MM');
      var addTime = addTime1 + " " + addTime2;
  }
  return {
      addTime,
  }
};

//导出
export default {
  getParams
}
