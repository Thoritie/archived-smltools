$(document).ready(function () {
    $('.projectedit').click(function () {
        var projectid = $(this).data('id');
        // $(this).attr('data-id');
        $.redirect(baseUrl + "project/edit", { id: projectid });
    });
});