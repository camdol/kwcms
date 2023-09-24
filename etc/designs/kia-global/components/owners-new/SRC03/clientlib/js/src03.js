'use strict';

(function () {
    window.addEventListener("DOMContentLoaded", showToggleSelect);
    window.addEventListener("DOMContentLoaded", setSelect);

    // selectbox show/hide
    function showToggleSelect() {
        const selectEls = document.querySelectorAll('.cmpnt-src-select');
        Array.prototype.forEach.call(selectEls, function(el){
            el.addEventListener('click', () => el.classList.toggle('is-show'));
        });
    }

    // selectbox select value
    function setSelect() {
        const selectEls = document.querySelectorAll('.cmpnt-src-select__item');
        Array.prototype.forEach.call(selectEls, function(el){
            el.addEventListener('click', e =>  {
                const target = e.target
                target.closest('.cmpnt-src-select').setAttribute('value', target.innerText.trim())
                target.closest('ul').querySelector('.is-select') && target.closest('ul').querySelector('.is-select').classList.remove('is-select');
                target.classList.add('is-select');
            });
        });
    }

})();