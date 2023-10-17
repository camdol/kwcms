'use strict';

//#Component : SRC06
(function () {
    window.addEventListener("DOMContentLoaded", setSelect);

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