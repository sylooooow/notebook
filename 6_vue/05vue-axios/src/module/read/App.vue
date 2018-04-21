<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <div>我是read页面</div>
    <HelloWorld/>
  </div>
</template>

<script>
  import HelloWorld from '../../components/HelloWorld'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    methods:{
      //获取头部数据
      getHeaderData:function () {

        let parmas = this.$util.params.getParams();
        this.$http.get('/api/version5.0/headline/recent.php?location=special&sig=' + parmas.sig, {
          headers:{
            Authorization:parmas.Authorization
          }
        }).then(function (res) {
          console.log(res);
        })
      }
    },
    mounted:function () {
      //网络请求过程不要写在mounted里，定义在methods里，只在这里调用
      this.getHeaderData()
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
