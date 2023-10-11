'use strict';

//#Component : IMG02
let cmpntIMG02Swiper;
let swiperImg02Options;
(function () {
    swiperImg02Options = {
      loop:false,
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      slidesOffsetAfter: 120,
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
        1850: {
          slidesOffsetAfter: 310,
        },
        1025: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            slidesOffsetAfter: 120,
        },
        768: {
          slidesPerView: 1.3,
          spaceBetween: 24,
          slidesOffsetAfter: 172,
        },
        376: {
          slidesOffsetAfter: 130,
        },
      },
      on: {
        init: function() {
          console.log(this.slides.length);
          if(this.slides.length === 1) {
            this.pagination.el.remove();
            this.navigation.nextEl.remove();
            this.navigation.prevEl.remove();
          } 
        },
      }
    };
  
})();

function initIMG02Swiper() {
  let groupNum;
  if(window.innerWidth >= 768) {
    groupNum = window.innerWidth > 1024 ? 3 : 2;
  } else {
    groupNum = 1;
  }
  
  $(".cmpnt-img02__swiper .cmpnt-img02__item").chunk(groupNum).wrap('<div class="swiper-slide"></div>'); 
  cmpntIMG02Swiper = new Swiper(".cmpnt-img02__swiper", swiperImg02Options);
}
