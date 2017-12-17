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


    function saveTask(idModal){

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