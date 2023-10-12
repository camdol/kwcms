'use strict';

//#Component : IMG08
let cmpntIMG08Swiper;
let swiperImg08Options;

function initIMG08Swiper() {
  const targetSwipers = document.querySelectorAll('.cmpnt-img08__wrap');

  Array.prototype.forEach.call(targetSwipers, function(el, i){
    const naviNext = el.querySelector('.swiper-button-next');
    const naviPrev = el.querySelector('.swiper-button-prev');
    const pagination = el.querySelector('.swiper-pagination');
    
    setIMG08Option(pagination, naviNext, naviPrev);
    setIMG08Swiper(el, i);
  });
}

function setIMG08Swiper(el, i) {
  const winW = window.innerWidth;
  const slides = el.querySelectorAll('.cmpnt-img08__item');
  const targetSlide = el.querySelector('.cmpnt-img08__swiper');
  const swiperBtn = el.querySelector('.swiper-button');
  const cmpntIMG08Swipers = [];

  targetSlide.dataset.idx = i;

  winW > 767 && slides.length === 2 && targetSlide.classList.add('col2');
  winW > 1024 && slides.length === 3 && targetSlide.classList.add('col3');

  if(winW < 768 || winW > 767 && winW < 1025 && slides.length > 2 || winW > 1024 && slides.length > 3) {
    let groupNum;
    if(winW >= 768) {
      groupNum = window.innerWidth > 1024 ? 3 : 2;
    } else {
      groupNum = 1;
    }

    $(".cmpnt-img08__swiper[data-idx="+i+"] .cmpnt-img08__item").chunk(groupNum).wrap('<div class="swiper-slide"></div>');      
    cmpntIMG08Swipers[i] = new Swiper(targetSlide, swiperImg08Options);
    swiperBtn.style.display = 'block';
  }
}

function setIMG08Option(pagination, naviNext, naviPrev) {
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
          slidesPerView: 'auto',
          spaceBetween: 40,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 28,
      },
    },
  };
}