$(document).ready(function() {
   
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
       
    });


    $("#EditColla").click(function (){
        
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
               
            });
});