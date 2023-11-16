'use strict';

//#Component : IMG01
let cmpntIMG01Swiper;
let swiperImg01Options;

function initIMG01Swiper() {
  const targetSwipers = document.querySelectorAll('.cmpnt-img01__wrap');

  Array.prototype.forEach.call(targetSwipers, function(el, i){
    const naviNext = el.querySelector('.swiper-button-next');
    const naviPrev = el.querySelector('.swiper-button-prev');
    const pagination = el.querySelector('.swiper-pagination');
    
    setIMG01Option(pagination, naviNext, naviPrev);
    setIMG01Swiper(el, i);
  });
}

function setIMG01Swiper(el, i) {
  const targetSlide = el.querySelector('.cmpnt-img01__swiper');
  const cmpntIMG01Swipers = [];

  targetSlide.dataset.idx = i;

  const groupNum = window.innerWidth >= 768 ? 2 : 1;

  $(".cmpnt-img01__swiper[data-idx="+i+"] .cmpnt-img01__item").chunk(groupNum).wrap('<div class="swiper-slide"></div>');      
  cmpntIMG01Swipers[i] = new Swiper(targetSlide, swiperImg01Options);
}

function setIMG01Option(pagination, naviNext, naviPrev) {
  swiperImg01Options = {
    loop:false,
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    spaceBetween: 20,
    slidesOffsetAfter: 120,
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
        slidesPerView: 1.3,
        spaceBetween: 24,
        slidesOffsetAfter: 172,
      },
      376: {
        slidesOffsetAfter: 130,
      },
    },
    on: {
      slideChange: function () {
        if(window.innerWidth > 1024) {
          const lastIdx = this.slides.length - 1;
          const transX = this.slidesGrid[lastIdx];
          if(this.activeIndex === lastIdx) {
            this.slides[lastIdx].parentElement.style.transform = `translate3d(-${transX}px, 0px, 0px)`;  
          }
        }
      },
      resize: function() {
        if(window.innerWidth > 1024) {
          const lastIdx = this.slides.length - 1;
          const transX = this.slidesGrid[lastIdx];
          if(this.activeIndex === lastIdx) {
            this.slides[lastIdx].parentElement.style.transform = `translate3d(-${transX}px, 0px, 0px)`;  
          }
        }
      }
    },
  }
}
