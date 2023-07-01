$(document).ready(function () {
    $('.hamburger-btn').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
    $('.login-input').click(function (e) { 
        e.preventDefault();
        $('.login-info i').removeClass()
    });
    $('.register-info input').click(function (e) { 
        e.preventDefault();
        $('.register-info i').slideToggle();
    });
});