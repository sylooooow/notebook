<template>
  <div id="app" class="wrap">
    <top></top>
    <div class="container">
      <topContainer></topContainer>
      <introduceContainer></introduceContainer>
    </div>
    <bottom></bottom>
    <div class="back-top"></div>
  </div>
</template>

<script>
  import top from '../../components/common/top'
  import topContainer from './top-container'
  import introduceContainer from './introduce-container'
  import bottom from '../../components/common/bottom'

export default {
  name: 'App',
  components: {
      top,
      topContainer,
      introduceContainer,
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
    width: 100%;
    padding-top: 90px;
  }

</style>
