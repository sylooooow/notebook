<template>
  <div id="app" class="wrap">
    <top></top>
    <container></container>
    <ting></ting>
    <read></read>
    <user></user>
    <more></more>
  </div>
</template>

<script>
import top from './components/top'
import container from './components/container'
import ting from './components/ting'
import read from './components/read'
import user from './components/user'
import more from './components/more'

export default {
  name: 'App',
  components: {
    top,
    container,
    ting,
    read,
    user,
    more
  }
}
</script>

<style>
  @import "../static/commen.css";
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
    height: 100%;
  }
</style>
