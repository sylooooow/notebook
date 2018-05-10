<template>
    <div class="ratings-header">
      <div class="ratings-header-box">
        <div class="ratings-header-left">
          <span class="ratings-header-left-score">{{json.score}}</span>
          <span>综合评分</span>
          <span>高于周边商家<span class="ratings-header-left-rankRate">{{json.rankRate}}</span>%</span>
        </div>
        <div class="ratings-header-right">
          <div class="ratings-header-right-serviceScore">
            <div class="ratings-header-right-serviceScore-title">
              服务态度
            </div>
            <div class="ratings-header-right-serviceScore-star">
              <img src="../assets/star36_on@2x.png">
              <img src="../assets/star36_on@2x.png">
              <img src="../assets/star36_on@2x.png">
              <img src="../assets/star36_on@2x.png">
              <img src="../assets/star36_off@2x.png">
            </div>
            <div class="ratings-header-right-serviceScore-score">
              {{json.serviceScore}}
            </div>
          </div>
          <div class="ratings-header-right-foodScore">
            <div class="ratings-header-right-foodScore-title">
              商家评分
            </div>
            <div class="ratings-header-right-foodScore-star">
              <img src="../assets/star36_on@2x.png">
              <img src="../assets/star36_on@2x.png">
              <img src="../assets/star36_on@2x.png">
              <img src="../assets/star36_on@2x.png">
              <img src="../assets/star36_off@2x.png">
            </div>
            <div class="ratings-header-right-foodScore-score">
              {{json.foodScore}}
            </div>
          </div>
          <div class="ratings-header-right-deliveryTime">
            <div class="ratings-header-right-deliveryTime-title">送达时间</div>
            <div class="ratings-header-right-deliveryTime-time">{{json.deliveryTime}}分钟</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "rating-header",
      data:function () {
        return {
          json:'',
        }
      },
      methods:{
        getData:function () {
          let url = '/api/seller';
          this.$http.get(url, {}).then((res) => {
            let json = res.data["data"];
            this.json = json;
          })
        }
      },
      mounted:function () {
        this.getData();
      }
    }
</script>

<style scoped>
  .ratings-header {
    width: 100%;
    height: 214px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ratings-header-box {
    height: 142px;
    width: 100%;
    display: flex;
  }
  .ratings-header-left {
    /*width: 275px;*/
    border-right: 1px solid rgba(147,153,159,.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 48px;
  }
  .ratings-header-left-score {
    font-size: 48px;
    color: rgb(255,153,0);
    line-height: 56px;
  }
  .ratings-header-left > span:nth-child(2) {
    font-size: 24px;
    color: rgb(7,17,27);
    line-height: 24px;
    margin-top: 12px;
  }
  .ratings-header-left > span:nth-child(3) {
    font-size: 20px;
    color: rgb(147,153,159);
    line-height: 20px;
    margin-top: 16px;
  }
  .ratings-header-right {
    padding: 0 48px;
  }
  .ratings-header-right-serviceScore,
  .ratings-header-right-foodScore,
  .ratings-header-right-deliveryTime {
    display: flex;
  }
  .ratings-header-right-foodScore,
  .ratings-header-right-deliveryTime {
    margin-top: 16px;
  }
  .ratings-header-right-serviceScore-title,
  .ratings-header-right-foodScore-title,
  .ratings-header-right-deliveryTime-title {
    font-size: 24px;
    color: rgb(7,17,27);
    line-height: 36px;
  }
  .ratings-header-right-serviceScore-star,
  .ratings-header-right-foodScore-star {
    margin-left: 24px;
    display: flex;
  }
  .ratings-header-right-serviceScore-star img,
  .ratings-header-right-foodScore-star img {
    width: 30px;
    height: 29px;
  }
  .ratings-header-right-serviceScore-star > img:not(first-child),
  .ratings-header-right-foodScore-star > img:not(first-child) {
    margin-left: 3px;
  }
  .ratings-header-right-serviceScore-score,
  .ratings-header-right-foodScore-score {
    font-size: 24px;
    color: rgb(255,153,0);
    line-height: 36px;
    margin-left: 24px;
  }
  .ratings-header-right-deliveryTime-time {
    font-size: 24px;
    color: rgb(147,153,159);
    line-height: 36px;
    margin-left: 24px;
  }

</style>
