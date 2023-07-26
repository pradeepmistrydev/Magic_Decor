// owlCarousel slider

$('.banner_carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
})

// owlCarousel slider


// owlCarousel testimonial slider


var owl = $('.owl-carousel');

$('.testimonial_carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})
// owlCarousel testimonial slider

//transition

$(function () {
    $(".transition_content").twentytwenty();
});

//transition

//nav active

$(document).on('click', '.nav-item a', function (e) {
    $(this).parent().addClass('active').siblings().removeClass('active');
});

//nav active

//scroll btn

$('.topscroll').hide();
$(window).scroll(function () {
    $('.topscroll').show();
});

function scrollToTop() {
    $(window).scrollTop(0);
}

//scroll btn 