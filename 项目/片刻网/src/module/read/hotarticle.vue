<template>
<div class="article-list-group">
  <div class="ting-cpt"><div></div><span>热门文章 | Hot Articles</span></div>
  <div v-for="item in hot" class="article-cpt">
    <div class="article-info">
      <div class="article-info-box">
        <div class="article-title">
          <a :href="'articleInfo.html?id=' + item.id" target="_blank">{{item.title}}</a>
        </div>
        <div class="article-author">
          <a :href="'userCenter.html?uid=' + item.userinfo.uid" target="_blank">by / {{item.userinfo.uname}}</a>
        </div>
        <div class="article-content">{{item.text}}</div>
      </div>
      <div class="article-others">
        {{(item.views / 1000).toFixed(1)}} k次阅读 | 评论:{{item.comments}} | 喜欢:{{item.likes}}
      </div>
    </div>
  </div>
  <div class="hour">
    <a href="readNode.html" target="_blank">
      <img src="../../assets/24hours.jpg" alt="">
    </a>
  </div>
  <div class="special">
    <img src="../../assets/topic.jpg" alt="">
  </div>
  <div class="card">
    <img src="../../assets/wordcard.jpg" alt="">
  </div>
</div>
</template>

<script>
    export default {
        name: "hotarticle",
        data:function () {
          return {
            hot:null
          }
        },
        methods:{
        //获取Read数据
        getHotData:function () {
          let parmas = this.$util.params.getParams();
          console.log("sig:" + parmas.sig)
          this.$http.get('/api/version5.0/read/listOfRecommendArticle.php?pageSize=3&sig=' + parmas.sig, {
            headers:{
              Authorization:parmas.Authorization
            }
          }).then((res) => {
            console.log(res.data["data"]);
            this.hot = res.data["data"];
          })
        }
      },
        mounted:function () {
          this.getHotData();
        }

    }
</script>

<style scoped>
.article-list-group {
  width: 960px;
}
  .article-cpt {
    width: 100%;
    height: 218px;
    border: 1px solid #E8E8E8;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background-color: white;
  }
  .article-info {
    width: 915px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .article-info-box {
    width: 100%;
    height: 140px;
  }
  .article-title a {
    font-size: 1.6em;
    color: #333333;
  }
  .article-author a {
    font-size: 12px;
    color: #463333;
    font-weight: lighter;
  }
.article-title a:hover,
.article-author a:hover {
  color: #48B058;
}
  .article-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: #6C3333;
    font-weight: lighter;
    font-size: 0.85em;
    margin-top: 15px;
  }
  .hour,.special,.card,
  .hour > img,.special > img,.card > img{
    width: 960px;
    height: 216px;
  }
.hour,.special,.card {
  margin-top: 80px;
  overflow: hidden;
}
.card {
  margin-bottom: 120px;
}
.hour > img:hover,.special > img:hover,.card > img:hover {
  transform: scale(1.1);
  transition: all 0.8s;
}
</style>
