<template>

    <div class="header" id="commonHeader">
        <div class="nav-wrap">
            <div class="logo"><img src="../../assets/piankelogo1.png" alt=""></div>
            <div class="nav">
                <ul id="navUl">
                    <li><a href="index.html">首页</a></li>
                    <li><a href="read.html">阅读</a></li>
                    <li><a href="radio.html">电台</a></li>
                    <li><a href="fragment.html">碎片</a></li>
                    <li><a href="client.html">客户端</a></li>
                </ul>
            </div>
            <div class="login">
                <div class="editer"><img src="../../assets/icon.png" alt=""></div>
                <div class="login-btn">登录 / 注册</div>
            </div>
        </div>
    </div>

</template>

<script>
    //从当前文件夹找到Goods组件导入到当前组件 命名Goods
    // import Goods from './Goods';

    export default {
        name: 'top',
        data:function () {
            return {
                navNum:null
            }
        },
        methods:{

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #commonHeader {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
    }
    .header {
        width: 100%;
        height: 90px;
        background-color: rgba(255,255,255,.95);
        display: flex;
        justify-content: center;
        box-shadow: 1px 1px 1px 1px #F3F3F3;
    }
    .nav-wrap {
        height: 100%;
        width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }
    .logo {
        width: 80px;
        height: 100%;
    }
    .logo > img {
        width: 100%;
        height: 100%;
    }
    .nav {
        height: 100%;
        position: absolute;
        left: 172px;
    }
    .nav > ul {
        height: 100%;
        display: flex;
    }
    .nav > ul > li{
        list-style: none;
        height: 100%;
        width: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav > ul > li:nth-child(5) {
        width: 100px;
    }
    .nav > ul > li:hover {
        background-color: #FBFBFB;
        transition: all 0.7s;
    }
    /*.nav > ul > li:nth-child(1) {*/
        /*font-weight: bold;*/
        /*height: 87px;*/
        /*border-bottom: 3px solid #333333;*/
        /*background-color: #FBFBFB;*/
    /*}*/
    .nav > ul > li > a {
        text-decoration: none;
        color: #333333;
    }
    .login {
        height: 100%;
        width: 200.33px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .login-btn {
        width: 126px;
        height: 46px;
        border-radius: 23px;
        border: 1px solid #B9DEC3;
        text-align: center;
        line-height: 46px;
        font-size: 0.9em;
        color: #58AF70;
    }
    .login-btn:hover {
        background-color: #58AF70;
        color: #FFFFFF;
        border: none;
        transition: all .6s;
    }
</style>
