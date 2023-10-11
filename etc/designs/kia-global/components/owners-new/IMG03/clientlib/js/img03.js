'use strict';

//IMG01
(function () {
  const _winWidth = window.innerWidth;

  //Video Tag Responsive
  window.addEventListener("resize", videoSrcInit, true);
  window.addEventListener("DOMContentLoaded", videoSrcInit, true);

  function videoSrcInit() {
    const _videoEl = document.querySelectorAll('video');

    _videoEl.forEach(function (el){
      if(el.getAttribute('data-media-pc') === null && el.getAttribute('data-media-mobile') === null) {
        return;
      } else {
        if (_winWidth > 740 && el.getAttribute('data-media-pc') !== el.getAttribute('src')) {
          el.setAttribute('src', el.getAttribute('data-media-pc'));
        } 

        if (_winWidth <= 740 && el.getAttribute('data-media-mobile') !== el.getAttribute('src')) {
          el.setAttribute('src', el.getAttribute('data-media-mobile'));
        }
      }
    });
  }  

  // Video stop & pause
  const videoBtns = document.querySelectorAll(".cmpnt-img03__media .cmpnt-img03__btn-play");

  if(videoBtns.length > 0) {
    for (var i = 0; i < videoBtns.length; i++) {
      videoBtns[i].addEventListener('click', (e) => toggleVideo(e));
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

    video.addEventListener("ended", (event) => {
      target.parentElement.style.display = 'block';
    });
  }
})();