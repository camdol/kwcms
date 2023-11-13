'use strict';

(function() {
    //window.addEventListener("DOMContentLoaded", showToggleStp01Select);

    // selectbox show/hide
    const stp01SelectEls = document.querySelectorAll('.cmpnt-src-select');
    
    function showToggleStp01Select() {
        Array.prototype.forEach.call(stp01SelectEls, function(el){
            el.addEventListener('click', (e) => {
                const target = e.target;
                
                if(target.classList.contains('cmpnt-src-select')) {
                    if(target.closest('.form').querySelector('.is-show')) {
						target.closest('form').querySelector('.is-show').classList.remove('is-show');
						target.classList.add('is-show');
					}
                }
            });
        });
    }

})();

//textarea Bytes check
function checkByte(obj){
    const maxByte = 1000; 
    const val = obj.value; 
    const valLen = val.length; 
    const checkByte = document.querySelector('.textarea__bytes strong');
    
    let totalByte = 0;
    for(let i = 0; i < valLen; i++) {
        totalByte += 1;
    }
    
    if(totalByte > maxByte){
        checkByte.innerText = totalByte;
    }else{
        checkByte.innerText = totalByte;
    }
}

window.addEventListener("DOMContentLoaded", setStp01Select);

// selectbox select value
function setStp01Select() {
    const selectEls = document.querySelectorAll('.cmpnt-step .cmpnt-src-select__item');
    Array.prototype.forEach.call(selectEls, function(el){
        el.addEventListener('click', e =>  {
            const target = e.target;
            target.closest('.cmpnt-src-select').setAttribute('value', target.innerText.trim());
            target.closest('ul').querySelector('.is-select') && target.closest('ul').querySelector('.is-select').classList.remove('is-select');
            target.classList.add('is-select');
            target.closest('.cmpnt-src-select').classList.remove('is-show');
        });
    });
}