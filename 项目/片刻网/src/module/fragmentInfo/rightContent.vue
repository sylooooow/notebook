<template>
    <div class="right-content">
        <div class="hot-tag">
            <div class="title-cpt">热门标签</div>
            <div class="tag-list">
                <div v-for="item in radio" class="btn-tag">
                    <a href="" target="_blank">
                        {{item.tag}}
                    </a>
                </div>
            </div>
        </div>
        <about></about>
    </div>
</template>

<script>
    import about from './about'
    export default {
        name: "right-content",
        components:{
            about
        },
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
                this.$http.get('/api/version5.0/newTimeLine/tagList.php?num=10&sig=' + parmas.sig, {
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
    .right-content {
        width: 290px;
    }
    .right-content {
        float: left;
        margin-top: 70px;
    }
    .right-content .hot-tag {
        padding: 26px 0 12px 26px;
        background-color: #fff;
        border: 1px solid #e8e8e8;
        margin-bottom: 31px;
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
        background-repeat: no-repeat;
        background-image: url(../../assets/square.png);
    }
    .btn-tag {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 18px;
        cursor: pointer;
        font-size: 14px;
        -ms-border-radius: 25px;
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        font-weight: 200;
        border: 1px solid #e8e8e8;
        line-height: 32px;
        padding: 0 17px;
    }
    .btn-tag a {
        color: #666;
    }
</style>