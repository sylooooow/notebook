<template>
    <div class="goods">
      <div class="goods-left">
        <div v-if="goodsJson" class="goods-left-lang">
          <div v-for="(item,index) in goodsJson" :key="index" class="goods-left-item">
            <div class="goods-left-item-text">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="goods-right" id="goods-right">
        <div class="goods-right-lang">
          <div v-for="(item,index) in goodsJson" :key="index" class="goods-right-item">
            <div class="goods-right-item-nav">{{item.name}}</div>
            <div v-for="foodItem in item.foods" class="goods-right-item-box">
              <div class="goods-right-item-box-img">
                <img :src="foodItem.icon" alt="">
              </div>
              <div class="goods-right-item-box-info">
                <div @click="toDetailPage" class="goods-right-item-box-title">{{foodItem.name}}</div>
                <div class="goods-right-item-box-desc">{{foodItem.description}}</div>
                <div class="goods-right-item-box-about">
                  <span>月售{{foodItem.sellCount}}份</span>
                  <span>好评率{{foodItem.rating}}%</span>
                </div>
                <div class="goods-right-item-box-other">
                  <div class="goods-right-item-box-price">
                    ￥<span class="goods-right-item-box-nowprice">{{foodItem.price}}</span>
                    <span v-if="foodItem.oldPrice" class="goods-right-item-box-oldprice">￥{{foodItem.oldPrice}}</span>
                  </div>
                  <div class="goods-right-item-box-option">
                    <span class="icon-remove_circle_outline pos-hide"></span>
                    <span class="goodsNum pos-hide"></span>
                    <span class="icon-add_circle"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import mapState from 'vuex'
  import bus from '../common/eventBus'
  import goods from '../assets/js/goods'
    export default {
      name: "goods",
      methods:{
        firstActive:function () {
          $(".goods-left-item").eq(0).addClass('active-left-item');
        },
        toDetailPage:function (ev) {
          let _this = this;
          let nowTarget = $(ev.target);
          console.log(nowTarget.html())
          let dataJson = this.goodsJson;
          $.each(dataJson,function (index,item) {
            $.each(item.foods,function (num,value) {
              if (value.name == nowTarget.html()) {
                // console.log(value)
                // bus.$emit('goodsDetail',value);
                //'./foodDetail'
                _this.$router.push({
                  name:'foodDetail',
                  params:value
                });
                return false;
              }
            });
            return false;
          });
        }
      },
      updated:function () {
        this.firstActive();
        goods.leftNavClick();
        goods.bindRightMenuScroll();
        goods.addGoods();
        goods.removeGoods();
        goods.clickGoodsCar();
      },
      //监听store中的state数据
      computed: {
        goodsJson:function () {
          return this.$store.state.goodsJson;
        },
      },
    }
</script>

<style scoped>
  .goods {
    width: 100%;
    /*height: 66.616766467066%;*/
    height: 892px;
    display: flex;
  }
  .goods-left {
    width: 160px;
    min-width: 160px;
    height: 100%;
    background-color: #F3F5F7;
    overflow: scroll;
  }
  .goods-right {
    width: 100%;
    height: 100%;
    /*height: 66.766467065868%;*/
    overflow: scroll;
  }
  .goods-left-item {
    width: 100%;
    height: 108px;
    display: flex;
    align-items: center;
  }
  .goods-left-item-text {
    width: 112px;
    height: 100%;
    border-bottom: 2px solid rgba(7,17,27,.1);
    margin-left: 24px;
    font-size: 24px;
    color: rgb(0,0,0);
    font-weight: 200;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .active-left-item {
    background-color: rgb(255,255,255);
  }
  .active-left-item-text {
    color: rgb(0,0,0);
  }
  .goods-right-item-nav {
    width: 100%;
    height: 52px;
    background-color: #F3F5F7;
    border-left: 4px solid #d9dde1;
    font-size: 24px;
    color: rgb(147,153,159);
    display: flex;
    align-items: center;
    padding-left: 28px;
  }
  .goods-right-item-box {
    display: flex;
    padding: 36px;
    position: relative;
  }
  .goods-right-item-box-img,
  .goods-right-item-box-img img {
    width: 114px;
    height: 114px;
    border-radius: 4px;
  }
  .goods-right-item-box-info {
    /*background-color: pink;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }
  .goods-right-item-box-title {
    font-size: 28px;
    color: rgb(7,17,27);
  }
  .goods-right-item-box-desc {
    text-align: left;
  }
  .goods-right-item-box-desc,
  .goods-right-item-box-about span {
    font-size: 20px;
    color: rgb(147,153,159);
  }
  .goods-right-item-box-other {
    width: 100%;
    display: flex;
  }
  .goods-right-item-box-price {
    font-size: 20px;
    color: rgb(240,20,20);
    font-weight: normal;
  }
  .goods-right-item-box-nowprice {
    font-size: 28px;
  }
  .goods-right-item-box-oldprice {
    font-size: 20px;
    color: rgb(147,153,159);
    text-decoration: line-through;
  }
  .goods-right-item-box-option {
    width: 144px;
    height: 48px;
    position: absolute;
    right: 36px;
    bottom: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-remove_circle_outline,
  .icon-add_circle{
    font-size: 48px;
    color: rgb(0,160,220);
    line-height: 48px;
  }
  .goodsNum {
    width: 48px;
    height: 48px;
    font-size: 20px;
    color: rgb(147,153,159);
    line-height: 48px;
  }
</style>
