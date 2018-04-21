<template>
<div class="footer">
  <div class="footer-box">
    <div class="footer-left">
      <div class="footer-logo">
        <img src="../../assets/piankelogo2.png" alt="">
      </div>
      <div class="footer-about">
      <span class="about-us">
        <a href="">关于我们</a>
        <a href="">友情链接</a>
        <a href="">片刻帮助</a>
        <a href="">反馈意见</a>
        <a href="">成长记忆</a>
      </span>
        <span class="beian">
        All rights reserved © 2016 pianke.me /蜀ICP备12022689号-1
      </span>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-share">
        <img src="../../assets/shouji.png" alt="">
        <img src="../../assets/weibo.png" alt="">
        <img src="../../assets/weixin.png" alt="">
      </div>
      <div class="footer-safe">
        <img src="../../assets/lianmeng.png" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 118px;
    background-color: #1A1818;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-box {
    width: 1200px;
    min-width: 1200px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-left {
    width: 460px;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
  .footer-logo,
  .footer-logo img{
    width: 102px;
    height: 53px;
  }
  .footer-about {
    width: 340px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .about-us a {
    font-size: 12px;
    color: #666666;
    text-decoration: none;
    margin-right: 15px;
  }
  .beian {
    font-size: 12px;
    color: #666666;
  }
  .footer-right {
    width: 333px;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }
  .footer-share {
    width: 178px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-share img {
    width: 44px;
    height: 44px;
  }
  .footer-safe img {
    width: 90px;
    height: 44px;
  }
</style>
