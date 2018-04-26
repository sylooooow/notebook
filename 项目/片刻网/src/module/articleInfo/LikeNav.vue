<template>
    <div class="likeNav-cpt">
        <div v-if="information">
            <div class="likes-cpt">{{information.likes}}</div>
            <div class="commons-cpt">{{information.comments}}</div>
            <div class="ting-share">
                <div class="share-icon-cpt"></div>
                <div class="share-menu">
                    <div class="drop-menu share-menu-item">
                        <div class="share-cpt">
                            <div class="share-sina"></div>
                            <div class="share-wechat">
                                <div class="code">
                                    <a href=""><img src="../../assets/pianke-code.png" alt="" width="200px"></a>
                                </div>
                            </div>
                            <div class="share-qzone"></div>
                            <div class="share-dou"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "like-nav",
        props:['information'],
        mounted:function () {
            this.$util.backtop.likesNav();
        }
    }
</script>

<style scoped>
    .likeNav-cpt {
        background-color: rgba(255,255,255,0.97);
        height: 60px;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 100;
    }
    .likeNav-cpt > div {
        width: 640px;
        margin: 0 auto;
        overflow: hidden;
        height: 100%;
    }
    .likeNav-cpt > div .likes-cpt, .likeNav-cpt > div .commons-cpt {
        height: 100%;
        width: 100px;
        line-height: 60px;
    }
    .likeNav-cpt > div > div {
        float: left;
    }
    .likes-cpt {
        color: #999;
        cursor: pointer;
        width: 24px;
        height: 22px;
        font-size: 14px;
        background-position: 0 center;
        padding-left: 34px;
        line-height: 22px;
        background-size: 24px;
        background-repeat: no-repeat;
        background-image: url(../../assets/like.png);
    }
    .likes-cpt:hover {
        background-image: url(../../assets/likeH.png);
    }
    .commons-cpt {
        color: #999;
        cursor: pointer;
        width: 24px;
        height: 22px;
        font-size: 14px;
        background-position: 0 center;
        padding-left: 34px;
        line-height: 22px;
        background-size: 24px;
        background-repeat: no-repeat;
        background-image: url(../../assets/commonIcon.png);
    }
    .commons-cpt:hover {
        background-image: url(../../assets/commonIconH.png);
    }
    .likeNav-cpt > div .ting-share {
        height: 100%;
        float: right;
    }
    .likeNav-cpt > div .ting-share .share-icon-cpt {
        width: 20px;
        padding: 0;
        height: 100%;
        background-position: center;
        background-size: 20px;
    }
    .share-icon-cpt {
        cursor: pointer;
        width: 16px;
        height: 16px;
        padding-left: 16px;
        background-size: 16px;
        background-repeat: no-repeat;
        background-image: url(../../assets/share.png);
    }
    .share-icon-cpt:hover {
        background-image: url(../../assets/shareH.png);
    }
    .likeNav-cpt > div .ting-share .share-menu-item {
        margin-top: -140px;
        position: absolute;
        margin-left: -220px;
        box-shadow: 0 1px 6px 0 #e8e8e8;
        border: 0;
        padding: 0 29px;
        width: 284px;
        height: 80px;
        border-radius: 50px;
    }
    .drop-menu {
        display: none;
        margin-left: -25px;
        margin-top: -5px;
        width: 100px;
        line-height: 36px;
        font-size: 12px;
        background-color: #fff;
        border: 1px solid #e8e8e8;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 5px 16px;
    }
    .share-icon-cpt:hover + .share-menu > .drop-menu,
    .drop-menu:hover {
        display: block;
    }
    .likeNav-cpt > div .ting-share .share-menu-item .share-cpt {
        position: absolute;
        width: 284px;
        margin-top: 0;
        margin-left: -5px;
    }
    .share-cpt {
        cursor: pointer;
        margin-top: -32px;
        float: right;
    }
    .likeNav-cpt > div .ting-share .share-menu-item .share-cpt > div {
        height: 80px;
    }
    .share-cpt .share-sina {
        background-image: url(../../assets/foot-sinaH.png);
    }
    .share-cpt .share-sina:hover {
        background-image: url(../../assets/share-sina.png);
    }
    .share-cpt > div {
        display: inline-block;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 44px;
        height: 44px;
        margin-left: 10px;
    }
    .share-cpt .share-wechat {
        position: relative;
        background-image: url(../../assets/foot-wechatH.png);
    }
    .share-cpt .share-wechat .code {
        display: none;
        background-color: #fff;
        box-shadow: 0 -1px 10px 0 #ccc;
        position: absolute;
        bottom: 80px;
        border-radius: 10px;
        left: 0;
        margin-left: -70px;
    }
    .share-cpt .share-wechat .code img {
        border-radius: 10px;
        display: block;
    }
    .share-wechat:hover {
        background-image: url(../../assets/share-wechat.png);
    }
    .share-wechat:hover .code {
        display: block;
    }
    .share-cpt .share-qzone {
        background-image: url(../../assets/qzone.png);
    }
    .share-cpt .share-qzone:hover {
        background-image: url(../../assets/share-qzone.png);
    }
    .share-cpt .share-dou {
        background-image: url(../../assets/dou.png);
    }
    .share-cpt .share-dou:hover {
        background-image: url(../../assets/share-dou.png);
    }

</style>