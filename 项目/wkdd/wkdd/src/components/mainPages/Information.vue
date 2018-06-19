<template>
  <div class="information">
    <Header></Header>
  </div>
</template>

<script>
  import Header from '../common/MainPagesHeader'

  export default {
    name: "information",
    components: {
      Header
    },
  }
</script>

<style scoped lang="scss">
  .information {
    @extend .max-w-h;
    background-color: blue;
  }
</style>
