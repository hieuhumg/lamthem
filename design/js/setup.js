$(document).ready(function () {
   //owl caraousel
    $('#slider-index').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots: true,
        navigation: true,
        autoplay:false,
        autoplayTimeout:4000,
        // autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoplay:false,
            },
            1200: {
                dots: true
            }
        }
    });
    //opinion
    $('#video').owlCarousel({
        items:3,
        loop:true,
        margin:30,
        dots: false,
        navigation: true,
        autoplay:false,
        autoplayTimeout:4000,
        // autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoplay:false,

            },
            768: {
                items:3,
            }
        }
    });
});