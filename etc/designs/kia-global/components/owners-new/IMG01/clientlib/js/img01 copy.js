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
      breakpoints: {
        1025: {
          slidesPerView: 'auto',
          spaceBetween: 40,
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
  window.innerWidth > 1024 && $(".cmpnt-img01__swiper .cmpnt-img01__item").chunk(2).wrap('<div class="swiper-slide"></div>'); 
  window.innerWidth < 1024 && $(".cmpnt-img01__swiper .cmpnt-img01__item").chunk(1).wrap('<div class="swiper-slide"></div>'); 
  cmpntIMG01Swiper = new Swiper(".cmpnt-img01__swiper", swiperImg01Options);
}
