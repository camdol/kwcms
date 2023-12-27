'use strict';

//#Component : SRC01
let cmpntSrcSwiper;
let swiperOptions;
(function () {
  window.addEventListener("DOMContentLoaded", setNaviation);

  function setNaviation() {
    const srcSwiperBtn = `
      <div class="swiper-button">
        <div class="swiper-button-next"><span>Next</span></div>
        <div class="swiper-button-prev"><span>Prev</span></div>
      </div>
    `;
    const item = document.createElement('div');
    item.setAttribute('class', 'swiper-button__wrap');
    item.innerHTML = srcSwiperBtn;
    const target = document.querySelector('.cmpnt-src01__wrap');
    target.insertBefore(item, null);
  }

  swiperOptions = {
      loop:false,
      slidesPerView: 1,
      initialSlide:0,
      draggable: true,
      spaceBetween: 28,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button__wrap .swiper-button-next',
        prevEl: '.swiper-button__wrap .swiper-button-prev',
      },
      observer: true,
      observeParents: true, 
      breakpoints: {
        1025: {
          spaceBetween: 40,
        }
      }
      /* 기능 삭제 
      on: {
          click: function(e) {
            if(this.el.querySelector('.swiper-slide .on')) {
              this.el.querySelector('.swiper-slide .on').classList.remove('on');
            }
            event.target.closest('.cmpnt-src01__item').classList.add('on');
          },
      }
      */
  };
  
  $.fn.chunk = function(size) {
    var arr = [];
    for (var i = 0; i < this.length; i += size) {
      arr.push(this.slice(i, i + size));
    }
    return this.pushStack(arr, "chunk", size);
  } 

})();

function initSrcSwiper() {
  $(".cmpnt-src01__swiper .cmpnt-src01__item").chunk(4).wrap('<div class="swiper-slide"></div>'); 
  cmpntSrcSwiper = new Swiper(".cmpnt-src01__swiper", swiperOptions);
}
