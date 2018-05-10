<template>
  <div class="footer">
    <div class="footer-car icon-shopping_cart"></div>
    <div class="footer-price">
      <span class="money-sign">¥</span>
      <span class="footer-price-text" style="margin-left: 3px">0</span>
      <span class="footer-price-line"></span>
      <span class="footer-price-translate">
        另需费送费¥
        <span class="footer-price-money">4</span>元
      </span>
    </div>
    <div class="footer-price-total">
      <span id="haisheng">¥</span><span id="payMoney">20</span><span id="qisong">起送</span>
    </div>
    <div class="car-count hide"></div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 116px;
    background-color: #141d27;
    background: url("../assets/footer-bg.png") no-repeat;
    background-size: cover;
    /*opacity: 0.9;*/
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
  }
  .footer-car {
    width: 88px;
    height: 88px;
    border-radius: 44px;
    background-color: #2A343D;
    position: absolute;
    left: 36px;
    bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .car-count {
    width: 48px;
    height: 32px;
    font-size: 10px;
    border-radius: 16px;
    text-align: center;
    font-weight: 700;
    color: rgb(255,255,255);
    line-height: 32px;
    background-color: rgb(240,20,20);
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,.4);
    position: absolute;
    left: 88px;
    bottom: 80px;
  }
  .icon-shopping_cart {
    font-size: 48px;
    color: rgba(255,255,255,.4);
  }
  .footer-price {
    position: absolute;
    left: 160px;
    top: 44px;
    display: flex;
  }
  .footer-price:nth-child(1),
  .footer-price:nth-child(2) {
    font-size: 32px;
    color: rgba(255,255,255,.4);
    font-weight: 700;
    line-height: 48px;
  }
  .footer-price-line {
    width: 0px;
    height: 48px;
    border-left: 2px solid rgba(255,255,255,.1);
    margin-left: 24px;
  }
  .footer-price-translate {
    margin-left: 24px;
  }
  .footer-price-translate,
  .footer-price-translate span {
    font-size: 28px;
    font-weight: 400;
    color: rgba(255,255,255,.4);
    line-height: 48px;
  }
  .footer-price-total {
    width: 210px;
    height: 96px;
    background-color: rgba(255,255,255,0.1);
    font-size: 24px;
    font-weight: 700;
    line-height: 96px;
    color: rgba(255,255,255,0.4);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .whiteFont {
    color: rgb(255,255,255);
  }
  .active-car-style {
    background-color: rgb(0,160,220);
    color: rgb(255,255,255);
  }
</style>
