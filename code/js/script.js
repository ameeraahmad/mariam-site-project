// /*global $, alert, console, confirm*/
// /*jslint plusplus: true*/
// $(function () {
//     "use strict";
// //    function setHeight() {
// //        var height = window.innerHeight;
// //        $('.intro').height(height);
// //        $('.changeable_content>div').css('min-height', height - 150);
// //    }

//     setHeight();
//     $(window).on('resize', function () {
//         setHeight();
//     });
//     $('#enter').on('click', function () {
//         $(this).parents('.intro').fadeOut(150);
//         $('#header').removeClass('hidden');
//     });
//     $("#header a").on('click', function () {
//         $(this).addClass('active_anchor');
//         $(this).parent().siblings().find('a').removeClass('active_anchor');
//     });

//     $('.portifolio_op').on('click', function () {
//         $('.portifolio').removeClass('hidden').fadeIn(150);
//         $('.portifolio').siblings().fadeOut(150).addClass('hidden');
//     });

//     $('.client_feedback_op').on('click', function () {
//         $('.client_feedback').removeClass('hidden').fadeIn(150);
//         $('.client_feedback').siblings().fadeOut(150).addClass('hidden');
//     });

//     $('.contact_op').on('click', function () {
//         $('.contact').removeClass('hidden').fadeIn(150);
//         $('.contact').siblings().fadeOut(150).addClass('hidden');
//     });


// });

$(function () {
    $('.toggle').click(function () {

        $('.navigation').slideToggle()

    });

    $(window).resize(function () {

        $('.navigation').slideDown();

    })
});

var $document = $(document),
    $element = $('header'),
    className = 'hasScrolled';

function opacity() {
    if ($document.scrollTop() >= 30) {
        // user scrolled 50 pixels or more;
        // do stuff
        $element.css('background', 'rgba(250,250,250,.5)');
        //        $('._header').css('position', 'fixed');

    } else {
        $element.css('background', 'rgba(250,250,250,1)');
        //        $('._header').css('position', 'relative');
    }
}
$document.ready(function () {
    opacity()
});
$document.on('scroll', function () {
    opacity()
});
