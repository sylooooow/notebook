<template>
    <div>
      我是一个组件
      <div>
        id:{{$route.params.id}}
        <br>
        name:{{$route.params.name}}
      </div>
      <button @click="getData">获取数据</button>

      <router-link to="/">充电话费</router-link>
      <router-link to="/qq">充值点卡</router-link>
      <router-view></router-view>
      <!--<router-view name="phone"/>-->
      <!--<router-view name="qq"/>-->
    </div>
</template>

<script>
    export default {
        name: "my-com",
      methods:{
          getData:function () {
            //取值。取到url中传入的值
            console.log(this.$route.params.id + this.$route.params.name);
          },
      },

      // //第一种方法解决组件重复利用
      watch:{
        '$route'(to,from) {
          console.log(to.params.name + '  ' + from.params.name);
        }
      },
      //
      // //第二种方法解决组件重复利用 Enter(路由更新前触发)
      // beforeRouteUpdate(to,from,next) { //简写方式
      //   console.log(to.params.id + '  ' + from.params.id);
      // }
    }

</script>

<style scoped>
  .router-link-active {
    border-bottom: 2px solid black;/*no*/
  }
</style>
