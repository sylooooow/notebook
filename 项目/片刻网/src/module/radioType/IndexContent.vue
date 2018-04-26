<template>
    <div v-if="info" class="index-content">
        <div class="radio-type-info">
            <div class="radio-type-img">
                <img src="" alt="" width="196px">
            </div>
            <div class="radio-types">
                <div class="radio-type-link">
                    分类:
                    <a @click="chooseType" index="2">故事</a>
                    <a @click="chooseType" index="4">音乐</a>
                    <a @click="chooseType" index="6">读诗</a>
                    <a @click="chooseType" index="5">电影</a>
                    <a @click="chooseType" index="3">旅行</a>
                    <a @click="chooseType" index="1">爱情</a>
                </div>
            </div>
        </div>
        <div class="ting-list-group">
            <div class="ting-list ting-type-list">
                <div v-for="item in info" class="ting-cpt">
                    <div class="ting-img">
                        <a :href="'tingInfo.html?tingid=' + item.tingid + '&contentid=' + item.contentid" target="_blank">
                            <img :src="item.imgUrl" class="lazy loaded">
                            <span></span>
                        </a>
                    </div>
                    <div class="ting-info">
                        <div>
                            <div class="ting-title">
                                <a :href="'tingInfo.html?tingid=' + item.tingid + '&contentid=' + item.contentid">{{item.title}}</a>
                            </div>
                            <div class="ting-author">
                                <a :href="'userCenter.html?uid=' + item.userinfo.uid">主播 / {{item.userinfo.uname}}</a>
                            </div>
                            <div class="ting-others">{{item.plays}}次播放&nbsp;&nbsp;|&nbsp;&nbsp;评论:{{item.comments}}&nbsp;&nbsp;|&nbsp;&nbsp;喜欢:{{item.likes}}</div>
                        </div>
                    </div>
                </div>
                <div v-if="loadImgFlag" class="loading"></div>
                <div v-if="noDataFlag" class="no-more-data">-&nbsp;已加载全部&nbsp;-</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index-content",
        data:function () {
            return {
                info:[],
                minId:'',
                pageNum:1,
                loadFlag:true,
                loadImgFlag:true,
                noDataFlag:false,
                loadType:''
            }
        },
        methods:{
            getInfoData:function (type) {
                let _this = this;
                let parmas = this.$util.params.getParams();
                let url = '';

                url = '/api/version5.0/ting/listByStyle.php?style=' + _this.loadType + '&sort=1' + '&pageNum=' + _this.pageNum + 'pageSize=9' + '&sig=' + parmas.sig;

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

                        _this.pageNum += 1;

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

                        console.log(_this.loadType)
                        _this.getInfoData(_this.loadType);
                    }
                }
            },


            chooseType:function (ev) {
                $(".radio-type-link").find('a').css('color','');
                let nowTarget = ev.target;
                nowTarget.style.color = '#333';

                this.info = [];
                this.loadImgFlag = true;
                let targetIndex = nowTarget.getAttribute('index');
                this.loadType = targetIndex;
                this.getInfoData(targetIndex);
            },
        },
        mounted:function () {
            //通过截取获取上一页的type值
            let loadType = location.search.substr(6);
            //遍历点击按钮，查找index属性与type值相等的，改变字体颜色
            $(".radio-type-link").find('a').each(function(index,value) {
                if (loadType == value.getAttribute('index')) {
                    value.style.color = '#333';
                }
            });


            this.loadType = loadType;
            this.getInfoData(loadType);
            window.addEventListener('scroll', this.getLoadHeight);
        }
    }
</script>

<style scoped>
    .active {
        color: #333333;
    }
    .index-content {
        width: 960px;
        margin: 0 auto;
        clear: both;
    }
    .radio-type-info {
        padding-top: 50px;
        padding-bottom: 70px;
        text-align: center;
    }
    .radio-type-info .radio-types {
        padding-top: 50px;
    }
    .radio-type-info .radio-type-link {
        float: none;
        margin-top: 0;
    }
    .radio-type-link {
        color: #666;
        font-weight: 200;
        font-size: 12px;
    }
    .radio-type-link a {
        cursor: pointer;
        padding: 0 10px;
        color: #999;
    }
    .radio-type-link a:hover {
        color: #57BA72;
    }
    .ting-list-group .ting-list {
        margin-left: -30px;
    }
    .ting-type-list .ting-cpt {
        margin-bottom: 54px;
    }
    .ting-cpt {
        box-sizing: border-box;
        border: 1px solid #e8e8e8;
        float: left;
        margin-left: 30px;
        width: 300px;
        height: 420px;
        background-color: #ffffff;
        color: #333;
        font-size: 12px;
        font-weight: 200;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .ting-cpt .ting-img {
        position: relative;
        width: 300px;
        height: 300px;
        overflow: hidden;
    }
    .ting-info {
        width: 300px;
        height: 80px;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;
    }
    .ting-cpt .ting-info .ting-title {
        padding-bottom: 10px;
        font-size: 24px;
        height: 24px;
        width: 260px;
        line-height: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .ting-cpt a {
        color: #333;
    }
    .ting-cpt .ting-info .ting-author {
        padding-bottom: 13px;
    }
    .ting-cpt .ting-info .ting-others {
        font-weight: lighter;
    }
    .ting-cpt .ting-info .ting-title a:hover,
    .ting-cpt .ting-info .ting-author a:hover {
        color: #56B972;
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