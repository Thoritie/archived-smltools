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
    $("#editProject-form").validate({
        rules: {
            projectname: {
                required: true,
                remote: {
                    url: "checkDuptoEdit",
                    type: "post",
                    data: {
                        projectname: function () {
                            return $("#projectname").val()
                        },
                        id: function(){
                            return $("#idproject").val()
                        }
                    }
                }
            },
        },
        messages: {
            projectname: {
                required: "Project name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    });

    $('#editproject').click(function () {
        if ($("#editProject-form").valid()) {
            var id = $("#idproject").val();
            var projectname = $("#projectname").val();
            var description = $("#description").val();
            var permission = $("#permission").tagsinput('items')
            item1 = {};
            $.each(permission, function (index, input) {
                item1[index] = input.index
            });
            $.ajax({
                type: 'post',
                url: "save",
                data: {
                    projectid: id,
                    projectname: projectname,
                    description: description,
                    permission: item1,
                },
                success: function (data) {
                    window.location.href = "index";
                }
            })
        }
    });

});