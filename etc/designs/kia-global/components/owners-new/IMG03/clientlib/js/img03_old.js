'use strict';

//#Component : IMG03
(function () {

  const videoBtns = document.querySelectorAll(".cmpnt-video__button--play");
  if(videoBtns.length > 0) {
    for (var i = 0; i < videoBtns.length; i++) {
      videoBtns[i].addEventListener('click', (e) => {
        const target = e.target.parentElement;
        const targetMedia = target.previousElementSibling;
        const url = targetMedia.dataset.url;
        const type = targetMedia.dataset.type;
        if(target.classList.contains('disabled')) {
          openMediaPopup('cmpnt-img03', url, type);
        } 
      });
    }
  }  

  function openMediaPopup(obj, url, type) {
    setPopup(obj, url, type);
    enableScrollLock();
    
    const videoBtn = document.querySelector(".cmpnt-popup .cmpnt-video__button--play");
    videoBtn.addEventListener('click', (e) => toggleVideo(e))
  }
  
  function setPopup(obj, url, type) {
    const targetDiv = document.querySelector('.'+obj);
    const popLayer = document.createElement('div');
    popLayer.setAttribute('class', 'cmpnt-popup-layer');
    const existingnode = targetDiv.lastChild;
    const videoHtml = `
        <div class="cmpnt-popup">
          <div class="cmpnt-popup__wrap">
            <button class="cmpnt-popup__btn--close" onclick="closeMediaPopup()"><span>close</span></button>
            <div class="cmpnt-popup__media">
              <video title="Electric–Global Modular Platform (E-GMP)" playsinline="true" preload="metadata" muted="true" 
                src="${url}"
                poster="">
              </video>
              <button class="cmpnt-video__button cmpnt-video__button--play"><span>play</span></button>
            </div>
          </div>
        </div>
        <div class="cmpnt-popup__dimmed"></div>
    `;

    const youtubeHtml = `
        <div class="cmpnt-popup">
          <div class="cmpnt-popup__wrap">
            <button class="cmpnt-popup__btn--close" onclick="closeMediaPopup()"><span>close</span></button>
            <div class="cmpnt-popup__media">
            </div>
          </div>
        </div>
        <div class="cmpnt-popup__dimmed"></div>
    `;
  
    console.log(type);
    popLayer.innerHTML = (type === 'mp4') ? videoHtml : youtubeHtml;
    targetDiv.insertBefore(popLayer, existingnode);
  }
})();

function closeMediaPopup() {
  const target = event.target;
  target.closest('.cmpnt-popup-layer').remove();
  disableScrollLock();
}