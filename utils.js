$(document).ready(function(){
    

    /*    Copiar on clipboard and change .toggleText    */
    $('.onClick-copy').click(function(event){

        navigator.clipboard.writeText( $(this).attr('href').replace("#", "") )

        $(`.toggleText`).text("¡Copiado!");
        
        event.preventDefault();
    });



    /*    tooltip jquery    */

    $('[data-toggle="tooltip"]').tooltip()
});