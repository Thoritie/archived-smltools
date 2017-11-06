$(document).ready(function () {
    
    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function (element) {
            $(element)
                .closest('.form-group')
                .addClass('has-danger');
        },
        unhighlight: function (element) {
            $(element)
                .closest('.form-group')
                .removeClass('has-danger');
        }
    });

    $("#signup-form").validate({
        rules: {
            username: "required",
            name: "required",
            sirname: "required",
            email:{
                required: true,
                email: true,
            },
            password:"required",
            password2:{
                required: true,
                equalTo: "#password"
            }
        }
    });
    $('#signup').click(function () {
        if ($('#signup-form').valid()) {
            var input = $("#username").val();
            $.post("checkLogin", {
                username: input
            }, function (data) {
                console.log(data);
                if (data == 0) {
                    alert("your username is already taken");
                } else {
                    alert("save");
                    signup();   
                }
            }, "json");
        }
    });


    function signup() {
        var username = $("#username").val();
        var name = $("#name").val();
        var sirname = $("#sirname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        $.post("signup", {
            username: username,
            name: name,
            sirname: sirname,
            email: email,
            password: password
        }, function (data) {});
        window.location.href = 'login';
    }
});