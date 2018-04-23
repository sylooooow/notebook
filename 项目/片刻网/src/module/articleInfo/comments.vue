<template>
    <div class="article-comment">
        <div class="comment-title-cpt">
            <div>
                评论
                <span>(&nbsp;条)</span>
            </div>
        </div>
        <div class="comment-list-group">
            <div class="comment-cpt">
                <div class="comment-user-icon">
                    <a href="">
                        <img src="" alt="">
                    </a>
                </div>
                <div class="comment-info">
                    <div class="comment-user-info">
                        <a href=""></a>
                        2018-4-16 09:57
                        <span class="comment-reply disClick">回复</span>
                        <!--<span class="comment-del">删除</span>-->
                        <span class="comment-number">0</span>
                        <!--<span class="comment-del report">举报</span>-->
                    </div>
                    <div class="comment-content">好喜欢哦，我也想了解，零基础的怎么学画画，从哪里开始学习呢，希望能等到你的答案</div>
                    <div class="comment-content-others">
                        <a href="">4462092:</a>
                        从你拿起笔开始
                    </div>
                </div>
            </div>
        </div>
        <div class="no-comment" style="display: none">
            暂时没有评论，快和小伙伴互动吧
        </div>
    </div>
</template>

<script>
    export default {
        name: "comments"
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


</style>