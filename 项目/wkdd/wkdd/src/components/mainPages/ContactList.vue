<template>
  <div class="contact-list">
    <Header></Header>
  </div>
</template>

<script>
  import Header from '../common/MainPagesHeader'
  import mockdata from '../../mock/mock'

  export default {
    name: "contact-list",
    components: {
      Header
    },
    methods:{
      getData() {
        this.$http.get('http://mockdata.cn', {}).then((res) => {
          console.log(res.data)
        })
      }
    },
    mounted() {
      // this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .contact-list {
    @extend .max-w-h;
    background-color: pink;
  }
</style>
