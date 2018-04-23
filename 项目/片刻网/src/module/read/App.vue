<template>
  <div id="app" class="wrap">
    <top></top>
    <div class="container">
      <slider></slider>
      <classify></classify>
      <hotarticle></hotarticle>
    </div>
    <bottom></bottom>
    <div class="back-top"></div>
  </div>
</template>

<script>
    import top from '../../components/common/top'
  import slider from './slider'
  import bottom from '../../components/common/bottom'
  import classify from './classify'
  import hotarticle from './hotarticle'

export default {
  name: 'App',
  components: {
    top,
    slider,
    classify,
    hotarticle,
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
</style>
