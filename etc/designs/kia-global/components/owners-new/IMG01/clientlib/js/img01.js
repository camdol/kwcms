'use strict';

//#Component : IMG01
let cmpntIMG01Swiper;
let swiperImg01Options;
(function () {
  swiperImg01Options = {
      loop:false,
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      slidesOffsetAfter: 120,
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
          const targtX = window.getComputedStyle(this.wrapperEl).getPropertyValue("transform").match(/(-?[0-9\.]+)/g)[4];
          this.wrapperEl.dataset.value = targtX;
        },
        slideChange: function () {
          if(window.innerWidth > 1024) {
            console.log('slide length', this.slides.snapGrid);
            console.log('this.activeIndex', this.activeIndex);
            if(this.activeIndex === 3) {
             
              this.slides[lastSlideIdx].parentElement.style.transform = `translate3d(-1760px, 0px, 0px)`;  
            }
          }
        },
        resize: function() {
          if(window.innerWidth > 1024) {
            this.update();
            this.slideTo(0);
            setTimeout(() => {
              const targtX = window.getComputedStyle(this.wrapperEl).getPropertyValue("transform").match(/(-?[0-9\.]+)/g)[4];
              this.wrapperEl.dataset.value = targtX;
            }, 500);
          }
        }
      },
    };
})();

function initIMG01Swiper() {
  const groupNum = window.innerWidth >= 768 ? 2 : 1;
  $(".cmpnt-img01__swiper .cmpnt-img01__item").chunk(groupNum).wrap('<div class="swiper-slide"></div>'); 
  cmpntIMG01Swiper = new Swiper(".cmpnt-img01__swiper", swiperImg01Options);
}
