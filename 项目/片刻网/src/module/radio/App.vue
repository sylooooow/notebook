<template>
  <div id="app" class="wrap">
    <top></top>
    <div class="container">
      <div class="radio-type">
        <div class="type-title-cpt">
          <span class="jingxuan">精选</span>
          <span class="all-radio">全部电台</span>
        </div>
      </div>
      <slider></slider>
      <classify></classify>
      <Ting></Ting>
      <TopTing></TopTing>
      <hotRadio></hotRadio>
      <voice></voice>
    </div>
    <bottom></bottom>
    <div class="back-top"></div>
  </div>
</template>

<script>
    import top from '../../components/common/top'
  import slider from './slider'
  import classify from './classify'
  import Ting from './Ting'
  import TopTing from './TopTing'
  import hotRadio from './hotRadio'
  import voice from './voice'
  import bottom from '../../components/common/bottom'

export default {
  name: 'App',
  components: {
    top,
    slider,
    classify,
    Ting,
    TopTing,
    hotRadio,
    voice,
    bottom
  },
    mounted:function () {
        this.$util.controlHeader.controlHeader();
        this.$util.backtop.backtop();
    }
}
</script>

<style>
  @import "../../common/commen.css";
  * {
    margin: 0;
    padding: 0;
  }
  html,body {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
  }
  .wrap {
    width: 100%;
    position: relative;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
  }
  .radio-type {
    width: 960px;
    height: 96px;
    display: flex;
    align-items: center;
  }
  .jingxuan {
    padding: 10px 0;
    border-bottom: 2px solid black;
  }
  .all-radio {
    padding: 10px 40px;
    color: #9999A4;
  }
</style>
