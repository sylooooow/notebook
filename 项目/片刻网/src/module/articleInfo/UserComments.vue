<template>
    <div class="article-comment">
        <div class="comment-title-cpt">
            <div>
                评论
                <span>({{commentsCount}}&nbsp;条)</span>
            </div>
        </div>
        <div class="comment-list-group">
            <div v-for="item in comments" class="comment-cpt">
                <div class="comment-user-icon">
                    <a href="">
                        <img :src="item.userinfo.icon" alt="">
                    </a>
                </div>
                <div class="comment-info">
                    <div class="comment-user-info">
                        <a href="">{{item.userinfo.uname}}</a>
                        {{parmas.getParams(item.addtime).addTime}}
                        <span class="comment-reply disClick">回复</span>
                        <!--<span class="comment-del">删除</span>-->
                        <span class="comment-number">{{item.goods}}</span>
                        <!--<span class="comment-del report">举报</span>-->
                    </div>
                    <div class="comment-content">{{item.content}}</div>
                    <div v-for="reply in item.replyList" class="comment-content-others">
                        <a href="">{{reply.userinfo.uname}}:</a>
                        {{reply.content}}
                    </div>
                </div>
            </div>
            <div v-show="isLoad" @click="getMoreComments" class="common-more-btn">查看更多评论</div>
            <div v-show="hasComments" class="no-more-data" style="display: none">- 已加载全部 -</div>
        </div>
        <div class="no-comment" style="display: none">
            暂时没有评论，快和小伙伴互动吧
        </div>
    </div>
</template>

<script>
    import dateformat from 'dateformat/'
    export default {
        name: "UserComments",
        props:['commentsCount'],
        data:function () {
            return {
                comments:[],
                minId:'',
                parmas:this.$util.params,
                hasComments:false,
                isLoad:true
            }
        },
        methods:{
            getCommentsData:function () {
                let contentid = location.search.substr(4);
                let parmas = this.$util.params.getParams();
                console.log("sig:" + parmas.sig)
                this.$http.get('/api/version5.0/comment/list.php?contentid=' + contentid + '&isAll=1' + '&minId=' + this.minId + '&sig=' + parmas.sig, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    console.log(json);
                    let _this = this;

                    if (json.length == 0) {
                        _this.hasComments = true;
                        _this.isLoad = false;
                    } else {
                        json.forEach(function(val,index){
                            _this.comments.push(val);
                        });
                        _this.minId = json[json.length - 1]["id"];
                    }
                })
            },
            getMoreComments:function () {
                this.getCommentsData();
            }
        },
        mounted:function () {
            this.getCommentsData();
        }
    }
</script>

<style scoped>
    .comment-title-cpt {
        color: #333;
        font-size: 18px;
        border-bottom: 1px solid #ccc;
    }
    .comment-title-cpt div {
        display: inline-block;
        padding-bottom: 8px;
        border-bottom: 1px solid #333;
    }
    .comment-title-cpt div span {
        font-size: 12px;
        font-weight: 200;
        padding: 0 10px;
    }
    .comment-cpt {
        width: 638px;
        padding-top: 40px;
        position: relative;
    }
    .comment-cpt .comment-user-icon {
        width: 40px;
        height: 40px;
    }
    .comment-cpt .comment-user-icon img {
        border: 1px solid #e8e8e8;
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .comment-cpt .comment-info {
        width: 594px;
        font-weight: 200;
        margin-left: 50px;
        margin-top: -40px;
        left: 50px;
        color: #666;
        font-size: 14px;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 80px;
    }
    .comment-cpt .comment-info .comment-user-info {
        font-weight: 100;
        color: #999;
        font-size: 12px;
        padding-bottom: 17px;
    }
    .comment-cpt .comment-info .comment-user-info a {
        cursor: pointer;
        font-weight: 300;
        color: #57ad68;
        font-size: 14px;
        padding-right: 10px;
    }
    .comment-cpt .comment-info .comment-user-info span:not(.comment-user-name) {
        float: right;
    }
    .comment-cpt .comment-info .comment-user-info .comment-reply {
        cursor: pointer;
    }
    .disClick {
        pointer-events: none;
    }
    .comment-cpt .comment-info .comment-user-info .comment-number {
        min-height: 18px;
        cursor: pointer;
        position: relative;
        background-image: url(../../assets/praise.png);
        background-size: 13px;
        background-repeat: no-repeat;
        background-position: center right;
        padding-right: 23px;
        margin-right: 36px;
    }
    .comment-cpt .comment-info .comment-user-info .comment-number:hover {
        background-image: url(../../assets/praiseH.png);
    }
    .comment-cpt .comment-info .comment-content-others {
        margin-top: 10px;
        background-color: #fafafa;
        border: 1px solid #e8e8e8;
        padding: 8px 10px;
    }
    .comment-cpt .comment-info .comment-content-others a {
        padding-right: 10px;
        color: #999;
    }
    .common-more-btn {
        text-align: center;
        color: #57ad68;
        cursor: pointer;
        padding-top: 70px;
        font-size: 12px;
    }
    .no-more-data {
        clear: both;
        padding: 100px 0;
        text-align: center;
        color: #333;
        font-size: 12px;
        font-weight: 300;
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

</style>