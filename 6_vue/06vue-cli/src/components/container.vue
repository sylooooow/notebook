<template>
  <div class="container">
    <div class="img_nav">
      <div v-for="value in pic">
        <a href="#" class="pic-a">
          <img :src="value.cover">
          <span class="article-focus-bg"></span>
          <span class="article-focus-title">{{value.title}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "container", // 组件名字
        data:function () {
          return {
            pic:this.json.json1,
          }
        },
        props: ['name'],
    }
</script>

<style scoped>
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img_nav {
    width: 960px;
    height: 480px;
    margin-top: 35px;
    background-color: pink;
    overflow: hidden;
  }
  .img_nav > div:nth-child(1) {
    width: 480px;
    height: 480px;
    background-color: red;
    float: left;
  }

  .img_nav > div:nth-child(2),
  .img_nav > div:nth-child(3),
  .img_nav > div:nth-child(4),
  .img_nav > div:nth-child(5) {
    width: 240px;
    height: 240px;
    background-color: blue;
    float: left;
  }

  .img_nav > div{
    overflow: hidden;
    position: relative;
  }
  .img_nav > div img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .img_nav > div img:hover {
    transform: scale(1.1);
    transition: all .8s;
  }

  .article-focus-bg {
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,.4);
    position: absolute;
    bottom: 0;
    display: none;
  }
  .article-focus-title {
    width: 250px;
    font-size: 1.13em;
    color: #FFFFFF;
    position: absolute;
    bottom: 20px;
    left: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    display: none;
  }
  .pic-a:hover .article-focus-bg,
  .pic-a:hover .article-focus-title {
    display: block;
  }
</style>
