var zindex = 2000;
var listModal = [];
var Resource;
var Stakeholder;
var Tasks;

function cloneModalResource($modal) {
    var newModal = $modal.clone();
    //gen id
    var idModal = new Date().getTime();
    newModal.attr("id", idModal);
    newModal.attr("style", "z-index: " + zindex++);
    
    
    //set onclick in button
    setFormIdInModalResource(idModal, newModal);
//    var onClickText = "cloneModal($('#" + idModal + "'))";
//    newModal.find('.btn.btn-info').attr('onclick',onClickText);

    //append to modal
    $modal.after(newModal);
    initDataResource(idModal);
    initDataStakeholder(idModal);
    
    //show modal
    var modalId = "#" + idModal;
    $(modalId).modal("show");
    validateModalResource('#form-'+idModal,idModal);
    //add id to list for using after
    //    listModal.push(idModal);
 
    //check questionmark
    questionMark($('#ModalincludesResource-'+idModal));
    questionMark($('#ModalrOwnerResource-'+idModal));
    questionMark($('#ModalpOwnerResource-'+idModal));
    questionMark($('#ModalmaintainerResource-'+idModal));

}

function cloneModalTask($modal) {
    var newModal = $modal.clone();
   
    var idModal = new Date().getTime();
    newModal.attr("id", idModal);
    newModal.attr("style", "z-index: " + zindex++);
  
    setFormIdInModalTask(idModal, newModal);

    $modal.after(newModal);
    initDataResource(idModal);
    initDataStakeholder(idModal);
    initDataTask(idModal);
    var modalId = "#" + idModal;
    $(modalId).modal("show");
    validateModalTask('#form-'+idModal,idModal);

    questionMark($('#ModalincludesTask-'+idModal));
    questionMark($('#ModalOwnerTask-'+idModal));
    questionMark($('#ModalCollaburatorTask-'+idModal));
    questionMark($('#ModalRegulatorTask-'+idModal));
    questionMark($('#ModalUsesTask-'+idModal));
    questionMark($('#ModalProducesTask-'+idModal));
    questionMark($('#ModalOwnerToBeTask-'+idModal));
    questionMark($('#ModalCollaboratorToBeTask-'+idModal));
    questionMark($('#ModalToUseTask-'+idModal));
    questionMark($('#ModalToProduceTask-'+idModal));
}

function cloneModalStakeholder($modal) {
    var newModal = $modal.clone();
   
    var idModal = new Date().getTime();
    newModal.attr("id", idModal);
    newModal.attr("style", "z-index: " + zindex++);
  
    // setFormIdInModalStakeholder(idModal, newModal);

    $modal.after(newModal);
    // initDataStakeholder(idModal);

    var modalId = "#" + idModal;
    $(modalId).modal("show");
    
}

