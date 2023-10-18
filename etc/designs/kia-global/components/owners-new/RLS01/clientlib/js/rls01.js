'use strict';


(function($) {


    window.addEventListener("DOMContentLoaded", setBtnReset);
    window.addEventListener("DOMContentLoaded", initSearch);

// Search input
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
    });

    btnReset.addEventListener('click', function() {
        this.parentElement.classList.remove('is-keyup');
        input.value = '';

    });
  }  


 // selectbox show/hide
	 window.addEventListener("DOMContentLoaded", showToggleSelect);

    function showToggleSelect() {
        const selectEls = document.querySelectorAll('.cmpnt-src-select');
        Array.prototype.forEach.call(selectEls, function(el){
            el.addEventListener('click', (e) => {
                const target = e.target;
                if(target.classList.contains('cmpnt-src-select')) {
                    if (target.classList.contains('is-show')) {
                        target.classList.remove('is-show');
                    }else if (target.parentElement.querySelector('.is-show')) {
                        target.parentElement.querySelector('.is-show').classList.remove('is-show');
                        target.classList.add('is-show');
                    }else {
                        target.classList.add('is-show');
                    }
                }

                if(target.classList.contains('cmpnt-src-select__item')) {
                    target.closest('.cmpnt-src-select').classList.remove('is-show');
                }
            });
        });
    }

    $(document).ready(function() {
        //select title
        $('.cmpnt-src-select ul').on('click', '.cmpnt-src-select__item', function(){
            this.closest('.cmpnt-src-select').setAttribute('value', this.innerText.trim())
            this.closest('ul').querySelector('.is-select') && this.closest('ul').querySelector('.is-select').classList.remove('is-select');
            this.classList.add('is-select');
        });
    });


})(jQuery);