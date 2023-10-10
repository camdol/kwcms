'use strict';

//#Component : IMG08
let cmpntIMG08Swiper;
let swiperImg08Options;
(function () {
    swiperImg08Options = {
      loop:false,
      slidesPerView: 1,
      spaceBetween: 24,
      initialSlide:0,
      draggable: true,
      pagination: {
          el: ".cmpnt-img08__swiper .swiper-pagination",
          clickable: true,
      },
      navigation: {
        nextEl: '.cmpnt-img08__wrap .swiper-button-next',
        prevEl: '.cmpnt-img08__wrap .swiper-button-prev',
      },
      observer: true,
      observeParents: true, 
      watchOverflow : true,
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
  
})();

function initIMG08Swiper() {
    const winW = window.innerWidth;
    const slides = document.querySelectorAll('.cmpnt-img08__swiper .swiper-slide');
    const swiperBtn = document.querySelector('.cmpnt-img08__wrap .swiper-button');
    const targetSlide = document.querySelector('.cmpnt-img08__swiper');

    winW > 1024 && slides.length === 3 && targetSlide.classList.add('col3');
    winW > 767 && slides.length === 2 && targetSlide.classList.add('col2');
    
    if(winW > 1024 && slides.length > 3 || winW > 767 && winW < 1025 && slides.length > 2 || winW < 768 ) {
      cmpntIMG08Swiper = new Swiper(".cmpnt-img08__swiper", swiperImg08Options);
      swiperBtn.style.display = 'block';
    }
}