function initDataResource(idModal){
	var ModalAddResource = $('.ModalAddResource-'+idModal);
    ModalAddResource.tagsinput({
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
}

function initDataStakeholder(idModal){
    var ModalAddStakeholder = $('.ModalAddStakeholder-'+idModal);
    ModalAddStakeholder.tagsinput({
        itemValue: 'value',
        itemText: 'text',
        typeaheadjs: {
            name: 'name',
            displayKey: 'text',
            source: Stakeholder.ttAdapter(),
            templates : {
                empty: '<div class="empty-message text-info" onclick="cloneModalResource($(\'#createStakeholder\'))"> No matches.</div>'
            },
        }
    });
}

   

function initDataTask(idModal){
    var ModalAddTask = $('.ModalAddTask-'+idModal);
    ModalAddTask.tagsinput({
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
}


function setFormIdInModalResource(idModal, newModal){
    newModal.find('#form').attr('id', 'form-'+idModal);
    newModal.find('#idProjectmodalResource').attr('id', 'idProjectmodalResource-'+idModal);
	newModal.find('#Modalresourcename').attr('id', 'Modalresourcename-'+idModal);
	newModal.find('#ModalDesResource').attr('id', 'ModalDesResource-'+idModal);
	newModal.find('#ModalincludesResource').addClass(' ModalAddResource-'+idModal);
    newModal.find('#ModalincludesResource').attr('id', 'ModalincludesResource-'+idModal);

    newModal.find('#ModalrOwnerResource').addClass(' ModalAddStakeholder-'+idModal);
    newModal.find('#ModalrOwnerResource').attr('id', 'ModalrOwnerResource-'+idModal);

    newModal.find('#ModalpOwnerResource').addClass(' ModalAddStakeholder-'+idModal);
    newModal.find('#ModalpOwnerResource').attr('id', 'ModalpOwnerResource-'+idModal);

    newModal.find('#ModalmaintainerResource').addClass(' ModalAddStakeholder-'+idModal);
	newModal.find('#ModalmaintainerResource').attr('id', 'ModalmaintainerResource-'+idModal);
    
	var onClickSave = "saveResourse('"+ idModal + "')";
	var idSaveModal = 'saveResourceformModal-'+idModal;
	newModal.find('#saveResourceformModal').attr('id', idSaveModal);
	newModal.find('#'+idSaveModal).attr('onclick', onClickSave);
}


function setFormIdInModalTask(idModal, newModal){
    newModal.find('#form').attr('id', 'form-'+idModal);
    newModal.find('#idProjectmodalTask').attr('id', 'idProjectmodalTask-'+idModal);
	newModal.find('#Modaltaskname').attr('id', 'Modaltaskname-'+idModal);
    newModal.find('#ModalIsATask').attr('id', 'ModalIsATask-'+idModal);
    newModal.find('#ModalDescriptionTask').attr('id', 'ModalDescriptionTask-'+idModal);
    
    newModal.find('#ModalincludesTask').addClass('ModalAddTask-'+idModal);
    newModal.find('#ModalincludesTask').attr('id', 'ModalincludesTask-'+idModal);

    newModal.find('#ModalasIsStateTask').attr('id', 'ModalasIsStateTask-'+idModal);

    newModal.find('#ModalOwnerTask').addClass(' ModalAddStakeholder-'+idModal);
    newModal.find('#ModalOwnerTask').attr('id', 'ModalOwnerTask-'+idModal);

    newModal.find('#ModalCollaburatorTask').addClass(' ModalAddStakeholder-'+idModal);
    newModal.find('#ModalCollaburatorTask').attr('id', 'ModalCollaburatorTask-'+idModal);

    newModal.find('#ModalregulatorTask').addClass(' ModalAddStakeholder-'+idModal);
    newModal.find('#ModalregulatorTask').attr('id', 'ModalRegulatorTask-'+idModal);

    newModal.find('#ModalUsesTask').addClass(' ModalAddResource-'+idModal);
    newModal.find('#ModalUsesTask').attr('id', 'ModalUsesTask-'+idModal);

    newModal.find('#ModalProducesTask').addClass(' ModalAddResource-'+idModal);
    newModal.find('#ModalProducesTask').attr('id', 'ModalProducesTask-'+idModal);

    newModal.find('#ModalToBeStateTask').attr('id', 'ModalToBeStateTask-'+idModal);
    
    newModal.find('#ModalOwnerToBeTask').addClass(' ModalAddStakeholder-'+idModal);
    newModal.find('#ModalOwnerToBeTask').attr('id', 'ModalOwnerToBeTask-'+idModal);

    newModal.find('#ModalCollaboratorToBeTask').addClass(' ModalAddStakeholder-'+idModal);
    newModal.find('#ModalCollaboratorToBeTask').attr('id', 'ModalCollaboratorToBeTask-'+idModal);

    newModal.find('#ModalToUseTask').addClass(' ModalAddResource-'+idModal);
    newModal.find('#ModalToUseTask').attr('id', 'ModalToUseTask-'+idModal);

    newModal.find('#ModalToProduceTask').addClass(' ModalAddResource-'+idModal);
    newModal.find('#ModalToProduceTask').attr('id', 'ModalToProduceTask-'+idModal);

	
	var onClickSave = "saveTask('"+ idModal + "')";
	var idSaveModal = 'saveTaskformModal-'+idModal;
	newModal.find('#saveTaskformModal').attr('id', idSaveModal);
    newModal.find('#'+idSaveModal).attr('onclick', onClickSave);
}

function saveResourse(idModal){
            var result = $('#form-'+idModal).valid();
            if(result){
                var resourcename = $("#Modalresourcename-"+idModal).val();
                var Description = $("#ModalDesResource-"+idModal).val();
                var includes = $("#ModalincludesResource-"+idModal).tagsinput('items')
                item4 = {};
                $.each(includes, function(index, input){
                    item4 [index] = input.value
                });
                var rOwner =$("#ModalrOwnerResource-"+idModal).tagsinput('items')
                item1 = {};
                $.each(rOwner, function(index, input){
                    item1 [index] = input.value
                });
                var pOwner = $("#ModalpOwnerResource-"+idModal).tagsinput('items')
                item2 = {};
                $.each(pOwner, function(index, input){
                    item2 [index] = input.value
                });
                var maintainer = $("#ModalmaintainerResource-"+idModal).tagsinput('items')
                item3 = {};
                $.each(maintainer, function(index, input){
                    item3 [index] = input.value
                });
                var idProject = $("#idProjectmodalResource").val();
                $.ajax({
                    type:'POST',
                    url: baseUrl+"task/saveResourceFormModal",
                    data:{
                        resourcename: resourcename,
                        Description: Description,
                        includes: item4,
                        rOwner : item1,
                        pOwner : item2,
                        maintainer: item3,
                        idProject : idProject
                    },
                    success:function(data){
                        Resource.clear();
                        $.post(baseUrl+"task/findResource",{
                                project : idProject
                                }, function(data){
                                
                                    var auto = createJSON(data);
                                    var n = createString(auto);
                                    
                                    Resource.local = JSON.parse(n);
                                    Resource.initialize(true);
                                    
                                    $('#'+idModal).modal('hide');
                                    $('#'+idModal).remove();
                                },  "json");
                    }
                })
            }
}


    function saveTask(idModal){
                var result = $('#form-'+idModal).valid();
                if(result){
                    var taskname = $("#Modaltaskname-"+idModal).val();
                    var isA = $("#ModalIsATask-"+idModal).val();
                    var Description = $("#ModalDescriptionTask-"+idModal).val();

                    var includes = $("#ModalincludesTask-"+idModal).tagsinput('items')
                    itemIncludes = {};
                    $.each(includes, function(index ,input){   
                        itemIncludes [index] = input.value
                    });

                    var asIsState = $("#ModalasIsStateTask-"+idModal).val();
                
                    var owner = $("#ModalOwnerTask-"+idModal).tagsinput('items')
                    item1 = {};
                    $.each(owner, function(index ,input){   
                        item1 [index] = input.value
                    });

                    var collaburator = $("#ModalCollaburatorTask-"+idModal).tagsinput('items')
                    item2 = {};
                    $.each(collaburator, function(index ,input){   
                        item2 [index] = input.value
                    });
                    var regulator = $("#ModalregulatorTask-"+idModal).tagsinput('items')
                    itemRegulator = {};
                    $.each(regulator, function(index ,input){   
                        itemRegulator [index] = input.value
                    });

                    var uses = $("#ModalUsesTask-"+idModal).tagsinput('items')
                    itemUses = {};
                    $.each(collaburator, function(index ,input){   
                        itemUses [index] = input.value
                    });

                    var produces = $("#ModalProducesTask-"+idModal).tagsinput('items')
                    itemProduces = {};
                    $.each(collaburator, function(index ,input){   
                        itemProduces [index] = input.value
                    });

                    var toBeState = $("#ModalToBeStateTask-"+idModal).val();

                    var ownerToBe = $("#ModalOwnerToBeTask-"+idModal).tagsinput('items')
                    item3 = {};
                    $.each(ownerToBe, function(index ,input){   
                        item3 [index] = input.value
                    });
                    var collaboratorToBe = $("#ModalCollaboratorToBeTask-"+idModal).tagsinput('items')
                    item4 = {};
                    $.each(collaboratorToBe, function(index ,input){   
                        item4 [index] = input.value
                    });
                    var toUse = $("#ModalToUseTask-"+idModal).tagsinput('items')
                    itemToUse = {};
                    $.each(collaburator, function(index ,input){   
                        itemToUse [index] = input.value
                    });

                    var toProduce = $("#ModalToProduceTask-"+idModal).tagsinput('items')
                    itemToProduces = {};
                    $.each(collaburator, function(index ,input){   
                        itemToProduces [index] = input.value
                    });

                    var idProject = $("#idProjectmodalTask-"+idModal).val();
                
                        $.ajax({
                            type:'POST',
                            url: baseUrl+"task/save",
                            data:{
                                taskname : taskname,
                                isA : isA,
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
                                toUse : itemToUse,
                                toProduce : itemToProduces,
                                idProject : idProject
                            },
                            success:function(data){
                                Tasks.clear();
                                $.post(baseUrl+"task/findTask",{
                                        project : idProject
                                        }, function(data){
                                            
                                            var auto = createJSON(data);
                                            var n = createString(auto);
                                            Tasks.local = JSON.parse(n);
                                            Tasks.initialize(true);
                                        
                                            $('#'+idModal).modal('hide');
                                            $('#'+idModal).remove();
                                        },  "json");
                            }
                        })    
                }
    }

function createJSON(data) {
    jsonObj = [];
    $.each(data, function(index ,data){

        item = {}
        item ["value"] = data._id.$id;
        item ["text"] = data.name;
        
        jsonObj.push(item);
    });

    item = {}
    item ["value"] = 0;
    item ["text"] = "?";
  
    jsonObj.push(item);
   
    return jsonObj;
}

function createString(auto){
    return JSON.stringify(auto)
}

$(document).on('hidden.bs.modal', function () {
    var modalShow = $('.modal.show').length;
    var modalIn = $('.modal.in').length;
    console.log(modalIn);
    if(modalShow > 0 || modalIn>0){
          $('body').attr('class','modal-open');
         
    }
    else{
          $('body').attr('class','');
    }
});

$(document).on('hide.bs.modal', "div.createResource", function() {
	var vm = $(this);
	var id = vm.prop('id');
});

$(document).on('hide.bs.modal', "div.createTask", function() {
	var vm = $(this);
	var id = vm.prop('id');
});

// $(document).on('hide.bs.modal', "div.createResource", function() {
// 	var vm = $(this);
// 	var id = vm.prop('id');
// });

function questionMark($textinput){
    $textinput.on('itemAdded', function(event) {
          var tag = event.item;
          var data = $textinput.tagsinput('items');
          var item={};
          $.each(data, function(index ,input){   
                item [index] = input.value
          });
          if(item[0]==0){
                if(tag.value!=0){
                      $textinput.tagsinput('remove', { value: tag.value, text: tag.text });
                }
          }else{
                if(tag.value==0){
                      $textinput.tagsinput('remove', { value: tag.value, text: tag.text });
                }
          } 
    });
}

function validateModalTask(formId,idModal){
    var form = $(formId).validate({
        rules: {
            Modaltaskname: {
                required: true,
                remote: {
                    url: baseUrl+"task/checkDupTaskName",
                    type: "post",
                    data: {
                        taskname: function () {
                            return $("#Modaltaskname-"+idModal).val()
                        },
                        idProject: function () {
                            return $("#idProjectmodalTask-"+idModal).val()
                        }
                    }
                }
            },
        },
        messages: {
            Modaltaskname: {
                required: "Task name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    })

    return form;
}

function validateModalResource(formId,idModal){
    var form = $(formId).validate({
        rules: {
            resourcename: {
                required: true,
                remote: {
                    url: baseUrl+"resource/checkDupplicateResourceName",
                    type: "post",
                    data: {
                        resourcename: function () {
                            return $("#Modalresourcename-"+idModal).val()
                        },
                        idProject: function (){
                            return $("#idProjectmodalResource-"+idModal).val()
                        }
                    }
                }
            },
        },
        messages: {
            resourcename: {
                required: "Resource name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    });

    return form;
}

//-------------------------------- clone show detail modal ----------------------------------- //
function cloneModalDetailTask(taskId) {
	var modal = $('#showTask');
	var newModal = modal.clone();
    //gen id
    var idModal = new Date().getTime();
    newModal.attr("id", idModal);
    newModal.attr("style", "z-index: " + zindex++);
    
    
    //set input id
    setFormIdInModalTaskDetail(idModal, newModal);

    //append to modal
    modal.after(newModal);
    callDataTask(taskId, idModal);
    
    //show modal
    var modalId = "#" + idModal;
    $(modalId).modal("show");
}

function setFormIdInModalTaskDetail(idModal, newModal){
	newModal.find('#showTaskName').attr('id', 'showTaskName-'+idModal);
	newModal.find('#showTaskIsA').attr('id', 'showTaskIsA-'+idModal);
	newModal.find('#showTaskDescription').attr('id', 'showTaskDescription-'+idModal);
	newModal.find('#showTaskInclude').attr('id', 'showTaskInclude-'+idModal);
	newModal.find('#showTaskAsIsState').attr('id', 'showTaskAsIsState-'+idModal);
	newModal.find('#showTaskToBeState').attr('id', 'showTaskToBeState-'+idModal);
	newModal.find('#showTaskUses').attr('id', 'showTaskUses-'+idModal);
	newModal.find('#showTaskProduces').attr('id', 'showTaskProduces-'+idModal);
	newModal.find('#showTaskToUses').attr('id', 'showTaskToUses-'+idModal);
	newModal.find('#showTaskToProduce').attr('id', 'showTaskToProduce-'+idModal);
	newModal.find('#showTaskOwner').attr('id', 'showTaskOwner-'+idModal);
	newModal.find('#showTaskCollaborator').attr('id', 'showTaskCollaborator-'+idModal);
	newModal.find('#showTaskRegulator').attr('id', 'showTaskRegulator-'+idModal);
	newModal.find('#showTaskOwnerToBe').attr('id', 'showTaskOwnerToBe-'+idModal);
	newModal.find('#showTaskCollaboratorToBe').attr('id', 'showTaskCollaboratorToBe-'+idModal);
}

function callDataTask(taskId, idModal){
    $.post(baseUrl+"task/showDetailTask",{
       taskId : taskId
    }, function(data){   
       setTaskModalDetail(data, idModal);
    },"json"); 
}

function setTaskModalDetail(data, idModal){
   var empty = '<label style="font-size: 10px; font-style : italic">This Field is Empty.</label>';
   $('#showTaskName-'+idModal).html(data.name);
   if(data.name == null || data.name == "") $('#showTaskName-'+idModal).html(empty);

   $('#showTaskIsA-'+idModal).html(data.isA);
   if(data.isA == null || data.isA == "") $('#showTaskIsA-'+idModal).html(empty);

   $('#showTaskDescription-'+idModal).html(data.Description);
   if(data.Description == null || data.Description == "") $('#showTaskDescription-'+idModal).html(empty);


   var includes = data.includes;
   var strIncludes = "";
   $.each(includes, function( index, value ) {
       strIncludes += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailTask(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showTaskInclude-'+idModal).html(strIncludes);
   if(data.includes == null || data.includes== "") $('#showTaskInclude-'+idModal).html(empty);

   $('#showTaskAsIsState-'+idModal).html(data.asIsState);
   if(data.asIsState == null || data.asIsState== "") $('#showTaskAsIsState-'+idModal).html(empty);

   $('#showTaskToBeState-'+idModal).html(data.toBeState);
   if(data.toBeState == null || data.toBeState== "") $('#showTaskToBeState-'+idModal).html(empty);

   
   var uses = data.uses;
   var strUses = "";
   $.each(uses, function( index, value ) {
       strUses += '<a href="#" class="labelCo labelInfo info-resource" onclick="cloneModalDetailRes(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showTaskUses-'+idModal).html(strUses);
   if(data.uses == null || data.uses== "") $('#showTaskUses-'+idModal).html(empty);

   
   var produces = data.produces;
   var strProduces = "";
   $.each(produces, function( index, value ) {
       strProduces += '<a href="#" class="labelCo labelInfo info-resource" onclick="cloneModalDetailRes(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showTaskProduces-'+idModal).html(strProduces);
   if(data.produces == null || data.produces== "") $('#showTaskProduces-'+idModal).html(empty);


   var toUses = data.toUse;
   var strToUses  = "";
   $.each(toUses, function( index, value ) {
       strToUses += '<a href="#" class="labelCo labelInfo info-resource" onclick="cloneModalDetailRes(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showTaskToUses-'+idModal).html(strToUses);
   if(data.toUse == null || data.toUse== "") $('#showTaskToUses-'+idModal).html(empty);


   var toProduces = data.toProduce;
   var strToProduces = "";
   $.each(toProduces, function( index, value ) {
       strToProduces += '<a href="#" class="labelCo labelInfo info-resource" onclick="cloneModalDetailRes(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showTaskToProduce-'+idModal).html(strToProduces);
   if(data.toProduce == null || data.toProduce== "") $('#showTaskToProduce-'+idModal).html(empty);



   var owner = data.owner;
   var strOwner = "";
   $.each(owner, function( index, value ) {
       strOwner += '<a href="#" class="labelCo labelInfo info-resource" data-id="'+value.id+'">'+value.name+'</a>';
   });
   $('#showTaskOwner-'+idModal).html(strOwner);
   if(data.owner == null || data.owner== "") $('#showTaskOwner-'+idModal).html(empty);


   var collaburator = data.collaburator;
   var strCollaburator = "";
   $.each(collaburator, function( index, value ) {
       strCollaburator += '<a href="#" class="labelCo labelInfo info-resource" data-id="'+value.id+'">'+value.name+'</a>';
   });
   $('#showTaskCollaborator-'+idModal).html(strCollaburator);
   if(data.collaburator== null || data.collaburator== "") $('#showTaskCollaborator-'+idModal).html(empty);


   var regulator = data.regulator;
   var strRegulator = "";
   $.each(regulator, function( index, value ) {
       strRegulator += '<a href="#" class="labelCo labelInfo info-resource" data-id="'+value.id+'">'+value.name+'</a>';
   });
   $('#showTaskRegulator-'+idModal).html(strRegulator);
   if(data.regulator== null || data.regulator== "") $('#showTaskRegulator-'+idModal).html(empty);


   var ownerToBe = data.ownerToBe;
   var strOwnerToBe = "";
   $.each(ownerToBe, function( index, value ) {
       strOwnerToBe += '<a href="#" class="labelCo labelInfo info-resource" data-id="'+value.id+'">'+value.name+'</a>';
   });
   $('#showTaskOwnerToBe-'+idModal).html(strOwnerToBe);
   if(data.ownerToBe== null || data.ownerToBe== "") $('#showTaskOwnerToBe-'+idModal).html(empty);


   var collaboratorToBe = data.collaboratorToBe;
   var strCollaboratorToBe = "";
   $.each(collaboratorToBe, function( index, value ) {
       strCollaboratorToBe += '<a href="#" class="labelCo labelInfo info-resource" data-id="'+value.id+'">'+value.name+'</a>';
   });
   $('#showTaskCollaboratorToBe-'+idModal).html(strCollaboratorToBe);
   if(data.collaboratorToBe== null || data.collaboratorToBe== "") $('#showTaskCollaboratorToBe-'+idModal).html(empty);
   
};

// clone show modal resource
function cloneModalDetailRes(resId) {
	var modal = $('#showRes');
	var newModal = modal.clone();
    //gen id
    var idModal = new Date().getTime();
    newModal.attr("id", idModal);
    newModal.attr("style", "z-index: " + zindex++);
    
    
    //set input id
    setFormIdInModalResDetail(idModal, newModal);

    //append to modal
    modal.after(newModal);
    callDataRes(resId, idModal);
    
    //show modal
    var modalId = "#" + idModal;
    $(modalId).modal("show");
}

function setFormIdInModalResDetail(idModal, newModal){
	newModal.find('#showResName').attr('id', 'showResName-'+idModal);
	newModal.find('#showResDescription').attr('id', 'showResDescription-'+idModal);
	newModal.find('#showResInclude').attr('id', 'showResInclude-'+idModal);
	newModal.find('#showResRowner').attr('id', 'showResRowner-'+idModal);
	newModal.find('#showResPowner').attr('id', 'showResPowner-'+idModal);
	newModal.find('#showResMaintainer').attr('id', 'showResMaintainer-'+idModal);
}


function callDataRes(resId, idModal){
 
    $.post(baseUrl+"resource/showDetailRes",{
        resId : resId
     }, function(data){
        console.log(data);   
        setResModalDetail(data, idModal);
     },"json"); 
}

function setResModalDetail(data, idModal){
   var empty = '<label style="font-size: 10px; font-style : italic">This Field is Empty.</label>';
   $('#showResName-'+idModal).html(data.name);
   if(data.name == null || data.name == "") $('#showResName-'+idModal).html(empty);

   $('#showResDescription-'+idModal).html(data.description);
   if(data.description == null || data.description == "") $('#showResDescription-'+idModal).html(empty);


   var includes = data.includes;
   var strIncludes = "";
   $.each(includes, function( index, value ) {
       strIncludes += '<a href="#" class="labelCo labelInfo info-resource" onclick="cloneModalDetailRes(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showResInclude-'+idModal).html(strIncludes);
   if(data.includes == null || data.includes== "") $('#showResInclude-'+idModal).html(empty);


   var rOwner = data.rOwner;
   var strROwner = "";
   $.each(rOwner, function( index, value ) {
    strROwner += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailRes(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showResRowner-'+idModal).html(strROwner);
   if(data.rOwner == null || data.rOwner== "") $('#showResRowner-'+idModal).html(empty);


   var pOwner = data.pOwner;
   var strPOwner = "";
   $.each(pOwner, function( index, value ) {
    strPOwner += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailRes(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showResPowner-'+idModal).html(strPOwner);
   if(data.pOwner == null || data.pOwner== "") $('#showResPowner-'+idModal).html(empty);

   var maintainer = data.maintainer;
   var strMaintainer= "";
   $.each(maintainer, function( index, value ) {
    strMaintainer += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailRes(\''+value.id+'\')">'+value.name+'</a>';
   });
   $('#showResMaintainer-'+idModal).html(strMaintainer);
   if(data.maintainer == null || data.maintainer== "") $('#showResMaintainer-'+idModal).html(empty);

   

    
};

// show collaboration setting by modal and eyes 
function cloneModalDetailColla(collaId){
    var modal = $('#showColla');
    var newModal = modal.clone();

     //gen id
     var idModal = new Date().getTime();
     newModal.attr("id", idModal);
     newModal.attr("style", "z-index: " + zindex++);
     
     //set INPUT ID
     setFormInModalCollaDetail(idModal, newModal);

     //append it to modal
     modal.after(newModal);
     callDataColla(collaId, idModal);

     //show modal
     var modalId = "#" + idModal;
     $(modalId).modal("show");
     
}; 

function setFormInModalCollaDetail(idModal, newModal){
    newModal.find('#showCollaName').attr('id', 'showCollaName-'+idModal);
    newModal.find('#showCollaDescription').attr('id', 'showCollaDescription-'+idModal);
    newModal.find('#showCollaInclude').attr('id', 'showCollaInclude-'+idModal);
};

function callDataColla(collaId, idModal){
    $.post(baseUrl+"collaborationsetting/showDetailColla",{
        collaId :collaId
    }, function(data){
        console.log(data)
        setCollaModalDetail(data, idModal);
    }, "json");
};

function setCollaModalDetail(data, idModal){
    var empty = '<label style="font-size: 10px; font-style : italic">This Field is Empty.</label>';
    $('#showCollaName-'+idModal).html(data.name);
    if(data.name == null || data.name == "") $('#showCollaName-'+idModal).html(empty);

    $('#showCollaDescription-'+idModal).html(data.Description);
    if(data.Description == null || data.Description == "") $('#showCollaDescription-'+idModal).html(empty);

    // include task

    var include = data.include;
    var strInclude = "";
    $.each(include, function( index, value ) {
        strInclude += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailTask(\''+value.id+'\')">'+value.name+'</a>';
    });

    $('#showCollaInclude-'+idModal).html(strInclude);
    if(data.include == null || data.include== "") $('#showCollaInclude-'+idModal).html(empty);
 
 
};



$(document).on('hidden.bs.modal', "div.showTask", function() {
	var vm = $(this);
	var id = '#'+vm.prop('id');
	$(id).remove();
	var count = $('div.showTask').length;
    if(count > 1){
         $('body').attr('class','modal-open');
    }
});

$(document).on('hidden.bs.modal', "div.showRes", function() {
	var vm = $(this);
	var id = '#'+vm.prop('id');
	$(id).remove();
	var count = $('div.showRes').length;
    if(count > 1){
         $('body').attr('class','modal-open');
    }
});