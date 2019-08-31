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
   
    
    var projectId = $('#idProject').val();
    
    $('#sourcetype').change( (e) => {
        $('.sourcename').removeClass('hidden')
        var sourceType = $('#sourcetype').val();

        $.ajax({
            type: 'POST',
            url: baseUrl+"requirement/findRequirementSource",
            data: {
                projectId: projectId,
                sourceType: sourceType
            },
            success:function(data){
                json_data = JSON.parse(data)
                var cleaned_json = createJSON(json_data);
                var clean_data = createString(cleaned_json);
                
                SourceRequirement = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: JSON.parse(clean_data)
                });
                SourceRequirement.initialize();
        
                var from = $('#from');
                from.tagsinput({
                    itemValue: 'value',
                    itemText: 'text',
                    typeaheadjs: {
                        name: 'name',
                        displayKey: 'text',
                        source: SourceRequirement.ttAdapter(),
                        templates: {
                            empty:'<div id="nomatch" class="empty-message text-info"> No matches.</div>'
                        } 
                    }
                });
            }
        });
    });

    $('#saveRequirement').click(function (){
        if($("#createRequirement-form").valid()){
            var idProject = $("#idProject").val();
            var requirementname = $("#requirementname").val();
            var description = $("#description").val();
            var requirementtype = $("#requirementtype").val();
            var sourcetype = $("#sourcetype").val();

            $.ajax({
                type:'POST',
                url: baseUrl+"requirement/save",
                data:{
                    requirementname: requirementname,
                    description: description,
                    idProject : idProject,
                    requirementtype: requirementtype,
                    sourcetype: sourcetype
                },
                success:function(data){
                    window.location.href=baseUrl+"requirement";
                }
            })
        }

    });
});
