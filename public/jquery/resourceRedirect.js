$(document).ready(function(){
    $('.resEdit').click(function() {
        var resId = $(this).data('id');
        console.log("ewr");
        $.redirect(baseUrl + "resource/edit",{ id: resId});
    });
});