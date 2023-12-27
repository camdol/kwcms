'use strict';

//#Component : LST01
(function () {
    window.addEventListener("DOMContentLoaded", categoryToggle);
    window.addEventListener("DOMContentLoaded", showToggleLst);

    function categoryToggle() {
        const btn = document.querySelector('.cmpnt-lst01-category');
        
        btn.addEventListener('click', (e) => {
            const target = e.target;
            const color = target.dataset.color;
            const listTarget = document.querySelector('.cmpnt-lst01-content');
            const dataColors = listTarget.querySelectorAll('[data-color]');
            
            if(target.tagName !== 'BUTTON') {
                return;  
            } else {
                categoryTabToggle(target);
            }
            
            if (target.closest('.cmpnt-lst01__wrap').querySelector('.is-show')) {
                target.closest('.cmpnt-lst01__wrap').querySelector('.is-show').classList.remove('is-show');
            }

            for (let i = 0; i < dataColors.length; i++) {
                dataColors[i].classList.remove('is-active');
            };

            Array.prototype.forEach.call(dataColors, function(el){
                if(el.dataset.color === color) {
                    el.classList.add('is-active');
                    if(el.dataset.color === 'all') {
                        const tabLists = listTarget.querySelectorAll('.cmpnt-lst01__list');
                        for (let i = 0; i < tabLists.length; i++) {
                            tabLists[i].classList.add('is-active');
                        }
                    }
                }
            });
        });
    }

    function categoryTabToggle(target) {
        if(target.classList.contains('is-selected')) {
            return;
        } else {
            if(target.parentElement.querySelector('.is-selected')) {
                target.parentElement.querySelector('.is-selected').classList.remove('is-selected');
            }
            target.classList.add('is-selected');
        }
    }

    // List Show/Hide
    function showToggleLst() {
        const lists = document.querySelectorAll('.cmpnt-lst01__item');
        Array.prototype.forEach.call(lists, function(el){
            el.addEventListener('click', (e) => {
                const target = e.target;
                if(target.closest('li').classList.contains('is-show')) {
                    target.closest('li').classList.remove('is-show');
                } else {
                    if (target.closest('.cmpnt-lst01-content').querySelector('.cmpnt-lst01__item.is-show')) {
                        target.closest('.cmpnt-lst01-content').querySelector('.cmpnt-lst01__item.is-show').classList.remove('is-show');
                    } 
                    target.closest('li').classList.add('is-show');
                }
                
            });
        });
    }


})();