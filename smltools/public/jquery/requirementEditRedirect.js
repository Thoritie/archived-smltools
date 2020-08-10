$(document).ready(function(){
    $('.requirementEdit').click(function() {
        var requirementId = $(this).data('id');
        $.redirect(baseUrl + "requirement/edit",{ id: requirementId});
    });
});