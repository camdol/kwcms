'use strict';

//#Component : SRC03
(function () {
    window.addEventListener("DOMContentLoaded", showToggleSelect);
    window.addEventListener("DOMContentLoaded", setSelect);

    // selectbox show/hide
    function showToggleSelect() {
        const selectEls = document.querySelectorAll('.cmpnt-src-select');
        Array.prototype.forEach.call(selectEls, function(el){
            el.addEventListener('click', (e) => {
                const target = e.target;
                console.log(target);
                if (target.classList.contains('is-show')) {
                    target.classList.remove('is-show');
                }else if (target.parentElement.querySelector('.is-show')) {
                    target.parentElement.querySelector('.is-show').classList.remove('is-show');
                    target.classList.add('is-show');
                }else {
                    target.classList.add('is-show');
                }
            });
        });
    }

    // selectbox select value
    function setSelect() {
        const selectEls = document.querySelectorAll('.cmpnt-src-select__item');
        Array.prototype.forEach.call(selectEls, function(el){
            el.addEventListener('click', e =>  {
                const target = e.target;
                target.closest('.cmpnt-src-select').setAttribute('value', target.innerText.trim());
                target.closest('ul').querySelector('.is-select') && target.closest('ul').querySelector('.is-select').classList.remove('is-select');
                target.classList.add('is-select');
                target.closest('.cmpnt-src-select').classList.remove('is-show');
            });
        });
    }

})();