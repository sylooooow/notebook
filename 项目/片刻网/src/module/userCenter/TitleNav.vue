<template>
    <div class="title-nav-box">
        <div class="data-title data-title-home" v-show="homeNavFlag">
            <span class="active">
                <a href="">全部</a> ({{transmitData.articles + transmitData.tings + transmitData.timelines}})
            </span>
            <span>
                <a href="">文章</a> ({{transmitData.articles}})
            </span>
            <span>
                <a href="">碎片</a> ({{transmitData.timelines}})
            </span>
            <span>
                <a href="">Ting</a> ({{transmitData.tings}})
            </span>
        </div>
        <div class="data-title data-title-like" v-show="likeNavFlag">
            <span><a href="">粉丝</a></span>
            <span><a href="">关注</a></span>
            <span><a href="">访客</a></span>
        </div>
        <div class="data-title  data-title-msg" v-show="msgNavFlag">
            <span class="active"><a href="">评论</a> ()</span>
            <span><a href="">喜欢</a> ({{transmitData.lkes}})</span>
            <span><a href="">粉丝</a> ({{transmitData.fans}})</span>
            <span><a href="">片邮</a> ({{transmitData.stars}})</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "title-nav",
        props:['transmitData'],
        data:function () {
            return {
                homeNavFlag:true,
                likeNavFlag:false,
                msgNavFlag:false
            }
        },
    }
</script>

<style scoped>
    .data-title {
        font-weight: 200;
        width: 1200px;
        margin: 0 auto;
        padding: 60px 0;
        color: #666;
    }
    .data-title span {
        cursor: pointer;
        position: relative;
        padding-right: 26px;
        color: #999;
        font-size: 12px;
    }
    .data-title .active a {
        color: #57ad68;
    }
    .data-title span a {
        font-size: 14px;
        color: #666;
        padding-right: 5px;
    }
    .data-title-like {
        width: 960px;
    }
</style>