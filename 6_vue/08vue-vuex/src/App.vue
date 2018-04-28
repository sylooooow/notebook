<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!--<router-view/>-->

    <HelloWorld></HelloWorld>
    <HelloWorldBus></HelloWorldBus>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import HelloWorldBus from './components/HelloWorldBus'
export default {
  /*
  1.当项目相对简单，没有复杂的数据流传输，这时候就可以使用bus事件
  2.创建一个js文件，定义new Vue()
  3.在需要接收值得地方注册监听事件，使用bus.on
  4.在需要传值的地方触发事件,使用bus.$emit
  */


  name: 'App',
  components:{
    HelloWorld,
    HelloWorldBus
  }
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
