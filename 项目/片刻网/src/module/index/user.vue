<template>
  <div class="user-list-group">
    <div class="ting-cpt"><div></div><span>人气片客 | Hot Pianker</span></div>
    <div class="user-list">
      <div class="user" v-for="item in user">
        <div class="user-info">
          <div class="user-info-left">
            <a :href="'userCenter.html?uid=' + item.uid"><img :src="item.icon"></a>
            <img v-if="item.typeName == '音乐人'" src="../../assets/user_musician.png">
            <img v-if="item.typeName == '作者'" src="../../assets/user_author.png">
          </div>
          <div class="user-info-right">
            <div class="user-name">
              <a :href="'userCenter.html?uid=' + item.uid">{{item.uname}}</a>
            </div>
            <div class="user-des">
              <span>{{item.desc}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "user",
        data:function () {
          return {
            user:null,
          }
        },
        methods:{
          //获取Read数据
          getUserData:function () {
            let parmas = this.$util.params.getParams();
            console.log("sig:" + parmas.sig)
            this.$http.get('/api/version5.0/pub/interested.php?pageSize=4&sig=' + parmas.sig, {
              headers:{
                Authorization:parmas.Authorization
              }
            }).then((res) => {
              console.log(res.data["data"]);
              this.user = res.data["data"];
            })
          }
        },
        mounted:function () {
          this.getUserData();
        }
    }
</script>

<style scoped>
  .user-list-group {
    width: 960px;
    margin: 0 auto;
  }
  .user-list {
    width: 100%;
    height: 235px;
    display: flex;
    justify-content: space-between;
  }
  .user {
    height: 100%;
    width: 230px;
    background-image: url(../../assets/user-bg.png);
    background-size: cover;
  }
  .user-info {
    width: 100%;
    height: 187px;
    display: flex;
    justify-content:space-around;
    align-items: center;
  }
  .user-info-left{
    width: 80px;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .user-info-left img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info-left img:nth-child(2) {
    width: 52px;
    height: 19px;
    border-radius: 0;
  }
  .user-info-right {
    width: 80px;
    margin-right: 15px;
  }
  .user-info-right a{
    text-decoration: none;
    color: #583333;
  }
  .user-info-right a:hover {
    color: #5AB974;
  }
  .user-name{
    font-size: 16px;
    height: 44px;
  }
  .user-des {
    font-size: 0.8em;
    padding-top: 6px;
    font-weight: 100;
    color: #666;
    position: relative;
  }
  .user-des:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 1px;
    top: 0;
    border-top: 1px solid #666;
  }
</style>
