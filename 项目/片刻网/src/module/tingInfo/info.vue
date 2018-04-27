<template>
    <div v-if="info" class="index-content">
        <audio :src="info.musicUrl" id="audiosrc">您的浏览器不支持 audio 标签。</audio>
        <div class="ting-info-box">
            <div class="radio-info-content ting-info-content">
                <div class="ting-img">
                    <img :src="info.imgUrl" alt="">
                </div>
                <div class="radio-info ting-info">
                    <div class="radio-title">{{info.title}}</div>
                    <div class="ting-others">
                        {{(info.plays / 1000).toFixed(1)}} k次播放 | 评论:{{info.comments}} | 喜欢:{{info.likes}}
                    </div>
                    <div class="authors">
                        <div class="ting-author">
                            主播:
                            <a :href="'userCenter.html?uid=' + info.userInfo.uid" target="_blank">{{info.userinfo.uname}}</a>
                        </div>
                        <div class="article-author">
                            原文:
                            <a :href="'userCenter.html?uid=' + info.userInfo.uid" target="_blank">{{info.authorinfo.uname}}</a>
                        </div>
                    </div>
                    <div class="play-all">
                        <div class="btn-play play-status-btn">播放Ting</div>
                        <div class="btn-pause play-status-btn" style="display: none">暂停Ting</div>
                    </div>
                    <div class="likes-cpt ting-like"></div>
                    <div class="ting-share">
                        <div class="share-icon-cpt ting-share-icon"></div>
                        <div class="share-menu">
                            <div class="drop-menu share-menu-item">
                                <div class="share-cpt">
                                    <div class="share-sina"></div>
                                    <div class="share-wechat">
                                        <div class="code">
                                            <img src="../../assets/pianke-code.png" alt="" width="200px">
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
            <div class="ting-article-content">
                <div class="title-cpt">原文</div>
                <div class="article-content">
                    <span style="display: block;padding-bottom: 10px;">-</span>
                    {{info.text.substring(0,190)}}...
                    <span class="view-all">
                        <a :href="'articleInfo.html?id=' + this.contentid" target="_blank">
                            VIEW ALL
                            <img src="../../assets/viewall.png">
                        </a>
                    </span>
                </div>
            </div>
            <div class="comment-padding">
                <comment :commentsCount="comments"></comment>
            </div>
        </div>
    </div>
</template>

<script>
    import comment from '../../components/common/UserComments'
    export default {
        name: "info",
        components:{
            comment
        },
        data:function () {
            return {
                info:null,
                contentid:'',
                comments:'',
            }
        },
        methods:{
            getInfoData:function () {
                let tingid = location.search.substr(8);
                console.log('tingid:' + tingid);
                let parmas = this.$util.params.getParams();
                console.log("sig:" + parmas.sig);
                let url = '/api/version5.0/ting/info.php?tingid=' + tingid + '&showhtml=1' + '&sig=' + parmas.sig;
                console.log(url);
                this.$http.get(url, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    this.info = json;

                    //把评论数传给子组件
                    this.comments = json.comments;

                    let strArr = json.webview_url.split("/");
                    let contentid = strArr[strArr.length - 1];
                    this.contentid = contentid;
                })
            }
        },
        mounted:function () {
            this.getInfoData();
        }
    }
</script>

