'use strict';

//#Component : IMG01
let cmpntIMG01Swiper;
let swiperImg01Options;
(function () {
  swiperImg01Options = {
      loop:false,
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 24,
      slidesOffsetAfter: 130,
      initialSlide:0,
      draggable: true,
      pagination: {
          el: ".cmpnt-img01__swiper .swiper-pagination",
          clickable: true,
      },
      navigation: {
        nextEl: '.cmpnt-img01__swiper .swiper-button-next',
        prevEl: '.cmpnt-img01__swiper .swiper-button-prev',
      },
      observer: true,
      observeParents: true, 
      watchOverflow : true,
      breakpoints: {
        1025: {
            slidesPerView: 'auto',
            slidesPerGroup: 2,
            spaceBetween: 40,
            slidesOffsetAfter: 622,
        },
        768: {
          loop:false,
          slidesPerView: 2.5,
          slidesPerGroup: 2,
          spaceBetween: 24,
          slidesOffsetAfter: 150,
      },
      },
    };
  
})();

function initIMG01Swiper() {
  cmpntIMG01Swiper = new Swiper(".cmpnt-img01__swiper", swiperImg01Options);
}
