$(document).ready(function(){
    $('.nav-hamburger').click(function(){
        $('.nav-hamburger').toggleClass('change');
        $('.nav-menu').toggleClass('change-list');
        $('.nav-menu-list').toggleClass('change-list');
    })
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.nav-hamburger').removeClass("change");
        $('.nav-menu').removeClass("change-list");
        $('.nav-menu-list').removeClass("change-list");
    }
});