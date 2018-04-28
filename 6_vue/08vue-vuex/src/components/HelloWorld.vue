<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{name}}</h1>
    <h1>{{nameInfo}}</h1>
    <button @click="getData">获取数据</button>
  </div>
</template>

<script>
  import bus from '../common/eventBus'
  import {mapState,mapGetters} from 'vuex'  //引入vuex的mapState对象，用于获取store的值或getter的值
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getData:function () {
      //获取store中的值
      // let newData = this.$store.state.name;
      // this.msg = newData;

      //获取getters中的值
      let newData = this.$store.getters.nameInfo;
      this.msg = newData;
    },
  },

  //计算属性,可以监听vuex中store的值,当数据改变时更新name方法中的值。并且name可以直接使用
  //注意，计算属性中不能给store中的值进行赋值
  // computed: {
  //   message:function () {
  //     return this.msg + "aaaaaa";
  //   },
  //   name:function () {
  //     return this.$store.state.name;
  //   }
  // },

  // computed:mapState({
  //   name:state=>state.name,
  //   //相当于
  //   // name:function (state) {
  //   //   return state.name
  //   // }
  //   age:state=>state.age
  // }),

  //如果state变量名字不改，可以写成方括号
  // computed:mapState(
  //   ['name','age']
  // ),

  //
  computed:{
    //对象展开方法,可以在computed下使用name和age
    ...mapState({
      name:state=>state.name,
      age:state=>state.name
    }),

    //通过vuex的mapGetters获取getter中的值
    ...mapGetters(['nameInfo'])
    //相当于:
    // nameInfo:function () {
    //   return this.$store.getters.nameInfo;
    // }
  },

  mounted:function () {
    // let _this = this;
    //
    // //注册事件（可注册多个,同时发送也需要多个）
    // bus.$on('infoChange', function (msg) {
    //   _this.msg = msg;
    // })
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
