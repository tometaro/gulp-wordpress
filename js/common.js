$(function() {
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.Header').addClass('Header-Bg');
        }else{
            $('.Header').removeClass('Header-Bg');
        }
    });

    $('.Navi-Toggle').on("click", function() {
        $('.Header').toggleClass('Navi-Open');
    });

    $(".Navi-Shadow").click(function() {
        $('.Header').removeClass('Navi-Open');
    });
});