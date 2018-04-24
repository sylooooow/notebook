//返回顶部函数
function backtop() {
    $(".back-top").hide();
    $(".back-top").on('click',function () {
        $("html, body").animate({
            scrollTop:0
        },100)
    });
    window.addEventListener('scroll', function (ev) {
        let scrollH = document.documentElement.scrollTop;
        if (scrollH > 400) {
            $(".back-top").show();
        } else {
            $(".back-top").hide();
        }
    })
}

//文章喜欢和评论导航
function likesNav() {
    window.addEventListener('scroll', function (ev) {
        let headerH = $(".article-header-info").height();
        let contentH = $(".article-content").height();
        let maxH = headerH + contentH + 282;

        let scrollH = document.documentElement.scrollTop;
        let clientH = document.body.clientHeight;

        if (scrollH + clientH >= maxH) {
            setTimeout(function () {
                $(".likeNav-cpt").slideUp(250);
            },100);
        } else {
            setTimeout(function () {
                $(".likeNav-cpt").slideDown(250);
            },100);
        }
    });
}



export default {
    backtop,
    likesNav
}