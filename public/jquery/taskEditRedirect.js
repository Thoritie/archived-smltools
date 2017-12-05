$(document).ready(function () {
    $('.taskedit').click(function () {
        var taskid = $(this).data('id');
        // $(this).attr('data-id');
       
        $.redirect("edit", { id: taskid});
    });
});