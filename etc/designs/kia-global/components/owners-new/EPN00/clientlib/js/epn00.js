'use strict';

//#Component : EPN00
(function () {
    window.addEventListener("DOMContentLoaded", showToggleEPN);

    // List Show/Hide
    function showToggleEPN() {
        const lists = document.querySelectorAll('.cmpnt-epn00__title');
        Array.prototype.forEach.call(lists, function(el){
            el.addEventListener('click', (e) => {
                const targetLi = e.target.closest('li');
                if (targetLi.classList.contains('is-show')) {
                    targetLi.classList.remove('is-show');
                    targetLi.classList.remove('is-show');
                } else {
                    if (targetLi.closest('.cmpnt-epn00__list').querySelector('.is-show')) {
                        targetLi.closest('.cmpnt-epn00__list').querySelector('.is-show').classList.remove('is-show');
                    }
                    targetLi.classList.add('is-show');
                }
            });
        });
    }
})();

