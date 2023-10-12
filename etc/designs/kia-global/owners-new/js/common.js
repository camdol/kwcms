
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
