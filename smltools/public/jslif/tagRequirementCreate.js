$(document).ready(function() {
    //validate
    
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
    $("#createRequirement-form").validate({
        rules: {
            resourcename: {
                required: true,
                remote: {
                    url:  baseUrl+"resource/checkDupplicateRequirementName",
                    type: "post",
                    data: {
                        resourcename: function () {
                            return $("#requirementname").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        }
                    }
                }
            },
        },
        messages: {
            resourcename: {
                required: "Requirement name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    });

    $("#editRequirement").validate({
        rules: {
            editResName: {
                required: true,
                remote: {
                    url:  baseUrl+"resource/checkDupplicateRequirementEditName",
                    type: "post",
                    data: {
                        resourcename: function () {
                            return $("#editRequirementName").val()
                        },
                        idProject: function () {
                            return $("#idProjectEdit").val()
                        },
                        idResource: function () {
                            return $("#idRequirementEdit").val()
                        }
                    }
                }
            },
        },
        messages: {
            editResName: {
                required: "Requirement name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    });

    $('#saveRequirement').click(function (){
        if($("#createRequirement-form").valid()){
            var idProject = $("#idProject").val();
            var requirementname = $("#requirementname").val();
            var description = $("#description").val();
            console.log(Description);

            $.ajax({
                type:'POST',
                url: baseUrl+"requirement/save",
                data:{
                    requirementname: requirementname,
                    description: description,
                    idProject : idProject
                },
                success:function(data){
                    window.location.href=baseUrl+"requirement";
                }
            })

        }

    });


    $('#saveEditResource').click(function (){
        if($("#editResource").valid()){
            var resourcename = $("#editResName").val();
            var Description = $("#editResDesCription").val();
            var idProject = $("#idProjectEdit").val();
            var idResource = $("#idResourceEdit").val();
            var includes =$("#Editincludes").tagsinput('items')
            item4 = {};
            $.each(includes, function(index, input){
                item4 [index] = input.value
            });

            var rOwner =$("#EditrOwner").tagsinput('items')
            item1 = {};
            $.each(rOwner, function(index, input){
                item1 [index] = input.value
            });

            var pOwner =$("#EditpOwner").tagsinput('items')
            item2 = {};
            $.each(pOwner, function(index, input){
                item2 [index] = input.value
            });

            var maintainer =$("#Editmaintainer").tagsinput('items')
            item3 = {};
            $.each(maintainer, function(index, input){
                item3 [index] = input.value
            });

            $.ajax({
                type:'POST',
                url:  baseUrl+"resource/save",
                data:{
                    resourcename: resourcename,
                    Description: Description,
                    includes: item4,
                    rOwner : item1,
                    pOwner : item2,
                    maintainer: item3,
                    idProject : idProject,
                    idResource : idResource
                },
                success:function(data){
                    window.location.href=baseUrl+"resource";
                }
            })
        }

    });
});
