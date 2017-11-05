$(document).ready(function () {

    //task
    $('#signup').click(function () {
        var input = $("#username").val();
        $.post("checkLogin", {
            username: input
        }, function (data) {
            console.log(data);
            if (data == 0) {
                alert("your username is already taken");
            } else {
                if ($('#password').val() == $('#password2').val()) {
                    alert("save");
                    signup();
                }else {
                    alert("your password Not Matching");
                }
                
            }
        }, "json");
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
            sirname : sirname,
            email : email,
            password : password
        }, function (data) {
        });
        window.location.href = 'login';
    }
});