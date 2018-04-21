<template>
  <div class="article-list-group">
    <div class="ting-cpt"><div></div><span>阅读 | Read</span></div>
    <div class="article-list">
      <div class="article" v-for="item in read">
        <div class="article-info">
          <div class="article-info-box">
            <div class="article-title">
              <a href="#">{{item.title}}</a>
            </div>
            <div class="article-author">
              <a href="#">by / {{item.detail.userinfo.uname}}</a>
            </div>
            <div class="article-content">
              {{item.summary}}
              <span>
                <a href="#"></a>
              </span>
            </div>
          </div>
          <div class="article-others">{{item.statistics.view}}次阅读 &nbsp;|&nbsp; 评论:{{item.statistics.comments}} &nbsp;|&nbsp; 喜欢:{{item.statistics.like}}</div>
        </div>
        <div class="article-img">
          <a href="#">
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
    font-size: 1.5em;
    color: #6C3333;
  }
  .article-author a {
    font-size: 12px;
    color: #334646;
  }
  .article-content {
    font-size: 0.9em;
    color: #6C5959;
    margin-top: 10px;
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
</style>
