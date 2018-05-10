<template>
  <div class="hide-seller hide">
    <div class="hide-seller-title">{{json.name}}</div>
    <div class="hide-seller-starBox">
      <div class="hide-seller-star">
        <img src="../assets/star48_on@2x.png" alt="">
        <img src="../assets/star48_on@2x.png" alt="">
        <img src="../assets/star48_on@2x.png" alt="">
        <img src="../assets/star48_on@2x.png" alt="">
        <img src="../assets/star48_off@2x.png" alt="">
      </div>
    </div>
    <div class="hide-seller-tag">
      <div></div>
      <div>优惠信息</div>
      <div></div>
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
    <div class="hide-seller-tag">
      <div></div>
      <div>商家公告</div>
      <div></div>
    </div>
    <div class="seller-noticeBox-text">
      {{json.bulletin}}
    </div>
    <div @click="closeSeller" class="icon-close"></div>
  </div>
</template>

<script>
  import goods from '../assets/js/goods'
    export default {
      name: "hide-seller",
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
        },
        closeSeller:function () {
          goods.concealHideSeller();
        }
      },
      mounted:function () {
        this.getData();
      }
    }
</script>

<style scoped>
  .hide-seller {
    width: 100%;
    height: 100%;
    padding: 128px 72px 64px 72px;
    background-color: rgba(7,17,27,0.8);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
  }
  .hide-seller > div {
    width: 606px;
  }
  .hide-seller-title {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    color: rgb(255,255,255);
    line-height: 32px;
  }
  .hide-seller-starBox {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
  .hide-seller-star img {
    width: 40px;
    height: 38px;
  }
  .hide-seller-star img:nth-child(1),
  .hide-seller-star img:nth-child(2),
  .hide-seller-star img:nth-child(3),
  .hide-seller-star img:nth-child(4){
    margin-right: 40px;
  }
  .hide-seller-tag {
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 56px;
  }
  .hide-seller-tag > div:nth-child(1),
  .hide-seller-tag > div:nth-child(3) {
    width: 224px;
    height: 2px;
    border: 1px solid rgba(255,255,255,.2);
  }
  .hide-seller-tag > div:nth-child(2) {
    font-size: 28px;
    font-weight: 700;
    color: rgb(255,255,255);
    line-height: 28px;
  }
  .seller-noticeBox-activity-list {
    margin-top: 48px;
  }
  .seller-noticeBox-activity,
  .seller-detail-item {
    padding: 0px 24px;
    display: flex;
  }
  .seller-noticeBox-activity:not(last-child) {
    margin-bottom: 24px;
  }
  .seller-noticeBox-activity-text {
    font-size: 24px;
    font-weight: 200;
    color: rgb(255,255,255);
    line-height: 24px;
    margin-left: 12px;
  }
  .seller-noticeBox-activity img {
    width: 32px;
    height: 32px;
  }
  .seller-noticeBox-text {
    margin-top: 48px;
    padding: 0 24px;
    font-size: 24px;
    font-weight: 200;
    color: rgb(255,255,255);
    line-height: 48px;
    text-align: left;
  }
  .icon-close {
    font-size: 64px;
    color: rgba(255,255,255,.5);
    position: absolute;
    bottom: 64px;
  }
</style>
