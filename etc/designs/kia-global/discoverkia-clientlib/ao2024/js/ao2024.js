console.log("ao2024.js");

let textArray;

const startTyping = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      if(!entry.target.dataset.ready){
        const typingDelay = 150; 
        let idx = 0; 
        const targetEl = entry.target.querySelector('.typewrite__text');
        function type() {
          if (idx < textArray.length) {
            let txt = textArray[idx++];
            targetEl.innerHTML += txt=== "\n" ? "<br/>": txt;
            setTimeout(type, typingDelay); 
          } else {
            targetEl.classList.remove("is-active");
            if(entry.target.parentElement.dataset.type === 'A') {
              entry.target.querySelector('.ao-typing__subtitle') && entry.target.dataset.type !== 'D' && entry.target.querySelector('.ao-typing__subtitle').classList.add('is-show');
              setTimeout(() => {
                entry.target.querySelector('.ao-typing__btn-arrow').classList.add('is-show');
              }, 1000);
              
            } else {
              setTimeout(() => {
                entry.target.previousElementSibling.classList.add('is-show');
              }, 500);
            }
          }
        }
        
        window.addEventListener("scroll", function () {
          if(entry.target.parentElement.dataset.type === 'A') {
            const intro = entry.target.parentElement.parentElement.querySelector('.ao-typing__inner[data-type="A"]');
            intro.querySelector('.ao-typing__media').classList.add('is-show');
            // intro.querySelector('.ao-typing__media').style.position = 'fixed';
            intro.querySelector('.ao-typing__textArea').classList.add('is-hide');
          }
        });

        if(entry.target.parentElement.dataset.type === 'D') {
          entry.target.querySelector('.ao-typing__midtitle') && entry.target.querySelector('.ao-typing__midtitle').classList.add('is-hide');
          entry.target.querySelector('.ao-typing__subtitle') && entry.target.querySelector('.ao-typing__subtitle').classList.add('is-show');
          setTimeout(() => {
            entry.target.querySelector('.ao-typing__midtitle').classList.contains('is-hide') && entry.target.querySelector('.ao-typing__midtitle').classList.remove('is-hide');
            setType(targetEl);
            setTimeout(type, 300);
          }, 2000);
        } else if(entry.target.parentElement.dataset.type === 'B' && entry.target.querySelector('.ao-typing__cta') !== null) {
          entry.target.parentElement.classList.add('has-cta');
        } else {
          setType(targetEl);
          setTimeout(type, 300);
        }
      }
      entry.target.setAttribute('data-ready', 'yes');

      
      //window.addEventListener("scroll", parallaxScroll(entry.target));
      console.log("ON");
    } else {
      //window.removeEventListener("scroll", parallaxScroll(entry.target));
      
    }
  });                            
});

document.querySelectorAll('.ao-typing__textArea').forEach((wrapper) => startTyping.observe(wrapper));



function setType(el) {
  textArray = el.innerText;  
  console.log(textArray);
  el.innerHTML = '';
  el.classList.add("is-active");
}

const changeLineBreak = (letter) => {
  return letter.map(text => text === "\n" ? "<br>" : text);
}

const paraSection = document.querySelector('.para-section');

function parallaxScroll(el) {
  // const elementHeight = paraSection.offsetHeight;
  // const increment = -1;

  // let centerOffest = window.scrollY - paraSection.offsetTop;
  // let yOffsetRatio = centerOffest / elementHeight;

  // let yOffset = 50 + yOffsetRatio * 100 * increment;
  // console.log(yOffset);

  // paraSection.style.backgroundPositionY = `${yOffset}%`;
  el.parentElement.querySelector('.ao-typing__media').classList.add('is-show');
};

window.addEventListener("scroll", function (el) {
  const distance = window.scrollY;
  //document.querySelector(".ao-typing__media").style.transform = `translateY(${distance * 1}px)`;
  //el.querySelector(".ao-typing__media").classList.add('is-show');
  //document.querySelector(".container").style.transform = `translateY(${distance * 0.3}px)`;
  setTimeout(() => {
    //document.querySelector("section h3").classList.add("animate-me");
  }, 400);
});











//////////////////////////////////////////////////////// ao-gallery__componant 2023.12.22  

$(document).ready(function() {

    // popup click
	const adslidePopOpen = $(".ao-gallery__slide-item").on("click", function(e){ 
        e.stopPropagation();
        e.preventDefault();
        $('.ao-gallery__popup-wrap').show();
        $('.ao-gallery__popup').slick('resize');
        var slideNo = $(this).index();
        $('.ao-gallery__popup').slick('slickGoTo', slideNo);
        $('#header').css('z-index','-1');
    });

    const adslidePopClose = $(".popup-wrap__closer").on("click", function(e){ 
        e.stopPropagation();
        e.preventDefault();
		$('.ao-gallery__popup-wrap').hide();
        $('.ao-gallery__popup').slick('resize');
        $('#header').css('z-index','1004');
    });

	$(window).resize(function() {
        $('.ao-gallery__slide').slick('resize');
        $('.ao-gallery__popup').slick('resize');
        //tourWidth();
    });


    // slider scroll 
    const slider = $(".ao-gallery__slide");

    $('.ao-gallery__popup').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite :false,
        fade: true,
        speed: 1000,
        arrows:  true,
        //asNavFor: '.ao-gallery__slide',
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
    var $slider = $('.ao-gallery__slide');
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
    $(".ao-typing__cta a").click(function(e) {
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