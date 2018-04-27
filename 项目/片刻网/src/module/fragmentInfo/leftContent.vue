<template>
    <div v-if="radio" class="left-content">
        <div class="timeline-author">
            <a href="" target="_blank">
                <img :src="radio.userinfo.icon" alt="">
            </a>
            <a href="" target="_blank">
                {{radio.userinfo.uname}}
            </a>
            <div>
                {{time}}
            </div>
        </div>
        <img :src="radio.coverimg" width="100%">
        <div class="timeline-content">
            {{radio.text}}
        </div>
        <div class="timeline-voice-content" style="display: none"></div>
        <div class="timeline-tag" style="display: none"></div>
        <div class="handles">
            <div class="likes-cpt">{{radio.likes}}</div>
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
        <div class="timeline-comment">
            <comment></comment>
        </div>
    </div>
</template>

<script>
    import dateformat from 'dateformat/'
    import comment from '../../components/common/UserComments'
    export default {
        name: "left-content",
        components:{
            comment
        },
        data:function () {
            return {
                radio:null,
                time:''
            }
        },
        methods:{
            getRadioData:function () {
                let contentid = location.search.substr(4);

                let parmas = this.$util.params.getParams();
                console.log("sig:" + parmas.sig);
                this.$http.get('/api/version5.0/timeline/info.php?contentid=' + contentid + '&sig=' + parmas.sig, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"]
                    this.radio = json;

                    var times = json.addtime * 1000;
                    var addTime1 = dateformat(times, 'yyyy-mm-dd');
                    var addTime2 = dateformat(times, 'HH:MM');
                    var addTime = addTime1 + " " + addTime2;
                    this.time = addTime;
                })
            }
        },
        mounted:function () {
            //网络请求过程不要写在mounted里，定义在methods里，只在这里调用
            this.getRadioData();
        }
    }
</script>

<style scoped>
    .left-content {
        width: 716px;
        box-sizing: border-box;
        margin-right: 12px;
        padding: 30px 46px;
        padding-bottom: 60px;
        margin-bottom: 128px;
        background-color: #fff;
        border: 1px solid #e8e8e8;
    }
    .left-content{
        float: left;
        margin-top: 70px;
    }
    .left-content .timeline-author {
        font-size: 12px;
        margin-bottom: 37px;
    }
    .left-content .timeline-author a {
        color: #666;
    }
    .left-content .timeline-author img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-right: 10px;
        -ms-border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .left-content .timeline-author > div {
        float: right;
        height: 40px;
        line-height: 40px;
        color: #999;
    }
    .left-content .timeline-content {
        padding-top: 49px;
        padding-bottom: 22px;
        font-weight: 300;
        color: #333;
        font-size: 14px;
    }
    .timeline-voice-content {
        overflow: hidden;
        line-height: 58px;
        color: #57ad68;
        font-size: 14px;
    }
    .left-content .timeline-tag {
        font-size: 12px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f2f2f2;
        margin-bottom: 47px;
        font-weight: 100;
    }
    .left-content .handles {
        color: #999;
        font-size: 14px;
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