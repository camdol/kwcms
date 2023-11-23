'use strict';

//#Component : PPP04
window.addEventListener("DOMContentLoaded", videoPlayHandler);

function videoPlayHandler() {
  const videoContainer = document.querySelector(".cmpnt-ppp04 .cmpnt-popup__media");
  videoContainer.addEventListener('click', (e) => toggleVideo(e));
}

function resetVideo() {
  const video = document.querySelector('.cmpnt-ppp04 video');
  video.pause();
  video.currentTime = 0;
}

function closeVideoPopup() {
  const container = document.querySelector('#container');
  const closeBtn = document.querySelector('.cmpnt-video__button');
  
	event.target.closest('.cmpnt-popup__windows').classList.remove('is-show');
	container.classList.remove('has-popup');

  resetVideo();  

  if(closeBtn.classList.contains('is-video-playing')) {
    closeBtn.classList.remove('is-video-playing');
    closeBtn.classList.replace('cmpnt-video__button--pause', 'cmpnt-video__button--play');
  }
  disableScrollLock();
}