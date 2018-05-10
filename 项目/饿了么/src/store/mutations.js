//更改store状态的唯一方法
export default {
  //在这里方法名一般用大写
  SET_GOODSDATA(state,newData) {
    state.goodsJson = newData;
  },
  SET_RATINGSDATA(state,newData) {
    state.ratingsJson = newData;
  },
  SET_SELLERDATA(state,newData) {
    state.sellerJson = newData;
  },
  SET_GOODSCARDATA(state,newData) {
    state.goodsCarJson = newData;
  }
}
