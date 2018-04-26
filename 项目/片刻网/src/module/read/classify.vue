<template>
  <div class="classify">
    <div class="ting-cpt"><div></div><span>分类 | Classification</span></div>
    <div class="article-list-group">
      <div v-for="item in classify" class="article-type-cpt">
        <a :href="'readType.html?type=' + item.type + '&tag=' + item.typeName">
          <img :src="item.img" class="imgs">
          <span class="type-bg"></span>
          <span class="pos">
            <span class="type-title">{{item.typeName}}</span>
            <span class="type-des">{{item.typeEnName}}/{{item.total}}篇</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "classify",
        data:function () {
          return {
            classify:null
          }
        },
        methods:{
          //获取Read数据
          getClassifyData:function () {
            let parmas = this.$util.params.getParams();
            console.log("sig:" + parmas.sig)
            this.$http.get('/api/version5.0/read/typeInfos.php?sig=' + parmas.sig, {
              headers:{
                Authorization:parmas.Authorization
              }
            }).then((res) => {
              console.log(res.data["data"]);
              this.classify = res.data["data"];
            })
          }
        },
        mounted:function () {
          this.getClassifyData();
        }
    }
</script>

<style scoped>
.classify {
  width: 960px;
}
  .article-list-group {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .article-type-cpt {
    width: 191px;
    height: 84px;
    margin-right: 1px;
    margin-bottom: 1px;
    position: relative;
    overflow: hidden;
  }
.article-type-cpt img {
  width: 100%;
  height: 100%;
}
  .type-bg {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.1);
    position: absolute;
    left: 0;
    top: 0;
  }
  .pos {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
  }
  .type-title {
    color: white;
  }
  .type-des {
    color: #E2E2E2;
    font-size: 0.7em;
    font-weight: lighter;
  }
.article-type-cpt:hover .imgs{
    transform: scale(1.1);
    transition: all 0.8s;
  }
</style>
