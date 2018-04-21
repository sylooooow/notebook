<template>
  <div class= "more-wrap">
    <div v-show= "btn" id= "more-button" class= "more-button">
      <div @click="showLoad()" class="btn-box">
        <div class="btn">查看更多精彩内容</div>
      </div>
    </div>
    <div v-show= "load" class= "more-content">
      <div class= "past-content">
        <div class= "left-linear"></div>
        <div class= "past-title">
          <div></div>
          <span>往期精选</span>
        </div>
        <div class= "right-linear"></div>
      </div>

      <div class= "more-img-group">
        <div id= "list">
          <div class= "list-item" v-for= "item in more">
            <div class= "list-item-img">
              <a href="#"><img :src="item.cover"></a>
            </div>
            <div class= "list-item-intro">
              <div class= "list-item-title">{{item.title}}</div>
              <div class= "list-item-author">主播 / {{item.detail.userinfo.uname}}</div>
              <div class= "list-item-others">
                <div class= "list-item-ting">
                  Ting
                </div>
                <div class= "list-item-like">
                  {{(item.detail.plays / 1000).toFixed(1)}} k次播放 | 评论:{{item.detail.comments}} | 喜欢:{{(item.detail.likes / 1000).toFixed(1)}}k
                </div>
              </div>
            </div>
            <div class= "list-item-icon">
              <div class= "list-item-user">
                <div class= "list-item-pic">
                  <img :src= "item.detail.userinfo.icon">
                </div>
                <div class= "list-item-username">{{item.detail.userinfo.uname}}</div>
              </div>
              <div class="list-item-dianzan">
                <img src= "img/dianzan.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "more",
        data:function () {
          return {
            more:this.json.json4,
            btn:true,
            load:false
          }
        },
        methods:{
          showLoad:function () {
            this.btn = false;
            this.load = true;
          }
        },
        mounted:function () {
          var oList = document.getElementById("list");
          var space = 10; //块之间的间隙
          var winW = 1200; //容器宽度
          var cols = 4;

          var colHArr = [];
          for(var i = 0; i < cols; i++) {
            colHArr[i] = 0;
          }

          // 遍历进行定位
          var items = document.getElementsByClassName("list-item");
          for (var i = 0; i < items.length; i++) {
            //寻找最短的一列,即colHArr最小数和下标
            var minNum = colHArr[0];
            var minIndex = 0;
            for(var j = 0; j < colHArr.length; j++) {
              if(minNum > colHArr[j]) {
                minNum = colHArr[j];
                minIndex = j;
              }
            }

            items[i].style.top = minNum + space + "px";
            items[i].style.left = minIndex * (290 + space) + space + "px";

            //更新最短列的高度
            colHArr[minIndex] += space + items[i].offsetHeight;
          }

          //更新容器的高度
          var maxH = colHArr[0];
          for(var i = 0; i < colHArr.length; i++) {
            if(maxH < colHArr[i]) {
              maxH = colHArr[i];
            }
          }
          oList.style.height = maxH + space + "px";
        }
    }



</script>

<style scoped>
  .more-wrap {
    width: 1200px;
    margin: 0 auto;
    height: 400px;
  }
  .more-button {
    width: 100%;
    height: 222px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-box {
    width: 190px;
    height: 55px;
    border-radius: 26px;
    border: 1px solid #AAD6B5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 180px;
    height: 45px;
    background-color: #75BE88;
    border-radius: 22px;
    color: #FFFFFF;
    text-align: center;
    line-height: 45px;
    font-weight: lighter;
  }
  .more-content {
    width: 100%;
  }
  .past-content {
    width: 100%;
    height: 222px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-linear,
  .right-linear {
    width: 520px;
    border: 2px dashed #A3A3A3;
  }
  .past-title {
    width: 160px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .past-title > div {
    width: 20px;
    height: 20px;
    background-color: black;
  }
  .past-title > span {
    margin-left: 10px;
  }
  .more-img-group {
    width: 100%;
  }
  #list {
    width: 100%;
    position: relative;
  }
  .list-item {
    width: 290px;
    border: 1px solid #E8E8E8;
    position: absolute;
  }
  .list-item > div {
    width: 100%;
  }
  .list-item-img img {
    width: 100%;
    height: 290px;
  }
  .list-item-intro {
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .list-item-intro > div {
    width: 88%;
  }
  .list-item-title {
    font-size: 1.1em;
    margin-top: 20px;
  }
  .list-item-author {
    font-size: 12px;
    color: #333346;
    margin-top: 20px;
  }
  .list-item-others {
    display: flex;
    justify-content: space-between;
    align-items:baseline;
    margin-top: 20px;
  }
  .list-item-ting {
    width: 40px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: #7F6C5F;
  }
  .list-item-like {
    font-size: 10px;
    color: #D2D3DF;
    font-weight: lighter;
    margin-bottom: 15px;
  }
  .list-item-icon {
    width: 290px;
    height: 48px;
    background-color: #FAFAFA;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list-item-user {
    height: 32px;
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
  .list-item-pic,
  .list-item-pic img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }
  .list-item-username {
    font-size: 12px;
    color: #58336A;
    margin-left: 10px;
  }
  .list-item-username:hover {
    color: #53B86F;
  }
  .list-item-dianzan {
    margin-right: 15px;
  }
  .list-item-dianzan,
  .list-item-dianzan img {
    width: 26px;
    height: 22px;
  }
  .list-item-title:hover,
  .list-item-author:hover {
    color: #56B972;
  }
</style>
