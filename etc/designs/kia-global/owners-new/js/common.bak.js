
//chunk
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


//vidoe
function toggleVideo(e) {
    const target = e.target;
    const video = target.parentElement.previousElementSibling;
    if (video.paused) {
		playVideo(video, target);
	} else {
		pauseVideo(video, target)
	}
}

function playVideo(video, target) {
	video.currentTime = 0;
	video.play();
	target.parentElement.classList.add("is-video-playing");
	target.parentElement.classList.replace('cmpnt-video__button--play', 'cmpnt-video__button--pause');

	video.addEventListener("ended", () => {
		target.parentElement.classList.remove("is-video-playing");
		target.parentElement.classList.replace('cmpnt-video__button--pause', 'cmpnt-video__button--play');
	});
}

function pauseVideo(video, target) {
	video.pause();
	target.parentElement.classList.remove("is-video-playing");
	target.parentElement.classList.replace('cmpnt-video__button--pause', 'cmpnt-video__button--play');
}

//Youtube
function playYoutube(url) {
	$.getScript("https://www.youtube.com/iframe_api", function () {
		loadVideo();
	});

	function loadVideo() {
		const youtube = document.querySelector('.cmpnt-popup__media');

		window.YT.ready(function () {
			const _videoId = url;
			galleryYoutube = new window.YT.Player(youtube, {
					width: '100%',
					height: '100%',
					videoId: _videoId,
					playerVars: {
					autoplay: 0,
					loop:1,
					rel: 0,
					controls: 1,
					playlist:_videoId,
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
			event.target.playVideo();
		}

		function onPlayerStateChange(event) {
			if (event.data === 0) {
			}
		}
	}
}



