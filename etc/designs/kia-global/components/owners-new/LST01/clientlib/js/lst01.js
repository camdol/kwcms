'use strict';

//#Component : LST01
(function () {
    window.addEventListener("DOMContentLoaded", categoryToggle);
    window.addEventListener("DOMContentLoaded", showToggleLst);

    function categoryToggle() {
        const btn = document.querySelector('.cmpnt-lst01-category');
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

    // List Show/Hide
    function showToggleLst() {
        const lists = document.querySelectorAll('.cmpnt-lst01__title');
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