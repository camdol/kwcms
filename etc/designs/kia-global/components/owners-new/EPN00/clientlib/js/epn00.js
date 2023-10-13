'use strict';

//#Component : EPN00
(function () {
    window.addEventListener("DOMContentLoaded", showToggleEPN);

    // List Show/Hide
    function showToggleEPN() {
        const lists = document.querySelectorAll('.cmpnt-epn00__title');
        Array.prototype.forEach.call(lists, function(el){
            el.addEventListener('click', (e) => {
                const target = e.target;
                const targetLi = target.closest('li');
                console.log(target.closest('li'));
                if (target.classList.contains('is-show')) {
                    target.classList.remove('is-show');
                    targetLi.classList.remove('is-show');
                }else if (target.parentElement.querySelector('.is-show')) {
                    target.parentElement.querySelector('.is-show').classList.remove('is-show');
                    target.classList.add('is-show');
                    targetLi.classList.add('is-show');
                }else {
                    target.classList.add('is-show');
                    targetLi.classList.add('is-show');
                }
            });
        });
    }

})();