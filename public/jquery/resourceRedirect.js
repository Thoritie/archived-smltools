$(document).ready(function(){
    $('.resEdit').click(function() {
        var resId = $(this).data('id');
        $.redirect(baseUrl + "resource/edit",{ id: resId});
    });
});