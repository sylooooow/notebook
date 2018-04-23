<template>
  <div id="app" class="wrap">
    <top></top>
    <container></container>
    <ting></ting>
    <read></read>
    <user></user>
    <more></more>
    <bottom></bottom>
    <div class="back-top"></div>
  </div>
</template>

<script>
    import top from '../../components/common/top'
  import container from './container'
  import ting from './ting'
  import read from './read'
  import user from './user'
  import more from './more'
  import bottom from '../../components/common/bottom'

export default {
  name: 'App',
  components: {
    top,
    container,
    ting,
    read,
    user,
    more,
    bottom
  },
    data:function () {
      return {
          backtotop:false
      }
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
    padding-top: 90px;
  }

</style>
