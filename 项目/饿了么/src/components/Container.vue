<template>
  <div class="container">
    <HideSeller></HideSeller>
    <Header></Header>
    <div class="container-nav">
      <router-link class="nav-goods active-nav" to="/">商品</router-link>
      <router-link class="nav-ratings" to="/ratings">评价</router-link>
      <router-link class="nav-seller" to="/seller">商家</router-link>
    </div>
    <router-view class="container-view"></router-view>
    <Footer></Footer>
    <HideMenu></HideMenu>
  </div>
</template>

<script>
  import HideSeller from './HideSeller'
  import Header from './Header'
  import Footer from './Footer'
  import HideMenu from './HideGoodsMenu'
    export default {
      name: "Container",
      methods:{
        changeNavActive:function () {
          $('.container-nav').children().bind('click',function (ev) {
            $('.container-nav').children().removeClass('active-nav')
            $(ev.target).addClass('active-nav')
          })
        }
      },
      mounted:function () {
        this.changeNavActive();
      },
      components:{
        HideSeller,
        Header,
        Footer,
        HideMenu
      },
    }
</script>

<style scoped>
  .container {
    width: 100%;
    overflow: hidden;
  }
  .container-nav {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    border-bottom: 2px solid rgba(7,17,27,0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .nav-goods,
  .nav-ratings,
  .nav-seller {
    font-size: 28px;
    color: rgb(77,85,93);
    line-height: 28px;
  }
  .active-nav {
    color: rgb(240,20,20);
  }
  .container-view {
    width: 100%;
    height: 892px;
  }

</style>
