<template>
    <div>
      我是helloWorldBus
      <button @click="send">改变msg的值</button>
    </div>
</template>

<script>
  import bus from '../common/eventBus'
    export default {
        name: "hello-world-bus",
      methods:{
        send() {
          //发送事件
          bus.$emit('infoChange', '哈哈哈哈哈哈哈哈bus');
        }
      }
    }
</script>

<style scoped>

</style>
