<template>
  <div class="article-list-group">
    <div class="ting-cpt"><div></div><span>阅读 | Read</span></div>
    <div class="article-list">
      <div class="article" v-for="item in read">
        <div class="article-info">
          <div class="article-info-box">
            <div class="article-title">
              <a :href="'articleInfo.html?id=' + item.contentid" target="_blank">{{item.title}}</a>
            </div>
            <div class="article-author">
              <a href="#">By / {{item.detail.userinfo.uname}}</a>
            </div>
            <div class="article-content">
              {{item.summary}}
              <span class="view-all">
                <a :href="'articleInfo.html?id=' + item.contentid" target="_blank">
                  VIEW ALL
                  <img src="../../assets/viewall.png" alt="">
                </a>
              </span>
            </div>
          </div>
          <div class="article-others">{{item.statistics.view}}次阅读 &nbsp;|&nbsp; 评论:{{item.statistics.comments}} &nbsp;|&nbsp; 喜欢:{{item.statistics.like}}</div>
        </div>
        <div class="article-img">
          <a :href="'articleInfo.html?id=' + item.contentid" target="_blank">
            <img :src="item.cover">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "read",
        data:function () {
          return {
            read:null,
          }
        },
        methods:{
        //获取Read数据
        getReadData:function () {
          let parmas = this.$util.params.getParams();
          console.log("sig:" + parmas.sig)
          this.$http.get('/api/version5.0/headline/day.php?time=' + parmas.timeDay + '&mode=night&sig=' + parmas.sig, {
            headers:{
              Authorization:parmas.Authorization
            }
          }).then((res) => {
            console.log(res.data["data"][4].data);
            this.read = res.data["data"][4].data;
          })
        }
      },
      mounted:function () {
        this.getReadData();
      }
    }
</script>

<style scoped>
  .article-list-group {
    width: 960px;
    margin: 0 auto;
  }
  .article-list {
    width: 100%;
  }
  .article {
    width: 100%;
    height: 218px;
    border: 1px solid #E8E8E8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    background-color: #FFFFFF;
  }
  .article-info {
    width: 660px;
    height: 182px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
  }
  .article-info > div {
    width: 88.636363636364%;
  }
  .article-info > div a {
    text-decoration: none;
  }
  .article-title {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .article-title a {
    font-size: 24px;
    color: #333;
  }
  .article-title a:hover,
  .article-author a:hover {
    color: #7DBE8B;
  }
  .article-author a {
    font-size: 12px;
    color: #334646;
  }
  .article-content:before {
    content: '';
    margin-top: -10px;
    position: absolute;
    width: 30px;
    height: 1px;
    border-top: 1px solid #333;
  }
  .article-content {
    overflow: hidden;
    height: 85px;
    font-size: 13px;
    font-weight: 100;
    color: #333;
    line-height: 20px;
    padding-top: 25px;
  }
  .article-others {
    font-size: 10px;
    font-weight: lighter;
    color: #D5BFC5;
  }
  .article-img,
  .article-img img{
    height: 100%;
    width: 300px;
    background-color: yellow;
  }
  .view-all {
    padding-left: 10px;
    position: relative;
  }
  .view-all a {
    color: #78bc85;
    font-weight: 200;
  }
  .view-all a img {
    vertical-align: baseline;
    width: 5px;
    padding-left: 3px;
  }
  .article-cpt img {
    opacity: 1;
  }
</style>
