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
        const poster = targetMedia.getAttribute('src');
  
        if(target.classList.contains('disabled')) {
          openMediaPopup('cmpnt-img03', url, poster, type);
        } 
      });
    }
  }  

  function openMediaPopup(obj, url, poster, type) {
    setPopup(obj, url, poster, type);
    enableScrollLock();
    if(type === 'mp4') {
      const video = document.querySelector(".cmpnt-popup .cmpnt-popup__media");
      video.addEventListener('click', (e) => toggleVideo(e))
    }
  }
  
  function setPopup(obj, url, poster, type) {
    const targetDiv = document.querySelector('.'+obj);
    const positionNode = targetDiv.lastChild;
    const popup = createPopup(url, poster, type);
    targetDiv.insertBefore(popup, positionNode);
    type === 'youtube' && playYoutube(url);
  }
  
  function createPopup(url, poster, type) {
    const videoContent = `
      <video title="" playsinline="true" preload="metadata" muted="true" 
        src="${url}"
        poster="${poster}">
      </video>
      <button class="cmpnt-video__button cmpnt-video__button--play" disabled><span>play</span></button>
    `;
    const youtubeContent = `
      <div data-url="${url}" class="youtube__iframe"></div>
    `;
    const source = type === 'mp4' ? videoContent : youtubeContent;
    const popHtml = `
        <div class="cmpnt-popup">
          <div class="cmpnt-popup__wrap">
            <button class="cmpnt-popup__btn--close" onclick="closeMediaPopup()"><span>close</span></button>
            <div class="cmpnt-popup__media">${source}</div>
          </div>
        </div>
        <div class="cmpnt-popup__dimmed"></div>
    `;
    const popup = document.createElement('div');
    popup.setAttribute('class', 'cmpnt-popup-layer');
    popup.innerHTML = popHtml;
    return popup;
  }
})();

function closeMediaPopup() {
  const target = event.target;
  target.closest('.cmpnt-popup-layer').remove();
  disableScrollLock();
}