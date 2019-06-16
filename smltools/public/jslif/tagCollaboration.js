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
    $("#createCollaboration-form").validate({
        rules: {
            CollaborationSettingName: {
                required: true,
                remote: {
                    url: baseUrl+"Collaborationsetting/checkDupName",
                    type: "post",
                    data: {
                        CollaburationName: function () {
                            return $("#CollaborationSettingName").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        }
                    }
                }
            },
            DescriptionColla :{
                required: true,
            },
        },
        messages: {
            CollaborationSettingName: {
                required: "CollaborationSetting name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            },
            DescriptionColla:{
                required: "description  is required",
            }
        }
    })

    $("#editCollaboration-form").validate({
        rules: {
            EdCollaborationSettingName: {
                required: true,
                remote: {
                    url: baseUrl+"Collaborationsetting/checkDupEditName",
                    type: "post",
                    data: {
                        CollaburationName: function () {
                            return $("#EdCollaborationSettingName").val()
                        },
                        idProject: function () {
                            return $("#EdIdProject").val()
                        },
                        idCollaburation: function () {
                            return $("#EdId").val()
                        }
                    }
                }
            },
            EdDescription:{
                required: true,
            }
        },
        messages: {
            EdCollaborationSettingName: {
                required: "Task name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            },
            EdDescription:{
                required: "description name is required",
            }
        }
    })


    var idproject = $("#idProject").val();
    $.post(baseUrl+"collaborationsetting/findTask",{
        project : idproject
    }, function(data){
        var auto = createJSON(data);
        var n = createString(auto);

            Tasks = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Tasks.initialize();
    
        var includeColla = $('#includeColla');
        includeColla.tagsinput({
            itemValue: 'value',
            itemText:'text',
            typeaheadjs : {
                name :'name',
                displayKey:'text',
                source : Tasks.ttAdapter(),
                templates :{
                    empty:'<div class="empty-message text-info" onclick="cloneModalTask($(\'#createTask\'))"> No matches.</div>'
                }
            }
        });
    },  "json");

    $.post(baseUrl+"task/findResource",{
        project : idproject
    }, function(data){
        var auto = createJSON(data);
        var n = createString(auto);
            Resource = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Resource.initialize();
    
    },  "json");

    $.post(baseUrl+"task/findStake",{
        project : idproject
    }, function(data){
        var auto = createJSON(data);
        var n = createString(auto);
        Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Stakeholder.initialize();
    
    },  "json");


    $("#saveColla").click(function (){
        if($("#createCollaboration-form").valid()){
            var Name = $("#CollaborationSettingName").val();
            var Description = $("#DescriptionColla").val();
            var idProject = $("#idProject").val();

            var include =$("#includeColla").tagsinput('items')
            item1 = {};
            $.each(include, function(index, input){
                item1 [index] = input.value
            });

            $.ajax({
                type:'POST',
                url: baseUrl+"collaborationsetting/save",
                data:{
                    Name: Name,
                    Description: Description,
                    idProject : idProject,
                    include : item1,
                },
                success:function(data){
                    window.location.href = baseUrl+"collaborationsetting";
                }
            })
        }
    });


    $("#EditColla").click(function (){
        if($("#editCollaboration-form").valid()){
                var id = $("#EdId").val();
                var Name = $("#EdCollaborationSettingName").val();
                var Description = $("#EdDescription").val();
                var idProject = $("#EdIdProject").val();
        
                var include =$("#EdInclude").tagsinput('items')
                item1 = {};
                $.each(include, function(index, input){
                    item1 [index] = input.value
                });
        
                $.ajax({
                    type:'POST',
                    url: baseUrl+"collaborationsetting/save",
                    data:{
                        id : id,
                        Name: Name,
                        Description: Description,
                        idProject : idProject,
                        include : item1,
                    },
                    success:function(data){
                        window.location.href = baseUrl+"collaborationsetting";
                    }
                })
        }
    });
});