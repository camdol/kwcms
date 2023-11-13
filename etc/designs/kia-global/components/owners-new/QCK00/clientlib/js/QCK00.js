'use strict';

//#Component : QCK00

let cmpntQCK00Swiper;
let swiperQck00Options;

(function () {
    swiperQck00Options = {
		loop:false,
		slidesPerView: 'auto',
		spaceBetween: 20,
		initialSlide:0,
		draggable: true,
		observer : true,
		observeParents : true,
		slidesOffsetAfter: 120,
		breakpoints: {
		  1025: {
			  slidesPerView: 3,
			  spaceBetween: 40,
			  slidesOffsetAfter: 0,
		  },
		  767: {
			spaceBetween: 28,
			slidesOffsetAfter: 100,
		  },
		},
	};

})();

window.addEventListener("DOMContentLoaded", initIMG04Swiper);

function initIMG04Swiper() {
	cmpntQCK00Swiper = new Swiper(".cmpnt-qck00__swiper", swiperQck00Options);
}

function closeQCK00Popup() {
	const container = document.querySelector('#container');
	const body = document.querySelector('body');

	body.style.overflowX = 'initial';
    event.target.closest('.cmpnt-qck00').classList.remove('is-show');
	container.classList.remove('has-popup');
	if(winWidth < 768) {
		disableScrollLock();
	}
}

//검수용
function openQCK00Popup() {
    const popupElem = document.querySelector('.cmpnt-qck00');
	const body = document.querySelector('body');
	const container = document.querySelector('#container');
	const winWidth = window.innerWidth;

	if(winWidth > 767 && winWidth <1025) {
		body.style.overflowX = 'hidden';
	}

	if(winWidth < 768) {
		enableScrollLock();
	}
  	popupElem.classList.add('is-show');
	container.classList.add('has-popup');
}

