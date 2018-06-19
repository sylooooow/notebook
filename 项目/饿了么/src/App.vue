<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    getData:function () {
      //获取商品数据
      let goodsUrl = '/api/goods';
      this.$http.get(goodsUrl, {}).then((res) => {
        let json = res.data["data"];
        //把请求来的数据传给store的state
        this.$store.commit('SET_GOODSDATA',json);
      })

      //获取评论数据
      let ratingsUrl = '/api/ratings';
      this.$http.get(ratingsUrl, {}).then((res) => {
        let json = res.data["data"];
        //把请求来的数据传给store的state
        this.$store.commit('SET_RATINGSDATA',json);
      })

      //获取商家数据
      let sellerUrl = '/api/seller';
      this.$http.get(sellerUrl, {}).then((res) => {
        let json = res.data["data"];
        //把请求来的数据传给store的state
        this.$store.commit('SET_SELLERDATA',json);
      })
    },
  },
  mounted:function () {
    this.getData();
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  /*overflow: hidden;*/
}
</style>
