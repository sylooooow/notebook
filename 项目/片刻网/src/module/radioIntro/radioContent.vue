<template>
    <div class="radio-ting-list-group">
        <div class="title-cpt">TING | 666首</div>
        <div class="radio-ting-list">
            <div v-for="(item,index) in info" class="ting-item">
                <div class="ting-play-status">
                    <span class="ting-idx">{{index}}</span>
                </div>
                <div class="ting-title">
                    <a :href="'tingInfo.html?tingid=' + item.tingid + '&contentid=' + item.contentid" target="_blank" class="title-a">{{item.title}}</a>
                </div>
                <div class="likes-cpt ting-like"></div>
                <div class="ting-share" style="display: none">
                    <div class="share-icon-cpt ting-share-icon"></div>
                    <div class="share-menu">
                        <div class="drop-menu share-menu-item">
                            <div class="share-cpt">
                                <div class="share-sina"></div>
                                <div class="share-wechat">
                                    <div class="code">
                                        <img src="" alt="" width="200px">
                                    </div>
                                </div>
                                <div class="share-qzone"></div>
                                <div class="share-dou"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ting-msg">
                    <span>{{(item.plays / 1000).toFixed(1)}}k次播放</span>
                    <span>{{time[index]}}</span>
                </div>
            </div>
        </div>
        <div class="pages-cpt">
            <a href="" class="prev" style="display: none"></a>
            <a href="" class="active">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="" class="next"></a>
        </div>
    </div>
</template>

<script>
    import dateformat from 'dateformat/'
    export default {
        name: "radio-content",
        data:function () {
            return {
                info:[],
                time:[]
            }
        },
        methods:{
            getInfoData:function () {
                let _this = this;

                //切割链接字符串，再截取，拿到type值
                let radioId = location.search.substr(4);
                let parmas = this.$util.params.getParams();
                let url = '/api/version5.0/ting/listByRadio.php?radioid=' + radioId + '&pageSize=10&pageNum=1&sig=' + parmas.sig;
                this.$http.get(url, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    json.forEach(function(val,index){
                        _this.info.push(val);

                        var times = val.addtime * 1000;
                        var addTime = dateformat(times, 'yyyy-mm-dd');
                        _this.time.push(addTime);
                    });
                })
            }
        },
        mounted:function () {
            this.getInfoData();
        }
    }
</script>

<style scoped>
    .title-cpt {
        clear: both;
        padding-bottom: 40px;
        background-repeat: no-repeat;
        padding-top: 70px;
        padding-left: 28px;
        background-position: 0 74px;
        background-image: url(../../assets/square.png);
    }
    .radio-ting-list .ting-item {
        background-color: #fff;
        height: 80px;
        line-height: 80px;
        font-size: 16px;
        font-weight: lighter;
        color: #999;
    }
    .radio-ting-list .ting-item .ting-play-status {
        width: 78px;
        height: 80px;
        text-align: center;
        background-position: center;
        background-repeat: no-repeat;
        /*background-image: url(../img/ting-play.png) 0;*/
        background-size: 20px;
    }
    .radio-ting-list .ting-item:hover {
        background-color: #F2F2F2;
    }
    .radio-ting-list .ting-item:hover .title-a {
        color: #17C06B;
    }
    .radio-ting-list .ting-item:hover .ting-idx {
        /*background-color: red;*/
    }
    .radio-ting-list .ting-item div {
        float: left;
    }
    .radio-ting-list .ting-item .ting-play-status {
        /*width: 78px;*/
        /*height: 80px;*/
        text-align: center;
        /*background-position: center;*/
        /*background-repeat: no-repeat;*/
        /*background-image: url(../img/ting-play.png) 0;*/
        /*background-size: 20px;*/
    }
    .radio-ting-list .ting-item .ting-title {
        font-weight: 200;
        width: 329px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .radio-ting-list .ting-item .ting-title a {
        cursor: pointer;
        color: #333;
    }
    .radio-ting-list .ting-item .ting-share-icon, .radio-ting-list .ting-item .ting-like {
        opacity: 0;
    }
    .ting-like {
        background-size: 19px;
        padding-left: 0;
        margin-right: 30px;
        margin-left: 60px;
    }
    .ting-share-icon, .ting-like {
        background-position: 0 center;
        height: 80px;
    }
    .likes-cpt {
        color: #999;
        cursor: pointer;
        width: 24px;
        /*height: 22px;*/
        font-size: 14px;
        /*background-position: 0 center;*/
        /*padding-left: 34px;*/
        line-height: 22px;
        /*background-size: 24px;*/
        background-repeat: no-repeat;
        background-image: url(../../assets/like.png);
    }
    .radio-ting-list .ting-item .ting-msg {
        font-size: 14px;
        float: right;
        padding-right: 60px;
    }
    .radio-ting-list .ting-item .ting-msg span:nth-child(1) {
        display: inline-block;
        width: 120px;
        text-align: left;
    }
    .radio-ting-list .ting-item .ting-msg span:nth-child(2) {
        display: inline-block;
        width: 90px;
        text-align: left;
    }
    .pages-cpt {
        font-size: 12px;
        margin-top: 20px;
        font-weight: 200;
    }
    .pages-cpt a:first-child {
        background-image: url(../../assets/prev.png);
    }
    .pages-cpt a:first-child, .pages-cpt a:last-child {
        background-size: 6px;
        background-repeat: no-repeat;
        background-position: center;
        padding: 6.5px 15px;
    }
    .pages-cpt a {
        cursor: pointer;
        padding: 6.5px 13px;
        line-height: 30px;
        margin-right: 5px;
        color: #666;
    }
    .pages-cpt .active {
        background-color: #57ad68;
        color: #fff;
    }
    .pages-cpt a:last-child {
        background-image: url(../../assets/next.png);
    }

</style>