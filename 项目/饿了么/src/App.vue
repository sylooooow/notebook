<template>
  <div id="app">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Container from './components/Container'
  import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Container,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
