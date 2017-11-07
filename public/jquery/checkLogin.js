$(document).ready(function () {
    $.validator.addMethod("nowhitespace", function (value, element) {
        return this.optional(element) || /^\S+$/i.test(value);
    }, "No space please");

    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function (element) {
            $(element)
                .closest('.form-control')
                .addClass('is-invalid');
        },
        unhighlight: function (element) {
            $(element)
                .closest('.form-control')
                .removeClass('is-invalid');
        }
    });

    $("#signup-form").validate({
        rules: {
            username:{
                required: true,
                nowhitespace: true
            },
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
        },
        messages: {
            username:{
                required :"Username is required"
            },
            name:{
                required :"Name is required"
            },
            sirname:{
                required :"Lastname is required"
            },
            email:{
                required :"Email is required"
            },
            password:{
                required :"Password is required"
            },
            password2:{
                required :"You need to confirm password",
                equalTo: "Please enter your password again"
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
        }, function (data) {

        }); 
        window.location.href = 'login';
       
    }
});