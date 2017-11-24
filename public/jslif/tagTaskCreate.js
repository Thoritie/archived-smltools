function showModalNewStakeholder(){
	$("div.createStakeholder").modal("show");
};

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
                    empty: '<div id="nomatch" class="empty-message text-info" onclick="showModalNewStakeholder()"> No matches.</div>'
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
	                	highlight: true,
	                    empty: '<div class="empty-message text-info add-stakeholder" onclick="showModalNewStakeholder()"> No matches.</div>'
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
                    empty: '<div class="empty-message text-info" onclick="showModalNewStakeholder()"> No matches.</div>'
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
                    empty: '<div class="empty-message text-info" onclick="showModalNewStakeholder()"> No matches.</div>'
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
                
                tagOwner(n);
                tagCollaburator(n);
                tagOwnerToBe(n);
                tagcollaboratorToBe(n);
        },  "json");


        //save task
                $('#saveTask').click(function () {
                    var taskname = $("#taskname").val();
                    var isA = $("#isA").val();
                    var Description = $("#Description").val();
                    var includes = $("#includes").val();
                    var asIsState = $("#asIsState").val();
                   
                    var owner = $("#owner").tagsinput('items')
                    item1 = {};
                    $.each(owner, function(index ,input){   
                        item1 [index] = input.value
                    });
        
                    var collaburator = $("#collaburator").tagsinput('items')
                    item2 = {};
                    $.each(collaburator, function(index ,input){   
                        item2 [index] = input.value
                    });
                    var regulator = $("#regulator").val();
                    var uses = $("#uses").val();
                    var produces = $("#produces").val();
                    var toBeState = $("#toBeState").val();
        
                    var ownerToBe = $("#ownerToBe").tagsinput('items')
                    item3 = {};
                    $.each(ownerToBe, function(index ,input){   
                        item3 [index] = input.value
                    });
                    var collaboratorToBe = $("#collaboratorToBe").tagsinput('items')
                    item4 = {};
                    $.each(collaboratorToBe, function(index ,input){   
                        item4 [index] = input.value
                    });
                    var toUse = $("#toUse").val();
                    var toProduce = $("#toProduce").val();
                    var idProject = $("#idProject").val();
                   
                        $.ajax({
                            type:'POST',
                            url: "save",
                            data:{
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
                            },
                            success:function(data){
                                window.location.href="index";
                            }
                        })    
                });



         //edit task 
         $('#editTask').click(function () {
            var taskname = $("#Edname").val();
            var isA = $("#EdisA").val();
            var Description = $("#EdDescription").val();
            var includes = $("#Edincludes").val();
            var asIsState = $("#EdasIsState").val();
           
            var owner = $("#Edowner").tagsinput('items')
            item1 = {};
            $.each(owner, function(index ,input){   
                item1 [index] = input.value
            });

            var collaburator = $("#Edcollaburator").tagsinput('items')
            item2 = {};
            $.each(collaburator, function(index ,input){   
                item2 [index] = input.value
            });
            var regulator = $("#Edregulator").val();
            var uses = $("#Eduses").val();
            var produces = $("#Edproduces").val();
            var toBeState = $("#EdtoBeState").val();

            var ownerToBe = $("#EdownerToBe").tagsinput('items')
            item3 = {};
            $.each(ownerToBe, function(index ,input){   
                item3 [index] = input.value
            });
            var collaboratorToBe = $("#EdcollaboratorToBe").tagsinput('items')
            item4 = {};
            $.each(collaboratorToBe, function(index ,input){   
                item4 [index] = input.value
            });
            var toUse = $("#EdtoUse").val();
            var toProduce = $("#EdtoProduce").val();
            var idProject = $("#EdidProject").val();
            var idTask = $("#EdidTask").val();
           
                $.ajax({
                    type:'POST',
                    url: "save",
                    data:{
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
                        idProject : idProject,
                        idTask : idTask
                    },
                    success:function(data){
                        window.location.href="index";
                    }
                })    
        });


});
