// mobile-menu

$('.logo-menu__menu-icon').click(function(){
    $('.mobile-menu').addClass('on');
})

$('.mobile-menu__menu-exit').click(function(){
    $('.mobile-menu').removeClass('on');
});


// slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1
})