'use strict';

//#Component : APP00
let cmpntApp00Swiper;
let swiperApp00Options;
(function () {
  swiperApp00Options = {
      loop:false,
      slidesPerView: 1,
      centeredSlides: true,
      initialSlide:0,
      draggable: true,
      pagination: {
          el: ".cmpnt-app00__swiper .swiper-pagination",
          clickable: true,
      },
      navigation: {
        nextEl: '.cmpnt-app00__swiper .swiper-button-next',
        prevEl: '.cmpnt-app00__swiper .swiper-button-prev',
      },
      observer: true,
      observeParents: true, 
      watchOverflow : true,
      breakpoints: {
        1025: {
            slidesPerView: 4,
            spaceBetween: 40,
            centeredSlides: false,
        },
        768: {
          loop:false,
          slidesPerView: 2.5,
          spaceBetween: 28,
          centeredSlides: false,
          slidesOffsetAfter: 150,
      },
      },
    };
  
})();



function initAPP00Swiper() {
  cmpntApp00Swiper = new Swiper(".cmpnt-app00__swiper", swiperApp00Options);
}
