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

     

    //tab scroll
    window.addEventListener('DOMContentLoaded', function() {
        const locationHash = window.location.hash;
        if (locationHash) {
            var tabAnchor = document.querySelector('#tab00_anchor');
            var header = document.querySelector('#header');

            if (tabAnchor) {
                if (header && window.innerWidth >= 1024) {
                    window.scrollTo(0, tabAnchor.offsetTop - header.offsetHeight);
                    console.log('pc');
                } else {
                    window.scrollTo(0, tabAnchor.offsetTop + header.offsetHeight);
                }
            }
        }
});

})();
