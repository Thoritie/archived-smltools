$(document).ready(function () {
    $.validator.setDefaults({
        errorClass: 'badge badge-danger',
        highlight: function (element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error has-feedback')
        },
        unhighlight: function (element) {
            $(element)
                .closest('.form-group')
                .removeClass('has-error has-feedback')
        }
    })
    $("#createTask-form").validate({
        rules: {
            taskname: "required",
            isA: "required",
            Description: "required",
            includes: "required",
            owner: "required",
            collaburator: "required",
            regulator: "required",
            uses: "required",
            produces: "required",
            ownerToBe: "required",
            collaboratorToBe: "required",
            toUse: "required",
            toProduce: "required",

        }
    });


});