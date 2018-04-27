<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="toPage">跳转</button>
    <button @click="toBack">后退</button>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    toPage:function () {
      //第一种传值方式,推入路径,即编程式导航, push实际就是在history添加一条
      // this.$router.push('./mycom');

      //第二种，传入对象方式,命名路由,要通过路由名字进行连接，params为传入的对象。如果路由连接上不写好路径，即隐藏传值，不显示在URL上
      this.$router.push({
        name:'qqqq',
        params:{
          id:'123456',
          name:'zhangsan'
        }
      })

      //第三种传值方式，最传统的URL拼接
      // this.$router.push({path:'/mycom',query:{
      //      name:'zhangsan',
      //      age:18,
      //      sex:'男'
      //   }})
    },

    toBack:function () {
      this.$router.go(-1); //负数代表回退前几步
      //window.history.go() 浏览器历史路径跳转
      // this.$router.replace('./mycom'); 不在history中添加历史，即不能回退

    }
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
