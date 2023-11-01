'use strict';

//#Component : PPP01
(function () {
  window.addEventListener("DOMContentLoaded", initImg03);

  enableScrollLock();

  
})();

function closeMediaPopup() {
  const target = event.target;
  target.closest('.cmpnt-ppp01').remove();
  disableScrollLock();
  console.log(target.closest('.cmpnt-ppp01'));
}

function clickHandler() {
  const clickBtn = document.querySelectorAll(".clickMe");
}
