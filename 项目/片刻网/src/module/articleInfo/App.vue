<template>
  <div id="app" class="wrap">
    <top></top>
    <div class="container">
        <div class="index-content">
            <div class="article-info-box">
                <div class="article-info-content">
                    <info @getData="getInformation"></info>
                </div>
            </div>
        </div>
    </div>
    <bottom></bottom>
      <LikeNav v-if="information" :information="information"></LikeNav>
    <div class="back-top"></div>
  </div>
</template>

<script>
  import top from '../../components/common/top'
  import info from './info'
  import bottom from '../../components/common/bottom'
  import LikeNav from './LikeNav'

export default {
  name: 'App',
    data:function () {
        return {
            information:''
        }
    },
    methods:{
      getInformation:function (result) {
          console.log('子组件传来的:' + result);
          this.information = result;
          console.log('父组件数据:' + this.information.likes);
      }
    },
  components: {
      top,
      info,
      bottom,
      LikeNav
  },
    mounted:function () {
        this.$util.controlHeader.controlHeader();
        this.$util.backtop.backtop();
    }
}
</script>

<style>
  @import "../../common/commen.css";
  * {
    margin: 0;
    padding: 0;
  }
  html,body {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
  }
  .wrap {
    width: 100%;
    position: relative;
  }
  .container {
    width: 1200px;
    padding-top: 90px;
      margin: 0 auto;
  }
  .typo {
      padding-top: 0;
      width: 638px;
      margin: 0 auto;
  }
  .typo img,
  .typo p,
  .typo pre{
      width: 100%;
  }
  .typo pre {
      display: block !important;
      white-space: pre-wrap !important;
  }
  .typo h1,
  .typo .author {
      display: none;
  }
  .index-content {
      width: 960px;
      margin: 0 auto;
      clear: both;
  }
  .article-info-box .article-info-content {
      border: 1px solid #e8e8e8;
      padding: 46px 160px 124px;
      margin-top: 10px;
      margin-bottom: 125px;
      background-color: #fff;
      color: #333;
      font-size: 12px;
  }

</style>
