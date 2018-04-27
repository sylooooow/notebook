<template>
  <div id="app" class="wrap">
    <top></top>
    <div class="container">
      <div class="radio-type">
        <div class="type-title-cpt">
          <span @click="jingxuan" class="active">精选</span>
          <span @click="allRadio" class="">全部电台</span>
        </div>
      </div>
      <div v-if="flagJingxuan" class="choice-radio">
        <slider></slider>
        <classify></classify>
        <Ting></Ting>
        <TopTing></TopTing>
        <hotRadio></hotRadio>
        <voice></voice>
      </div>
      <div v-if="flagAll" class="all-radio">
        <allRadio></allRadio>
      </div>
    </div>
    <bottom></bottom>
    <div class="back-top"></div>
  </div>
</template>

<script>
    import top from '../../components/common/top'
  import slider from './slider'
  import classify from './classify'
  import Ting from './Ting'
  import TopTing from './TopTing'
  import hotRadio from './hotRadio'
  import voice from './voice'
    import allRadio from './allRadio'
  import bottom from '../../components/common/bottom'

export default {
  name: 'App',
    data:function () {
        return {
            flagJingxuan:true,
            flagAll:false
        }
    },
  components: {
    top,
    slider,
    classify,
    Ting,
    TopTing,
    hotRadio,
    voice,
      allRadio,
    bottom
  },
    methods:{
        jingxuan:function (ev) {
            $('.type-title-cpt').find('span').removeClass('active');
            ev.target.className = 'active';
            this.flagJingxuan = true;
            this.flagAll = false;
        },
        allRadio:function (ev) {
            $('.type-title-cpt').find('span').removeClass('active');
            ev.target.className = 'active';
            this.flagJingxuan = false;
            this.flagAll = true;
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
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
  }
  .radio-type {
    width: 960px;
    height: 96px;
    display: flex;
    align-items: center;
  }
  .type-title-cpt span:nth-child(1) {
    color: #9999A4;
    padding: 10px 0;
  }
  .type-title-cpt span:nth-child(2) {
    color: #9999A4;
    padding: 10px 40px;
  }
  .active {
    color: #000;
    border-bottom: 2px solid black;
  }
</style>
