
function controlHeader() {
    window.addEventListener('mousewheel', function (ev) {
        let scrollH = document.documentElement.scrollTop;
        if (scrollH > 50) {
            if (ev.wheelDelta > 0) {
                setTimeout(function () {
                    $("#commonHeader").slideDown(250);
                },200);
            } else {
                setTimeout(function () {
                    $("#commonHeader").slideUp(250);
                },200);
            }
        }
    });
    window.addEventListener('scroll', function (ev) {
        let scrollH = document.documentElement.scrollTop;
        if (scrollH == 0) {
            $("#commonHeader").slideDown(250);
        }
    })
}
export default {
    controlHeader
}