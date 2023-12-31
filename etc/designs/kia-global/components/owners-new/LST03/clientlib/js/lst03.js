'use strict';

//#Component : LST03
(function () {
    window.addEventListener("DOMContentLoaded", categoryToggle);

    function categoryToggle() {
        const btn = document.querySelector('.cmpnt-lst03-category');
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

})();