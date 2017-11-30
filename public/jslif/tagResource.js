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

    function tagrOwner(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });

        Stakeholder.initialize();

        var rOwner = $('#rOwner');
        rOwner.tagsinput({
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

    function tagpOwner(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });

        Stakeholder.initialize();

        var pOwner = $('#pOwner');
        pOwner.tagsinput({
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

    function tagmaintainer(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });

        Stakeholder.initialize();

        var maintainer = $('#maintainer');
        maintainer.tagsinput({
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


    var project = "1";  //input project id later
    
    $.post("findStake",{

        project : project
    }, function(data){
      console.log(data);
        var auto = createJSON(data);
        var n = createString(auto);

        tagrOwner(n);
        tagpOwner(n);
        tagmaintainer(n);

    },  "json");

    // save resource
    $('#saveResource').click(function (){
        var resourcename = $("#resourcename").val();
        var Description = $("#Description").val();
        var includes = $("#includes").val();

        // edit this into tag input later 

        //var rOwner = $("#rOwner").val();
        var pOwner = $("#pOwner").val();
        var maintainer = $("#maintainer").val();

        var rOwner =$("#rOwner").taginput('items')
        item1 = {};
        $each(rOwner, function(index, input){
            item1 [index] = input.value
        });


        // sent data to controller

        $.ajax({
            type:'POST',
            url: "save",
            data:{
                resourcename: resourcename,
                Description: Description,
                includes: includes,
                rOwner : item1,
                pOwner : pOwner,
                maintainer: maintainer
            },
            success:function(data){
                window.location.href="index";
            }
        })



    });
});