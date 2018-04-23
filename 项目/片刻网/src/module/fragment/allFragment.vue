<template>
    <div class="timeline-list-group">
      <div class="ting-cpt"><div></div><span>全部碎片</span></div>
      <div id="list" class="img-group-cpt">
        <div v-for="item in fragment" v-if="item.coverimg" class="card-timeline-cpt">
          <div class="card-top-img">
            <a href="">
              <img :src="item.coverimg" alt="">
            </a>
          </div>
          <div class="card-item">
            <div class="card-content">
              <a href="">{{item.text}}</a>
            </div>
            <div class="card-user">
              <div class="card-user-info">
                <a href=""><img :src="item.userinfo.icon" alt=""><span>{{item.userinfo.uname}}</span></a>
              </div>
              <div class="card-likes"><img src="../../assets/dianzan.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="loadImgFlag" class="hide-load">
        <img src="../../assets/load.gif" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "all-fragment",
        data:function () {
          return {
            fragment:[],
            minId:"",
            loadFlag:true,
            loadImgFlag:false,
          }
        },
      methods:{
        //获取Ting数据
        getFragmentData:function () {
          let parmas = this.$util.params.getParams();
          console.log("sig:" + parmas.sig);
          let url = '/api/version5.0/newTimeLine/list.php?pageSize=10&tag=&minId=' + this.minId + '&sig=' + parmas.sig;
          this.$http.get(url, {
            headers:{
              Authorization:parmas.Authorization
            }
          }).then((res) => {
            let json = res.data["data"];
            console.log(json);
            this.fragment = res.data["data"];
          })
        },


        fallPic:function () {
          var oList = document.getElementById("list");
          var space = 10; //块之间的间隙
          var winW = 1200; //容器宽度
          var cols = 4;

          var colHArr = [];
          for(var i = 0; i < cols; i++) {
            colHArr[i] = 0;
          }

          // 遍历进行定位
          var items = document.getElementsByClassName("card-timeline-cpt");
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
        },

        getLoadHeight:function () {
          let wrapBoxH = document.body.scrollHeight;
          let scrollH = document.documentElement.scrollTop;
          let clientH = document.body.clientHeight;
          let loadH = wrapBoxH - scrollH - clientH;
          let _this = this;
          // console.log(loadH)

          //当加载高度小于500时，加载数据
          if (loadH < 300) {
            //显示加载图
            _this.loadImgFlag = true;
            if (_this.loadFlag) {
              _this.loadFlag = false;
              let parmas = this.$util.params.getParams();
              let url = '/api/version5.0/newTimeLine/list.php?pageSize=10&tag=&minId=' + this.minId + '&sig=' + parmas.sig;
              this.$http.get(url, {
                headers:{
                  Authorization:parmas.Authorization
                }
              }).then((res) => {
                let json = res.data["data"];
                json.forEach(function(val,index){
                  _this.fragment.push(val);
                });
                this.minId = json[json.length - 1]["id"];
                _this.loadFlag = true;
                _this.loadImgFlag = false;
                // console.log(_this.fragment)
              })
            }
          }
        }
      },
      mounted:function () {
        //网络请求过程不要写在mounted里，定义在methods里，只在这里调用
        this.getFragmentData();
        window.addEventListener('scroll', this.getLoadHeight);
      },
      updated:function () {
          let then = this;
          setTimeout(function () {
            then.fallPic();
          },500)
      }
    }
</script>

<style scoped>
  .timeline-list-group {
    width: 1200px;
  }
  .img-group-cpt {
    position: relative;
    width: 100%;
  }
  .card-timeline-cpt {
    width: 290px;
    position: absolute;
    border: 1px solid #E8E8E8;
    background-color: white;
  }
  .card-timeline-cpt:hover {
    box-shadow: 0px 0px 20px 5px #ccc;
    transition: all 0.4s;
  }
  .card-top-img,
  .card-top-img img{
    width: 290px;
  }
  .card-top-img img {
    background-color: #5E5E5E;
  }
  .card-item {
    width: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-content {
    padding: 10px 0;
  }
  .card-content,
  .card-user {
    width: 252px;
    color: #333333;
    font-size: 14px;
  }
  .card-user {
    padding: 0 19px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FAFAFA;
  }
  .card-user-info a {
    height: 50px;
    display: flex;
    align-items: center;
  }
  .card-user-info a span {
    margin-left: 10px;
  }
  .card-user-info img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }
  .card-likes,
  .card-likes img {
    width: 23px;
    height: 22px;
  }
  .hide-load {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
