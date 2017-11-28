$(document).ready(function() {

    // save resource
    $('#saveResource').click(function (){
        var resourcename = $("#resourcename").val();
        var Description = $("#Description").val();
        var includes = $("#includes").val();

        // edit this into tag input later 
        var rOwner = $("#rOwner").val();
        var pOwner = $("#pOwner").val();
        var maintainer = $("#maintainer").val();


        // sent data to controller

        $.ajax({
            type:'POST',
            url: "save",
            data:{
                resourcename: resourcename,
                Description: Description,
                includes: includes,
                rOwner : rOwner,
                pOwner : pOwner,
                maintainer: maintainer
            },
            success:function(data){
                window.location.href="index";
            }
        })


    });
});