<template>
    <div class="index-content">
        <div class="radio-type-link">
            <a href="radioType.html?type=2">故事</a>
            <a href="radioType.html?type=4">音乐</a>
            <a href="radioType.html?type=6">读诗</a>
            <a href="radioType.html?type=5">电影</a>
            <a href="radioType.html?type=3">旅行</a>
            <a href="radioType.html?type=1">爱情</a>
        </div>
        <div class="radio-list-group">
            <div class="radio-list">
                <div v-for="item in radio" class="radio-cpt">
                    <div class="radio-img">
                        <img :src="item.coverimg" alt="">
                        <img :src="item.baseimg" alt="">
                        <img :src="item.userimg" alt="">
                        <a :href="'radioIntro.html?id=' + item.id">
            <span class="radio-img-bg">
              <span class="radio-img-bg-text">
              <span>-</span>
              <span>{{item.desc}}</span>
            </span>
            </span>
                        </a>
                    </div>
                    <div class="radio-info">
                        <div class="radio-title">
                            <a :href="'radioIntro.html?id=' + item.id">{{item.title}}</a>
                        </div>
                        <div class="radio-author">
                            <a :href="'userCenter.html?uid=' + item.userinfo.uid">主播&nbsp;/&nbsp;{{item.userinfo.uname}}</a>
                        </div>
                        <div class="radio-others">{{(item.plays / 1000000).toFixed(1)}} m次播放</div>
                    </div>
                </div>
            </div>
            <div class="loading"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "all-radio",
        data:function () {
            return {
                radio:[],
                pageNum:1,
                loadImageFlag:true,
                loadFlag:true
            }
        },
        methods:{
            //获取Ting数据
            getRadioData:function () {
                let _this = this;
                let parmas = this.$util.params.getParams();
                console.log("sig:" + parmas.sig)
                this.$http.get('/api/version5.0/ting/listOfRadio.php?pageSize=9&sort=2&pageNum=' + this.pageNum + '&sig=' + parmas.sig, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json  = res.data["data"];
                    json.forEach(function(val,index){
                        _this.radio.push(val);
                    });
                    _this.pageNum += 1;
                    _this.loadFlag = true;
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
                if (loadH <= 100) {
                    //如果进入加载，立即关闭加载开关，避免一直加载
                    if (_this.loadFlag) {
                        //显示加载图片
                        _this.loadImgFlag = true;
                        _this.loadFlag = false;

                        _this.getRadioData();
                    }
                }
            },
        },
        mounted:function () {
            //网络请求过程不要写在mounted里，定义在methods里，只在这里调用
            this.getRadioData();
            window.addEventListener('scroll', this.getLoadHeight);
        }
    }
</script>

<style scoped>
    .index-content {
        width: 960px;
        margin: 0 auto;
        clear: both;
    }
    .radio-type-link {
        float: right;
        margin-top: -55px;
        color: #666;
        font-weight: 200;
        font-size: 12px;
    }
    .radio-type-link a {
        cursor: pointer;
        padding: 0 10px;
        color: #999;
    }
    .radio-list-group {
        width: 1020px;
    }
    .ting-cpt {
        width: 960px;
        margin: 0 auto;
    }
    .radio-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .radio-cpt {
        width: 300px;
        height: 458px;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    .radio-img {
        width: 300px;
        height: 327px;
        position: relative;
    }
    .radio-img img {
        width: 300px;
        height: 300px;
        border-radius: 10px;
        position: absolute;
    }
    .radio-img img:nth-child(1) {
        width: 240px;
        height: 240px;
        top: 70px;
        left: 50%;
        border-radius: 7px;
        margin-left: -120px;
    }
    .radio-img img:nth-child(2) {
        width: 270px;
        height: 270px;
        top: 35px;
        left: 50%;
        margin-left: -135px;
        border-radius: 7px;
    }
    .radio-img-bg-text {
        position: absolute;
        left: 50%;
        top: 30%;
        margin-left: -80px;
        width: 160px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: white;
        opacity: 0;
    }
    .radio-img-bg {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0,0,0,.0);
    }
    .radio-img-bg:hover {
        background: rgba(0,0,0,.4);
        transition: all 1s;
    }
    .radio-img-bg:hover .radio-img-bg-text {
        opacity: 1;
        transition: all 0.6s;
    }
    .radio-info {
        width: 300px;
        height: 88px;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .radio-title {
        width: 100%;
        height: 42px;
        font-size: 1.6em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .radio-author {
        width: 100%;
        height: 29px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .radio-author a {
        font-size: 12px;
        color: #333333;
    }
    .radio-others {
        width: 100%;
        font-size: 12px;
        color: #776A6A;
        height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
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