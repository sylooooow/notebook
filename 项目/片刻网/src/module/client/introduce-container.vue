<template>
    <div class="introduce-container">
        <div class="client-title title-one">
            <p class="title">
                01
                <span>白 + 黑模式</span>
            </p>
            <p class="des">
                白天阅读、夜晚聆听，
                <br>
                不同的时间就是要有不同的享受。
            </p>
        </div>
        <div class="client-one">
            <img src="../../assets/client1.png" alt="" width="841px">
        </div>
        <div class="client-two">
            <div>
                <img src="../../assets/client3.png" alt="" width="360px">
                <div class="client-title title-two">
                    <p class="title">
                        02
                        <span>直播</span>
                    </p>
                    <p class="des">夜阑人静，给你最美的声音和故事</p>
                </div>
            </div>
        </div>
        <div class="client-three">
            <div>
                <div class="client-title title-three">
                    <p class="title">
                        03
                        <span>片刻社区</span>
                    </p>
                    <p class="des">随心所欲的诉说，等你来和应</p>
                </div>
                <img src="../../assets/client4.png" alt="" width="360px">
            </div>
        </div>
        <div class="client-four">
            <div>
                <img src="../../assets/client5.png" alt="" width="360px">
                <div class="client-title title-four">
                    <p class="title">04</p>
                    <p class="title-des">生活馆，造有情之物</p>
                    <p class="des">生活不只诗和远方，还有对美好事物的拥有</p>
                </div>
            </div>
        </div>
        <div class="client-bottom">
            <p>
                文字，电台，音乐，好物，满足你所有关于美好事物的想象。
                <br>
                五个版本的更迭，片刻已经陪伴无数人度过了他们的孤单的时刻，
                <br>
                如果你也有想表达的，在这里，永远有人在关注你。
            </p>
            <div class="top-btn ios-btn">
                <a href=""></a>
                iOS下载
            </div>
            <div class="top-btn android-btn">
                <a href=""></a>
                Android下载
            </div>
            <div class="client-code" @mouseover="showCodeH" @mouseout="hideCodeH">
                <div class="client-code-b" v-show="codeH"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "introduce-container",
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
        },
    }
</script>

<style scoped>
    .introduce-container {
        padding-top: 86px;
    }
    .introduce-container .client-title {
        background-image: url(../../assets/clitent-title-bg.png);
        background-size: 87px;
        background-repeat: no-repeat;
        background-position: top left;
        padding-left: 55px;
        padding-top: 17px;
        color: #333;
        position: relative;
    }
    .introduce-container .title-one {
        width: 386px;
        margin: 0 auto;
    }
    .introduce-container .client-title .title {
        font-size: 80px;
    }
    .introduce-container .client-title .title span {
        left: 154px;
        top: 65px;
        position: absolute;
        font-size: 30px;
        font-weight: bold;
    }
    .introduce-container .client-title .des {
        line-height: 24px;
        position: absolute;
        left: 154px;
        top: 120px;
        font-size: 16px;
        color: #9b9b9b;
        font-weight: lighter;
    }
    .introduce-container .client-one {
        margin-top: 20px;
        padding-top: 100px;
        text-align: center;
        height: 672px;
        background-repeat: no-repeat;
        background-size: content;
        background-position: center;
        background-image: url(../../assets/client-one-bg.png);
    }
    .introduce-container .client-two {
        margin-top: 132px;
        background-repeat: no-repeat;
        background-position: 0 center;
        background-image: url(../../assets/client-two-bg.png);
    }
    .introduce-container .client-two div {
        width: 841px;
        margin: 0 auto;
    }
    .introduce-container .client-two div .title-two {
        margin-top: 245px;
        margin-left: 65px;
        width: 340px;
        float: right;
    }
    .introduce-container .client-title {
        background-image: url(../../assets/clitent-title-bg.png);
        background-size: 87px;
        background-repeat: no-repeat;
        background-position: top left;
        padding-left: 55px;
        padding-top: 17px;
        color: #333;
        position: relative;
    }
    .introduce-container .client-three {
        margin-top: 132px;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(../../assets/client-three-bg.png);
    }
    .introduce-container .client-three div {
        width: 841px;
        margin: 0 auto;
    }
    .introduce-container .client-three div .title-three {
        margin-right: 55px;
        margin-top: 245px;
        width: 367px;
        float: left;
    }
    .introduce-container .client-four {
        margin-top: 132px;
        background-repeat: no-repeat;
        background-position: 0 center;
        background-image: url(../../assets/client-two-bg.png);
    }
    .introduce-container .client-four div {
        width: 841px;
        margin: 0 auto;
    }
    .introduce-container .client-four div .title-four {
        margin-top: 245px;
        margin-left: 45px;
        width: 340px;
        float: right;
    }
    .introduce-container .client-four .title-des {
        color: #333;
        left: 154px;
        top: 65px;
        font-size: 30px;
        font-weight: bold;
    }
    .introduce-container .client-bottom {
        background-image: url(../../assets/client-bottom-bg.png);
        background-repeat: no-repeat;
        background-position: center top;
        line-height: 29px;
        width: 406px;
        height: 300px;
        margin: 0 auto;
        margin-top: 120px;
        color: #333;
        font-size: 14px;
        font-weight: 200;
        text-align: center;
        padding-top: 138px;
    }
    .introduce-container .client-bottom p {
        margin: 0;
        padding: 0;
        font-family: "PingFang SC","微软雅黑";
        color: #333;
    }
    .introduce-container .client-bottom .ios-btn {
        margin-left: 20px;
    }
    .introduce-container .client-bottom .top-btn {
        margin-top: 33px;
        margin-right: 15px;
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
        border-radius: 25px;
        font-weight: 200;
        opacity: .9;
        box-shadow: 0 -1px 9px 0 #8adf9b inset;
        background-repeat: no-repeat;
        background-position: 28px 9px;
        box-sizing: border-box;
    }
    .top-btn a {
        color: #fff;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
    }
    a {
        cursor: pointer;
        text-decoration: none;
    }
    .android-btn {
        margin-right: 16px;
        background-position: 16px 10px;
        background-size: 20.84px;
        background-image: url(../../assets/client-andorid.png);
        padding-left: 42px;
    }
    .introduce-container .client-bottom .client-code {
        margin-top: 33px;
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
    .client-code div {
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