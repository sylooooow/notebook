<template>
    <div v-if="dataContent" class="data-content">
        <div v-show="dataContent.length == 0" class="no-comment">
            Ta还没有在片刻发布过作品！
        </div>
        <div class="img-group-cpt" id="list">
            <div v-for="item in dataContent" :class="'card-' + item.content.typeName + '-cpt'" class="contentItem">
                <div v-if="item.content.typeName == 'ting'" class="card-top-img">
                    <a>
                        <img v-if="item.content.oriImgUrl" :src="item.content.oriImgUrl" alt="">
                        <img v-else="item.content.imageInfo.img" :src="item.content.imageInfo.img" alt="">
                        <span></span>
                    </a>
                </div>

                <div v-if="item.content.typeName == 'article'"  class="card-top-img">
                    <a href="">
                        <img :src="item.content.imageInfo.img" alt="">
                        <span></span>
                    </a>
                </div>

                <div v-if="item.content.typeName == 'timeline'" class="card-top-img">
                    <a href="">
                        <img :src="item.content.imageInfo.img" alt="">
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
                            <a href="" target="_blank">Ting</a>
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
                            <a href="" target="_blank">阅读</a>
                        </span>
                        <span>{{(item.statistics.view / 1000).toFixed(1)}} k次阅读&nbsp;&nbsp;|&nbsp;&nbsp;评论:{{item.statistics.comments}}&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:{{item.statistics.like}}</span>
                    </div>
                </div>

                <div v-if="item.content.typeName == 'timeline'" class="card-item">
                    <div v-if="item.content.desc" class="card-content">
                        <a href="" target="_blank">{{item.content.desc}}</a>
                    </div>
                    <div class="timeline-voice" style="display: none">
                        <a href="" target="_blank">[&nbsp;语音&nbsp;]</a>
                    </div>
                    <div class="card-others">
                        <span class="card-type">
                            <a href="" target="_blank">碎片</a>
                        </span>
                        <span>{{item.statistics.view}}次阅读&nbsp;&nbsp;|&nbsp;&nbsp;评论:{{item.statistics.comments}}&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:{{item.statistics.like}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="loadImgFlag" class="hide-load">
            <img src="../../assets/load.gif" alt="">
        </div>
        <div v-show="noDataFlag" class="no-more-data">-&nbsp;已加载全部&nbsp;-</div>
    </div>
</template>

<script>
    export default {
        name: "Data-content",
        props:['transmitClickText'],
        data:function () {
            return {
                dataContent:[],
                minId:'',
                loadFlag:true,
                loadImgFlag:false,
                noDataFlag:false,
                loadType:''
            }
        },
        methods:{
            getDataContent:function (loadType) {
                let _this = this;
                let uid = location.search.substr(5);
                console.log('uid:' + uid);
                let parmas = this.$util.params.getParams();
                console.log('sig:' + parmas.sig);

                //根据参数类型，进行不同类型的网络请求
                let url = '';
                if (_this.loadType == 'article') {
                    url = '/api/version5.0/article/listByUid.php?pageSize=10&minId=' + this.minId + '&uid=' + uid + '&client=web' + '&sig=' + parmas.sig
                } else if (_this.loadType == 'ting') {
                    url = '/api/version5.0/ting/listByNJ.php?pageNum=1&uid=' + uid + '&sig=' + parmas.sig;
                } else if (_this.loadType == 'timeline') {
                    url = '/api/version5.0/timeline/listByUid.php?pageSize=10&minId=' + this.minId + '&uid=' + uid + '&client=web' + '&sig=' + parmas.sig
                } else {
                    url = '/api/version5.0/feed/getMyPost.php?pageSize=10&minId=' + this.minId + '&uid=' + uid + '&client=web' + '&sig=' + parmas.sig;
                }
                this.$http.get(url, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    console.log('json:' + json);

                    //判断返回的数据长度,为0表示加载了全部数据,隐藏加载图片，显示已加载全部,关闭加载数据开关;否则正常加载
                    if (json.length == 0) {
                        _this.noDataFlag = true;
                        _this.loadImgFlag = false;
                        _this.loadFlag = false;
                    } else {
                        json.forEach(function(val,index){
                            _this.dataContent.push(val);
                        });
                        this.minId = json[json.length - 1].content.contentId;
                        _this.loadFlag = true;
                        _this.loadImgFlag = false;
                    }
                })
            },

            //瀑布流
            fallPic:function () {
                var oList = document.getElementById("list");
                var space = 10; //块之间的间隙
                var winW = 1200; //容器宽度
                var cols = 4;

                var colHArr = [];
                for(var i = 0; i < cols; i++) {
                    colHArr[i] = 0;
                }

                // 遍历进行定位
                var items = document.getElementsByClassName("contentItem");
                for (var i = 0; i < items.length; i++) {
                    //寻找最短的一列,即colHArr最小数和下标
                    var minNum = colHArr[0];
                    var minIndex = 0;
                    for(var j = 0; j < colHArr.length; j++) {
                        if(minNum > colHArr[j]) {
                            minNum = colHArr[j];
                            minIndex = j;
                        }
                    }
                    items[i].style.top = minNum + space + "px";
                    items[i].style.left = minIndex * (290 + space) + space + "px";

                    //更新最短列的高度
                    colHArr[minIndex] += space + items[i].offsetHeight;
                }

                //更新容器的高度
                var maxH = colHArr[0];
                for(var i = 0; i < colHArr.length; i++) {
                    if(maxH < colHArr[i]) {
                        maxH = colHArr[i];
                    }
                }
                oList.style.height = maxH + space + "px";
            },

            //下拉刷新
            getLoadHeight:function () {
                let wrapBoxH = document.body.scrollHeight;
                let scrollH = document.documentElement.scrollTop;
                let clientH = document.body.clientHeight;
                let loadH = wrapBoxH - scrollH - clientH;
                let _this = this;

                //当加载高度小于300时，加载数据
                if (loadH < 300) {
                    //如果进入加载，立即关闭加载开关，避免一直加载
                    if (_this.loadFlag) {
                        //显示加载图片
                        _this.loadImgFlag = true;
                        _this.loadFlag = false;
                        if (_this.loadType) {
                            _this.getDataContent(_this.loadType);
                        } else {
                            _this.getDataContent();
                        }
                    }
                }
            }
        },
        mounted:function () {
            this.getDataContent();
            window.addEventListener('scroll', this.getLoadHeight);
        },
        updated:function () {
            let then = this;
            setTimeout(function () {
                then.fallPic();
            },500);
        },
        watch: {
            transmitClickText: {
                handler(newValue, oldValue) {
                    let clickText = newValue.targetText;
                    console.log(clickText);

                    switch (clickText){
                        case '全部':
                            this.minId = '';
                            this.noDataFlag = false;
                            this.loadType = '';
                            this.getDataContent();
                            this.dataContent = [];
                            break;
                        case '文章':
                            this.minId = '';
                            this.noDataFlag = false;
                            this.loadType = 'article';
                            this.getDataContent('article');
                            this.dataContent = [];
                            break;
                        case '碎片':
                            this.minId = '';
                            this.noDataFlag = false;
                            this.loadType = 'timeline';
                            this.getDataContent('timeline');
                            this.dataContent = [];
                            break;
                        case 'Ting':
                            this.minId = '';
                            this.noDataFlag = false;
                            this.loadType = 'ting';
                            this.getDataContent('ting');
                            this.dataContent = [];
                            break;
                        default:
                            break;
                    }
                },
            }
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
    .contentItem {
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
    /*.card-top-img {*/
        /*height: 290px;*/
    /*}*/
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
    .card-item .card-ting-title {
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
    .card-item .card-read-title:before {
        content: '';
        bottom: 0;
        position: absolute;
        width: 43px;
        height: 1px;
        border-top: 1px solid #333;
    }
    .card-item .card-read-title {
        font-size: 24px;
        padding: 15px;
        position: relative;
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
    .hide-load {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .no-more-data {
        clear: both;
        padding: 100px 0;
        text-align: center;
        color: #333;
        font-size: 12px;
        font-weight: 300;
    }

</style>