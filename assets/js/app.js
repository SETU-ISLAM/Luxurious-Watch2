$(document).ready(function(){
    $('.bars__icon , .offcanvas-overlay').click(function () {

        $('.offcanvas_area , .offcanvas-overlay').addClass('active');

    });
    $('.crose__icon , .offcanvas-overlay').click(function () {

        $('.offcanvas_area , .offcanvas-overlay').removeClass('active');

    });

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if(scroll < 5) {
        $(".header").removeClass("scroll-header");
        }else{
        $(".header").addClass("scroll-header");
        }
        })

    $('.home_carousel').owlCarousel({
        slidesToShow: 1,
        loop: true,
        margin: 60,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            
            1200: {
                items: 1
            }
        }
    });
    $('.section1_carousel').owlCarousel({
        slidesToShow: 1,
        loop: true,
        margin: 40,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            
            1200: {
                items: 1
            }
        }
    });

    $('.section4_carousel').owlCarousel({
        slidesToShow: 1,
        loop: true,
        margin: 40,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            
            1200: {
                items: 1
            }
        }
    });
})