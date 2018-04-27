<template>
    <div class="timeline-type">
      <div class="ting-cpt"><div></div><span>热门标签</span></div>
      <div class="timeline-list">
        <div v-for="item in tag" class="article-type-cpt">
          <a :href="'fragment.html?tag=' + item.tag">
            <img :src="item.img" alt="" class="img">
            <span class="type-bg"></span>
            <span class="pos">
              <span class="type-title">{{item.tag}}</span>
              <span class="type-des">{{item.count}}个</span>
            </span>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tag",
        data:function () {
          return {
            tag:null,
          }
        },
      methods:{
        //获取Ting数据
        getTagData:function () {
          let parmas = this.$util.params.getParams();
          console.log("sig:" + parmas.sig)
          this.$http.get('/api/version5.0/newTimeLine/tagList.php?num=12&sig=' + parmas.sig, {
            headers:{
              Authorization:parmas.Authorization
            }
          }).then((res) => {
            console.log(res.data["data"]);
            this.tag = res.data["data"];
          })
        }
      },
      mounted:function () {
        //网络请求过程不要写在mounted里，定义在methods里，只在这里调用
        this.getTagData();
      }
    }
</script>

<style scoped>
  .timeline-type {
    width: 1200px;
    margin-top: 20px;
  }
  .timeline-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .article-type-cpt {
    margin-top: 2px;
    position: relative;
    overflow: hidden;
  }
  .article-type-cpt,
  .article-type-cpt img {
    width: 191px;
    height: 84px;
  }
  .type-bg {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    left: 0;
  }
  .article-type-cpt:hover .img {
    transform: scale(1.1);
    transition: all 1s;
  }
  .pos {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    z-index: 9;
  }
  .type-des {
    font-size: 12px;
    font-weight: lighter;
    color: #DFE4E6;
  }

</style>
