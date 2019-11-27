$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.menu').css('background', 'transparent');
        $('.navbar-brand img').attr('src','img/adamo_digital_logo_white.png');
        $('.menu .nav-link').css('color', '#fff');
        $('.navbar-toggler').css('background','transparent');
        $('.navbar-toggler-icon').removeClass('navbar-toggler-fixed');
    } else{
        $('.menu').css('background', '#fff');
        $('.menu .nav-link').css('color', '#444');
        // $('.nav-contact').css('color', '#fff');
        $('.navbar-brand img').attr('src','img/adamo_digital_logo_blue.png');
        $('.navbar-toggler-icon').addClass('navbar-toggler-fixed');
    }
});
$('#form').submit(function(e) {
    if (grecaptcha.getResponse() == '') {
        $('.g-recaptcha').css('box-shadow', '-9px 9px 8px -5px #a94442');
        e.preventDefault();
    }
});
$('.navbar-toggler').click(function(){
    $('.menu .nav-link').css('color', '#4a4a4a');
    $('#contact').removeClass('btn-contact').addClass('nav-link');

    
});