<template>
    <div>
      我是helloWorldBus
      <button @click="send">改变msg的值</button>
      <button @click="setName({name:'songqi'})">map改值</button>
      <button @click="nameAsyn({name:'actions调用了'})">action改值</button>
    </div>
</template>

<script>
  import {mapMutations,mapActions} from 'vuex'
  import bus from '../common/eventBus'
    export default {
        name: "hello-world-bus",
      methods:{
        send() {
          //发送事件
          // bus.$emit('infoChange', '哈哈哈哈哈哈哈哈bus');

          //改变store中的值,要调用mutations，需要使用commit
          // this.$store.commit('SET_NAME','lisi');

          //参数可以是对象
          // let obj = {
          //   name:'wangwu',
          //   age:22
          // };
          // this.$store.commit('SET_NAME',obj);

          //还可以这样写，以对象形式传出
          // this.$store.commit({
          //   type:'SET_NAME',
          //   name:'chenliu'
          // });


          //actions 使用dispatch调用
          this.$store.dispatch('nameAsyn',{name:'hahahah'})
        },

        //通过引入mapMutations把SET_NAME方法扩展到methods里，作为它的方法
        // ...mapMutations(['SET_NAME'])


        //这样写可以把SET_NAME方法的名字换成小写setName,同样用...把SET_NAME方法拓展到methods里作为方法使用
        ...mapMutations({
          setName:'SET_NAME'
        }),

        //通过引入mapActions把nameAsyn方法拓展到methods
        ...mapActions(['nameAsyn'])
      }
    }
</script>

<style scoped>

</style>
