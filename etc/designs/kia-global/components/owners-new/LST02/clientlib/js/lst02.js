'use strict';

//#Component : LST02
(function () {
    window.addEventListener("DOMContentLoaded", categoryToggle);
    window.addEventListener("DOMContentLoaded", lst02Popup);

    function categoryToggle() {
        const btn = document.querySelector('.cmpnt-lst02__category');
        btn.addEventListener('click', (e) => {
            const target = e.target;
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

    //Vehicle Select popup
    function lst02Popup() {
        const popup = document.querySelector('.cmpnt-lst02-search');
        const btnOpen = document.querySelector('.cmpnt-lst02-search__title');
        const container = document.querySelector('#container');
       
        btnOpen.addEventListener('click', () => {
            if(popup.classList.contains('is-open')) {
                popup.classList.remove('is-open');
                container.classList.remove('has-popup');
                disableScrollLock();
            } else {
                popup.classList.add('is-open');
                container.classList.add('has-popup');
                enableScrollLock();
            }
            
        });
    }

    // selectbox select value (검수용)
    window.addEventListener("DOMContentLoaded", setSelect);
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