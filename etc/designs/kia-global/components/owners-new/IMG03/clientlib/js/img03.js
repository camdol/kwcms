'use strict';

//#Component : IMG03
(function () {

  // Video stop & pause
  const videoBtns = document.querySelectorAll(".cmpnt-img03__btn-play");
  const closeBtn = document.querySelector(".cmpnt-img03-popup__btn-close");
  closeBtn.addEventListener('click', closeMediaPopup);

  if(videoBtns.length > 0) {
    for (var i = 0; i < videoBtns.length; i++) {
      videoBtns[i].addEventListener('click', (e) => {
        const target = e.target.parentElement;
        target.classList.contains('disabled') && openMediaPopup();
        toggleVideo(e)
      });
    }
  }

  function toggleVideo(e) {
    const target = e.target;
    const video = target.parentElement.previousElementSibling;
    if (video.paused) {
      playVideo(video, target);
    } 
  }

  function playVideo(video, target) {
    video.currentTime = 0;
    video.play();
    target.parentElement.style.display = 'none';

    video.addEventListener("ended", () => {
      target.parentElement.style.display = 'block';
    });
  }

  function openMediaPopup() {
    const popup = document.querySelector('.cmpnt-img03-popup');
    const popupDim = document.querySelector('.cmpnt-popup__dimmed');
    enableScrollLock();
    popup.style.display = 'block';
    popupDim.style.display = 'block';
  }

  function closeMediaPopup() {
    const popup = document.querySelector('.cmpnt-img03-popup');
    const popupDim = document.querySelector('.cmpnt-popup__dimmed');
    disableScrollLock();
    popup.style.display = 'none';
    popupDim.style.display = 'none';
  }

})();