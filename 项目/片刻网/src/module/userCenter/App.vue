<template>
  <div id="app" class="wrap">
    <top></top>
    <div class="container">
        <UserBaseContent @getInformation="dealInformation"></UserBaseContent>
        <TitleNav :transmitData="information" @getTargetText="getTargetText"></TitleNav>
        <DataContent :transmitClickText="clickText"></DataContent>
    </div>
    <bottom></bottom>
    <div class="back-top"></div>
  </div>
</template>

<script>
    import top from '../../components/common/top'
    import UserBaseContent from './UserBaseContent'
    import TitleNav from './TitleNav'
    import DataContent from './DataContent'
    import bottom from '../../components/common/bottom'


export default {
  name: 'App',
  components: {
      top,
      UserBaseContent,
      TitleNav,
      DataContent,
      bottom
  },
    data:function () {
        return {
            information:'',
            clickText:''
        }
    },
    methods:{
      dealInformation:function (result) {
          console.log('父组件接受:' + result);
          this.information = result;
      },
        getTargetText:function (result) {
          this.clickText = result;
        }
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
    width: 100%;
    padding-top: 90px;
  }
</style>
