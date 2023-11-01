'use strict';

//#Component : PPP02
(function () {
  window.addEventListener("DOMContentLoaded", checkBoxHandler);
  enableScrollLock();

  function checkBoxHandler()  {
    const checkAll = document.querySelector('.select-all');
    const checkboxes = document.querySelectorAll('.product-list');

    checkAll.addEventListener('click', function(){
      const isChecked = checkAll.checked;
      if(isChecked){
        for(const checkbox of checkboxes){
          checkbox.checked = true;
        }
      }
      else{
        for(const checkbox of checkboxes){
          checkbox.checked = false;
        }
      }
    })

    for(const checkbox of checkboxes){
      checkbox.addEventListener('click',function(){
        const totalCnt = checkboxes.length;
        const checkedCnt = document.querySelectorAll('.product-list:checked').length;
        
        if(totalCnt == checkedCnt){
          checkAll.checked = true;
        }
        else{
          checkAll.checked = false;
        }
      });
    }
  }
})();



