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


   
    function createJSON(data) {
        jsonObj = [];
        $.each(data, function(index ,data){

            item = {}
            item ["value"] = data._id.$id;
            item ["text"] = data.name;
            item ["continent"] = "";
            
            jsonObj.push(item);
        });

        item = {}
        item ["value"] = 0;
        item ["text"] = "?";
        item ["continent"] = "";
        jsonObj.push(item);
       
        return jsonObj;
    }

    function createString(auto) {
        return JSON.stringify(auto)
    }

    

    function taginclude(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });

        Stakeholder.initialize();

        var includeColla = $('#includeColla');
        includeColla.tagsinput({
            itemValue: 'value',
            itemText:'text',
            typeaheadjs : {
                name :'name',
                displayKey:'text',
                source : Stakeholder.ttAdapter(),
                templates :{
                    empty:'<div class="empty-message text-info"> No matches.</div>'
                }
            }
        });
    }



    var idproject = $("#idProject").val();
    
    $.post(baseUrl+"collaborationsetting/findTask",{

        project : idproject
    }, function(data){
      
        var auto = createJSON(data);
        var n = createString(auto);

        taginclude(n);
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