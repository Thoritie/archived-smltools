$(document).ready(function () {
    $('.collaburationEdit').click(function () {
        var id = $(this).data('id');
        // $(this).attr('data-id');
       
        $.redirect("edit", { id: id});
    });
});