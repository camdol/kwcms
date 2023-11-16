
'use strict';

//#Component : IMG02
let cmpntIMG02Swiper;
let swiperImg02Options;

function initIMG02Swiper() {
  const targetSwipers = document.querySelectorAll('.cmpnt-img02__wrap');

  Array.prototype.forEach.call(targetSwipers, function(el, i){
    const naviNext = el.querySelector('.swiper-button-next');
    const naviPrev = el.querySelector('.swiper-button-prev');
    const pagination = el.querySelector('.swiper-pagination');
    
    setIMG02Option(pagination, naviNext, naviPrev);
    setIMG02Swiper(el, i);
  });
}

function setIMG02Swiper(el, i) {
  const targetSlide = el.querySelector('.cmpnt-img02__swiper');
  const cmpntIMG02Swipers = [];

  targetSlide.dataset.idx = i;

  let groupNum;
  if(window.innerWidth >= 768) {
    groupNum = window.innerWidth > 1024 ? 3 : 2;
  } else {
    groupNum = 1;
  }

  $(".cmpnt-img02__swiper[data-idx="+i+"] .cmpnt-img02__item").chunk(groupNum).wrap('<div class="swiper-slide"></div>');      
  cmpntIMG02Swipers[i] = new Swiper(targetSlide, swiperImg02Options);
}

function setIMG02Option(pagination, naviNext, naviPrev) {
  swiperImg02Options = {
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
    watchOverflow : true,
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
      init: function() {
        if(this.slides.length === 1) {
          this.pagination.el.classList.add('is-hide');
          this.navigation.nextEl.classList.add('is-hide');
          this.navigation.prevEl.classList.add('is-hide');
          this.el.classList.add('no-slide');
        } 
      },
      slideChange: function () {
        if(window.innerWidth > 1024) {
          const lastIdx = this.slides.length - 1;
          const xValue = this.slidesGrid[lastIdx];
          if(this.activeIndex === lastIdx) {
            this.slides[lastIdx].parentElement.style.transform = `translate3d(-${xValue}px, 0px, 0px)`;  
          }
        }
      },
      resize: function() {
        if(window.innerWidth > 1024) {
          const lastIdx = this.slides.length - 1;
          const xValue = this.slidesGrid[lastIdx];
          if(this.activeIndex === lastIdx) {
            this.slides[lastIdx].parentElement.style.transform = `translate3d(-${xValue}px, 0px, 0px)`;  
          }
        }
      },
    }
  }
}
