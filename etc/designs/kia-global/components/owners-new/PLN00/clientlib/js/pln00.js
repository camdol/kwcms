'use strict';

//#Component : PLN00
(function () {
  window.addEventListener("DOMContentLoaded", heightHandler);
  
  function heightHandler() {
    const titleTexts = document.querySelectorAll('.cmpnt-pln00__title');

    titleTexts.forEach(text => {
      if(text.scrollHeight > 49) {
        text.parentNode.parentNode.classList.add('plusHeight');
      } else {
        text.parentNode.parentNode.classList.remove('plusHeight');
      }
    })
  }
})();