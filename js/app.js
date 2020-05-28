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



// Login Menu
$(function(){
    $('.login-btn').click(function(){
        $('.login-view').removeClass('slide-in');
        $('.login-view').addClass('slide-out');
    });
    $('.close-login-from').click(function(event){
        $('.login-view').addClass('slide-in');
        $('.login-view').removeClass('slide-out');
        event.preventDefault();
    });
})