<template>
    <div class="radio-list-group">
        <div class="ting-cpt"><div></div><span>热门电台 | Hot Radio</span></div>
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
    </div>
</template>

<script>
    export default {
        name: "other-radio",
        data:function () {
            return {
                radio:null,
            }
        },
        methods:{
            getRadioData:function () {
                let parmas = this.$util.params.getParams();
                console.log("sig:" + parmas.sig);
                this.$http.get('/api/version5.0/ting/listOfRadio.php?pageSize=3&sort=2&sig=' + parmas.sig, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    console.log(res.data["data"]);
                    this.radio = res.data["data"];
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
    .radio-list-group {
        width: 1020px;
        padding-bottom: 100px;
    }
    .ting-cpt {
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
    }
    .radio-list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
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


</style>
