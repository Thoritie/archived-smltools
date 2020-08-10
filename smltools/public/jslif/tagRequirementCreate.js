$(document).ready(function() {
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
                    url:  baseUrl+"resource/checkDuplicateRequirementName",
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
            editRequirementName: {
                required: true,
                remote: {
                    url:  baseUrl+"requirement/checkDuplicateRequirementEditName",
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
            editRequirementName: {
                required: "Requirement name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    });


    var project = $('#idProject').val();

    $.post( baseUrl + "requirement/findTask", {
        project : project
    }, function(data) {
        json_data = JSON.parse(data)
        var cleaned_json = createJSON(json_data);
        var clean_data = createString(cleaned_json);

        Tasks = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(clean_data)
        });
        Tasks.initialize();

        var tasks = $('#tasks');
        tasks.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Tasks.ttAdapter(),
                templates: {
                    empty: '<div id="nomatch" class="empty-message text-info"> No matches.</div>'
                }
            }
        })
    })

    $.post( baseUrl + "requirement/findStakeholder", {
        project : project
    }, function(data) {
        json_data = JSON.parse(data)
        var cleaned_json = createJSON(json_data);
        var clean_data = createString(cleaned_json);

        Stakeholders = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(clean_data)
        });
        Stakeholders.initialize();

        var stakeholders = $('#stakeholders');
        stakeholders.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholders.ttAdapter(),
                templates: {
                    empty: '<div id="nomatch" class="empty-message text-info"> No matches.</div>'
                }
            }
        })
    })

    $('#saveRequirement').click(function (){
        if($("#createRequirement-form").valid()){
            var idProject = $("#idProject").val();
            var requirementname = $("#requirementname").val();
            var description = $("#description").val();
            var requirementtype = $("#requirementtype").val();

            var tasks = $("#tasks").tagsinput('items');
            tasks_value = {};
            $.each(tasks, function(index, input){
                tasks_value[index] = input.value;
            })

            var stakeholders = $("#stakeholders").tagsinput('items');
            stakeholders_value = {};
            $.each(stakeholders, function(index, input){
                stakeholders_value[index] = input.value;
            })

            $.ajax({
                type:'POST',
                url: baseUrl+"requirement/save",
                data:{
                    requirementname: requirementname,
                    description: description,
                    idProject : idProject,
                    requirementtype: requirementtype,
                    tasks: tasks_value,
                    stakeholders: stakeholders_value,
                },
                success:function(data){
                    window.location.href=baseUrl+"requirement";
                }
            })
        }
    });

    $('#saveEditRequirement').click(function (){
        if($("#editRequirement").valid()){
            var requirementname = $("#editRequirementname").val();
            var description = $("#editDescription").val();
            var idProject = $("#idProjectEdit").val();
            var requirementtype = $("#editRequirementtype").val();
            var idRequirement = $("#idRequirementEdit").val();

            console.log(idRequirement);

            var tasks = $("#editTasks").tagsinput("items");
            tasks_value = {};
            $.each(tasks, function(index, input){
                tasks_value[index] = input.value
            });

            var stakeholders = $("#editStakeholders").tagsinput("items");
            stakeholders_value = {};
            $.each(stakeholders, function(index, input){
                stakeholders_value[index] = input.value
            });


            $.ajax({
                type:'POST',
                url: baseUrl+"requirement/save",
                data: {
                    requirementname: requirementname,
                    description: description,
                    idProject: idProject,
                    requirementtype: requirementtype,
                    tasks: tasks_value,
                    stakeholders: stakeholders_value,
                    idRequirement: idRequirement,
                },
                success: function(data) {
                    window.location.href=baseUrl+"requirement";
                }
            })
        }
    });
});
