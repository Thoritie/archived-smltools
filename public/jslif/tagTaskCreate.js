var  Resource;
var Stakeholder;
var projectid = $("#idProject").val();
//modal 

function showModalNewStakeholder(){
	$("#createStakeholder").modal("show");
};

function showModalNewResource(){
	$("#createResource").modal("show");
};
///////////////////// -- Validate -- ///////////////////////////

$(document).ready(function() {
    tagResource();

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
                            return $("#EdidProject").val()
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


        var project = "1";     //input project id .val()

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
                            empty: '<div id="nomatch" class="empty-message text-info" onclick="cloneModal($(\'#createStakeholder\'))"> No matches.</div>'
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
                            empty: '<div class="empty-message text-info add-stakeholder" onclick="cloneModal($(\'#createStakeholder\'))"> No matches.</div>'
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
                            empty: '<div class="empty-message text-info" onclick="cloneModal($(\'#createStakeholder\'))"> No matches.</div>'
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
                            empty: '<div class="empty-message text-info" onclick="cloneModal($(\'#createStakeholder\'))"> No matches.</div>'
                        },
                    }
                });

                // var ModalrOwnerResource = $('#ModalrOwnerResource');
                // ModalrOwnerResource.tagsinput({
                //     itemValue: 'value',
                //     itemText: 'text',
                //     typeaheadjs: {
                //         name: 'name',
                //         displayKey: 'text',
                //         source: Stakeholder.ttAdapter(),
                //         templates : {
                //             empty: '<div class="empty-message text-info" onclick="cloneModal($(\'#createStakeholder\'))"> No matches.</div>'
                //         },
                //     }
                // });

                // var ModalpOwnerResource = $('#ModalpOwnerResource');
                // ModalpOwnerResource.tagsinput({
                //     itemValue: 'value',
                //     itemText: 'text',
                //     typeaheadjs: {
                //         name: 'name',
                //         displayKey: 'text',
                //         source: Stakeholder.ttAdapter(),
                //         templates : {
                //             empty: '<div class="empty-message text-info" onclick="cloneModal($(\'#createStakeholder\'))"> No matches.</div>'
                //         },
                //     }
                // });


                // var ModalmaintainerResource = $('#ModalmaintainerResource');
                // ModalmaintainerResource.tagsinput({
                //     itemValue: 'value',
                //     itemText: 'text',
                //     typeaheadjs: {
                //         name: 'name',
                //         displayKey: 'text',
                //         source: Stakeholder.ttAdapter(),
                //         templates : {
                //             empty: '<div class="empty-message text-info" onclick="cloneModal($(\'#createStakeholder\'))"> No matches.</div>'
                //         },
                //     }
                // });
              
              
        },  "json");




        /* resourceeeeeeeeeeeeeeeeeeeeeeeeee*/ 

      

        function tagResource(){
            
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
                                empty: '<div class="empty-message text-info resourse-emptry" onclick="cloneModal($(\'#createResource\'))"> No matches.</div>'
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
                                empty: '<div class="empty-message text-info" onclick="cloneModal($(\'#createResource\'))"> No matches.</div>'
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
                                empty: '<div class="empty-message text-info" onclick="cloneModal($(\'#createResource\'))"> No matches.</div>'
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
                                empty: '<div class="empty-message text-info" onclick="cloneModal($(\'#createResource\'))"> No matches.</div>'
                            },
                        }
                    });

//                    var ModalincludesResource = $('.ModalincludesResource');
//                    ModalincludesResource.tagsinput({
//                        itemValue: 'value',
//                        itemText: 'text',
//                        typeaheadjs: {
//                            name: 'name',
//                            displayKey: 'text',
//                            source: Resource.ttAdapter(),
//                            templates : {
//                                empty: '<div class="empty-message text-info" onclick="showModalNewResource()"> No matches.</div>'
//                            },
//                        }
//                    }); 

            },  "json");

           
        }

        




        //save task ///////////////////////////////////////////////////////
                $('#saveTask').click(function () {
                    if($("#createTask-form").valid()){
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
                        var uses = $("#uses").tagsinput('items')
                        itemUses = {};
                        $.each(collaburator, function(index ,input){   
                            itemUses [index] = input.value
                        });

                        var produces = $("#produces").tagsinput('items')
                        itemProduces = {};
                        $.each(collaburator, function(index ,input){   
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
                        $.each(collaburator, function(index ,input){   
                            itemToUse [index] = input.value
                        });

                        var toProduce = $("#toProduce").tagsinput('items')
                        itemToProduces = {};
                        $.each(collaburator, function(index ,input){   
                            itemToProduces [index] = input.value
                        });

                        var idProject = $("#idProject").val();
                    
                            $.ajax({
                                type:'POST',
                                url: baseUrl+"task/save",
                                data:{
                                    taskname : taskname,
                                    isA : isA,
                                    Description : Description,
                                    includes : includes,
                                    asIsState : asIsState,
                                    owner : item1,
                                    collaburator : item2,
                                    regulator : regulator,
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
                                    window.location.href="index";
                                }
                            })    
                    }
                });



         //edit task 
         $('#editTask').click(function () {
            if($("#editTask-form").valid()){
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
                        url: baseUrl+"task/save",
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
                }
        });






    //save resource from  modal 
    //====================================================================================================


});
