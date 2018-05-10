<template>
    <div class="food-detail">
      <div class="food-detail-img">
        <img :src="detailJson.image">
      </div>
      <div class="food-detail-info">
        <div class="food-detail-info-title">{{detailJson.name}}</div>
        <div class="food-detail-info-sell">
          <span>月售{{detailJson.sellCount}}份</span>
          <span>好评率{{detailJson.rating}}%</span>
        </div>
        <div class="food-detail-info-peice">
          ￥<span>{{detailJson.price}}</span>
          <span v-if="detailJson.oldPrice">￥{{detailJson.oldPrice}}</span>
        </div>
        <div class="food-detail-info-add">加入购物车</div>
      </div>
      <div class="fenge"></div>
      <div class="food-detail-intro">
        <div class="food-detail-intro-title">商品介绍</div>
        <div v-if="detailJson.info" class="food-detail-intro-text">{{detailJson.info}}</div>
        <div v-else="" class="food-detail-intro-text">该商品暂无介绍</div>
      </div>
      <div class="fenge"></div>
    </div>
</template>

<script>
  import bus from '../common/eventBus'
    export default {
      name: "food-detail",
      data:function () {
        return {
          detailJson:''
        }
      },
      mounted:function () {
        let json = this.$route.params
        console.log(json);
        this.detailJson = json;
        // let _this = this;
        // bus.$on('goodsDetail', function (msg) {
        //   console.log("ss")
        //   console.log(msg);
        //   _this.$set(_this.detailJson, 0, msg);
        // })
      },
    }
</script>

<style scoped>
  .food-detail {
    width: 100%;
    height: 1336px;
    overflow-y: scroll;
  }
  .food-detail > div {
    width: 100%;
    text-align: left;
  }
  .food-detail-img,
  .food-detail-img img {
    width: 100%;
    height: 750px;
  }
  .food-detail-info {
    padding: 36px;
    position: relative;
  }
  .food-detail-info-title {
    font-size: 28px;
    font-weight: 700;
    color: rgb(7,17,27);
  }
  .food-detail-info-sell {
    font-size: 20px;
    color: rgb(147,153,159);
    line-height: 20px;
    margin-top: 16px;
  }
  .food-detail-info-sell > span:nth-child(2) {
    margin-left: 24px;
  }
  .food-detail-info-peice {
    margin-top: 36px;
    font-size: 20px;
    font-weight: normal;
    color: rgb(240,20,20);
    line-height: 48px;
  }
  .food-detail-info-peice > span:nth-child(1) {
    font-size: 28px;
    font-weight: 700;
    color: rgb(240,20,20);
    line-height: 48px;
  }
  .food-detail-info-peice > span:nth-child(2) {
    margin-left: 15px;
    font-size: 20px;
    font-weight: 700;
    color: rgb(147,153,159);
    line-height: 48px;
  }
  .food-detail-info-add {
    width: 148px;
    height: 48px;
    border-radius: 24px;
    background-color: rgb(0,160,220);
    font-size: 20px;
    color: rgb(255,255,255);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 36px;
    bottom: 36px;
  }
  .fenge {
    width: 100%;
    box-sizing: border-box;
    height: 36px;
    border-top: 1px solid rgba(7,17,27,0.1);
    border-bottom: 1px solid rgba(7,17,27,0.1);
    background-color: #F1F3F5;
  }
  .food-detail-intro {
    padding: 36px;
  }
  .food-detail-intro-title {
    font-size: 28px;
    font-weight: 400;
    color: rgb(0,0,0);
  }
  .food-detail-intro-text {
    margin-top: 12px;
    width: 678px;
    padding: 0 16px;
    font-size: 24px;
    font-weight: 200;
    color: rgb(77,85,93);
    line-height: 48px;
  }

</style>
