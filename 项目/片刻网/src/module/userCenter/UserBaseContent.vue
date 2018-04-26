<template>
    <div class="user-base-content">
        <div v-if="userBaseData" class="user-info-box">
            <div class="user-icon-group">
                <div class="user-icon">
                    <img :src="userBaseData.userinfo.icon" alt="">
                    <div class="others-user-authentication">
                        <img v-if="userBaseData.userinfo.isMusician == 1" src="../../assets/user-musician1.png" alt="">
                        <img v-if="userBaseData.userinfo.isAuthor == 1" src="../../assets/user-author1.png" alt="">
                        <!--<img src="" alt="">-->
                        <!--<img src="" alt="">-->
                        <!--<img src="" alt="">-->
                        <!--<img src="" alt="">-->
                    </div>
                </div>
                <div class="medal-icon hidden">
                    <a href=""><img src="" alt=""></a>
                    <a href=""><img src="" alt=""></a>
                    <a href=""><img src="" alt=""></a>
                    <a href=""><img src="" alt=""></a>
                    <a href=""><img src="" alt=""></a>
                </div>
            </div>
            <div class="user-info">
                <div class="user-name">
                    <span>{{userBaseData.userinfo.uname}}</span>
                    <span class="btn-focus">关注</span>
                    <span class="btn-focus btn-focus-yes" style="display: none">已关注</span>
                    <span class="pianke-mail"></span>
                </div>
                <div class="user-des">{{userBaseData.userinfo.desc}}</div>
                <div class="user-others">
                    <a href="">
                        {{userBaseData.countInfo.fans}}<br><span>粉丝</span>
                    </a>
                    <a href="">
                        {{userBaseData.isFollowed}}<br><span>关注</span>
                    </a>
                    <a href="">
                        {{userBaseData.countInfo.visitors}}<br><span>访客</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="user-menu" style="display: none">
            <div class="type-title-cpt">
                <span>我的主页</span>
                <span>消息中心</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-base-content",
        data:function () {
            return {
                userBaseData:''
            }
        },
        methods:{
            getUserBaseData:function () {
                let uid = location.search.substr(5);
                console.log('uid:' + uid);
                let parmas = this.$util.params.getParams();
                console.log('sig:' + parmas.sig);
                this.$http.get('/api/version5.0/space/info.php?uid=' + uid + '&sig=' + parmas.sig, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    this.userBaseData = json;

                    //把用户作品信息传递给父组件
                    let obj = json.countInfo;
                    this.$emit('getInformation',obj);
                })
            }
        },
        mounted:function () {
            this.getUserBaseData();
        }
    }
</script>

<style scoped>
    .user-base-content {
        background-color: #fff;
        font-size: 14px;
        font-weight: 200;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 19px;
        padding-top: 55px;
    }
    .user-base-content .user-info-box {
        width: 556px;
        margin: 0 auto;
        margin-bottom: 20px;
        padding-bottom: 99px;
    }
    .user-base-content .user-icon-group {
        width: 100px;
        height: 139px;
    }
    .user-base-content .user-icon-group .user-icon {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
        position: relative;
    }
    .user-base-content .user-icon-group .user-icon > img {
        width: 100%;
        border-radius: 50%;
    }
    .user-base-content .user-icon-group .user-icon .others-user-authentication {
        position: absolute;
        right: 5px;
        bottom: 0;
        margin-bottom: -5px;
    }
    .user-base-content .user-icon-group .user-icon .others-user-authentication img {
        width: 21px;
        height: 21px;
        background-color: #fff;
        border: 3px solid #fff;
        border-radius: 50%;
    }
    .user-base-content .user-info {
        height: 139px;
        margin-top: -139px;
        margin-left: 150px;
    }
    .user-base-content .user-info .user-name {
        position: relative;
        font-size: 24px;
        font-weight: 500;
        padding-bottom: 7px;
    }
    .user-base-content .user-info .user-name span:first-child {
        display: inline-block;
        width: 345px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .btn-focus {
        cursor: pointer;
        margin-left: 13px;
        width: 72px;
        line-height: 29px;
        font-size: 14px;
        color: #333;
        border: 1px solid #ccc;
        border-radius: 25px;
        position: absolute;
        text-align: center;
    }
    .btn-focus:hover {
        border-color: #75BE88;
        color: #75BE88;
    }
    .pianke-mail {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 680px;
        background-image: url(../../assets/mail.png);
        width: 31px;
        height: 31px;
        background-size: 31px;
    }
    .pianke-mail:hover {
        background-image: url(../../assets/mailH.png);
    }
    .user-base-content .user-info .user-des {
        line-height: 20px;
        overflow: hidden;
        max-height: 60px;
    }
    .user-base-content .user-info .user-others {
        padding-top: 26px;
        font-weight: 500;
    }
    .user-base-content .user-info .user-others a {
        display: inline-block;
        color: #999;
        height: 42px;
        text-align: center;
        padding-right: 40px;
    }
    .user-base-content .user-info .user-others a span {
        font-weight: 200;
        font-size: 12px;
    }
    .user-base-content .user-menu {
        padding-top: 20px;
        font-size: 16px;
        width: 556px;
        margin: 0 auto;
        border-top: 1px solid rgba(242,242,242,0.3);
    }
    .user-base-content .user-menu .type-title-cpt {
        padding: 0;
        text-align: center;
    }
    .type-title-cpt {
        clear: both;
        padding-bottom: 34px;
        padding-top: 40px;
        color: #999;
        font-size: 16px;
    }
    .user-base-content .user-menu .type-title-cpt span:first-child {
        margin-right: 190px;
    }
    .type-title-cpt span {
        cursor: pointer;
        position: relative;
    }
</style>