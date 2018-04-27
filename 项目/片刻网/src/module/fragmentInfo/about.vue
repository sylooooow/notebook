<template>
    <div class="others-timeline">
        <div class="title-cpt">相关碎片</div>
        <div class="img-group-cpt">
            <div v-for="item in radio" v-if="item.coverimg" class="card-timeline-cpt">
                <div class="card-top-img">
                    <a :href="'fragmentInfo.html?id=' + item.id" target="_blank">
                        <img :src="item.coverimg" alt="">
                    </a>
                </div>
                <div class="card-item">
                    <div class="card-content">
                        <a href="">{{item.text}}</a>
                    </div>
                    <div class="card-user">
                        <div class="card-user-info">
                            <a href=""><img :src="item.userinfo.icon" alt=""><span>{{item.userinfo.uname}}</span></a>
                        </div>
                        <div class="card-likes"><img src="../../assets/dianzan.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
        data:function () {
            return {
                radio:null,
            }
        },
        methods:{
            getRadioData:function () {
                let contentid = location.search.substr(4);

                let parmas = this.$util.params.getParams();
                console.log("sig:" + parmas.sig);
                this.$http.get('/api/version5.0/newTimeLine/list.php?pageSize=4&sig=' + parmas.sig, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"]
                    this.radio = json;
                    console.log(json)
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
    .right-content .others-timeline {
        background-color: #fff;
        border: 1px solid #e8e8e8;
        padding: 14px 0;
    }
    .right-content .others-timeline .title-cpt {
        margin-left: 20px;
        margin-bottom: 14px;
    }
    .right-content .title-cpt {
        font-size: 14px;
        background-size: 13px;
        padding: 0;
        padding-left: 24px;
        margin-bottom: 26px;
        height: 20px;
        line-height: 20px;
        background-position: 0 center;
    }
    .title-cpt {
        clear: both;
        padding-bottom: 40px;
        background-repeat: no-repeat;
        padding-top: 70px;
        padding-left: 28px;
        background-position: 0 74px;
        background-image: url(../../assets/square.png);
    }
    .right-content .others-timeline .img-group-cpt {
        background-color: #fafafa;
        margin-left: -13px;
    }
    .img-group-cpt {
        min-height: 200px;
        position: relative;
        margin-left: -13px;
    }
    .right-content .others-timeline .img-group-cpt > div {
        border: 1px solid #e8e8e8;
        opacity: 1;
        position: inherit;
        float: left;
        margin-left: 13px;
        width: 288px;
        background-color: #fff;
        margin-bottom: 14px;
        color: #333;
        font-size: 12px;
    }
    .card-top-img,
    .card-top-img img{
        width: 290px;
    }
    .card-top-img img {
        background-color: #5E5E5E;
    }
    .card-item {
        width: 290px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-content {
        padding: 10px 0;
    }
    .card-content,
    .card-user {
        width: 252px;
        color: #333333;
        font-size: 14px;
    }
    .card-user {
        padding: 0 19px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FAFAFA;
    }
    .card-user-info a {
        height: 50px;
        display: flex;
        align-items: center;
    }
    .card-user-info a span {
        margin-left: 10px;
    }
    .card-user-info img {
        width: 32px;
        height: 32px;
        border-radius: 16px;
    }
    .card-likes,
    .card-likes img {
        width: 23px;
        height: 22px;
    }
    .hide-load {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>