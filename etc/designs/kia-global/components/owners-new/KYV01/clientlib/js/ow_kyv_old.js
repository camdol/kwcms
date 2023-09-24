
$(function(){
    kyvBoxHInit();
});

// kv next button 높이 스크롤
var kyvBoxHInit = function(){
    
    $('.move_botton').click(function(e){ 
        e.preventDefault();
        var winH = $(window).height();
        var headH = $('#header').height();
        var atotHeight = winH - headH;
        //alert(headH); 

        if($(window).width() <= 1024) {
            $('html, body').animate({scrollTop: winH}, 400);                
        } else {            
            $('html, body').animate({scrollTop: atotHeight}, 400);
        }           

    });

}