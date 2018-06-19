<template>
  <div class="tabs">
    <router-link :to="{name:'message'}" class="tabs-btn" exact="">
      <i class="icon-AK-MN消息2"></i>
      <span>消息</span>
    </router-link>
    <router-link :to="{name:'groupChat'}" class="tabs-btn">
      <i class="icon-group-chat"></i>
      <span>群聊</span>
    </router-link>
    <router-link :to="{name:'contactList'}" class="tabs-btn">
      <i class="icon-通讯录"></i>
      <span>通讯录</span>
    </router-link>
    <router-link :to="{name:'information'}" class="tabs-btn">
      <i class="icon-信息"></i>
      <span>信息</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "tabs"
  }
</script>

<style scoped lang="scss">
  .tabs {
    width: 100%;
    height: 100px;
    @include position(fixed,'',0,0,'');
    z-index: 9;
    background-color: #fff;
    box-shadow: 0 2px 4px #D5D9DA;
    display: flex;
    .tabs-btn {
      width: 25%;
      height: 100%;
      @include flex(column,center,center);
      padding: 8px 12px;
      cursor: pointer;
      span {
        font-size: 12px; /*no*/
      }
      i {
        font-size: 24px; /*no*/
      }
    }
  }

  .router-link-active {
    @extend .theme-bg;
    i, span {
      color: #FFFFFF;
    }
  }

</style>
