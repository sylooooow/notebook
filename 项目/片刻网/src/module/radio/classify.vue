<template>
    <div class="radio-type-group">
      <div class="radio-type-cpt"><a href=""><img src="../../assets/love.png" alt=""></a></div>
      <div class="radio-type-cpt"><a href=""><img src="../../assets/travel.png" alt=""></a></div>
      <div class="radio-type-cpt"><a href=""><img src="../../assets/story.png" alt=""></a></div>
      <div class="radio-type-cpt"><a href=""><img src="../../assets/music.png" alt=""></a></div>
      <div class="radio-type-cpt"><a href=""><img src="../../assets/movie.png" alt=""></a></div>
      <div class="radio-type-cpt"><a href=""><img src="../../assets/shi.png" alt=""></a></div>
    </div>
</template>

<script>
    export default {
        name: "classify"
    }
</script>

<style scoped>
  .radio-type-group {
    width: 960px;
    height: 141px;
    border-top: 1px dashed black;
    border-bottom: 1px dashed black;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .radio-type-cpt {
    width: 150px;
    height: 54px;
    border: 1px solid #E8E8E8;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
  }
  .radio-type-cpt img {
    width: 74px;
    height: 24px;
  }
</style>
