
$(document).ready(function() {
    
    function createJSON(data) {
        jsonObj = [];
        var i = 2;
        $.each(data, function(index ,data){

            item = {}
            item ["value"] = i;
            item ["text"] = data.name;
            item ["continent"] = "";
            i++
            jsonObj.push(item);
        });

        item = {}
        item ["value"] = 1;
        item ["text"] = "?";
        item ["continent"] = "";
        jsonObj.push(item);

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
                },
            }
        });
      

    }


        // var tags = $('#collaboratorToBe').val()
        // var qes ="1";
        // console.log(qes.indexOf(tags));
        // if(qes.indexOf(tags) > -1){
        //     $('#collaboratorToBe').tagsinput('removeAll');
        // }
        var project = "1";     //input project id .val()

        $.post("findStake",{
            project : project
        }, function(data){
                var auto = createJSON(data);
                var n = createString(auto);
                tagcollaboratorToBe(n);
        },  "json");


});
