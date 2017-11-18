$(document).ready(function () {
    $('.taskedit').click(function () {
        var projectid = $(this).data('id');
        // $(this).attr('data-id');
        $.redirect("project/edit", { id: projectid});
    });
});