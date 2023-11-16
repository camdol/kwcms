'use strict';

$(document).ready(function(){
    $("div.cmpnt-app00__guide").each(function() {        
        var $L = $(this);
        var rtl = $L.find('.cmpnt-app00__slide').attr('dir');
        
        $('.cmpnt-app00__slide').slick({ 
            
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: true, 
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2.8,
                        slidesToScroll: 2,
                        infinite: false,
                        arrows: true,
                        rtl: rtl ? true : false,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rtl: rtl ? true : false,
                        dots: true
                    }
                }
                
            ]                
            
        }).resize();        
    });
    
    // slick slider
    $(window).resize(function() {
        $("div.cmpnt-app00__guide").find('.cmpnt-app00__slide').slick('resize');
    });    
});

    




