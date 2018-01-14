$(document).ready(function () {
    $('.stakeedit').click(function () {
        var stakeid = $(this).data('id');
        // $(this).attr('data-id');

        $.redirect(baseUrl+"stakeholder/edit", { id: stakeid });
    });
});