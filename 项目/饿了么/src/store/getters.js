export default {
  //getters用于取值，可以保护对象属性，对值进行加工
  //方法
  nameInfo:function (state) {
    return `my name is ${state.name}`
  }
}
