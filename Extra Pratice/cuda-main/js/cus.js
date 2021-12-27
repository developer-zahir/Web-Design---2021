$(document).ready(function () {
    new WOW().init();
    $(function(){
        $('#menu').slicknav({
            'prependTo': 'nav',
        });
    });
    $('body').materialScrollTop();
});