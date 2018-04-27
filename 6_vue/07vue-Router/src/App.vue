<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!--切换视图,显示给下面的路由视图-->
    <router-link to="/">主视图</router-link>
    <router-link to="/mycom/1212/qwqe">mycom视图</router-link>

    <!--显示路由视图-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
