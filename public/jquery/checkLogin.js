$(document).ready(function () {
    $.validator.addMethod("nowhitespace", function (value, element) {
        return this.optional(element) || /^\S+$/i.test(value);
    }, "No space please");

    // $.validator.addMethod("dupName", function (value, element) {
    //     var response;
      
    //         $.post("test", {
    //             username: value
    //         }, function (response) {
    //             console.log(response);
    //             response = (response == 'true') ? true : false;
    //         }, "json")
    //     return response;
    // }, "Username is Already Taken");

    $.validator.setDefaults({
        errorClass: 'badge badge-danger',
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
                if(data==0)
                {
                   alert("Username is already taken");
                }else
                {
                    alert("Save");
                    window.location.href = 'login';
                } 
            },"json");
        }
    });


    // function signup() {
    //     var username = $("#username").val();
    //     var name = $("#name").val();
    //     var sirname = $("#sirname").val();
    //     var email = $("#email").val();
    //     var password = $("#password").val();
    //     $.post("signup", {
    //         username: username,
    //         name: name,
    //         sirname: sirname,
    //         email: email,
    //         password: password
    //     }, function (data) {

    //     }); 
        
       
    // }
});