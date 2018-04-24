<template>
    <div v-if="dataContent" class="data-content">
        <div v-show="dataContent.length == 0" class="no-comment">
            Ta还没有在片刻发布过作品！
        </div>
        <div class="img-group-cpt">
            <div v-for="item in dataContent" :class="'card-' + item.content.typeName + '-cpt'">
                <div v-show="item.content.oriImgUrl" class="card-top-img">
                    <a href="">
                        <img :src="item.content.oriImgUrl" alt="">
                        <span></span>
                    </a>
                </div>
                <div v-if="item.content.typeName == 'ting'" class="card-item">
                    <div class="card-ting-title">
                        <a href="" target="_blank">{{item.content.title}}</a>
                    </div>
                    <div class="user-sign">
                        <a href="" target="_blank">主播&nbsp;/&nbsp;{{item.userInfo.uname}}</a>
                    </div>
                    <div class="card-others">
                        <span class="card-type">
                            <a href="" target="_blank">{{item.content.typeName}}</a>
                        </span>
                        <span>{{(item.content.tingInfo.plays / 1000).toFixed(1)}} k次播放&nbsp;&nbsp;|&nbsp;&nbsp;评论:{{item.content.tingInfo.comments}}&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:{{item.content.tingInfo.likes}}</span>
                    </div>
                </div>

                <div v-if="item.content.typeName == 'article'" class="card-item">
                    <div class="card-read-title">
                        <a href="" target="_blank">{{item.content.title}}</a>
                    </div>
                    <div class="card-content">
                        {{item.content.desc}}
                        <span class="view-all">
                            <a href="" target="_blank">
                                VIEW ALL
                                <img src="../../assets/viewall.png" alt="">
                            </a>
                        </span>
                    </div>
                    <div class="card-others">
                        <span class="card-type">
                            <a href="" target="_blank">{{item.content.typeName}}</a>
                        </span>
                        <span>{{(item.statistics.view / 1000).toFixed(1)}} k次阅读&nbsp;&nbsp;|&nbsp;&nbsp;评论:{{item.statistics.comments}}&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:{{item.statistics.like}}</span>
                    </div>
                </div>

                <!--<div v-if="item.content.typeName == 'ting'" class="card-item">-->
                    <!--<div class="card-read-title">-->
                        <!--<a href="" target="_blank"></a>-->
                    <!--</div>-->
                    <!--<div class="user-sign">-->
                        <!--<a href="" target="_blank">主播&nbsp;/&nbsp;</a>-->
                    <!--</div>-->
                    <!--<div class="card-others">-->
                        <!--<span class="card-type">-->
                            <!--<a href="" target="_blank"></a>-->
                        <!--</span>-->
                        <!--<span>19.5 k次播放&nbsp;&nbsp;|&nbsp;&nbsp;评论:17&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:327</span>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Data-content",
        data:function () {
            return {
                dataContent:'',
                minId:''
            }
        },
        methods:{
            getDataContent:function () {
                let uid = location.search.substr(5);
                console.log('uid:' + uid);
                let parmas = this.$util.params.getParams();
                console.log('sig:' + parmas.sig);
                this.$http.get('/api/version5.0/feed/getMyPost.php?pageSize=10&minId=' + this.minId + '&uid=' + uid + '&client=web' + '&sig=' + parmas.sig, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    console.log(json[0].content.typeName);
                    this.dataContent = json;
                })
            }
        },
        mounted:function () {
            this.getDataContent();
        }
    }
</script>

<style scoped>
    .data-content {
        width: 1200px;
        margin: 0 auto;
    }
    .no-comment {
        background-image: url(../../assets/no-comment.png);
        margin-top: 71px;
        margin-bottom: 100px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #999;
        background-size: 235px;
        background-position: center 0;
        background-repeat: no-repeat;
        padding-top: 173px;
        font-weight: 100;
    }
    .img-group-cpt {
        min-height: 200px;
        position: relative;
        margin-left: -13px;
    }
    .img-group-cpt > div {
        border: 1px solid #e8e8e8;
        /*opacity: 0;*/
        position: absolute;
        width: 290px;
        background-color: #fff;
        font-size: 12px;
    }
    .img-group-cpt .card-top-img {
        display: block;
        width: 290px;
        overflow: hidden;
    }
    .img-group-cpt > div a {
        cursor: pointer;
        color: #333;
    }
    .img-group-cpt .card-top-img img {
        width: 100%;
        display: block;
    }
    .card-ting-cpt a span {
        width: 290px;
        height: 290px;
        top: 0;
        position: absolute;
        left: 0;
        background-color: rgba(0,0,0,0);
        background-image: url(../../assets/play-icon.png);
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
    }
    .card-ting-cpt .card-ting-title {
        padding: 15px;
        padding-bottom: 5px;
        color: #333;
        font-size: 18px;
    }
    .card-ting-cpt .card-ting-title a {
        color: #333;
    }
    .img-group-cpt > div a {
        cursor: pointer;
        color: #333;
    }
    .card-ting-cpt .user-sign {
        padding: 15px 15px 0 15px;
    }
    .card-ting-cpt .user-sign a {
        color: #333;
    }
    .img-group-cpt > div .card-item .card-others {
        padding: 0 15px;
        padding-top: 30px;
        font-weight: lighter;
        padding-bottom: 12px;
    }
    .img-group-cpt > div .card-item .card-others .card-type {
        border: 1px solid rgba(204,204,204,0.5);
        border-radius: 10px;
        padding: 0 6px;
    }
    .img-group-cpt > div .card-item .card-others .card-type a {
        color: #333;
    }
    .img-group-cpt > div .card-item .card-others span:not(.card-type) {
        color: #ccc;
        float: right;
    }
    .card-read-cpt .card-read-title {
        font-size: 24px;
        padding: 15px;
        position: relative;
    }
    .card-read-cpt .card-read-title:before {
        content: '';
        bottom: 0;
        position: absolute;
        width: 43px;
        height: 1px;
        border-top: 1px solid #333;
    }
    .card-read-cpt .card-read-title a {
        color: #333;
    }
    .img-group-cpt > div .card-item .card-content {
        word-break: break-word;
        line-height: 24px;
        font-weight: 200;
        font-size: 14px;
        padding: 15px 15px 10px 15px;
    }
    .view-all {
        padding-left: 10px;
        position: relative;
    }
    .img-group-cpt .view-all a {
        cursor: pointer;
        color: #78bc85;
    }
    .img-group-cpt > div a {
        cursor: pointer;
        color: #333;
    }
    .view-all a {
        color: #78bc85;
        font-weight: 200;
    }
    .img-group-cpt .view-all a img {
        vertical-align: baseline;
        width: 5px;
        padding-left: 3px;
    }

</style>