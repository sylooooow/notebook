<template>
    <div v-if="info" class="article-info">
        <div class="article-header-info">
            <div class="article-type">
                <a class="article-type-a" href="">{{info.typeName}}</a>
            </div>
            <div class="article-title">{{info.title}}</div>
            <div class="article-others">
                <a href="" target="_blank">
                    <img :src="info.userinfo.icon" alt="" width="40px">
                    {{info.userinfo.uname}}
                </a>
                <span>{{time}}&nbsp;&nbsp;|&nbsp;&nbsp;阅读时间: {{info.mins}}min&nbsp;&nbsp;|&nbsp;&nbsp;阅读次数:&nbsp;{{(info.views / 1000).toFixed(1)}}k</span>
            </div>
        </div>
        <div v-html="info.html" class="article-content">

        </div>
        <div class="article-report">
            <div class="article-warn">
                *此文章为原创作品，非商业使用转载务必保留本文地址及原作者，商业使用请联系
                <a href="">片刻网</a>
            </div>
            <div class="article-warn" style="display: none"></div>
            <span class="report">举报</span>
        </div>
        <div class="article-handle">
            <div class="likes-cpt">{{info.likes}}</div>
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
        <!---->
        <UserComments :comments-count="commentsCount"></UserComments>
    </div>

</template>

<script>
    import dateformat from 'dateformat/'
    import UserComments from '../../components/common/UserComments'
    export default {
        name: "info",
        components:{
            UserComments
        },
        data:function () {
            return {
                info:null,
                time:null,
                commentsCount:''
            }
        },
        methods:{
            getInfoData:function () {
                let contentid = location.search.substr(4);
                console.log('contentid' + contentid)
                let parmas = this.$util.params.getParams();
                console.log("sig:" + parmas.sig)
                this.$http.get('/api/version5.0/article/info.php?contentid=' + contentid + '&sig=' + parmas.sig, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    this.info = json;

                    let parmas = this.$util.params.getParams(json.addtime);
                    let addTime = parmas.addTime;
                    this.time = addTime;

                    this.commentsCount = json.comments;

                    //把数据传给父组件
                    let obj = {
                        likes:json.likes,
                        comments:json.comments
                    };
                    this.$emit('getData',obj);
                })
            }
        },
        mounted:function () {
            this.getInfoData();
        }
    }
</script>

<style scoped>
    .article-info {
        padding-bottom: 52px;
    }
    .article-header-info {
        padding-bottom: 43px;
        border-bottom: 1px solid #ececec;
    }
    .article-type {
        border: 1px solid #333;
        padding: 4px 0;
        width: 74px;
        text-align: center;
    }
    .article-title {
        font-size: 36px;
        padding-top: 12px;
        padding-bottom: 15px;
    }
    .article-others {
        font-size: 13px;
    }
    .article-type a {
        color: #333;
    }
    .article-type:hover{
        border: 1px solid #999999;
    }
    .article-type:hover .article-type-a {
        color: #9C9C9C;
    }
    .article-info .article-header-info .article-others span {
        color: #999;
        padding-top: 9px;
        float: right;
        font-weight: 100;
    }
    .article-info .article-header-info .article-others a {
        color: #333333;
    }
    .article-info .article-header-info .article-others img {
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
    }
    .article-info .article-content {
        width: 638px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding-top: 50px;
        line-height: 28px;
        padding-bottom: 20px;
        font-size: 16px;
        font-weight: 200;
    }
    .article-report span {
        cursor: pointer;
        color: #999;
        padding-top: 5px;
        float: right;
        font-weight: 100;
    }
    .article-warn {
        border: 1px solid #ccc;
        padding: 5px 20px;
        font-weight: lighter;
        color: #999;
        text-align: center;
    }
    .article-info .article-warn {
        display: inline-block;
    }
    .article-handle {
        margin-top: 50px;
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
    .share-cpt > div {
        display: inline-block;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 44px;
        height: 44px;
        margin-left: 10px;
    }
    .share-cpt .share-sina {
        background-image: url(../../assets/foot-sinaH.png);
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
    .share-cpt .share-wechat:hover .code {
        display: block;
    }

</style>