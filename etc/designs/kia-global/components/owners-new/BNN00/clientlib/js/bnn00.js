'use strict';

//#Component : BNN00
(function () {
  window.addEventListener("DOMContentLoaded", alignHandler);
  
  function alignHandler() {
    const singleColumnItems = document.querySelectorAll('.cmpnt-bnn00__item');

    singleColumnItems.forEach(item => {
      if(item.offsetHeight > 310) {
        item.style.alignItems = 'flex-start';
        console.log(item.clientHeight);
      }  
    })
  }
})();
