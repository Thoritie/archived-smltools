
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
        return jsonObj;
    }

    function createString(auto){
        return JSON.stringify(auto)
    }


    //input id owner

    function tagOwner(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
    
        });
        
        Stakeholder.initialize();
    
        var owner = $('#owner');
        owner.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates : {
                    empty: '<div class="empty-message text-info"> No matches.</div>'
                }
            }
        });
        owner.tagsinput('add', { "value": 1, "text": "first", "continent": "" });
    }

            //findStake ชื่อ action return name stakeholder กลับมา
        var project = "1";     //input project id .val()

        $.post("findStake",{
            project : project
        }, function(data){
                var auto = createJSON(data);
                var n = createString(auto);
                tagOwner(n);
        },  "json");
 

    ///---------------input id collaburator

    function tagCollaburator(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
    
        });
        
        Stakeholder.initialize();
    
        var collaburator = $('#collaburator');
        collaburator.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates : {
                    empty: '<div class="empty-message text-info"> No matches.</div>'
                }
            }
        });
        collaburator.tagsinput('add', { "value": 1, "text": "first", "continent": "" });
    }

        var project = "1";     //input project id .val()

        $.post("findStake",{
            project : project
        }, function(data){
                var auto = createJSON(data);
                var n = createString(auto);
                tagCollaburator(n);
        },  "json");



    ///---------------input id regulator

    function tagRegulator(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
    
        });
        
        Stakeholder.initialize();
    
        var regulator = $('#regulator');
        regulator.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates : {
                    empty: '<div class="empty-message text-info"> No matches.</div>'
                }
            }
        });
        regulator.tagsinput('add', { "value": 1, "text": "first", "continent": "" });
    }

        var project = "1";     //input project id .val()

        $.post("findStake",{
            project : project
        }, function(data){
                var auto = createJSON(data);
                var n = createString(auto);
                tagRegulator(n);
        },  "json");


 ///---------------input id regulator

    function tagRegulator(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
    
        });
        
        Stakeholder.initialize();
    
        var regulator = $('#regulator');
        regulator.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates : {
                    empty: '<div class="empty-message text-info"> No matches.</div>'
                }
            }
        });
        regulator.tagsinput('add', { "value": 1, "text": "first", "continent": "" });
    }

        var project = "1";     //input project id .val()

        $.post("findStake",{
            project : project
        }, function(data){
                var auto = createJSON(data);
                var n = createString(auto);
                tagRegulator(n);
        },  "json");


     ///---------------input id ownerToBe

     function tagOwnerToBe(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
    
        });
        
        Stakeholder.initialize();
    
        var ownerToBe = $('#ownerToBe');
        ownerToBe.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates : {
                    empty: '<div class="empty-message text-info"> No matches.</div>'
                }
            }
        });
        ownerToBe.tagsinput('add', { "value": 1, "text": "first", "continent": "" });
    }

        var project = "1";     //input project id .val()

        $.post("findStake",{
            project : project
        }, function(data){
                var auto = createJSON(data);
                var n = createString(auto);
                tagOwnerToBe(n);
        },  "json");
        
    
     ///---------------input id collaboratorToBe

     function tagcollaboratorToBe(n){
        var Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
    
        });
        
        Stakeholder.initialize();
    
        var collaboratorToBe = $('#collaboratorToBe');
        collaboratorToBe.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates : {
                    empty: '<div class="empty-message text-info"> No matches.</div>'
                }
            }
        });
        collaboratorToBe.tagsinput('add', { "value": 1, "text": "first", "continent": "" });
    }

        var project = "1";     //input project id .val()

        $.post("findStake",{
            project : project
        }, function(data){
                var auto = createJSON(data);
                var n = createString(auto);
                tagcollaboratorToBe(n);
        },  "json");
});
