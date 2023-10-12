'use strict';

//#Component : IMG08
let cmpntIMG08Swiper;
let swiperImg08Options;
(function () {
  
})();

function initIMG08Swiper() {
  const targetSwipers = document.querySelectorAll('.cmpnt-img08');
  const winW = window.innerWidth;
  const cmpntIMG08Swipers = [];

  Array.prototype.forEach.call(targetSwipers, function(el, i){
    const slides = el.querySelectorAll('.cmpnt-img08__item');
    const swiperBtn = el.querySelector('.swiper-button');
    const targetSwiper = el.querySelector('.cmpnt-img08__swiper');
    const naviNext = el.querySelector('.swiper-button-next');
    const naviPrev = el.querySelector('.swiper-button-prev');
    const pagination = el.querySelector('.swiper-pagination');

    swiperImg08Options = {
      loop:false,
      slidesPerView: 1,
      spaceBetween: 24,
      initialSlide:0,
      draggable: true,
      pagination: {
          el: pagination,
          clickable: true,
      },
      navigation: {
        nextEl: naviNext,
        prevEl: naviPrev,
      },
      breakpoints: {
        1025: {
          slidesPerView: 'auto',
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 28,
        },
      },
    };

    if(winW > 1024) {  //PC
      if(slides.length == 3) {
        targetSwiper.classList.add('col3');
      }
      if(slides.length == 2) {
        targetSwiper.classList.add('col2');
      }
      if(slides.length > 3) {
      
        var targetSlides = el.querySelectorAll(".cmpnt-img08__item");
        console.log(targetSlides);
        // for (var i = 0; i < slides.length; i += 3) {
        //   targetSlides.slice(i, i + 3).wrapAll('<div class="swiper-slide"></div>');
        // }
        cmpntIMG08Swipers[i] = new Swiper(targetSlide, swiperImg08Options);
        swiperBtn.style.display = 'block';
      }
    } else if(winW > 767 && winW < 1025) {
      if(slides.length == 2) {
        targetSwiper.classList.add('col2');
      }
      if(slides.length > 2) {
        //slides.chunk(2).wrap('<div class="swiper-slide"></div>');      
        cmpntIMG08Swipers[i] = new Swiper(targetSlide, swiperImg08Options);
        swiperBtn.style.display = 'block';
      }
    } else if(winW < 768) {
      //slides.chunk(1).wrap('<div class="swiper-slide"></div>');      
      cmpntIMG08Swipers[i] = new Swiper(targetSlide, swiperImg08Options);
      swiperBtn.style.display = 'block';
    }
   
      
  });
}
