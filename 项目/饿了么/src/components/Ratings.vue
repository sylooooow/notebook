<template>
    <div class="ratings">
      <RatingsHeader></RatingsHeader>
      <div class="fenge"></div>
      <div class="comment">
        <div class="comment-control">
          <div class="comment-control-buttons">
            <div @click="isAll" class="comment-control-buttons-all">
              全部
              <span>57</span>
            </div>
            <div @click="isGood" class="comment-control-buttons-good">
              满意
              <span>47</span>
            </div>
            <div @click="isBad" class="comment-control-buttons-bad">
              不满意
              <span>10</span>
            </div>
          </div>
          <div class="comment-control-only">
            <span @click="onlyContent" class="icon-check_circle"></span>
            <span>只看有内容的评价</span>
          </div>
        </div>
        <div class="comment-box">
          <div class="comment-box-list">
            <div v-for="item in ratingsJson" class="comment-box-list-item">
              <div v-if="All">
                <div class="comment-box-list-item-icon">
                  <img :src="item.avatar" alt="">
                </div>
                <div class="comment-box-list-item-intro">
                  <div class="comment-box-list-item-intro-title">
                    <span>{{item.username}}</span>
                    <span>{{parmas.getParams(item.rateTime).addTime}}</span>
                  </div>
                  <div class="comment-box-list-item-intro-score">
                    <div class="comment-box-list-item-intro-star">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                    </div>
                    <div v-if="item.deliveryTime" class="comment-box-list-item-intro-deliveryTime">{{item.deliveryTime}}分钟送达</div>
                  </div>
                  <div class="comment-box-list-item-intro-text">
                    {{item.text}}
                  </div>
                  <div class="comment-box-list-item-intro-others">
                    <div v-if="item.rateType == 0" class="icon-thumb_up"></div>
                    <div v-else-if="item.rateType == 1" class="icon-thumb_down"></div>
                    <div v-if="item.recommend" class="comment-box-list-item-intro-tagBox">
                      <div v-for="(tag,index) in item.recommend" class="comment-box-list-item-intro-tag">
                        {{tag}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="Good && item.rateType == 0">
                <div class="comment-box-list-item-icon">
                  <img :src="item.avatar" alt="">
                </div>
                <div class="comment-box-list-item-intro">
                  <div class="comment-box-list-item-intro-title">
                    <span>{{item.username}}</span>
                    <span>{{parmas.getParams(item.rateTime).addTime}}</span>
                  </div>
                  <div class="comment-box-list-item-intro-score">
                    <div class="comment-box-list-item-intro-star">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                    </div>
                    <div v-if="item.deliveryTime" class="comment-box-list-item-intro-deliveryTime">{{item.deliveryTime}}分钟送达</div>
                  </div>
                  <div class="comment-box-list-item-intro-text">
                    {{item.text}}
                  </div>
                  <div class="comment-box-list-item-intro-others">
                    <div v-if="item.rateType == 0" class="icon-thumb_up"></div>
                    <div v-else-if="item.rateType == 1" class="icon-thumb_down"></div>
                    <div v-if="item.recommend" class="comment-box-list-item-intro-tagBox">
                      <div v-for="(tag,index) in item.recommend" class="comment-box-list-item-intro-tag">
                        {{tag}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="Bad && item.rateType == 1">
                <div class="comment-box-list-item-icon">
                  <img :src="item.avatar" alt="">
                </div>
                <div class="comment-box-list-item-intro">
                  <div class="comment-box-list-item-intro-title">
                    <span>{{item.username}}</span>
                    <span>{{parmas.getParams(item.rateTime).addTime}}</span>
                  </div>
                  <div class="comment-box-list-item-intro-score">
                    <div class="comment-box-list-item-intro-star">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                    </div>
                    <div v-if="item.deliveryTime" class="comment-box-list-item-intro-deliveryTime">{{item.deliveryTime}}分钟送达</div>
                  </div>
                  <div class="comment-box-list-item-intro-text">
                    {{item.text}}
                  </div>
                  <div class="comment-box-list-item-intro-others">
                    <div v-if="item.rateType == 0" class="icon-thumb_up"></div>
                    <div v-else-if="item.rateType == 1" class="icon-thumb_down"></div>
                    <div v-if="item.recommend" class="comment-box-list-item-intro-tagBox">
                      <div v-for="(tag,index) in item.recommend" class="comment-box-list-item-intro-tag">
                        {{tag}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!showFlag && item.text">
                <div class="comment-box-list-item-icon">
                  <img :src="item.avatar" alt="">
                </div>
                <div class="comment-box-list-item-intro">
                  <div class="comment-box-list-item-intro-title">
                    <span>{{item.username}}</span>
                    <span>{{parmas.getParams(item.rateTime).addTime}}</span>
                  </div>
                  <div class="comment-box-list-item-intro-score">
                    <div class="comment-box-list-item-intro-star">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                      <img src="../assets/star36_on@2x.png" alt="">
                    </div>
                    <div v-if="item.deliveryTime" class="comment-box-list-item-intro-deliveryTime">{{item.deliveryTime}}分钟送达</div>
                  </div>
                  <div class="comment-box-list-item-intro-text">
                    {{item.text}}
                  </div>
                  <div class="comment-box-list-item-intro-others">
                    <div v-if="item.rateType == 0" class="icon-thumb_up"></div>
                    <div v-else-if="item.rateType == 1" class="icon-thumb_down"></div>
                    <div v-if="item.recommend" class="comment-box-list-item-intro-tagBox">
                      <div v-for="(tag,index) in item.recommend" class="comment-box-list-item-intro-tag">
                        {{tag}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import dateformat from 'dateformat'
  import RatingsHeader from './RatingHeader'
    export default {
      name: "ratings",
      data:function () {
        return {
          parmas:this.$util.params,
          All:true,
          Good:false,
          Bad:false,
          showFlag:true
        }
      },
      components:{
        RatingsHeader
      },
      methods:{
        isGood:function () {
          this.Bad = false;
          this.All = false;
          this.Good = true;
          this.showFlag = true;
        },
        isBad:function () {
          this.All = false;
          this.Good = false;
          this.Bad = true;
          this.showFlag = true;
        },
        isAll:function () {
          this.Good = false;
          this.Bad = false;
          this.All = true;
          this.showFlag = true;
        },
        onlyContent:function (ev) {
          if (this.showFlag) {
            $(ev.target).addClass('activeSpan');
            this.showFlag = false;
            this.Bad = false;
            this.All = false;
            this.Good = false;
          } else {
            $(ev.target).removeClass('activeSpan');
            this.showFlag = true;
            this.Good = false;
            this.Bad = false;
            this.All = true;
          }
        }
      },
      mounted:function () {

      },
      //监听store中的state数据
      computed: {
        ratingsJson:function () {
          return this.$store.state.ratingsJson;
        },
      },
    }
</script>

<style scoped>
  .ratings {
    width: 100%;
    height: 892px;
  }
  .fenge {
    width: 100%;
    box-sizing: border-box;
    height: 36px;
    border-top: 1px solid rgba(7,17,27,0.1);
    border-bottom: 1px solid rgba(7,17,27,0.1);
    background-color: #F1F3F5;
  }
  .comment {
    width: 100%;
    height: 642px;
  }
  .comment-control {
    padding: 0 36px;
  }
  .comment-control-buttons {
    padding: 36px 0;
    display: flex;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .comment-control-buttons > div {
    padding: 20px 24px;
    font-size: 24px;
    border-radius: 4px;
  }
  .comment-control-buttons-good,
  .comment-control-buttons-bad {
    margin-left: 15px;
  }
  .comment-control-buttons > div > span {
    font-size: 10px;
  }
  .comment-control-buttons-all {
    background-color: #00A0DF;
  }
  .comment-control-buttons-good {
    background-color: #C6EDF9;
  }
  .comment-control-buttons-bad {
    background-color: #E9EBEC;
  }
  .comment-control-only {
    padding: 30px 0;
    display: flex;
  }
  .icon-check_circle {
    font-size: 40px;
    color: #92999F;
  }
  .comment-control-only span:nth-child(2) {
    font-size: 24px;
    color: #92999F;
    margin-left: 12px;
  }
  .comment-box {
    width: 100%;
    height: 395px;
    overflow-y: scroll;
    border-top: 1px solid rgba(7,17,27,0.1);
  }
  .comment-box-list {
    width: 100%;
  }
  .comment-box-list-item {
    padding: 36px 36px 0 36px;
    display: flex;
  }
  .comment-box-list-item > div {
    width: 678px;
    display: flex;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .comment-box-list-item-icon,
  .comment-box-list-item-icon img{
    width: 56px;
    height: 56px;
    border-radius: 28px;
  }
  .comment-box-list-item-intro {
    width: 598px;
    margin-left: 24px;
  }
  .comment-box-list-item-intro > div {
    display: flex;
  }
  .comment-box-list-item-intro-title {
    justify-content: space-between;
  }
  .comment-box-list-item-intro-title > span:nth-child(1) {
    font-size: 20px;
    color: rgb(7,17,27);
    line-height: 24px;
  }
  .comment-box-list-item-intro-title > span:nth-child(2),
  .comment-box-list-item-intro-deliveryTime {
    font-size: 20px;
    font-weight: 200;
    color: rgba(147,153,159,.4);
    line-height: 24px;
  }
  .comment-box-list-item-intro-score {
    align-items: center;
    margin-top: 8px;
  }
  .comment-box-list-item-intro-star img {
    width: 30px;
    height: 29px;
  }
  .comment-box-list-item-intro-deliveryTime {
    margin-left: 12px;
  }
  .comment-box-list-item-intro-text {
    text-align: left;
    flex-wrap: wrap;
    font-size: 24px;
    color: rgb(7,17,27);
    line-height: 36px;
    margin-top: 12px;
  }
  .comment-box-list-item-intro-others {
    margin-top: 16px;
  }
  .icon-thumb_up {
    font-size: 24px;
    color: rgb(0,160,220);
    line-height: 32px;
  }
  .icon-thumb_down {
    font-size: 24px;
    color: rgb(183,187,191);
    line-height: 32px;
  }
  .comment-box-list-item-intro-tagBox {
    display: flex;
    flex-wrap: wrap;
  }
  .comment-box-list-item-intro-tag {
    font-size: 18px;
    color: rgb(147,153,159);
    line-height: 32px;
    background-color: rgb(255,255,255);
    padding: 3px 12px;
    margin-left: 16px;
    border: 1px solid rgba(7,17,27,.1);
    margin-bottom: 10px;
  }
  .activeSpan {
    color: rgb(0,160,220);
  }
</style>
