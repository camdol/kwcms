
// selectbox show/hide
const selectEls = document.querySelectorAll('.cmpnt-src-select');
if(selectEls.length > 0) {
	window.addEventListener("DOMContentLoaded", showToggleSelect);
}

function showToggleSelect() {
	Array.prototype.forEach.call(selectEls, function(el){
		el.addEventListener('click', (e) => {
			const target = e.target;
			const container = document.querySelector('#container');
			if(target.classList.contains('cmpnt-src-select')) {
				if (target.classList.contains('is-show')) {
					target.classList.remove('is-show');
				} else if (container.querySelector('.cmpnt-src-select.is-show')) {
					container.querySelector('.cmpnt-src-select.is-show').classList.remove('is-show');
					target.classList.add('is-show');
				} else {
					target.classList.add('is-show');
				}
			}
				
			if(target.classList.contains('cmpnt-src-select__item')) {
				target.closest('.cmpnt-src-select').classList.remove('is-show');
			}
		});
	});
}

const searchInput = document.querySelectorAll('.cmpnt-src-input');
if(searchInput.length > 0) {
	window.addEventListener("DOMContentLoaded", setBtnReset);
	window.addEventListener("DOMContentLoaded", initSearch);
}

function setBtnReset() {
	const btnReset = `
			<span>reset</span>
	`;
	const item = document.createElement('div');
	item.setAttribute('class', 'cmpnt-src__button--reset');
	item.innerHTML = btnReset;
	const target = document.querySelector('.cmpnt-src-input');
	target.insertBefore(item, null);
}

function initSearch() {
	const btnReset = document.querySelector('.cmpnt-src__button--reset');
	const input = document.querySelector('.cmpnt-src-input input')
	input.addEventListener('keyup', function() {
		this.parentElement.classList.add('is-keyup');
		if (event.keyCode === 8 && input.value.length === 0) {
			this.parentElement.classList.remove('is-keyup');
		}
	});

	btnReset.addEventListener('click', function() {
		this.parentElement.classList.remove('is-keyup');
		input.value = '';
	});
}  

//Chunk
$.fn.chunk = function(size) {
    var arr = [];

    for (var i = 0; i < this.length; i += size) {
      arr.push(this.slice(i, i + size));
    }
    return this.pushStack(arr, "chunk", size);
} 

// Scroll lock
function enableScrollLock() {
	const { body } = document;
	if(!body.getAttribute('scrollY')){
		const pageY = window.pageYOffset;
		body.setAttribute('scrollY', pageY.toString());
		body.style.overflow = 'hidden';
		body.style.position = 'fixed';
		body.style.left = '0';
		body.style.right = '0';
		body.style.bottom = '0';
		body.style.top = `-${pageY}px`;
	}
}

// Scroll unlock
function disableScrollLock() {
	const { body } = document;
	if(body.getAttribute('scrollY')){
		body.style.removeProperty('overflow');
		body.style.removeProperty('position');
		body.style.removeProperty('left');
		body.style.removeProperty('right');
		body.style.removeProperty('top');
		body.style.removeProperty('bottom');

		window.scrollTo(0, Number(body.getAttribute('scrollY')));
		body.removeAttribute('scrollY');
	}
}

//Video
function toggleVideo(e) {
  const target = e.target.parentElement.querySelector('.cmpnt-video__button--play');
  const video = e.target.parentElement.querySelector('video');
  if (video.paused) {
    playVideo(video, target);
  } else {
    pauseVideo()
  }
}

function playVideo(video, target) {
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
	target.parentElement.querySelector('.cmpnt-video__button--pause').classList.remove("is-video-playing");
	target.parentElement.querySelector('.cmpnt-video__button--pause').classList.replace('cmpnt-video__button--pause', 'cmpnt-video__button--play');
}

//Youtube
function playYoutube(url) {
	const youtubeId = url.split('/').at(-1).split('?')[0];
	
	$.getScript("https://www.youtube.com/iframe_api", function () {
		loadVideo(youtubeId);
	});

	function loadVideo(youtubeId) {
		const youtube = document.querySelector('.cmpnt-popup .youtube__iframe');

		window.YT.ready(function () {
			new window.YT.Player(youtube, {
					width: '100%',
					height: '100%',
					videoId: youtubeId,
					playerVars: {
					autoplay: 0,
					loop:1,
					rel: 0,
					controls: 1,
					playlist:youtubeId,
					mute:1,
					modestbranding: 1,
					playsinline: 1,
					frameBorder: 0,
					allowfullscreen: true,
					fullscreen: true,
				},
				events: {
					onReady: onPlayerReady,
					onStateChange: onPlayerStateChange
				}
			});
		});

		function onPlayerReady(event) {
			//event.target.playVideo();
		}

		function onPlayerStateChange(event) {
			if (event.data === 0) {
			}
		}
	}
}


// popup open
function openPopup(target) {
	const popupElem = document.querySelector('.'+ target);
	const container = document.querySelector('#container');

  	popupElem.classList.add('is-show');
	container.classList.add('has-popup');
	window.innerWidth < 1025 && enableScrollLock();
}

// popup close
function closePopup() {
	const container = document.querySelector('#container');
	// Get the stored scroll position
	const scrollY = parseInt(sessionStorage.getItem('scrollY')) || 0;

	event.target.closest('.cmpnt-popup__windows').classList.remove('is-show');
	if(!event.target.closest('.cmpnt-popup__windows').classList.contains('cmpnt-ppp03')) {
		container.classList.remove('has-popup');
	}

	// Restore scroll position
	window.scrollTo(0, scrollY);
	// Remove scroll position from sessionStorage
	sessionStorage.removeItem('scrollY');

	window.innerWidth < 1025 && disableScrollLock();
}

// close popup when clicking on the dimmed area
window.addEventListener('DOMContentLoaded', handleDimmedClick);

function handleDimmedClick() {
	document.addEventListener('click', (event) => {
		const dimmedArea = event.target.closest('.cmpnt-popup__dimmed');
		if (dimmedArea) {
			const parentPopup = dimmedArea.parentNode;
			if (parentPopup.classList.contains('cmpnt-ppp04')) {
				closeVideoPopup();
			} else {
				closePopup();
			}
		}
	});
}

// add device className
const device = (() => {
	const ua = navigator.userAgent.toLowerCase();
	// 갤럭시 A8 태블릿에서 운영체제가 android가 아닌 linux로 표시되어 androiOthers에 linux 케이스 추가
	return ua.match(/(iphone|ipod|ipad|mac)/) ? 'ios'
		: ua.match(/android|blackberry|linux/) ? 'androidOthers'
		: 'pc';
})();

const screenW = window.screen.width;
const isMobileSize = screenW <= 768;
const isTabletSize = !isMobileSize && screenW <= 1280;
const isPc = device === 'pc';
const isMobile = !isPc && isMobileSize;
const isTablet = !isPc && isTabletSize;
const deviceClassName = isMobile ? 'mobile' : isTablet ? 'tablet' : 'pc';

document.body.dataset.device = deviceClassName;