<template>
  <div class="goods-car-hide-bg hide">
    <div class="goods-car-menu hide">
      <div class="goods-car-menu-titleBox">
        <div class="goods-car-menu-title">
          <span>购物车</span>
          <span @click="clearGoodsCar" class="car-clear">清空</span>
        </div>
      </div>
      <div class="goods-car-menu-box">
        <div class="goods-car-menu-list">
          <div v-for="item in json[0]" class="goods-car-item">
            <div class="goods-car-item-title">{{item.title}}</div>
            <div class="goods-car-item-others">
              <div class="goods-car-item-price-box">
                <span>￥</span>
                <span class="goods-car-item-price">{{item.price}}</span>
              </div>
              <div class="goods-car-item-option">
                <span @click="goodsReduceOperation" class="icon-remove_circle_outline2"></span>
                <span class="car-goodsNum">{{item.count}}</span>
                <span @click="goodsAddOperation" class="icon-add_circle2"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../common/eventBus'
    import goods from '../assets/js/goods'
    export default {
      name: "hide-goods-menu",
      data:function () {
        return {
          json:[]
        }
      },
      methods:{
        goodsAddOperation:function (ev) {
          goods.goodsCarAdd(ev);
        },
        goodsReduceOperation:function (ev) {
          goods.goodsCarReduce(ev);
        },
        clearGoodsCar:function () {
          goods.clearCar();
        }
      },
      mounted:function () {
        let _this = this;
        bus.$on('goodsInfo', function (msg) {
          // _this.json = msg;
          _this.$set(_this.json, 0, msg);
        })
      },
    }
</script>

<style scoped>
  .goods-car-hide-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(7,17,27,0.6);
    /*filter: blur(10px);*/
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .goods-car-menu {
    width: 100%;
    height: 611px;
    background-color: rgb(255,255,255);
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .goods-car-menu-titleBox {
    width: 100%;
    height: 80px;
    background-color: #f3f5f7;
    box-sizing: border-box;
    border-bottom: 2px solid rgba(7,17,27,.1);
  }
  .goods-car-menu-title {
    width: 678px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .goods-car-menu-title span:nth-child(1) {
    font-size: 28px;
    font-weight: 200;
    color: rgb(7,17,27);
  }
  .car-clear {
    font-size: 24px;
    color: rgb(0,160,220);
  }
  .goods-car-menu-box {
    width: 100%;
    height: 531px;
    overflow-y: scroll;
  }
  .goods-car-menu-list {
    width: 678px;
    margin: 0 auto;
  }
  .goods-car-item {
    width: 100%;
    height: 96px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(7,17,27,.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .goods-car-item-title {
    font-size: 28px;
    color: rgb(7,17,27);
  }
  .goods-car-item-others {
    width: 216px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .goods-car-item-price-box {
    width: 48px;
    color: rgb(240,20,20);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .goods-car-item-price-box span:nth-child(1) {
    font-size: 20px;
    font-weight: normal;
  }
  .goods-car-item-price {
    font-size: 28px;
    font-weight: 700;
  }
  .goods-car-item-option {
    width: 144px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-remove_circle_outline2,
  .icon-add_circle2{
    font-size: 48px;
    color: rgb(0,160,220);
    line-height: 48px;
  }
  .car-goodsNum {
    width: 48px;
    height: 48px;
    font-size: 20px;
    color: rgb(147,153,159);
    line-height: 48px;
  }
</style>
