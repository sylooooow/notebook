<template>
    <div class="top-container">
        <div class="top-content">
            <p>世界很美，
                <br>
                而你正好有空。
            </p>
            <p class="top-des">Stay with me，look around the world 片刻v5.0</p>
            <div class="top-btn ios-btn">
                <a href=""></a>
                ios下载
            </div>
            <div class="top-btn android-btn">
                <a href=""></a>
                Android下载
            </div>
            <div class="client-code" @mouseover="showCodeH" @mouseout="hideCodeH">
                <div v-show="codeH" class="client-code-b"></div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "top-container",
        data:function () {
            return {
                codeH:false
            }
        },
        methods: {
            showCodeH:function () {
                this.codeH = true;
            },
            hideCodeH:function () {
                this.codeH = false;
            }
        }
    }
</script>

<style scoped>
    .top-container {
        width: 100%;
        height: 410px;
        background: url("../../assets/client-bg.png") no-repeat;
        background-size: 100% 100%;
    }
    .top-content {
        width: 1030px;
        margin: 0 auto;
        color: #31343d;
        font-size: 50px;
        font-weight: bold;
        padding-top: 100px;
    }
    .top-content > p:nth-child(1) {
        margin: 0;
        padding: 0;
        font-family: "PingFang SC","微软雅黑";
        color: #333;
    }
    .top-des {
        color: #31343d;
        font-size: 14px;
        font-weight: 400;
        opacity: .45;
    }
    .ios-btn {
        margin-right: 14px;
        background-size: 20px;
        background-image: url(../../assets/client-ios.png);
        padding-left: 58px;
    }
    .top-btn {
        position: relative;
        text-align: left;
        float: left;
        margin-top: 22px;
        cursor: pointer;
        color: #fff;
        font-size: 15px;
        background-color: #58c36d;
        width: 144px;
        line-height: 46px;
        -ms-border-radius: 25px;
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        font-weight: 200;
        opacity: .9;
        -ms-box-shadow: 0 -1px 9px 0 #8adf9b inset;
        -webkit-box-shadow: 0 -1px 9px 0 #8adf9b inset;
        -moz-box-shadow: 0 -1px 9px 0 #8adf9b inset;
        box-shadow: 0 -1px 9px 0 #8adf9b inset;
        background-repeat: no-repeat;
        background-position: 28px 9px;
        box-sizing: border-box;
    }
    .ios-btn a {
        color: #fff;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
    }
    .android-btn {
        margin-right: 16px;
        background-position: 16px 10px;
        background-size: 20.84px;
        background-image: url(../../assets/client-andorid.png);
        padding-left: 42px;
    }
    .client-code {
        cursor: pointer;
        position: relative;
        margin-top: 22px;
        width: 47px;
        height: 46px;
        float: left;
        background-image: url(../../assets/client-code.png);
        background-size: 47px;
        background-repeat: no-repeat;
    }
    .client-code-b {
        position: absolute;
        width: 137px;
        height: 137px;
        background-image: url(../../assets/client-codeH.png);
        background-size: 137px;
        background-repeat: no-repeat;
        bottom: 0;
        left: 54px;
    }

</style>