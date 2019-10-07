// jQuery to collapse the navbar on scroll
var navbarCollapse = function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}
$(window).scroll(navbarCollapse);
$(document).ready(navbarCollapse);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var href = $anchor.attr('href');
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
        if (!$anchor.hasClass('page-scroll-silent')) {
            history.pushState({}, document.title, href);
        }
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
