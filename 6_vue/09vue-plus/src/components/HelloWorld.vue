<template>
  <div class="hello">
    <Header
      :propA="msg"
      :propB="msg2"
      :propC="msg3"
      :propF="msg"
    >

    </Header>
  </div>
</template>

<script>
  import Header from './Header'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 123,
      msg2:'哈哈哈',
      msg3:'安庆市轻武器'
    }
  },
  components:{
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
