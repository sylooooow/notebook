//更改store状态的唯一方法
export default {
  //在这里方法名一般用大写
  SET_NAME(state,person) {
    state.name = person.name;
  }
}
