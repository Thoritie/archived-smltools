$(document).ready(function () {
    $('.collaburationEdit').click(function () {
        var id = $(this).data('id');
        // $(this).attr('data-id');
       
        $.redirect(baseUrl+"CollaborationSetting/edit", { id: id});
    });
});