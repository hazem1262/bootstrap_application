/* global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    // Nice Scroll
    $("html").niceScroll();
   $(".carousel").carousel({interval: 6000});
    //show color option div when click on the gear
   $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    // change theme color on click
    var colorLi = $(".color-option ul li");
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500");
    colorLi.click(function () {$("link[href*='theme']").attr("href", $(this).attr("data-value")); });
    
    // cashing the scroll top element
    
    var scrollButtom = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButtom.show();
        } else {
            scrollButtom.hide();
        }
    });
    scrollButtom.on('click',function (){
        $("html,body").animate({scrollTop : 0},600);
    })
    
});

// loading screen

$(window).on('load',function () {
    "use strict";
    $(".loading-overlay .spinner").fadeOut(2000,
function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(2000,
        function () {
           $(this).remove();
        });
    });
});

 