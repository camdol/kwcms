'use strict';

//#Component : QCK00
(function () {
    

})();

function closeQCK00Popup() {
	const container = document.querySelector('#container');

    event.target.closest('.cmpnt-qck00').classList.remove('is-show');
	container.classList.remove('has-popup');
}

//검수용
function openQCK00Popup() {
    const popupElem = document.querySelector('.cmpnt-qck00');
	const container = document.querySelector('#container');

  	popupElem.classList.add('is-show');
	container.classList.add('has-popup');
}

