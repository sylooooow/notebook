<template>
  <div class="group-chat">
    <Header></Header>
  </div>
</template>

<script>
  import Header from '../common/MainPagesHeader'

  export default {
    name: "group-chat",
    components: {
      Header
    },
  }
</script>

<style scoped lang="scss">
  .group-chat {
    @extend .max-w-h;
    background-color: yellow;
  }
</style>
