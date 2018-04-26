<template>
    <div>
        <div class="type-title-cpt">
            <span @click="getHot" class="active">HOT</span>
            <span @click="getNew">NEW</span>
        </div>
        <div v-if="info" class="article-hot-new-list">
            <div v-for="item in info" class="article-cpt">
                <div class="article-info">
                    <div class="article-info-box">
                        <div class="article-title">
                            <a :href="'articleInfo.html?id=' + item.content.contentId" target="_blank">{{item.content.title}}</a>
                        </div>
                        <div class="article-author">
                            <a :href="'userCenter.html?uid=' + item.userInfo.uid" target="_blank">By / {{item.userInfo.uname}}</a>
                        </div>
                        <div class="article-content">
                            {{item.content.desc}}
                            <span class="view-all">
                                <a href="" target="_blank">
                                    VIEW ALL
                                    <img src="../../assets/viewall.png" alt="">
                                </a>
                            </span>
                        </div>
                    </div>
                    <div class="article-others">
                        {{(item.statistics.view / 1000).toFixed(1)}}k次阅读&nbsp;&nbsp;|&nbsp;&nbsp;评论:{{item.statistics.comments}}&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:{{item.statistics.like}}
                    </div>
                </div>
                <div class="article-img loaded" :style="{backgroundImage: 'url(' + item.content.imageInfo.img + ')'}">
                    <a href="" target="_blank"></a>
                </div>
            </div>
            <div v-if="loadImgFlag" class="loading"></div>
            <div v-if="noDataFlag" class="no-more-data">-&nbsp;已加载全部&nbsp;-</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hot-new-list",
        data:function () {
            return {
                info:[],
                minId:'',
                pageNum:1,
                loadFlag:true,
                loadImgFlag:false,
                noDataFlag:false,
                loadType:'hot'
            }
        },
        methods:{
            getInfoData:function (type) {
                let _this = this;
                //切割链接字符串，再截取，拿到tag值
                let tag = location.search.split('&')[1];
                tag = tag.substr(4);
                let parmas = this.$util.params.getParams();
                let url = '';

                //判断类型
                if (type == 'hot') {
                    url = '/api/version5.0/hotcontent/list.php?tag=' + tag + '&type=article&pageNum=' + this.pageNum + '&sig=' + parmas.sig;
                } else if (type == 'new') {
                    url = '/api/version5.0/article/listByNewOfTag.php?tag=' + tag + '&minId=' + this.minId + '&sig=' + parmas.sig;
                }

                this.$http.get(url, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];

                    //判断返回的数据长度,为0表示加载了全部数据,隐藏加载图片，显示已加载全部,关闭加载数据开关;否则正常加载
                    if (json.length == 0) {
                        _this.noDataFlag = true;
                        _this.loadImgFlag = false;
                        _this.loadFlag = false;
                    } else {
                        json.forEach(function(val,index){
                            _this.info.push(val);
                        });

                        //判断类型
                        if (type == 'hot') {
                            _this.pageNum += 1;
                        } else if (type == 'new'){
                            let newMinId = json[json.length - 1].content.sortId;
                            _this.minId = newMinId;
                            console.log('newMinId:' + newMinId);
                            console.log("进入hot")
                        }

                        _this.loadFlag = true;
                        _this.loadImgFlag = false;
                    }
                })
            },

            //下拉刷新
            getLoadHeight:function () {
                let wrapBoxH = document.body.scrollHeight;
                let scrollH = document.documentElement.scrollTop;
                let clientH = document.body.clientHeight;
                let loadH = wrapBoxH - scrollH - clientH;
                let _this = this;

                // console.log(loadH)
                //当加载高度小于100时，加载数据
                if (loadH == 0) {
                    //如果进入加载，立即关闭加载开关，避免一直加载
                    if (_this.loadFlag) {
                        //显示加载图片
                        _this.loadImgFlag = true;
                        _this.loadFlag = false;

                        _this.getInfoData(_this.loadType);
                    }
                }
            },

            //New
            getNew:function (ev) {
                //先清空数据数组
                this.info = [];
                this.minId = '';
                this.pageNum = 1;
                //切换按钮样式
                $(".type-title-cpt").find('span').removeClass('active');
                let clickTarget = ev.target;
                clickTarget.className = 'active';

                let loadType = 'new';
                this.loadType = loadType;
                this.getInfoData(loadType);
            },

            //Hot
            getHot:function (ev) {
                //先清空数据数组
                this.info = [];
                this.minId = '';
                this.pageNum = 1;
                //切换按钮样式
                $(".type-title-cpt").find('span').removeClass('active');
                let clickTarget = ev.target;
                clickTarget.className = 'active';

                let loadType = 'hot';
                this.loadType = loadType;
                this.getInfoData(loadType);
            }
        },
        mounted:function () {
            this.getInfoData(this.loadType);
            window.addEventListener('scroll', this.getLoadHeight);
        }
    }
</script>

<style scoped>
    .type-title-cpt {
        clear: both;
        padding-bottom: 34px;
        padding-top: 40px;
        color: #999;
        font-size: 16px;
    }
    .type-title-cpt span:first-child {
        margin-right: 30px;
    }
    .type-title-cpt .active {
        color: #333;
    }
    .type-title-cpt .active:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #333;
        top: 30px;
        left: 0;
    }
    .type-title-cpt span {
        cursor: pointer;
        position: relative;
    }
    .article-cpt {
        width: 100%;
        height: 216px;
        background-color: #fff;
        border: 1px solid #e8e8e8;
        box-sizing: content-box;
        margin-bottom: 10px;
    }
    .article-cpt .article-info {
        padding: 20px 0;
        padding-left: 20px;
        width: 640px;
        float: left;
        font-size: 12px;
        color: #333;
    }
    .article-cpt .article-info .article-info-box {
        height: 140px;
        padding-bottom: 25px;
        padding-right: 45px;
        font-weight: 200;
    }
    .article-cpt .article-info .article-info-box .article-title {
        font-size: 24px;
        height: 30px;
        width: 580px;
        line-height: 32px;
        padding-bottom: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .article-cpt .article-info .article-info-box .article-title a {
        color: #333;
    }
    .article-cpt .article-info .article-info-box .article-author a {
        color: #333;
    }
    .article-cpt .article-info .article-info-box .article-title a:hover,
    .article-cpt .article-info .article-info-box .article-author a:hover{
        color: #62C287;
    }
    .article-cpt .article-info .article-info-box .article-content {
        overflow: hidden;
        height: 85px;
        font-size: 13px;
        font-weight: 100;
        color: #333;
        line-height: 20px;
        padding-top: 25px;
    }
    .article-cpt .article-info .article-info-box .article-content:before {
        content: '';
        margin-top: -10px;
        position: absolute;
        width: 30px;
        height: 1px;
        border-top: 1px solid #333;
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
    .article-cpt .article-info .article-others {
        font-weight: lighter;
        color: #999;
        bottom: 10px;
    }
    .article-cpt .article-img {
        overflow: hidden;
        width: 300px;
        height: 216px;
        float: left;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .article-cpt .article-img a {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .no-more-data {
        clear: both;
        padding: 100px 0;
        text-align: center;
        color: #333;
        font-size: 12px;
        font-weight: 300;
    }
    .loading {
        text-align: center;
        font-size: 12px;
        clear: both;
        background-repeat: no-repeat;
        background-position: center;
        padding: 100px 0;
        background-size: contain;
        width: 80px;
        height: 80px;
        margin: 0 auto;
        background-image: url(../../assets/load.gif);
    }

</style>