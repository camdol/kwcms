'use strict';

(function () {
    
    const options = {
        loop:false,
        spaceBetween: 12,
        slidesPerGroup: 1, 
        slidesPerView: 1,
        grid: {
            rows: 4,
            fill: 'column',
        }, 
        initialSlide:0,
        draggable: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true, 
        breakpoints: {
            768: {
                spaceBetween: 28,
                slidesPerGroup :2, 
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row',
                },
            },
            1025: {
                spaceBetween: 40,
                slidesPerGroup : 4, 
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row',
                },
            },
        },
        on: {
            click: function() {
              if(this.el.querySelector('.swiper-slide.on')) {
                this.el.querySelector('.swiper-slide.on').classList.remove('on');
              }
              this.clickedSlide.classList.add('on');
            },
        }
    };

    window.addEventListener("DOMContentLoaded", () => {
        const cmpntSrc01Swiper = new Swiper(".cmpnt-src01__swiper", options);
    });

    if(window.innerWidth < 768 ) {
        console.log('Mobile!');
        
    }

})();