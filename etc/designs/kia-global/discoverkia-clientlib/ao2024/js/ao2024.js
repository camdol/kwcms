console.log("ao2024.js");

window.addEventListener("DOMContentLoaded", goNext); 
window.addEventListener("DOMContentLoaded", setTypingString); 
window.addEventListener("DOMContentLoaded", setTypingCta); 
window.addEventListener("DOMContentLoaded", setYoutubePop); 

const startTyping = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      if(!entry.target.dataset.motion){
        const targetEl = entry.target.querySelector('.typewrite__text');
        const dataType = entry.target.parentElement.dataset.type;

        if(targetEl) {
          const typingDelay = 120; //typing time
          let idx = 0; 
          let textArray = targetEl.dataset.txt;
          //typing animation
          function type() {
            if (idx < textArray.length) {
              let txt = textArray[idx++];
              targetEl.innerHTML += txt=== "\n" ? "<br>": txt;
              setTimeout(type, typingDelay); 
            } else {
              targetEl.dataset.txt = '';
              //Text type A
              if(dataType === 'A') {
                entry.target.querySelector('.ao-typing__subtitle') && showTypingEl(entry.target, '.ao-typing__subtitle');
                setTimeout(() => {
                  entry.target.querySelector('.ao-typing__btn-arrow').style.display = 'block';
                }, 2000);
                window.addEventListener("scroll", parallaxScroll(entry.target));
              } else if(dataType === 'B' && entry.target.querySelector('.ao-typing__cta')) {  //Middle title & CTA
                entry.target.previousElementSibling.classList.add('is-show')
                showTypingEl(entry.target, '.ao-typing__cta');
              } else if(entry.target.parentElement.classList.contains('ao-gallery__inner')) {
                entry.target.nextElementSibling.classList.add('is-show');
              } else {
                entry.target.previousElementSibling.classList.add('is-show');
              }
            }
          }
          //Text type D
          if(dataType === 'D') {
            showTypingEl(entry.target, '.ao-typing__subtitle');
            setTimeout(type, 2500);
          } else {
            setTimeout(type, 300);
          }
        } else {
          //CTA
          if(entry.target.querySelector('.ao-typing__cta')) {
            entry.target.previousElementSibling.classList.add('is-show');
            showTypingEl(entry.target, '.ao-typing__cta')
          }
        }
      }
      entry.target.setAttribute('data-motion', 'yes');
    } 
  });
});

document.querySelectorAll('.ao-typing__textArea').forEach((wrapper) => startTyping.observe(wrapper));


function showTypingEl(target, className) {
  setTimeout(() => {
    return target.querySelector(className).classList.add('is-show');
  }, 1500);
}
//Typing component : string set
function setTypingString() {
  const txtArrays = document.querySelectorAll('.typewrite__text');
  Array.prototype.forEach.call(txtArrays, function(el){
    let elString = []
    if(window.innerWidth > 1024) {
      elString = el.innerHTML.replaceAll(/<br class="br-mo">/gi, '').replaceAll(/<br>/gi, '\n');
    } else {
      elString = el.innerHTML.replaceAll(/<br class="br-mo">|<br>/gi, '\n');
    }
    el.dataset.txt = elString;
    el.innerText = '';
  });
}

//Typing component : next section pallaxScroll
function goNext() {
  const btns = document.querySelectorAll('.ao-typing__btn-arrow');
  Array.prototype.forEach.call(btns, function(el){
		el.addEventListener('click', (e) => {
      const target =  e.target.parentElement.closest('.ao-typing__component');
      const gap = window.innerWidth > 1024 ? 0 : 60;
      const targetTop = target.getBoundingClientRect().height + target.offsetTop + gap;
      window.scrollTo({let:0, top:targetTop, behavior:'smooth'});
    });
  });
}

//Text type B & CTA 
function setTypingCta() {
  const ctas = document.querySelectorAll('.ao-typing__inner');
  Array.prototype.forEach.call(ctas, function(el){
    el.dataset.type === 'B' && el.querySelector('.ao-typing__cta') !== null && el.classList.add('has-cta');
  });
}

