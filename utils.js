$(document).ready(function(){
    
    $('.onClick-copy').click(function(event){
        
        navigator.clipboard.writeText( $(this).attr('href').replace("#", "") )

        event.preventDefault();
      });


});