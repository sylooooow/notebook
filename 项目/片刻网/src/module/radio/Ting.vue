<template>
  <div class="ting-list-group">
    <div class="ting-cpt"><div></div><span>推荐TING | Recommendation TING</span></div>
    <div class="ting-list">
      <div class="ting" v-for="item in ting">
        <div class="ting-img">
          <a href="#"><img :src="item.imgUrl"></a>
        </div>
        <div class="ting-info">
          <div class="ting-title"><a href="#">{{item.title}}</a></div>
          <div class="ting-author"><a href="#">主播&nbsp;/&nbsp;{{item.userinfo.uname}}</a></div>
          <div class="ting-others">
            {{(item.plays / 1000).toFixed(1)}} k次播放 | 评论:{{item.comments}} | 喜欢:{{item.likes}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Ting",
    data:function () {
      return {
        ting:null,
      }
    },
    methods:{
      //获取Ting数据
      getTingData:function () {
        let parmas = this.$util.params.getParams();
        console.log("sig:" + parmas.sig)
        this.$http.get('/api/version5.0/ting/listOfRecommend.php?pageSize=3&sig=' + parmas.sig, {
          headers:{
            Authorization:parmas.Authorization
          }
        }).then((res) => {
          console.log(res.data["data"]);
          this.ting = res.data["data"];
        })
      }
    },
    mounted:function () {
      //网络请求过程不要写在mounted里，定义在methods里，只在这里调用
      this.getTingData();
    }
  }
</script>

<style scoped>
  .ting-list-group {
    width: 960px;
    margin: 0 auto;
  }
  .ting-cpt {
    width: 100%;
    height: 132px;
    display: flex;
    align-items: center;
  }
  .ting-cpt > div {
    width: 20px;
    height: 20px;
    background-color: black;
    margin-right: 10px;
  }
  .ting-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .ting {
    width: 300px;
    height: 420px;
  }
  .ting-img,
  .ting-img img{
    width: 100%;
    height: 300px;
  }
  .ting-info {
    width: 258px;
    margin: 0 auto;
  }
  .ting-title {
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-top: 25px;
  }
  .ting-title > a{
    text-decoration: none;
    color: #000000;
    font-size: 1.6em;
  }
  .ting-author {
    margin-top: 5px;
  }
  .ting-author > a{
    text-decoration: none;
    font-size: 0.8em;
    color: #3B2B2B;
  }
  .ting-title > a:hover,
  .ting-author > a:hover,
  .article-title > a:hover,
  .article-author > a:hover{
    color: #58B973;
  }
  .ting-others {
    font-size: 10px;
    color: #AC7FAC;
    margin-top: 10px;
  }
</style>
