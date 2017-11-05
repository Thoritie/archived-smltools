
$(document).ready(function() {
    
    function createJSON(data) {
        jsonObj = [];
        
        $.each(data, function(index ,data){

            item = {}
            item ["value"] = index+1;
            item ["text"] = data.name;
            item ["continent"] = "";
    
            jsonObj.push(item);
        });
    
         //console.log(jsonObj);
        return jsonObj;
    }


    function createString(auto){
        return JSON.stringify(auto)
    }


    function test(n){
        
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
    
        });

        
        Stakeholder.initialize();
    
        var elt2 = $('#toUse');
        elt2.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter()
            }
        });
        elt2.tagsinput('add', { "value": 1, "text": "first", "continent": "" });
    }

    //findStake ชื่อ action return name stakeholder กลับมา
        var project = "1";     

        $.post("findStake",{
            project : project
        }, function(data){
             var auto = createJSON(data);
              var n = createString(auto);
             test(n);
            console.log(data);
        },  "json");

       
});
