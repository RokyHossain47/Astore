$(document).ready(function(){

    $(".brand__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 4,
    dots: false,
    nav: true,
    navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {

        0: {
            items: 1,
        },

        480: {
            items: 2,
        },

        768: {
            items: 3,
        },

        992: {
            items: 4,
        }
    }
});

});
// product slider
if($('.viewed_slider').length)
{
    var viewedSlider = $('.viewed_slider');

    viewedSlider.owlCarousel(
    {
        loop:true,
        margin:15,
        autoplay:true,
        autoplayTimeout:2000,
        nav:false,
        dots:false,
        responsive:
        {
            0:{items:1},
            575:{items:2},
            768:{items:3},
            991:{items:4},
            1199:{items:5}
        }
    });

    if($('.viewed_prevv').length)
    {
        var prev = $('viewed_prevv');
        prev.on('click', function()
        {
            viewedSlider.trigger('prev.owl.carousel');
        });
    }

    if($('.viewed_nextt').length)
    {
        var next = $('.viewed_nextt');
        next.on('click', function()
        {
            viewedSlider.trigger('next.owl.carousel');
        });
    }
}

if($('.vslider').length)
{
    var viewedSlider = $('.vslider');

    viewedSlider.owlCarousel(
    {
        loop:true,
        margin:15,
        autoplay:true,
        autoplayTimeout:2500,
        nav:false,
        dots:false,
        responsive:
        {
            0:{items:1},
            575:{items:2},
            768:{items:3},
            991:{items:4},
            1199:{items:4}
        }
    });

    if($('.viewed_prev').length)
    {
        var prev = $('viewed_prev');
        prev.on('click', function()
        {
            viewedSlider.trigger('prev.owl.carousel');
        });
    }

    if($('.viewed_next').length)
    {
        var next = $('.viewed_next');
        next.on('click', function()
        {
            viewedSlider.trigger('next.owl.carousel');
        });
    }
}

// product grid

$(".c-manu").click(function(){
    $(".c-item").toggle();
});
$(".best-offer").click(function(){
  $(".best-offer-item").toggle();
});



