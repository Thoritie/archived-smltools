$(document).ready(function () {
    $('.taskedit').click(function () {
        var taskid = $(this).data('id');
        // $(this).attr('data-id');
        var url = $(location).attr('href');
        url = url.concat("/edit");
        $.redirect(url, { id: taskid});
    });
});