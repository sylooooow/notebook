import dateformat from 'dateformat/'
import MD5 from 'md5/md5'
import Base64 from 'Base64'

var getParams = function () {
  let date = new Date();
  let time = dateformat(date.getTime(), 'yyyymmddHHMMss');
  let sig = MD5('0' + '' + time).toUpperCase();
  let formatString = '' + ':' + time;
  let Authorization = Base64.btoa(formatString);
  let timeDay = dateformat(date.getTime(), 'yyyy-mm-dd');
  let h = date.getHours();
  return {
    h,
    time,
    timeDay,
    sig,
    Authorization
  }
};

//导出
export default {
  getParams
}
