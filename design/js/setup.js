$(document).ready(function () {
   //owl caraousel
    $('#slider-index').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots: true,
        navigation: true,
        autoplay:true,
        autoplayTimeout:4000,
        // autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoplay:true,
            },
            1200: {
                dots: true
            }
        }
    });
    //opinion
    new WOW().init();

    $('#nav').click(function () {
       $('.menu-mobile ul').toggleClass('active');
    });
    $('#delete').click(function () {
        $('.menu-mobile ul').removeClass('active');
    });
    // $('#search').click(function () {
    //     $('.has-search').show(2);
    // });
});