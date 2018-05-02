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
    <div class="header-total">
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
            console.log(json)
          })
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
    height: 134px;
    position: relative;
    overflow: hidden;
  }
  .header > img {
    filter: blur(10px);
    margin-top: 45px;
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
    height: 28px;
    background-color: rgba(7,17,27,.2);
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-img {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 24px;
    left: 24px;
    border-radius: 4px;
  }
  .header-img img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .header-title {
    position: absolute;
    left: 104px;
    top: 26px;
    display: flex;
    align-items: center;
  }
  .header-title-tag {
    width: 30px;
    height: 18px;
    background-color: red;
    background: url("../assets/brand@2x.png") no-repeat;
    background-size: cover;
    vertical-align: center;
  }
  .header-title-text {
    font-size: 16px;
    color: rgb(255,255,255);
    font-weight: bold;
    line-height: 18px;
    margin-left: 6px;
  }
  .header-distribution {
    font-size: 12px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 12px;
    position: absolute;
    left: 104px;
    top: 52px;
  }
  .header-sale {
    position: absolute;
    left: 104px;
    top: 74px;
    display: flex;
    align-items: center;
  }
  .header-sale-img {
    width: 12px;
    height: 12px;
    background: url("../assets/decrease_1@2x.png") no-repeat;
    background-size: cover;
  }
  .header-sale-text {
    font-size: 10px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 12px;
    margin-left: 4px;
  }
  .header-total {
    width: 43px;
    height: 24px;
    border-radius: 12px;
    background-color: rgba(0,0,0,.2);
    position: absolute;
    top: 67px;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-total span {
    color: rgb(255,255,255);
    font-size: 10px;
    font-weight: 200;
    line-height: 12px;
  }
  .header-total-more {
    width: 10px;
    height: 10px;
    background-image: url("../assets/keyboard_arrow_right.svg");
    background-size: 10px 10px;
  }
  .header-bottom > div {
    width: 94.6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-bottom-notice {
    height: 12px;
    width: 22px;
    background: url("../assets/bulletin@2x.png") no-repeat;
    background-size: cover;
  }
  .header-bottom-notice-text {
    width: 90.603988603989%;
    font-size: 10px;
    color: rgb(255,255,255);
    font-weight: 200;
    line-height: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .header-bottom-notice-more {
    width: 10px;
    height: 10px;
    background-image: url("../assets/keyboard_arrow_right.svg");
    background-size: 10px 10px;
  }


</style>
