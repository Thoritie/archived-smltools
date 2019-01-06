$(document).ready(function () {
    $('.showDetailStake').click(function () {
        var stakeid = $(this).data('id');
        $.redirect(baseUrl+"stakeholder/stakeholderDetail", { id: stakeid });
    });
});