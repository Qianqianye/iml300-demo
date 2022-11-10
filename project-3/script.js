$(document).ready(function () {   
    $('.flower').click(function () {
      $('.text').toggle();
    });
    
     $('#imgage1').click(function () {   
        $(this).toggleClass("bigger");
    });
    
     $(function () {
        $(".flower, #imgage1").draggable();
    });
    
});
