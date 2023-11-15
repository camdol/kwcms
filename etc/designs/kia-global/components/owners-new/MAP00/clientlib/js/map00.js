
'use strict';

//#Component : MAP00
(function () {
    window.addEventListener("DOMContentLoaded", categoryToggle);
    window.addEventListener("DOMContentLoaded", initSearch);

    //catetory toggle
    function categoryToggle() {
        const btn = document.querySelector('.cmpnt-map00-category');
        const charignTypeEl = document.querySelector('.cmpnt-map00__current-type');
        btn.addEventListener('click', (e) => {
            const target = e.target;
            const type = target.parentElement.getAttribute('data-type');
            const typeTxt = target.parentElement.innerText;
            if(target.parentElement.classList.contains('is-selected')) {
                return;
            } else {
                if(target.closest('.cmpnt-map00-category').querySelector('.is-selected')) {
                    target.closest('.cmpnt-map00-category').querySelector('.is-selected').classList.remove('is-selected');
                }
                target.parentElement.classList.add('is-selected');
            }
            charignTypeEl.dataset.type = type;
            charignTypeEl.innerText = typeTxt;
        });
    }

    //검수용(개발적용 제외)
    function initSearch() {
        document.querySelector('#search_keyword').addEventListener('keyup', function() {
            if (event.which === 13) {
                this.parentElement.nextElementSibling.style.display = 'block';
            }
            this.nextElementSibling.addEventListener('click', function() {
                this.parentElement.nextElementSibling.style.display = 'none';
            });
        });
    }
    
})();


// popup open
function openMapPopup() {
    const targetPop = document.querySelector('.cmpnt-map00__popup');
    if(window.innerWidth > 1025 ) {
        targetPop.classList.add('is-open');
    } else {
        document.querySelector('body').classList.add('has-popup');
        enableScrollLock();
        targetPop.classList.add('is-open');
    }
}

// popup open
function closeMapPopup() {
    document.querySelector('body').classList.remove('has-popup');
    document.querySelector('.cmpnt-map00__popup').classList.remove('is-open');
    disableScrollLock();
}