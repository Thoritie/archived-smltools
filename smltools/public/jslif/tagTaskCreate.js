
var projectid = $("#idProject").val();
//modal 

function showModalNewStakeholder(){
	$("#createStakeholder").modal("show");
};

function showModalNewResource(){
	$("#createResource").modal("show");
};

function showModalNewTask(){
	$("#createTask").modal("show");
};
///////////////////// -- Validate -- ///////////////////////////

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
    $("#createTask-form").validate({
        rules: {
            taskname: {
                required: true,
                remote: {
                    url: baseUrl+"task/checkDupTaskName",
                    type: "post",
                    data: {
                        taskname: function () {
                            return $("#taskname").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        }

                    }
                }
            },
        },
        messages: {
            taskname: {
                required: "Task name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    })

    $("#editTask-form").validate({
        rules: {
            taskname: {
                required: true,
                remote: {
                    url: baseUrl+"task/checkDupEditTaskName",
                    type: "post",
                    data: {
                        taskname: function () {
                            return $("#Edname").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        },
                        idTask: function () {
                            return $("#EdidTask").val()
                        }

                    }
                }
            },
        },
        messages: {
            taskname: {
                required: "Task name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    })

    var project = $("#idProject").val();;     //input project id .val()

        $.post(baseUrl+"task/findStake",{
            project : project
        }, function(data){
               
                var auto = createJSON(data);
                var n = createString(auto);
                Stakeholder = new Bloodhound({
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
                            empty: '<div id="nomatch" class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                        }
                    }
                });

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
                            empty: '<div class="empty-message text-info add-stakeholder" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                        }
                    }
                });

                var regulator = $('#regulator');
                regulator.tagsinput({
                    itemValue: 'value',
                    itemText: 'text',
                    typeaheadjs: {
                        name: 'name',
                        displayKey: 'text',
                        source: Stakeholder.ttAdapter(),
                        templates : {
                            highlight: true,
                            empty: '<div class="empty-message text-info add-stakeholder" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                        }
                    }
                });



                var ownerToBe = $('#ownerToBe');
                ownerToBe.tagsinput({
                    itemValue: 'value',
                    itemText: 'text',
                    typeaheadjs: {
                        name: 'name',
                        displayKey: 'text',
                        source: Stakeholder.ttAdapter(),
                        templates : {
                            empty: '<div class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                        }
                    }
                });


                
                var collaboratorToBe = $('#collaboratorToBe');
                collaboratorToBe.tagsinput({
                    itemValue: 'value',
                    itemText: 'text',
                    typeaheadjs: {
                        name: 'name',
                        displayKey: 'text',
                        source: Stakeholder.ttAdapter(),
                        templates : {
                            empty: '<div class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                        },
                    }
                });
              
              
        },  "json");




        /* resourceeeeeeeeeeeeeeeeeeeeeeeeee*/ 

      

      

            $.post(baseUrl+"task/findResource",{
                project : projectid
            }, function(data){
                    var auto = createJSON(data);
                    var n = createString(auto);

                    Resource = new Bloodhound({
                        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                        local: JSON.parse(n)
                    });

                    Resource.initialize();
                   
                    var uses = $('#uses');
                    uses.tagsinput({
                        itemValue: 'value',
                        itemText: 'text',
                        typeaheadjs: {
                            name: 'name',
                            displayKey: 'text',
                            source: Resource.ttAdapter(),
                            templates : {
                                empty: '<div class="empty-message text-info resourse-emptry" onclick="cloneModalResource($(\'#createResource\'))"> No matches.</div>'
                            },
                        }
                    });

                    var produces = $('#produces');    
                    produces.tagsinput({
                        itemValue: 'value',
                        itemText: 'text',
                        typeaheadjs: {
                            name: 'name',
                            displayKey: 'text',
                            source: Resource.ttAdapter(),
                            templates : {
                                empty: '<div class="empty-message text-info" onclick="cloneModalResource($(\'#createResource\'))"> No matches.</div>'
                            },
                        }
                    });

                    var toUse = $('#toUse');
                    toUse.tagsinput({
                        itemValue: 'value',
                        itemText: 'text',
                        typeaheadjs: {
                            name: 'name',
                            displayKey: 'text',
                            source: Resource.ttAdapter(),
                            templates : {
                                empty: '<div class="empty-message text-info" onclick="cloneModalResource($(\'#createResource\'))"> No matches.</div>'
                            },
                        }
                    });

                    var toProduce = $('#toProduce');
                    toProduce.tagsinput({
                        itemValue: 'value',
                        itemText: 'text',
                        typeaheadjs: {
                            name: 'name',
                            displayKey: 'text',
                            source: Resource.ttAdapter(),
                            templates : {
                                empty: '<div class="empty-message text-info" onclick="cloneModalResource($(\'#createResource\'))"> No matches.</div>'
                            },
                        }
                    });

            },  "json");

           
        

        
        //find Tasks 


        $.post(baseUrl+"task/findTask",{
            project : projectid
        }, function(data){
            var auto = createJSON(data);
            var n = createString(auto);

                Tasks = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: JSON.parse(n)
            });

            Tasks.initialize();

            var includes = $('#includes');
            includes.tagsinput({
                itemValue: 'value',
                itemText: 'text',
                typeaheadjs: {
                    name: 'name',
                    displayKey: 'text',
                    source: Tasks.ttAdapter(),
                    templates : {
                        empty: '<div class="empty-message text-info" onclick="cloneModalTask($(\'#createTask\'))"> No matches.</div>'
                    },
                }
            });
        },  "json");

        //save task ///////////////////////////////////////////////////////
                $('#saveTask').click(function () {
                    if($("#createTask-form").valid()){
                        var taskname = $("#taskname").val()
                        var layerWorld = $("#layerWorld").val()
                        var isA = $("#isA").val()
                        var Description = $("#Description").val()
                        var includes = $("#includes").tagsinput('items');
                        itemInclude = {};
                        $.each(includes, function(index ,input){   
                            itemInclude [index] = input.value
                        });

                        var asIsState = $("#asIsState").val()
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

                        var regulator = $("#regulator").tagsinput('items')
                        itemRegulator = {};
                        $.each(regulator, function(index ,input){   
                            itemRegulator [index] = input.value
                        });
                        
                        var uses = $("#uses").tagsinput('items')
                        itemUses = {};
                        $.each(uses, function(index ,input){   
                            itemUses [index] = input.value
                        });

                        var produces = $("#produces").tagsinput('items')
                        itemProduces = {};
                        $.each(produces, function(index ,input){   
                            itemProduces [index] = input.value
                        });

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
                        var toUse = $("#toUse").tagsinput('items')
                        itemToUse = {};
                        $.each(toUse, function(index ,input){   
                            itemToUse [index] = input.value
                        });

                        var toProduce = $("#toProduce").tagsinput('items')
                        itemToProduces = {};
                        $.each(toProduce, function(index ,input){   
                            itemToProduces [index] = input.value
                        });

                        var idProject = $("#idProject").val();
                    
                            $.ajax({
                                type:'POST',
                                url: baseUrl+"task/save",
                                data:{
                                    taskname : taskname,
                                    isA : isA,
                                    layerWorld : layerWorld,
                                    Description : Description,
                                    includes : itemInclude,
                                    asIsState : asIsState,
                                    owner : item1,
                                    collaburator : item2,
                                    regulator : itemRegulator,
                                    uses : itemUses,
                                    produces : itemProduces,
                                    toBeState : toBeState,
                                    ownerToBe : item3,
                                    collaboratorToBe : item4,
                                    toUse : itemToUse,
                                    toProduce : itemToProduces,
                                    idProject : idProject
                                },
                                success:function(data){
                                    window.location.href = baseUrl+"task";
                                }
                            })    
                    }
                });



         //edit task 
         $('#editTask').click(function () {
            if($("#editTask-form").valid()){
                var taskname = $("#Edname").val();
                var isA = $("#EdisA").val();
                var layerWorld = $("#ElayerWorld").val()
                var Description = $("#EdDescription").val();
                var includes = $("#Edincludes").tagsinput('items')
                itemIncludes = {};
                $.each(includes, function(index ,input){   
                    itemIncludes [index] = input.value
                });

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

                var regulator = $("#Edregulator").tagsinput('items')
                itemRegulator = {};
                $.each(regulator, function(index ,input){   
                    itemRegulator [index] = input.value
                });

                var uses = $("#Eduses").tagsinput('items')
                itemUses = {};
                $.each(uses, function(index ,input){   
                    itemUses [index] = input.value
                });

                var produces = $("#Edproduces").tagsinput('items')
                itemProduces = {};
                $.each(produces, function(index ,input){   
                    itemProduces [index] = input.value
                });

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

                var toUse = $("#EdtoUse").tagsinput('items')
                itemtoUse = {};
                $.each(toUse, function(index ,input){   
                    itemtoUse [index] = input.value
                });

                var toProduce = $("#EdtoProduce").tagsinput('items')
                itemtoProduce = {};
                $.each(toProduce, function(index ,input){   
                    itemtoProduce [index] = input.value
                });
                var idProject = $("#idProject").val();
                var idTask = $("#EdidTask").val();
                
                    $.ajax({
                        type:'POST',
                        url: baseUrl+"task/save",
                        data:{
                            taskname : taskname,
                            isA : isA,
                            layerWorld : layerWorld,
                            Description : Description,
                            includes : itemIncludes,
                            asIsState : asIsState,
                            owner : item1,
                            collaburator : item2,
                            regulator : itemRegulator,
                            uses : itemUses,
                            produces : itemProduces,
                            toBeState : toBeState,
                            ownerToBe : item3,
                            collaboratorToBe : item4,
                            toUse : itemtoUse,
                            toProduce : itemtoProduce,
                            idProject : idProject,
                            idTask : idTask
                        },
                        success:function(data){
                            window.location.href = baseUrl+"task";
                        }
                    })    
                }
        });



});
