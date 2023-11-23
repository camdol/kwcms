'use strict';

//#Component : TAB00
(function () {
    window.addEventListener("DOMContentLoaded", () => {
        if(window.innerWidth < 768 ) {
            setTabPosition();
        }
    });

    function setTabPosition() {
        const tab = document.querySelector('.cmpnt-tab__list');
        const activeEl =tab.querySelector('.on');
        const left = activeEl.getBoundingClientRect().x - 23; 
        tab.scrollLeft = Number(left);
    }

})();