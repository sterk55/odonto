$(document).ready(function () {
    console.log('dfd')
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass('header2');
            
        } else {
            $('header').removeClass('header2');
           
        }
    });

});


