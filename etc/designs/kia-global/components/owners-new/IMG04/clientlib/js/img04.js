'use strict';

//#Component : IMG04
let cmpntIMG04Swiper;
let swiperImg04Options;
(function () {
    swiperImg04Options = {
      loop:false,
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 24,
      initialSlide:0,
      draggable: true,
      pagination: {
          el: ".cmpnt-img04__swiper .swiper-pagination",
          clickable: true,
      },
      navigation: {
        nextEl: '.cmpnt-img04__swiper .swiper-button-next',
        prevEl: '.cmpnt-img04__swiper .swiper-button-prev',
      },
      observer: true,
      observeParents: true, 
      watchOverflow : true,
      breakpoints: {
        1025: {
            //loop:true,
            slidesPerView: 'auto',
            slidesPerGroup: 3,
            spaceBetween: 40,
            //loopFillGroupWithBlank :true,
            //slideOffsetAfter: 400,
        },
        768: {
          loop:false,
          slidesPerView: 2.5,
          slidesPerGroup: 2,
          spaceBetween: 24,
          //loopFillGroupWithBlank :true,
          //slideOffsetAfter: 400,
      },
      },
    };
  
})();

function initIMG04Swiper() {
  cmpntIMG04Swiper = new Swiper(".cmpnt-img04__swiper", swiperImg04Options);
}
