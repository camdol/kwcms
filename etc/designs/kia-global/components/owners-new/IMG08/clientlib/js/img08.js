'use strict';

//#Component : IMG08
let cmpntIMG08Swiper;
let swiperImg08Options;
(function () {
  
})();

function initIMG08Swiper() {
  const targetSwipers = document.querySelectorAll('.cmpnt-img08__wrap');
  const winW = window.innerWidth;
  const cmpntIMG08Swipers = [];

  Array.prototype.forEach.call(targetSwipers, function(el, i){
    const slides = el.querySelectorAll('.swiper-slide');
    const swiperBtn = el.querySelector('.swiper-button');
    const targetSlide = el.querySelector('.cmpnt-img08__swiper');
    const naviNext = el.querySelector('.swiper-button-next');
    const naviPrev = el.querySelector('.swiper-button-prev');
    const pagination = el.querySelector('.swiper-pagination');

    winW > 1024 && slides.length === 3 && targetSlide.classList.add('col3');
    winW > 767 && slides.length === 2 && targetSlide.classList.add('col2');

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
      observer: true,
      observeParents: true, 
      breakpoints: {
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 28,
        },
      },
    };
    
    if(winW > 1024 && slides.length > 3 || winW > 767 && winW < 1025 && slides.length > 2 || winW < 768 ) {
      cmpntIMG08Swipers[i] = new Swiper(targetSlide, swiperImg08Options);
      swiperBtn.style.display = 'block';
    }
  });
}
