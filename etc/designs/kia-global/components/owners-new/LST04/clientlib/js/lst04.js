'use strict';

//#Component : 
let cmpntLst04Swiper;
(function () {
    window.addEventListener("DOMContentLoaded", categoryToggle);

    function categoryToggle() {
        const btn = document.querySelector('.cmpnt-lst04__category');
        btn.addEventListener('click', (e) => {
            const target = e.target;
            console.log(target);
            if(target.classList.contains('is-selected')) {
                return;
            } else {
                if(target.parentElement.querySelector('.is-selected')) {
                    target.parentElement.querySelector('.is-selected').classList.remove('is-selected');
                }
                target.classList.add('is-selected');
            }
        });
    }

    let paginationCurr = document.querySelector('.slide-pagination--current');
    const paginationTotal = document.querySelector('.slide-pagination--total');
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
                paginationCurr.innerText = Number(this.realIndex + 1);
                paginationTotal.innerText = totalSlides;
            },
            slideChange: function () {
                const totalSlides = this.slides.length;
                paginationCurr.innerText = Number(this.realIndex + 1);
                if(this.realIndex === (totalSlides - 1)) {
                    document.querySelector('.cmpnt-pagination--next').classList.add('is-disabled');
                }
                if(this.realIndex < (totalSlides - 1)) {
                    document.querySelector('.cmpnt-pagination--next').classList.remove('is-disabled');
                }
                if(this.realIndex === 0) {
                    document.querySelector('.cmpnt-pagination--prev').classList.add('is-disabled');
                }
                if(this.realIndex === 1) {
                    document.querySelector('.cmpnt-pagination--prev').classList.remove('is-disabled');
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
    let idx = paginationCurr.innerText - 1;
    pagination.addEventListener('click', function(e) {
        const target = e.target;
        const totalNumber = paginationTotal.innerText - 1;
        idx = paginationCurr.innerText - 1;
        console.log(target);
        if(idx < totalNumber && target.classList.contains('cmpnt-pagination--next')) {
            idx = parseInt(idx) + 1;
            if(idx === totalNumber) {
                target.classList.add('is-disabled');
            }
            if(idx === 1) {
                document.querySelector('.cmpnt-pagination--prev').classList.remove('is-disabled');
            }
        } else if(idx > -1 && target.classList.contains('cmpnt-pagination--prev')) {
            idx = idx - 1;
            if(idx === (totalNumber - 1)) {
                document.querySelector('.cmpnt-pagination--next').classList.remove('is-disabled');
            }
            if(idx === 1) {
                target.classList.remove('is-disabled');
            }
        } 
        cmpntLst04Swiper.slideTo(idx);
    });

    
})();