<template>
<div>
  {{propA}}
  <div>
    {{propB}}
    <div>
      {{propC}}
      <div>
        {{propD}}
        <div>
          {{propE.msg}}
          <div>
            {{propF}}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  /*
  1.v-if和v-show的使用场景:
  v-if:     1.涉及权限问题  2.切换频度低
  v-show:   1.频繁切换使用

  2.不要在v-if写条多的表达式, 例如v-if="isShow && flag || a && b" ,要放到方法里method会好很多
  3.在v-for重复利用组件的时候，添加 key,解决重复利用问题
  4.style css 如果是自己独有的放在自己的组件中,共有的写在外面进行引用,尽量写scoped表示私有(当有动态嵌套HTML时,scoped里的样式不生效)
  5.多人开发export default对象里的参数顺序一致,例如 name data props顺序一致
  6.props传值要尽量拆分，多使用例如 a = xxx  b = xxx,尽量少使用对象c = {}
  7.method方法尽量简单功能单一,如果一个函数功能过于复杂可以拆分成多个函数
  */


    export default {
      name: "Header",
      //父组件向子组件传值 正常写法：props:[name,age]
      //可以给传入的值限定类型和默认值
      props:{
        //基础类型
        propA:Number,//数值类型

        //可能是多种类型,既可以是字符串类型也可以是数值类型
        propB:[String,Number],

        //必须传的值
        propC:{
          type:String,
          required:true //限定这个值必须传入
        },

        //默认值
        propD:{
          type:Number,
          default:18
        },

        //默认值为对象类型
        propE:{
          type:Object,
          //需要使用一个工厂函数返回
          default:function () {
            return {
              msg:'haha'
            }
          }
        },

        //限制,例如必须大于10
        propF:{
          //验证器
          validator:function (value) {
            return value > 10
          }
        }
      }
    }
</script>

<style scoped>

</style>