//pallaxScroll motion
function parallaxScroll(el) {
  el.previousElementSibling.classList.add('is-show');
  //el.previousElementSibling.style.position = 'fixed';
  el.classList.add('is-hide');
};

// youtube popup
function setYoutubePop() {
  const playBtns = document.querySelectorAll('.ao-typing__cta a');
  Array.prototype.forEach.call(playBtns, function(el){
		el.addEventListener('click', (e) => {
      e.preventDefault();
      const url = event.target.parentElement.dataset.video;
      openYoutubePopup(url);
    });
  });

  function setPopup(url) {
    const targetDiv = document.querySelector('.new_ex_layout');
    const popLayer = document.createElement('div');
    popLayer.setAttribute('class', 'youtube__video_modal_popup');
    const existingnode = targetDiv.lastChild;
    const youtubeHtml = `
      <button class="video_modal_popup-closer" onClick="closeYoutubePopup();"></button>
      <div class='video-wrapper'>closePopup
        <div class='pop_inner'>
          <iframe width='560' height='315' src='${url}?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe>
          <div class='dimm'></div>
        </div>
      </div>
    `;
    popLayer.innerHTML = youtubeHtml;
    targetDiv.insertBefore(popLayer, existingnode);
  }

  function openYoutubePopup(url) {
    setPopup(url);
    document.querySelector('.youtube__video_modal_popup').classList.add('reveal');
    document.querySelector('#header').style.zIndex = '-1';
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('.btn_box.top').style.zIndex = '-1';
  }
}

function closeYoutubePopup() {
  const target = event.target;
  target.closest('.youtube__video_modal_popup').remove();
  document.querySelector('#header').style.zIndex = '1004';
  document.querySelector('body').style.overflow = '';
  document.querySelector('.btn_box.top').style.zIndex = '1004';
}

//AO2024-text+image motion
const startTextImage = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      if(!entry.target.dataset.motion){
        entry.target.querySelector('.ao-textImage__title').classList.add('is-show');
        entry.target.querySelector('.ao-textImage__text').classList.add('is-show');  
        setTimeout(() => {
          entry.target.querySelector('.ao-textImage__image').classList.add('is-show');  
        }, 2000);
      }
      entry.target.setAttribute('data-motion', 'yes');
    } 
  });
});

startTextImage.observe(document.querySelector('.ao-textImage__component'));

//AO2024-Vehicle motion
const startVehiclee = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      if(!entry.target.dataset.motion){
        entry.target.querySelector('.ao-vehicle__title').classList.add('is-show');
        showTypingEl(entry.target, '.ao-vehicle__wrap');
        setTimeout(() => {
          entry.target.querySelector('.ao-vehicle__wrap').classList.add('is-show');  
        }, 2000);
      }
      entry.target.setAttribute('data-motion', 'yes');
    } 
  });
});

startVehiclee.observe(document.querySelector('.ao-vehicle__component'));



window.addEventListener("scroll", function (el) {
  const distance = window.scrollY;
  //document.querySelector(".ao-typing__media").style.transform = `translateY(${distance * 1}px)`;
  //el.querySelector(".ao-typing__media").classList.add('is-show');
  //document.querySelector(".container").style.transform = `translateY(${distance * 0.3}px)`;
  setTimeout(() => {
    //document.querySelector("section h3").classList.add("animate-me");
  }, 400);
});

// function parallaxScroll(el) {
//   const elementHeight = paraSection.offsetHeight;
//   const increment = -1;
//   let centerOffest = window.scrollY - paraSection.offsetTop;
//   let yOffsetRatio = centerOffest / elementHeight;
//   let yOffset = 50 + yOffsetRatio * 100 * increment;
//   console.log(yOffset);
//   paraSection.style.backgroundPositionY = `${yOffset}%`;
// };









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








});