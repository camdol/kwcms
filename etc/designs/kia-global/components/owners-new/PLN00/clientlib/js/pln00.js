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
    });
  }

    // adjust spacing according to text length
    window.addEventListener("DOMContentLoaded", () => {
      handleDescTextChange(); //When first loading
      window.addEventListener("resize", handleDescTextChange);
    });

    function handleDescTextChange() {
        const descTexts = document.querySelectorAll('.cmpnt-pln00__desc');
        descTexts.forEach(desc => {
          const parentList = desc.closest('.cmpnt-pln00__list');
          if (!parentList) return; // null 체크
  
          if (window.innerWidth >= 1024) {
            parentList.classList.toggle('detectHeight', desc.offsetHeight > 26);
          } else if (window.innerWidth < 1024) {
            parentList.classList.remove('detectHeight');
            parentList.classList.toggle('detectHeight', desc.offsetHeight > 24);
          }
      });
    }

})();