'use strict';

//#Component : IMG04
let cmpntIMG04Swiper;
let swiperImg04Options;

function initIMG04Swiper() {
  const targetSwipers = document.querySelectorAll('.cmpnt-img04__wrap');

  Array.prototype.forEach.call(targetSwipers, function(el, i){
    const naviNext = el.querySelector('.swiper-button-next');
    const naviPrev = el.querySelector('.swiper-button-prev');
    const pagination = el.querySelector('.swiper-pagination');
    
    setIMG04Option(pagination, naviNext, naviPrev);
    setIMG04Swiper(el, i);
  });
}

function setIMG04Swiper(el, i) {
  const targetSlide = el.querySelector('.cmpnt-img04__swiper');
  const cmpntIMG04Swipers = [];

  cmpntIMG04Swipers[i] = new Swiper(targetSlide, swiperImg04Options);
}

function setIMG04Option(pagination, naviNext, naviPrev) {
  swiperImg04Options = {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 24,
    initialSlide:0,
    draggable: true,
    observer : true,
    observeParents : true,
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
        const pagenationGap = window.innerWidth > 1024 ? 24 : 17;
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
        const pagenationGap = window.innerWidth > 1024 ? 24 : 17;
        const naviTop = window.innerWidth > 1024 ? (activeImgH / 2) - 20 + 'px' : (activeImgH / 2) + 'px';
        pagination.style.top = activeImgH + pagenationGap + 'px';
        naviNext.style.top = naviTop;
        naviPrev.style.top = naviTop;
        if(window.innerWidth > 1024) {
          naviNext.style.right = '13vw';
          naviPrev.style.left = '13vw';
        }
      },
    }
  }
}