<style scoped>
    .index-content {
        width: 960px;
        margin: 0 auto;
        clear: both;
        padding-bottom: 126px;
    }
    audio:not([controls]) {
        display: none !important;
    }
    audio {
        width: 300px;
        height: 32px;
    }
    .radio-info-content {
        margin-top: 50px;
    }
    .ting-info-content .ting-img {
        width: 300px;
        height: 300px;
        overflow: hidden;
    }
    .ting-info-content .ting-img img {
        width: 100%;
    }
    .ting-info-content .ting-info {
        width: 609px;
        height: 300px;
        margin-top: -300px;
    }
    .radio-info-content .radio-info {
        float: right;
        font-size: 14px;
        font-weight: lighter;
        position: relative;
        color: #999;
    }
    .radio-info-content .radio-info .radio-title {
        font-size: 40px;
        color: #333;
        font-weight: 400;
    }
    .ting-info-content .ting-info .ting-others {
        color: #999;
        padding-top: 9px;
        padding-bottom: 14px;
        font-weight: 100;
        font-size: 12px;
    }
    .ting-info-content .ting-info .authors {
        line-height: 23px;
        font-weight: 100;
        font-size: 14px;
        color: #999;
    }
    .ting-info-content .ting-info .authors a {
        font-weight: 200;
        color: #57ad68;
    }
    .ting-info-content .ting-info .play-all {
        bottom: 0;
    }
    .radio-info-content .radio-info .play-all {
        position: absolute;
        width: 129px;
        height: 50px;
        line-height: 50px;
    }
    .btn-play {
        background-image: url(../../assets/radio-play.png);
    }
    .btn-pause, .btn-play {
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: 12px center;
    }
    .play-status-btn {
        color: #57ad68;
        cursor: pointer;
        border-radius: 25px;
        font-weight: 200;
        border: 1px solid #57ad68;
        padding-left: 53px;
    }
    .btn-pause {
        background-image: url(../../assets/radio-pause.png);
    }
    .ting-info-content .ting-info .ting-like {
        height: 50px;
        position: absolute;
        bottom: 0;
        right: 0;
        line-height: 50px;
        text-align: right;
        margin-right: 54px;
    }
    .ting-like {
        background-size: 19px;
        padding-left: 0;
        margin-left: 60px;
    }
    .ting-share-icon, .ting-like {
        background-position: 0 center;
    }
    .likes-cpt {
        color: #999;
        cursor: pointer;
        width: 24px;
        font-size: 14px;
        background-repeat: no-repeat;
        background-image: url(../../assets/like.png);
    }
    .ting-info-content .ting-info .ting-like:before {
        content: '';
        position: absolute;
        width: 1px;
        height: 24px;
        background-color: #e8e8e8;
        top: 12px;
        right: 0;
        margin-right: -16px;
    }
    .ting-info-content .ting-info .ting-share {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 50px;
    }
    .ting-info-content .ting-info .ting-share .ting-share-icon {
        padding-left: 0;
        height: 50px;
        background-position: right;
    }
    .ting-share-icon, .ting-like {
        background-position: 0 center;
        height: 80px;
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
    .ting-info-content .ting-info .ting-share .share-menu {
        position: absolute;
    }
    .ting-info-content .ting-info .ting-share .share-menu .share-menu-item {
        margin-top: -130px;
        position: absolute;
        margin-left: -230px;
    }
    .share-menu .share-menu-item {
        box-shadow: 0 1px 6px 0 #e8e8e8;
        border: 0;
        padding: 0 29px;
        margin-left: -220px;
        margin-top: -65px;
        width: 284px;
        height: 80px;
        border-radius: 50px;
    }
    .drop-menu {
        display: none !important;
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
    .ting-info-content .ting-info .ting-share .share-menu .share-menu-item .share-cpt {
        position: absolute;
        margin-left: -5px;
    }
    .share-menu .share-menu-item .share-cpt {
        width: 284px;
        margin-top: 0;
    }
    .share-cpt {
        cursor: pointer;
        margin-top: -32px;
        float: right;
    }
    .share-menu .share-menu-item .share-cpt >div {
        height: 80px;
    }
    .share-cpt .share-sina {
        background-image: url(../../assets/foot-sinaH.png);
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
    .share-cpt .share-sina:hover {
        background-image: url(../../assets/share-sina.png);
    }
    .share-cpt .share-wechat {
        position: relative;
        background-image: url(../../assets/foot-wechat.png);
    }
    .share-cpt .share-wechat:hover {
        background-image: url(../../assets/share-wechat.png);
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
    .title-cpt {
        clear: both;
        padding-bottom: 40px;
        background-repeat: no-repeat;
        padding-top: 70px;
        padding-left: 28px;
        background-position: 0 74px;
        background-image: url(../../assets/square.png);
    }
    .ting-article-content .article-content {
        border: 1px solid #e8e8e8;
        line-height: 24px;
        margin-bottom: 50px;
        box-sizing: border-box;
        padding: 30px 127px;
        padding-bottom: 50px;
        font-weight: 200;
        background-color: #fff;
        font-size: 14px;
        color: #333;
        position: relative;
    }
    .ting-article-content .article-content .view-all {
        font-size: 12px;
        padding-top: 2px;
    }
    .view-all {
        padding-left: 10px;
        position: relative;
    }
    .view-all a {
        color: #78bc85;
        font-weight: 200;
    }
    .view-all a img {
        vertical-align: baseline;
        width: 5px;
        padding-left: 3px;
    }
    .comment-padding {
        padding: 100px;
        border: 1px solid #E8E8E8;
        background-color: #FFFFFF;
    }

</style>