console.log("ao2024.js");

































//////////////////////////////////////////////////////// aoslide__componant 2023.12.22  

$(document).ready(function() {

    // popup click
	const adslidePopOpen = $(".aoslide__slide-item").on("click", function(e){ 
        e.stopPropagation();
        e.preventDefault();
        $('.aoslide__popup-wrap').show();
        $('.aoslide__popup').slick('resize');
        var slideNo = $(this).index();
        $('.aoslide__popup').slick('slickGoTo', slideNo);
        $('#header').css('z-index','-1');
    });

    const adslidePopClose = $(".popup-wrap__closer").on("click", function(e){ 
        e.stopPropagation();
        e.preventDefault();
		$('.aoslide__popup-wrap').hide();
        $('.aoslide__popup').slick('resize');
        $('#header').css('z-index','1004');
    });

	$(window).resize(function() {
        $('.aoslide__slide').slick('resize');
        $('.aoslide__popup').slick('resize');
        //tourWidth();
    });


    // slider scroll 
    const slider = $(".aoslide__slide");

    $('.aoslide__popup').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite :false,
        fade: true,
        speed: 1000,
        arrows:  true,
        //asNavFor: '.aoslide__slide',
        easing: 'easeOutExpo',
        appendDots: '.slick--visual__paging',
        customPaging: function (slider, i) {
            return  '<span>'+(i + 1)+'</span><span>/</span><span>' + slider.slideCount + '</span>';
        }
    });

    $('.h_slide_scroll').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite :false,
        speed: 1000,
        arrows:  false,
        focusOnSelect: true,
        easing: 'easeOutExpo',
        responsive: [
            {
                breakpoint: 1024,
                settings: {                        
                    slidesToShow: 2.2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {                        
                    slidesToShow: 1.2,
                    slidesToScroll: 1

                }
            }
        ] 
    });

    //slides using mouse scroll
    slider.on('wheel', (function(e) {
      e.preventDefault();
      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
    }));


	// scroll bar
    var $slider = $('.aoslide__slide');
    var $progressBar = $('.progress_in');
    var $progressBarLabel = $( '.slider__label' );
    
    if($(window).width() <= 768) {        
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = (( (nextSlide) / (slick.slideCount-1) ) * 100);
            // alert(calc);            
            $progressBar
            .css('width', calc+ '%')
            .attr('aria-valuenow', calc );            
            $progressBarLabel.text( calc + '% completed' );
        }); 
    } else {        
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = (( (nextSlide) / (slick.slideCount-2 ) ) * 100);
            // alert(calc);            
            $progressBar
            .css('width', calc+ '%')
            .attr('aria-valuenow', calc );            
            $progressBarLabel.text( calc + '% completed' );
        });        
    }
    //resize
    $(window).resize(function() {
        if($(window).width() <= 768) {
            $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
                var calc = (( (nextSlide) / (slick.slideCount-1) ) * 100);
                $progressBar
                .css('width', calc+ '%')
                .attr('aria-valuenow', calc );                
                $progressBarLabel.text( calc + '% completed' );
            });               
        } else {            
            $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
                var calc = (( (nextSlide) / (slick.slideCount-2 ) ) * 100);    
                $progressBar
                .css('width', calc+ '%')
                .attr('aria-valuenow', calc );                
                $progressBarLabel.text( calc + '% completed' );
            });            
        }
    });




  ///////////////// youtube popup
    $(".popupOpen__button a").click(function(e) {
        e.preventDefault();
        $(".youtube__video_modal_popup").addClass("reveal"),
        $(".youtube__video_modal_popup .video-wrapper").remove(),
        $(".youtube__video_modal_popup").append("<div class='video-wrapper'><div class='pop_inner'><iframe width='560' height='315' src='" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe><div class='dimm'></div></div></div>")
        $('#header').css('z-index','-1');
        $('body').css('overflow','hidden');
        $('.btn_box.top').css('z-index','-1');
    }),
    $(".video_modal_popup-closer").click(function() {
        $(".youtube__video_modal_popup .video-wrapper").remove(),
        $(".youtube__video_modal_popup").removeClass("reveal");
        $('#header').css('z-index','1004');
        $('body').css('overflow','');
        $('.btn_box.top').css('z-index','1004');
    });



});