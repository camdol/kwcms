'use strict';

(function () {
    
    const options = {
        loop:false,
        slidesPerView: 1,
        initialSlide:0,
        draggable: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true, 
        on: {
            click: function(e) {
              if(this.el.querySelector('.swiper-slide .on')) {
                this.el.querySelector('.swiper-slide .on').classList.remove('on');
              }
              event.target.closest('.cmpnt-src01__item').classList.add('on');
            },
        }
    };

    $.fn.chunk = function(size) {
        var arr = [];
        for (var i = 0; i < this.length; i += size) {
          arr.push(this.slice(i, i + size));
        }
        return this.pushStack(arr, "chunk", size);
    } 

    window.addEventListener("DOMContentLoaded", () => {
        $(".cmpnt-src01__swiper .cmpnt-src01__item").chunk(4).wrap('<div class="swiper-slide"></div>'); 
        const cmpntSrc01Swiper = new Swiper(".cmpnt-src01__swiper", options);
    });

})();