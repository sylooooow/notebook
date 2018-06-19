<template>
    <div class="header">
      <span class="action">
        <i class="icon-功能键"></i>
      </span>
      <span class="title">全部</span>
      <span class="option">
        全部
        <i class="icon-倒三角"></i>
      </span>
    </div>
</template>

<script>
    export default {
        name: "main-pages-header"
    }
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: 105px;
    color: #FFFFFF;
    @extend .theme-bg;
    @include position(fixed,0,'',0,'');
    z-index: 9;
    /*<!--@include flex(row,space-between,center);-->*/
    /*padding: 0 30px;*/
    .action {
      @include verticalCenter(30px,'');
      i {
        font-size: 20px;/*no*/
      }
    }
    .title {
      @extend %position-center;
    }
    .option {
      @include verticalCenter('',30px);
      @include flex(row,space-between,center);
      i {
        font-size: 14px;/*no*/
      }
    }
  }
</style>
