'use strict';

//#Component : IMG03
(function () {

  const videoBtns = document.querySelectorAll(".cmpnt-video__button--play");
  if(videoBtns.length > 0) {
    for (var i = 0; i < videoBtns.length; i++) {
      videoBtns[i].addEventListener('click', (e) => {
        const target = e.target.parentElement;
        const targetMedia = target.previousElementSibling;
        const url = targetMedia.dataset.videoUrl;
        const type = targetMedia.dataset.type;
        if(target.classList.contains('disabled')) {
          openMediaPopup('cmpnt-img03', url, type);
        } 
      });
    }
  }  
})();

function openMediaPopup(obj, url, type) {
  setPopup(obj, url, type);
  enableScrollLock();

  const video = document.querySelector(".cmpnt-popup .cmpnt-popup__media");
  video.addEventListener('click', (e) => toggleVideo(e))
}

function setPopup(obj, url, type) {
  const targetDiv = document.querySelector('.'+obj);
  const popLayer = document.createElement('div');
  popLayer.setAttribute('class', 'cmpnt-popup-layer');
  const existingnode = targetDiv.lastChild;
  const newHtml = `
      <div class="cmpnt-popup">
        <div class="cmpnt-popup__wrap">
          <button class="cmpnt-popup__btn--close" onclick="closeMediaPopup()"><span>close</span></button>
          <div class="cmpnt-popup__media">
            <video title="" playsinline="true" preload="metadata" muted="true" 
              src="${url}"
              poster="">
            </video>
            <button class="cmpnt-video__button cmpnt-video__button--play" disabled><span>play</span></button>
          </div>
        </div>
      </div>
      <div class="cmpnt-popup__dimmed"></div>
  `;

  popLayer.innerHTML = newHtml;
  targetDiv.insertBefore(popLayer, existingnode);
}

function closeMediaPopup() {
  const target = event.target;
  target.closest('.cmpnt-popup-layer').remove();
  disableScrollLock();
}

function toggleVideo(e) {
  const target = e.target.parentElement.querySelector('.cmpnt-video__button--play');
  const video = e.target.parentElement.querySelector('video');
  if (video.paused) {
    playVideo(video, target);
  } else {
    pauseVideo(video, target)
  }
}

function playVideo(video, target) {
	video.currentTime = 0;
	video.play();
	target.classList.add("is-video-playing");
	target.classList.replace('cmpnt-video__button--play', 'cmpnt-video__button--pause');

	video.addEventListener("ended", () => {
		target.classList.remove("is-video-playing");
		target.classList.replace('cmpnt-video__button--pause', 'cmpnt-video__button--play');
	});
}

function pauseVideo() {
  const target = event.target;
  const video = target.parentElement.querySelector('video');
	video.pause();
  console.log('target', event.target);
	target.parentElement.querySelector('.cmpnt-video__button--pause').classList.remove("is-video-playing");
	target.parentElement.querySelector('.cmpnt-video__button--pause').classList.replace('cmpnt-video__button--pause', 'cmpnt-video__button--play');
}