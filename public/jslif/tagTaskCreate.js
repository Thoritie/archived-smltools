
$(document).ready(function() {
    
    function createJSON(data) {
        jsonObj = [];
        $.each(data, function(index ,data){

            item = {}
            item ["value"] = data.value;
            item ["text"] = data.name;
            item ["continent"] = "";
            item ["index"] = data._id.$id;
            
            jsonObj.push(item);
        });

        item = {}
        item ["value"] = 0;
        item ["text"] = "?";
        item ["continent"] = "";
        jsonObj.push(item);
       
        return jsonObj;
    }

    function createString(auto){
        return JSON.stringify(auto)
    }

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

        var project = "1";     //input project id .val()

        $.post("findStake",{
            project : project
        }, function(data){
           
                var auto = createJSON(data);
                var n = createString(auto);
                 console.log(n);
                tagOwner(n);
                tagCollaburator(n);
                tagOwnerToBe(n);
                tagcollaboratorToBe(n);
        },  "json");


        
        //save task
        $('#saveTask').click(function () {
            var taskname = $("#taskname").val();
            var isA = $("#isA").val();
            var Description = $("#isA").val();
            var includes = $("#includes").val();
            var asIsState = $("#asIsState").val();
           
            var owner = $("#owner").tagsinput('items')
            item1 = {};
            $.each(owner, function(index ,input){   
                item1 [index] = input.index
            });

            var collaburator = $("#collaburator").tagsinput('items')
            item2 = {};
            $.each(collaburator, function(index ,input){   
                item2 [index] = input.index
            });
            var regulator = $("#regulator").val();
            var uses = $("#uses").val();
            var produces = $("#produces").val();
            var toBeState = $("#toBeState").val();

            var ownerToBe = $("#ownerToBe").tagsinput('items')
            item3 = {};
            $.each(ownerToBe, function(index ,input){   
                item3 [index] = input.index
            });
            var collaboratorToBe = $("#collaboratorToBe").tagsinput('items')
            item4 = {};
            $.each(collaboratorToBe, function(index ,input){   
                item4 [index] = input.index
            });
            var toUse = $("#toUse").val();
            var toProduce = $("#toProduce").val();
            var idProject = $("#idProject").val();
           
           
                $.post("save", {
                    taskname : taskname,
                    isA : isA,
                    Description : Description,
                    includes : includes,
                    asIsState : asIsState,
                    owner : item1,
                    collaburator : item2,
                    regulator : regulator,
                    uses : uses,
                    produces : produces,
                    toBeState : toBeState,
                    ownerToBe : item3,
                    collaboratorToBe : item4,
                    toUse : toUse,
                    toProduce : toProduce,
                    idProject : idProject
                }, function (data) {
                },"json");
            });

           
        
});
