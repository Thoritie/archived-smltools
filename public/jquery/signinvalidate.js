$(document).ready(function () {
    $("#signin-form").validate({
        rules: {
            username: "required",
            password: "required",
           
        }
    });
});