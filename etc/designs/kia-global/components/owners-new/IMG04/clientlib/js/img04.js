'use strict';

//#Component : IMG04
let cmpntIMG04Swiper;
let swiperImg04Options;
(function () {
    swiperImg04Options = {
      loop:true,
      slidesPerView: 1,
      spaceBetween: 24,
      initialSlide:0,
      draggable: true,
      observer : true,
      observeParents : true,
      pagination: {
          el: ".cmpnt-img04__swiper .swiper-pagination",
          clickable: true,
      },
      navigation: {
        nextEl: '.cmpnt-img04__swiper .swiper-button-next',
        prevEl: '.cmpnt-img04__swiper .swiper-button-prev',
      },
      breakpoints: {
        1025: {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 72,
        },
        767: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 28,
        },
      },
      on: {
        init: function() {
          const pagination = this.pagination.el;
          const naviNext = this.navigation.nextEl;
          const naviPrev = this.navigation.prevEl;
          const activeImgH = this.slides[this.activeIndex].querySelector('img').offsetHeight;
          const pagenationGap = window.innerWidth > 1024 ? 35 : 28;
          const naviTop = window.innerWidth > 1024 ? (activeImgH / 2) - 20 + 'px' : (activeImgH / 2) + 'px';
          pagination.style.top = activeImgH + pagenationGap + 'px';
          naviNext.style.top = naviTop;
          naviPrev.style.top = naviTop;
        },
        resize: function() {
          const pagination = this.pagination.el;
          const naviNext = this.navigation.nextEl;
          const naviPrev = this.navigation.prevEl;
          const activeImgH = this.slides[this.activeIndex].querySelector('img').offsetHeight;
          const pagenationGap = window.innerWidth > 1024 ? 35 : 28;
          const naviTop = window.innerWidth > 1024 ? (activeImgH / 2) - 20 + 'px' : (activeImgH / 2) + 'px';
          pagination.style.top = activeImgH + pagenationGap + 'px';
          naviNext.style.top = naviTop;
          naviPrev.style.top = naviTop;
          if(window.innerWidth > 1024) {
            naviNext.style.right = '13vw';
            naviPrev.style.left = '13vw';
          }
        },
        
      },
    };
   
})();

function initIMG04Swiper() {
  cmpntIMG04Swiper = new Swiper(".cmpnt-img04__swiper", swiperImg04Options);
}