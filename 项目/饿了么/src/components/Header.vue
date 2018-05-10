<template>
<div class="header">
  <img :src="json.avatar" alt="">
  <div class="header-box">
    <div class="header-img">
      <img :src="json.avatar" alt="">
    </div>
    <div class="header-title">
      <span class="header-title-tag"></span>
      <span class="header-title-text">{{json.name}}</span>
    </div>
    <div class="header-distribution">
      {{json.description}}
    </div>
    <div class="header-sale">
      <span class="header-sale-img"></span>
      <span class="header-sale-text">{{supports.description}}</span>
    </div>
    <div @click="showSeller" class="header-total">
      <span><span class="header-total-num">5</span>个</span>
      <span class="header-total-more"></span>
    </div>
  </div>
  <div class="header-bottom">
    <div>
      <div class="header-bottom-notice"></div>
      <div class="header-bottom-notice-text">{{json.bulletin}}</div>
      <div class="header-bottom-notice-more"></div>
    </div>
  </div>
</div>
</template>

<script>
  import goods from '../assets/js/goods'
    export default {
      name: "Header",
      data:function () {
        return {
          json:'',
          supports:''
        }
      },
      methods:{
        getData:function () {
          let url = '/api/seller';
          this.$http.get(url, {}).then((res) => {
            let json = res.data["data"];
            this.json = json;
            this.supports = json.supports[0];
          })
        },
        showSeller:function () {
          goods.showHideSeller();
        }
      },
      mounted:function () {
        this.getData();
      }
    }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 268px;
    position: relative;
    overflow: hidden;
  }
  .header > img {
    filter: blur(10px);
    margin-top: 90px;
  }
  .header-box {
    width: 100%;
    height: 100%;
    background-color: rgba(7,17,27,.5);
    position: absolute;
    left: 0;
    top: 0;
  }
  .header-bottom {
    width: 100%;
    height: 56px;
    background-color: rgba(7,17,27,.2);
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-img {
    width: 128px;
    height: 128px;
    position: absolute;
    top: 48px;
    left: 48px;
    border-radius: 4px;
  }
  .header-img img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .header-title {
    position: absolute;
    left: 208px;
    top: 52px;
    display: flex;
    align-items: center;
  }
  .header-title-tag {
    width: 60px;
    height: 36px;
    background-color: red;
    background: url("../assets/brand@2x.png") no-repeat;
    background-size: cover;
    vertical-align: center;
  }
  .header-title-text {
    font-size: 32px;
    color: rgb(255,255,255);
    font-weight: bold;
    line-height: 36px;
    margin-left: 12px;
  }
  .header-distribution {
    font-size: 24px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 24px;
    position: absolute;
    left: 208px;
    top: 104px;
  }
  .header-sale {
    position: absolute;
    left: 208px;
    top: 148px;
    display: flex;
    align-items: center;
  }
  .header-sale-img {
    width: 24px;
    height: 24px;
    background: url("../assets/decrease_1@2x.png") no-repeat;
    background-size: cover;
  }
  .header-sale-text {
    font-size: 20px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 24px;
    margin-left: 8px;
  }
  .header-total {
    width: 86px;
    height: 48px;
    border-radius: 24px;
    background-color: rgba(0,0,0,.2);
    position: absolute;
    top: 134px;
    right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-total span {
    color: rgb(255,255,255);
    font-size: 20px;
    font-weight: 200;
    line-height: 24px;
  }
  .header-total-more {
    width: 20px;
    height: 20px;
    background-image: url("../assets/keyboard_arrow_right.svg");
    background-size: 20px 20px;
  }
  .header-bottom > div {
    width: 94.6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-bottom-notice {
    height: 24px;
    width: 44px;
    background: url("../assets/bulletin@2x.png") no-repeat;
    background-size: cover;
  }
  .header-bottom-notice-text {
    width: 90.603988603989%;
    font-size: 20px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 56px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .header-bottom-notice-more {
    width: 20px;
    height: 20px;
    background-image: url("../assets/keyboard_arrow_right.svg");
    background-size: 20px 20px;
  }


</style>
