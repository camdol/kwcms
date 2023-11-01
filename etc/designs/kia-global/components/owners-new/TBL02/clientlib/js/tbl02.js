'use strict';

//#Component : 
(function () {
    window.addEventListener("DOMContentLoaded", () => {
        if(window.innerWidth > 768 ) {
            setTitleHeight();
        }
    });

    function setTitleHeight() {
        const titles = document.querySelectorAll('.table-thead .title');
        const elHeights = [];
        for (let i = 0; i < titles.length; i++) {
            elHeights.push(titles[i].offsetHeight);
        };
        const maxHeight = Math.max(...elHeights);
        Array.prototype.forEach.call(titles, function(el){
            el.style.height = maxHeight + "px";
        });
    }

})();