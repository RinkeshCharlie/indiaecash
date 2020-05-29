// main menu
var mobileMenu = document.getElementsByClassName('mobile-menu')[0],
  closeMenu = document.getElementsByClassName('close-menu-wpr')[0],
  menu = document.getElementsByClassName('menu')[0];

mobileMenu.addEventListener('click', function(){
    menu.classList.add("menu-slide");
});

closeMenu.addEventListener('click', function(){
    menu.classList.remove("menu-slide");
}); 

// Course Slider
$(function(){
    $('.course-slider').slick({
        dots: false,
        arrow: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            }
        ]
    });
})