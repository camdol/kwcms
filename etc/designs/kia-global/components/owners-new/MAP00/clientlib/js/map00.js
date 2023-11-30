
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
            const targetEl = target.tagName === 'SPAN' ? target.parentElement : target;
            targetEl.classList.toggle('is-selected');
        });
    }

    function initSearch() {
        document.querySelector('#search_keyword').addEventListener('keyup', function() {
            //검수용
            this.closest('.cmpnt-map00__search').querySelector('.src-autocomplete').style.display = 'block';
            if (event.which === 13) {
                this.closest('.cmpnt-map00__search').querySelector('.no-result').style.display = 'block';
            }
           
            this.nextElementSibling.addEventListener('click', function() {
                this.closest('.cmpnt-map00__search').querySelector('.no-result').style.display = 'none';
                this.closest('.cmpnt-map00__search').querySelector('.src-autocomplete').style.display = 'none';
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
        const { body } = document;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        body.style.overflow = 'hidden';
        body.classList.add('has-popup');
        targetPop.classList.add('is-open');
    }
}

// popup open
function closeMapPopup() {
    const { body } = document;
    body.style.removeProperty('overflow');
    body.classList.remove('has-popup');
    document.querySelector('.cmpnt-map00__popup').classList.remove('is-open');
}