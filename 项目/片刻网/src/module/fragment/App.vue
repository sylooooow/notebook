<template>
  <div id="app" class="wrap">
    <top></top>
    <div class="container">
      <comment></comment>
      <tag></tag>
      <allFragment></allFragment>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
  import top from './top'
  import comment from './comment'
  import tag from './tag'
  import allFragment from './allFragment'
  import bottom from '../../components/common/bottom'

export default {
  name: 'App',
  components: {
    top,
    comment,
    tag,
    allFragment,
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
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
