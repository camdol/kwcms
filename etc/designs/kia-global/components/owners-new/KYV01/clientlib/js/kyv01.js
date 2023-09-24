'use strict';

(function () {
    window.addEventListener("DOMContentLoaded", kyvBoxHInit, true);

    // kv next button 높이 스크롤
    function kyvBoxHInit() {
        document.querySelector('.cmpnt-kyv__button').addEventListener('click', (e) =>  {
            e.preventDefault();
            const winH = window.innerHeight;
            const headH = document.querySelector('#header').offsetHeight;
            const atotHeight = winH - headH;
            
            if(window.innerWidth <= 1024) {
                $('html, body').animate({scrollTop: winH}, 400);     
            } else {            
                $('html, body').animate({scrollTop: atotHeight}, 400);
            }           
        });
    }
})();