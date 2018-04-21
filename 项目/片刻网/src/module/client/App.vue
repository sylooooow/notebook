<template>
  <div id="app" class="wrap">
    <top></top>

    <bottom></bottom>
  </div>
</template>

<script>
  import top from './top'

  import bottom from '../../components/common/bottom'

export default {
  name: 'App',
  components: {
    top,
    bottom
  },
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

</style>
