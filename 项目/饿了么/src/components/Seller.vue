<template>
    <div class="seller">
      <div class="seller-header">
        <div class="seller-header-top">
          <div class="seller-header-top-title">
            <span class="seller-header-top-titleText">{{json.name}}</span>
            <div class="seller-header-top-like">
              <span class="icon-favorite"></span>
              <span>已收藏</span>
            </div>
          </div>
          <div class="seller-header-top-info">
            <div class="seller-header-top-star">
              <img src="../assets/star36_on@2x.png" alt="">
              <img src="../assets/star36_on@2x.png" alt="">
              <img src="../assets/star36_on@2x.png" alt="">
              <img src="../assets/star36_on@2x.png" alt="">
              <img src="../assets/star36_off@2x.png" alt="">
            </div>
            <div class="seller-header-top-commentNum">
              ({{json.ratingCount}})
            </div>
            <div class="seller-header-top-sellNum">
              月售{{json.sellCount}}单
            </div>
          </div>
        </div>
        <div class="seller-header-bottom">
          <div class="seller-header-bottom-qisong">
            <div class="seller-header-bottom-titles">起送价格</div>
            <div class="seller-header-bottom-number">
              <span>{{json.minPrice}}</span>
              <span>元</span>
            </div>
          </div>
          <div class="seller-header-bottom-peisong">
            <div class="seller-header-bottom-titles">商家配送</div>
            <div class="seller-header-bottom-number">
              <span>{{json.deliveryPrice}}</span>
              <span>元</span>
            </div>
          </div>
          <div class="seller-header-bottom-time">
            <div class="seller-header-bottom-titles">平均配送时间</div>
            <div class="seller-header-bottom-number">
              <span>{{json.deliveryTime}}</span>
              <span>分钟</span>
            </div>
          </div>
        </div>
      </div>
      <div class="fenge"></div>
      <div class="seller-notice">
        <div class="seller-noticeBox">
          <div class="seller-noticeBox-title">公告与活动</div>
          <div class="seller-noticeBox-text">
            {{json.bulletin}}
          </div>
          <div v-if="supports" class="seller-noticeBox-activity-list">
            <div v-for="activity in supports" class="seller-noticeBox-activity">
              <img v-if="activity.type == 0" src="../assets/decrease_2@2x.png">
              <img v-if="activity.type == 1" src="../assets/discount_2@2x.png">
              <img v-if="activity.type == 2" src="../assets/special_2@2x.png">
              <img v-if="activity.type == 3" src="../assets/invoice_2@2x.png">
              <img v-if="activity.type == 4" src="../assets/guarantee_2@2x.png">
              <span class="seller-noticeBox-activity-text">
              {{activity.description}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="fenge"></div>
      <div class="seller-pic">
        <div class="seller-pic-title">
          商家实景
        </div>
        <div class="seller-pic-list">
          <img v-for="pic in pics" :src="pic">
        </div>
      </div>
      <div class="fenge"></div>
      <div class="seller-detail">
        <div class="seller-detail-title">商家信息</div>
        <div v-if="info" class="seller-detail-box">
          <div v-for="detail in info" class="seller-detail-item">
            {{detail}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "seller",
      data:function () {
        return {
          json:'',
          supports:'',
          pics:'',
          info:''
        }
      },
      methods:{
        getData:function () {
          let url = '/api/seller';
          this.$http.get(url, {}).then((res) => {
            let json = res.data["data"];
            this.json = json;
            this.supports = json.supports;
            this.pics = json.pics;
            this.info = json.infos;
          })
        }
      },
      mounted:function () {
        this.getData();
      }
    }
</script>

<style scoped>
  .seller {
    width: 100%;
    height: 892px;
    overflow-y: scroll;
  }
  .seller-header {
    width: 100%;
    padding: 0 36px;
  }
  .seller-header-top {
    width: 678px;
    padding: 36px 0;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .seller-header-top-title {
    position: relative;
    width: 100%;
    display: flex;
  }
  .seller-header-top-titleText {
    font-size: 28px;
    color: rgb(7,17,27);
    line-height: 28px;
  }
  .seller-header-top-like {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
  }
  .icon-favorite {
    font-size: 48px;
    color: rgb(240,20,20);
    line-height: 48px;
  }
  .seller-header-top-like > span:nth-child(2) {
    font-size: 20px;
    color: rgb(77,85,93);
    line-height: 20px;
    margin-top: 8px;
  }
  .seller-header-top-info {
    width: 100%;
    display: flex;
    margin-top: 16px;
  }
  .seller-header-top-star img {
    width: 30px;
    height: 29px;
  }
  .seller-header-top-commentNum,
  .seller-header-top-sellNum {
    margin-left: 16px;
    font-size: 20px;
    color: rgb(77,85,93);
    line-height: 36px;
  }
  .seller-header-top-sellNum {
    margin-left: 24px;
  }
  .seller-header-bottom {
    width: 678px;
    padding: 36px 0;
    display: flex;
  }
  .seller-header-bottom-qisong,
  .seller-header-bottom-peisong,
  .seller-header-bottom-time {
    width: 226px;
    box-sizing: border-box;
    padding: 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seller-header-bottom-peisong {
    border-left: 1px solid rgba(7,17,27,.1);
    border-right: 1px solid rgba(7,17,27,.1);
  }
  .seller-header-bottom-titles {
    font-size: 20px;
    color: rgb(147,153,159);
  }
  .seller-header-bottom-number {
    margin-top: 8px;
  }
  .seller-header-bottom-number >span:nth-child(1) {
    font-size: 48px;
    font-weight: 200;
    color: rgb(7,17,27);
    line-height: 48px;
  }
  .seller-header-bottom-number >span:nth-child(2) {
    font-size: 20px;
    font-weight: 200;
    color: rgb(7,17,27);
  }
  .fenge {
    width: 100%;
    box-sizing: border-box;
    height: 36px;
    border-top: 1px solid rgba(7,17,27,0.1);
    border-bottom: 1px solid rgba(7,17,27,0.1);
    background-color: #F1F3F5;
  }
  .seller-notice {
    width: 100%;
  }
  .seller-noticeBox {
    width: 100%;
    padding: 36px 36px 0 36px;
  }
  .seller-noticeBox > div {
    width: 678px;
    text-align: left;
  }
  .seller-noticeBox-title,
  .seller-pic-title,
  .seller-detail-title {
    font-size: 28px;
    font-weight: 400;
    color: rgb(0,0,0);
  }
  .seller-noticeBox-text {
    margin-top: 16px;
    padding: 0 24px;
    font-size: 24px;
    font-weight: 200;
    color: rgb(240,20,20);
    line-height: 48px;
  }
  .seller-noticeBox-activity-list {
    margin-top: 32px;
  }
  .seller-noticeBox-activity,
  .seller-detail-item {
    padding: 32px 24px;
    border-top: 1px solid rgba(7,17,27,0.1);
    display: flex;
  }
  .seller-noticeBox-activity-text {
    font-size: 24px;
    font-weight: 200;
    color: rgb(7,17,27);
    line-height: 32px;
    margin-left: 12px;
  }
  .seller-noticeBox-activity img {
    width: 32px;
    height: 32px;
  }
  .seller-pic {
    width: 100%;
    padding: 36px 0 36px 36px;
  }
  .seller-pic-list {
    width: 714px;
    margin-top: 24px;
    overflow-x: scroll;
    display: flex;
  }
  .seller-pic-title,
  .seller-detail-title {
    text-align: left;
  }
  .seller-pic-list img {
    width: 240px;
    height: 180px;
  }
  .seller-pic-list > img:not(last-child) {
    margin-right: 12px;
  }
  .seller-detail {
    width: 100%;
    padding: 36px 36px 0 36px;
  }
  .seller-detail > div {
    width: 678px;
  }
  .seller-detail-box {
    margin-top: 24px;
    text-align: left;
  }

</style>
