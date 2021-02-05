/*------- loding page --------*/
$(document).ready(function () {
    $(window).on('load',function () {
        $('.load').fadeOut();
    })
	/*
    setTimeout(function () {
		$('.loding').slideUp();
	},10000);
	*/
});
/*------------X-------------X-----------*/



// about section -------------------
$(document).ready(function () {
    // add class active
    $('.about-color li').on('click',function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
    // slide click

});
/*---------X-------------X----------*/


// video player ---------------------
$(document).ready(function () {
    $('.video-icone').on('click',function () {
        $('.video-prev').css('display','flex');
    });
    $('.video-prev i').on('click',function () {
        $('.video-prev').css('display','none');
    })
});

const player = new Plyr('#player');
/*------------X----------X------------*/



// choose slide ------------------------
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'slideInLeft',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450,
        autoplay : Boolean,
        autoplayTimeout : 2000,
        loop : Boolean,
        center : Boolean,
        
    });
});
/*--------X-----------X--------------*/



// review slide ---------------
    $('.review-slide').owlCarousel({
        loop:true,
        margin:20,
        dots : Boolean,
        autoplay: Boolean,
        smartSpeed:800,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
/*-----------X------------X------------*/




// faq section ----------------------
$(document).ready(function () {
    $( function() {
        $( ".accordion" ).accordion();
    } );
});
/*-----------X-----------X-------------*/ 



// shop slide ----------------------
    $('.shop-slide').owlCarousel({
        loop:true,
        margin:20,
        nav : false,
        // autoplay : true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // shop off ------
    $(document).ready(function () {
        $('.shop-off').each(function (index, element) {
            $(this).text( $(this).data('text') + " off" ); 
        });
    });
/*-------------X-----------X-----------*/




// smoth scroll ------------------------
$(document).ready(function () {
    $('.navbar-nav li').on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop : $( '#' + $(this).data('link') ).offset().top
        },1000);
    });
});
/*-------------X------------X------------*/





// nav bar fixed efect ------------------
$(document).ready(function () {
    $(window).on('scroll',function () {
        if ( $(window).scrollTop() > 50 ){
            $('.navbar').addClass('fixed');
        }
        else{
            $('.navbar').removeClass('fixed');
        }
    });
});
/*---------X-----------X---------------*/



// about skin color -------------------
$(document).ready(function () {
    $('.about-color li.red').on('click',function () {
        $('.about-item-img-item.red').addClass('active').siblings().removeClass('active');
    });
    $('.about-color li.blue').on('click',function () {
        $('.about-item-img-item.blue').addClass('active').siblings().removeClass('active');
    });
    $('.about-color li.pink').on('click',function () {
        $('.about-item-img-item.pink').addClass('active').siblings().removeClass('active');
    });
});
/*-------------X-----------X-------------*/


// links defult ----------------
$(document).ready(function () {
    $('a').on('click',function (e) {
            e.preventDefault();
    })
});
/*-------------X------------X------------*/


// wow js ---------------------------
$(document).ready(function () {
    new WOW().init();
});
/*------------X------------X----------------*/




