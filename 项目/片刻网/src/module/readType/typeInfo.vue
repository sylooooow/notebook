<template>
    <div v-if="info" class="article-type-info" :style="{backgroundImage: 'url(' + info.img + ')'}">
        <span></span>
        <div class="article-type-title">早安故事</div>
        <div class="article-type-others">Story / 1061篇文章</div>
        <div class="article-type-des">小说与非虚构</div>
    </div>
</template>

<script>
    export default {
        name: "type-info",
        data:function () {
            return {
                info:''
            }
        },
        methods:{
            getInfoData:function () {
                //切割链接字符串，再截取，拿到type值
                let type = location.search.split('&')[0];
                type = type.substr(6);
                let parmas = this.$util.params.getParams();
                let url = '/api/version5.0/article/articleTagInfo.php?type=' + type + '&sig=' + parmas.sig;
                this.$http.get(url, {
                    headers:{
                        Authorization:parmas.Authorization
                    }
                }).then((res) => {
                    let json = res.data["data"];
                    this.info = json;
                    console.log(json)
                })
            }
        },
        mounted:function () {
            this.getInfoData();
        }
    }
</script>

<style scoped>
    .article-type-info {
        background-position: center;
        margin-top: 50px;
        width: 100%;
        height: 278px;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: 200;
        position: relative;
    }
    .article-type-info span {
        background-color: rgba(0,0,0,0.1);
        top: 0;
        height: 100%;
        position: absolute;
        width: 100%;
        left: 0;
    }
    .article-type-info .article-type-title {
        font-weight: 400;
        font-size: 30px;
        padding-top: 74px;
    }
    .article-type-info div {
        position: relative;
        z-index: 1;
    }
    .article-type-info .article-type-others {
        font-weight: 100;
        position: relative;
        padding-bottom: 28px;
    }
    .article-type-info div {
        position: relative;
        z-index: 1;
    }
    .article-type-info .article-type-others:before {
        opacity: .8;
        content: '';
        position: absolute;
        background-color: #fff;
        width: 48px;
        height: 1px;
        top: 60%;
        left: 50%;
        margin-left: -24px;
    }
    .article-type-info .article-type-des {
        font-weight: 100;
        padding: 0 20px;
    }

</style>