'use strict';

//#Component : IMG02
let cmpntIMG02Swiper;
let swiperImg02Options;
(function () {
    swiperImg02Options = {
      loop:false,
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 24,
      initialSlide:0,
      draggable: true,
      pagination: {
          el: ".cmpnt-img02__swiper .swiper-pagination",
          clickable: true,
      },
      navigation: {
        nextEl: '.cmpnt-img02__swiper .swiper-button-next',
        prevEl: '.cmpnt-img02__swiper .swiper-button-prev',
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

function initIMG02Swiper() {
  cmpntIMG02Swiper = new Swiper(".cmpnt-img02__swiper", swiperImg02Options);
}
