'use strict';

//#Component : SRC02
(function () {
    window.addEventListener("DOMContentLoaded", showToggleSelect);

    // selectbox show/hide
    function showToggleSelect() {
        const selectEls = document.querySelectorAll('.cmpnt-src-select');
        Array.prototype.forEach.call(selectEls, function(el){
            el.addEventListener('click', (e) => {
                const target = e.target;
                if(target.classList.contains('cmpnt-src-select')) {
                    if (target.classList.contains('is-show')) {
                        target.classList.remove('is-show');
                    }else if (target.parentElement.querySelector('.is-show')) {
                        target.parentElement.querySelector('.is-show').classList.remove('is-show');
                        target.classList.add('is-show');
                    }else {
                        target.classList.add('is-show');
                    }
                }
                    
                if(target.classList.contains('cmpnt-src-select__item')) {
                    target.closest('.cmpnt-src-select').classList.remove('is-show');
                }
            });
        });
    }

})();