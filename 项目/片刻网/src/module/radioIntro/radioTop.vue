<template>
    <div v-if="info" class="radio-info-content">
        <div class="radio-img">
            <!--<img :src="info.baseimg" alt="">-->
            <!--<img :src="info.coverimg" alt="">-->
            <img :src="info.userimg" alt="">
        </div>
        <div class="radio-info">
            <div class="radio-title">最新发声</div>
            <div class="radio-author">
                <a href="">
                    <img :src="info.userinfo.icon" width="40px">
                </a>
                <span>
                    <a href="" target="_blank">{{info.userinfo.uname}}</a>
                </span>
                <span class="radio-author-others">
                    {{(info.plays / 1000000).toFixed(1)}} m次播放 | {{info.total}}个TING
                </span>
            </div>
            <div class="radio-des">
                {{info.desc}}
            </div>
            <div class="play-all">
                <div class="btn-play play-status-btn">播放全部</div>
                <div class="btn-pause play-status-btn" style="display: none">暂停电台</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "radio-top",
        data:function () {
            return {
                info:''
            }
        },
        methods:{
            getInfoData:function () {
                //切割链接字符串，再截取，拿到type值
                let radioId = location.search.substr(4);
                let parmas = this.$util.params.getParams();
                let url = '/api/version5.0/ting/radio.php?radioid=' + radioId + '&sig=' + parmas.sig;
                this.$http.get(url, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    this.info = json;
                    console.log(json)
                })
            }
        },
        mounted:function () {
            this.getInfoData();
        }
    }
</script>

<style scoped>
    .radio-info-content {
        margin-top: 50px;
        width: 960px;
        display: flex;
        justify-content: space-between;
    }
    .radio-img {
        width: 324px;
        height: 324px;
        position: relative;
    }
    .radio-img img {
        width: 324px;
        height: 324px;
        border-radius: 10px;
        position: absolute;
    }

    .radio-info-content .radio-info {
        height: 284px;
        width: 582px;
        padding: 20px 0;
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
    .radio-info-content .radio-info .radio-author {
        padding-top: 9px;
        padding-bottom: 33px;
    }
    .radio-info-content .radio-info .radio-author img {
        border-radius: 50%;
        vertical-align: middle;
    }
    .radio-info-content .radio-info .radio-author span {
        font-size: 15px;
        padding-left: 12px;
    }
    .radio-info-content .radio-info .radio-author span a {
        color: #57ad68;
    }
    .radio-info-content .radio-info .radio-author .radio-author-others {
        color: #999;
        font-size: 12px;
    }
    .radio-info-content .radio-info .play-all {
        bottom: 35px;
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
</style>