<template>
  <div id="app">
    <Tabs></Tabs>
    <keep-alive>
      <router-view class="rootView"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Tabs from './components/Tabs'
export default {
  name: 'App',
  components:{
    Tabs
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 1334px;
}
  .rootView {
    @extend .max-w-h;
    padding: 105px 0 100px 0;
  }
</style>
