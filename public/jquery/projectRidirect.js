$(document).ready(function () {
    $('.projectedit').click(function () {
        var projectid = $(this).data('id');
        // $(this).attr('data-id');
        $.redirect("edit", { id: projectid });
    });
});