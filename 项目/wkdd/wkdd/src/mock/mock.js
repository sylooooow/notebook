import Mock from 'mockjs'
const Random = Mock.Random;
const data = Mock.mock('http://mockdata.cn',{
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'users|60-100': [{
    'uid|+1': 1001,
    'name': '@cname',//随机生成姓名
    'type|0-5': 0,
    'img': Random.dataImage('200x200'),//随机图片
    "time": "@time('HH:mm')",//随机时间
  }],

});

export default {
  data
}
