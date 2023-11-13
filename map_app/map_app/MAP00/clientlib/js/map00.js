
'use strict';


(function () {


  // 정보 박스 팝업 
    $(document).ready(function() {

        mapPopOpen();
        mapPopClose();

        $(".cmpnt-map00__chargingselect .btn_round").click(function(){
            var idx = $(this).index();
            $(".cmpnt-map00__chargingselect .btn_round").removeClass("sel-on");
            $(".cmpnt-map00__chargingselect .btn_round").eq(idx).addClass("sel-on");
        });


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

    //열기
    function mapPopOpen() {
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