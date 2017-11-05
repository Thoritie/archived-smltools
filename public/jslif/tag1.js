
$(document).ready(function() {
    
    function createJSON(data) {
        jsonObj = [];
        var i=1;
        $.each(data, function(index ,data){
    
            var value = i;
            var text = data.name;
            var continent ="";

            item = {}
            item ["value"] = value;
            item ["text"] = text;
            item ["continent"] = continent;
    
            jsonObj.push(item);
        });
    
         console.log(jsonObj);
        return jsonObj;
    }

    function test(auto){
        console.log(auto);
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch:  JSON.stringify(auto)
    
        });
    
        Stakeholder.initialize();
    
        var elt2 = $('#toUse');
        elt2.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'cities',
                displayKey: 'text',
                source: Stakeholder.ttAdapter()
            }
        });
        elt2.tagsinput('add', { "value": 1, "text": "first", "continent": "" });
    }

    //findStake ชื่อ action return name stakeholder กลับมา
        $.post("findStake",{    
        }, function(data){
            // var auto = createJSON(data);
            // test(auto);
         console.log(data);
        },  "json");
    
    
    


       


});
