'use strict';

//#Component : LST04 
let cmpntLst04Swiper;
(function () {
    window.addEventListener("DOMContentLoaded", categoryToggle);

    function categoryToggle() {
        const btn = document.querySelector('.cmpnt-lst04__category');
        btn.addEventListener('click', (e) => {
            const target = e.target;
         
            if(target.classList.contains('is-selected')) {
                return;
            } else {
                if(target.parentElement.querySelector('.is-selected')) {

                    target.parentElement.querySelector('.is-selected').classList.remove('is-selected');
                }
                target.classList.add('is-selected');
                initCmpntLst04Swiper();
            }
        });
    }

    const paginationCurr = document.querySelector('.cmpnt-lst04__slide-pagination--current');
    const paginationTotal = document.querySelector('.cmpnt-lst04__slide-pagination--total');
    const options = {
        loop:false,
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide:0,
        draggable: true,
        navigation: {
            nextEl: '.cmpnt-lst04__list .swiper-button-next',
            prevEl: '.cmpnt-lst04__list .swiper-button-prev',
        },
        on: {
            init: function () {
                const totalSlides = this.slides.length;
                paginationCurr.innerText = this.realIndex + 1;
                paginationTotal.innerText = totalSlides;
                this.el.dataset.index = this.realIndex;
            },
            slideChange: function () {
                const totalSlides = this.slides.length - 1;
                const activeIdx = this.realIndex;
                const paginationPrev = document.querySelector('.cmpnt-lst04__slide-pagination--prev');
                const paginationNext = document.querySelector('.cmpnt-lst04__slide-pagination--next');
                paginationCurr.innerText = activeIdx + 1;
                this.el.dataset.index = activeIdx;

                if(activeIdx === totalSlides) {
                    paginationNext.classList.add('is-disabled');
                } else if(activeIdx === (totalSlides - 1)) {
                    paginationNext.classList.remove('is-disabled');
                } else if (activeIdx === 0) {
                    paginationPrev.classList.add('is-disabled');
                } else if (activeIdx === 1) {
                    paginationPrev.classList.remove('is-disabled');
                }
            }
        },
    };

    window.addEventListener("DOMContentLoaded", () => {
        if(window.innerWidth < 768 ) {
            cmpntLst04Swiper = new Swiper(".cmpnt-lst04__list", options);
        }
    });
    
    const pagination = document.querySelector('.cmpnt-lst04__slide-pagination');
    
    pagination.addEventListener('click', function(e) {
        const target = e.target;
        const list = document.querySelector('.cmpnt-lst04__list');
        const totalNumber = paginationTotal.innerText - 1;
        let idx = list.getAttribute('data-index');
        if(idx < totalNumber && target.classList.contains('cmpnt-lst04__slide-pagination--next')) {
            idx = parseInt(idx) + 1;
        } else if(idx > -1 && target.classList.contains('cmpnt-lst04__slide-pagination--prev')) {
            idx = parseInt(idx) - 1;
        } 
        list.dataset.index = idx;
        cmpntLst04Swiper.slideTo(idx);
    });

})();

function initCmpntLst04Swiper() {
    const target = document.querySelector('.cmpnt-lst04__list');
    cmpntLst04Swiper.update();
    cmpntLst04Swiper.slideTo(0);
    target.dataset.index = 0;
    target.querySelector('.cmpnt-lst04__slide-pagination--next').classList.contains('is-disabled') && target.querySelector('.cmpnt-lst04__slide-pagination--next').classList.remove('is-disabled');
    
}