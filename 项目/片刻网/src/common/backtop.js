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
export default {
    backtop
}