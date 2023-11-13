
'use strict';

//#Component : MAP00
(function () {
    window.addEventListener("DOMContentLoaded", categoryToggle);

    function categoryToggle() {
        const btn = document.querySelector('.cmpnt-map00-category');
        btn.addEventListener('click', (e) => {
            const target = e.target;
            if(target.classList.contains('is-selected')) {
                return;
            } else {
                if(target.parentElement.querySelector('.is-selected')) {
                    target.parentElement.querySelector('.is-selected').classList.remove('is-selected');
                }
                target.classList.add('is-selected');
            }
        });
    }

  // 정보 박스 팝업 
    $(document).ready(function() {

        mapPopOpen();
        mapPopClose();

        // 박스 스크롤
		let lastScroll = 0;
        $(window).on('scroll', function(){
            let scrollTop = $(this).scrollTop();
            if(scrollTop > lastScroll) {
                //down
                $('.cmpnt-map00__detail').addClass('fixed');

            } else {
                // up
                $('.cmpnt-map00__detail').removeClass('fixed');

            }
            lastScroll = scrollTop;
        });

		//리사이즈
        $(window).resize(function() {
			mapPopOpen();
        	mapPopClose();
            $('#header').css('z-index','1004');
            $('.cmpnt-map00__chargingselect').show(); 
            $('.cmpnt-map00__detail').hide();
		});


    });

    

    //닫기
    function mapPopClose() {
        var viewportWidth = $(window).width();

            // 닫기
            $('.cmpnt-map00__box_close').click(function (e) {
                e.preventDefault();
                $(this).parents().find('.cmpnt-map00__detail').hide(); 
                $('.cmpnt-map00').removeClass('fixed');    
                $('#header').css('z-index','1004');
                $('.cmpnt-map00__chargingselect').show();  
                
            });

    }






})();


//열기
function openMapPopup () {
    var viewportWidth = $(window).width();

    if (viewportWidth <= 1024) {

        //열기
        $('.open_box').click(function () {
            $('#header').css('z-index','-1');
            $(this).parents().find('.cmpnt-map00__detail').show(); 
            $('.cmpnt-map00').addClass('fixed');  
            $('.cmpnt-map00__chargingselect').hide();    
        });    
        
    } else {

        $('.cmpnt-map00').removeClass('fixed');
        
        //열기
        $('.open_box').click(function () {
            $(this).parents().find('.cmpnt-map00__detail').show(); 
            $('.cmpnt-map00').removeClass('fixed'); 
            $('#header').css('z-index','1004');
            $('.cmpnt-map00__chargingselect').show();  
        });   


    }
}