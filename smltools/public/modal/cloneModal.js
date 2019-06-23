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
  
    setFormIdInModalStakeholder(idModal, newModal);

    $modal.after(newModal);
    initDataResource(idModal);
    initDataStakeholder(idModal);
    initDataTask(idModal);

    var modalId = "#" + idModal;
    $(modalId).modal("show");
    validateModalOrganisation(idModal);
    validateModalRole(idModal);
    validateModalIndividual(idModal);
    questionMark($('#ModalOrepresentative-'+idModal));
    questionMark($('#ModalOreports-'+idModal));
    questionMark($('#ModalOconsults-'+idModal));
    questionMark($('#ModalOliaises-'+idModal));
    questionMark($('#ModalOdelegate-'+idModal));
    questionMark($('#ModalOdTask-'+idModal));
  
    questionMark($('#ModalInReports-'+idModal));
    questionMark($('#ModalInConsults-'+idModal));
    questionMark($('#ModalInLiaises-'+idModal));
    questionMark($('#ModalInDelegate-'+idModal));
    questionMark($('#ModalInDTask-'+idModal));

    questionMark($('#ModalRoleReports-'+idModal));
    questionMark($('#ModalRoleConsults-'+idModal));
    questionMark($('#ModalRoleLiaises-'+idModal));
    questionMark($('#ModalRoleDelegate-'+idModal));
    questionMark($('#ModalRoleDTask-'+idModal));
    
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
                empty: '<div class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
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

function setFormIdInModalStakeholder(idModal, newModal){
    newModal.find('#idProjectmodalStake').attr('id', 'idProjectmodalStake-'+idModal);
    //set ID tab
    newModal.find('#ModalOrganisation-tab').attr('id', 'ModalOrganisation-tab-'+idModal);
    newModal.find('#ModalOrganisation-tab-'+idModal).attr('href', '#'+'ModalOrganisation-'+idModal);
    newModal.find('#ModalOrganisation').attr('id', 'ModalOrganisation-'+idModal);
    newModal.find('#tab1').attr('id', 'tab1-'+idModal);

    newModal.find('#ModalIndividual-tab').attr('id', 'ModalIndividual-tab-'+idModal);
    newModal.find('#ModalIndividual-tab-'+idModal).attr('href', '#'+'ModalIndividual-'+idModal);
    newModal.find('#ModalIndividual').attr('id', 'ModalIndividual-'+idModal);
    newModal.find('#tab2').attr('id', 'tab2-'+idModal);

    newModal.find('#ModalRole-tab').attr('id', 'ModalRole-tab-'+idModal);
    newModal.find('#ModalRole-tab-'+idModal).attr('href', '#'+'ModalRole-'+idModal);
    newModal.find('#ModalRole').attr('id', 'ModalRole-'+idModal);
    newModal.find('#tab3').attr('id', 'tab3-'+idModal);

    //set Form
    // newModal.find('#form').attr('id', 'form-'+idModal);
    newModal.find('#formOrganisation').attr('id', 'formOrganisation-'+idModal);
    newModal.find('#ModalOFocal').attr('id', 'ModalOFocal-'+idModal);
    newModal.find('#ModalOStakeName').attr('id', 'ModalOStakeName-'+idModal);
    newModal.find('#ModalOrganName').attr('id', 'ModalOrganName-'+idModal);
    newModal.find('#ModalOaka').attr('id', 'ModalOaka-'+idModal);
    newModal.find('#ModalOdescription').attr('id', 'ModalOdescription-'+idModal);
    newModal.find('#ModalOconcern').attr('id', 'ModalOconcern-'+idModal);
    newModal.find('#ModalOrepresentative').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalOrepresentative').attr('id', 'ModalOrepresentative-'+idModal);
    newModal.find('#ModalOreports').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalOreports').attr('id', 'ModalOreports-'+idModal);
    newModal.find('#ModalOconsults').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalOconsults').attr('id', 'ModalOconsults-'+idModal);
    newModal.find('#ModalOliaises').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalOliaises').attr('id', 'ModalOliaises-'+idModal);
    newModal.find('#ModalOdelegate').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalOdelegate').attr('id', 'ModalOdelegate-'+idModal);
    newModal.find('#ModalOdTask').addClass('ModalAddTask-'+idModal);
    newModal.find('#ModalOdTask').attr('id', 'ModalOdTask-'+idModal);
    newModal.find('#ModalOwishes').attr('id', 'ModalOwishes-'+idModal);


    newModal.find('#formIndividual').attr('id', 'formIndividual-'+idModal);
    newModal.find('#ModalInStakeName').attr('id', 'ModalInStakeName-'+idModal);
    newModal.find('#ModalInaka').attr('id', 'ModalInaka-'+idModal);
    newModal.find('#ModalInDescription').attr('id', 'ModalInDescription-'+idModal);
    newModal.find('#ModalInConcern').attr('id', 'ModalInConcern-'+idModal);
    newModal.find('#ModalInAttitude').attr('id', 'ModalInAttitude-'+idModal);
    newModal.find('#ModalInDomainKnowledge').attr('id', 'ModalInDomainKnowledge-'+idModal);
    newModal.find('#ModalInReports').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalInReports').attr('id', 'ModalInReports-'+idModal);
    newModal.find('#ModalInConsults').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalInConsults').attr('id', 'ModalInConsults-'+idModal);
    newModal.find('#ModalInLiaises').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalInLiaises').attr('id', 'ModalInLiaises-'+idModal);
    newModal.find('#ModalInDelegate').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalInDelegate').attr('id', 'ModalInDelegate-'+idModal);
    newModal.find('#ModalInDTask').addClass('ModalAddTask-'+idModal);
    newModal.find('#ModalInDTask').attr('id', 'ModalInDTask-'+idModal);
    newModal.find('#ModalInWishes').attr('id', 'ModalInWishes-'+idModal);
    

    newModal.find('#formRole').attr('id', 'formRole-'+idModal);
    newModal.find('#ModalRoleStakeName').attr('id', 'ModalRoleStakeName-'+idModal);
    newModal.find('#ModalRoleAka').attr('id', 'ModalRoleAka-'+idModal);
    newModal.find('#ModalRoleIsA').attr('id', 'ModalRoleIsA-'+idModal);
    newModal.find('#ModalRoleDescription').attr('id', 'ModalRoleDescription-'+idModal);
    newModal.find('#ModalRoleConcern').attr('id', 'ModalRoleConcern-'+idModal);
    newModal.find('#ModalRolePlayerType').attr('id', 'ModalRolePlayerType-'+idModal);
    newModal.find('#ModalRoleRoleplayer').attr('id', 'ModalRoleRoleplayer-'+idModal);

    newModal.find('#ModalRoleReports').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalRoleReports').attr('id', 'ModalRoleReports-'+idModal);

    newModal.find('#ModalRoleConsults').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalRoleConsults').attr('id', 'ModalRoleConsults-'+idModal);

    newModal.find('#ModalRoleLiaises').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalRoleLiaises').attr('id', 'ModalRoleLiaises-'+idModal);

    newModal.find('#ModalRoleDelegate').addClass('ModalAddStakeholder-'+idModal);
    newModal.find('#ModalRoleDelegate').attr('id', 'ModalRoleDelegate-'+idModal);

    newModal.find('#ModalRoleDTask').addClass('ModalAddTask-'+idModal);
    newModal.find('#ModalRoleDTask').attr('id', 'ModalRoleDTask-'+idModal);
    newModal.find('#ModalRoleWishes').attr('id', 'ModalRoleWishes-'+idModal);

    var onClickSave = "saveStakeholder('"+ idModal + "')";
    var idSaveModal = 'saveStakeformModal-'+idModal;
	newModal.find('#saveStakeformModal').attr('id', idSaveModal);
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
                var resourceNameEdit = $('#editResName').val();
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
                                project : idProject,
                                resourceNameEdit : resourceNameEdit
                                }, function(data){
                                
                                    var auto = createJSON(data);
                                    var n = createString(auto);
                                    
                                    Resource.local = JSON.parse(n);
                                    Resource.initialize(true);

                                    if (typeof Resource_Edit !== 'undefined') {
                                        Resource_Edit.local = JSON.parse(n);
                                        Resource_Edit.initialize(true);
                                    }
                                   
                                    
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
            var taskNameEdit = $("#Edname").val();
            
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
                        project : idProject,
                        taskNameEdit : taskNameEdit
                        }, function(data){
                            
                            var auto = createJSON(data);
                            var n = createString(auto);
                            Tasks.local = JSON.parse(n);
                            Tasks.initialize(true);  
                            
                            if (typeof Tasks_Edit !== 'undefined') {
                                Tasks_Edit.local = JSON.parse(n);
                                Tasks_Edit.initialize(true);
                            }
                            $('#'+idModal).modal('hide');
                            $('#'+idModal).remove();
                        },  "json");
                }
            })    
        }
    }

    function saveStakeholder(idModal){
        if ( $("#tab1-"+idModal).hasClass('active') ) {
            saveOrganisation(idModal);
        }else if( $("#tab2-"+idModal).hasClass('active')){
            saveIndividual(idModal);
        }else{
            saveRole(idModal);
        }

       
    }

    function saveOrganisation(idModal){
        result = $('#formOrganisation-'+idModal).valid();
        if(result){
            var name = $("#ModalOStakeName-"+idModal).val()
            var Organisation = $("#ModalOrganName-"+idModal).val()
            var aka = $("#ModalOaka-"+idModal).val()
            var description = $("#ModalOdescription-"+idModal).val()
            var concern = $("#ModalOconcern-"+idModal).val()
            var representative = $("#ModalOrepresentative-"+idModal).tagsinput('items');
            itemrepresentative = {};
            $.each(representative, function (index, input) {
                itemrepresentative[index] = input.value
                });
            var reports = $("#ModalOreports-"+idModal).tagsinput('items');
            itemreports = {};
            $.each(reports, function (index, input) {
                itemreports[index] = input.value
                });
            var consults = $("#ModalOconsults-"+idModal).tagsinput('items');
            itemconsults = {};
            $.each(consults, function (index, input) {
                itemconsults[index] = input.value
                });
            var liaises = $("#ModalOliaises-"+idModal).tagsinput('items');
            itemliaises = {};
            $.each(liaises, function (index, input) {
                itemliaises[index] = input.value
                });
            var delegate = $("#ModalOdelegate-"+idModal).tagsinput('items');
            itemdelegate = {};
            $.each(delegate, function (index, input) {
                itemdelegate[index] = input.value
                });
            var dTask = $("#ModalOdTask-"+idModal).tagsinput('items');
            itemdTask = {};
            $.each(dTask, function (index, input) {
                itemdTask[index] = input.value
            });
            var wishes = $("#ModalOwishes-"+idModal).val()
            var idProject = $("#idProjectmodalStake-"+idModal).val();
            var type;
            if ($("#ModalOFocal-"+idModal).is(':checked'))
                type = 1;
            else
                type = 0;
            
            var organisationname = $("#edStakeName").val()
            $.ajax({
                type: 'POST',
                url: baseUrl + "stakeholder/saveOrganisation",
                data: {
                    name: name,
                    Organisation: Organisation,
                    aka: aka,
                    description: description,
                    concern: concern,
                    representative: itemrepresentative,
                    reports: itemreports,
                    consults: itemconsults,
                    liaises: itemliaises,
                    delegate: itemdelegate,
                    dTask: itemdTask,
                    wishes: wishes,
                    type: type,
                    idProject: idProject
                },
                success: function (data) {
                    Stakeholder.clear();
                    $.post(baseUrl+"task/findStake",{
                    project : idProject,
                    stakeNameEdit : organisationname
                    }, function(data){
                        var auto = createJSON(data);
                        var n = createString(auto);
                        Stakeholder.local = JSON.parse(n);
                        Stakeholder.initialize(true);

                        if (typeof Stakeholder_Edit !== 'undefined') {
                            Stakeholder_Edit.local = JSON.parse(n);
                            Stakeholder_Edit.initialize(true);
                        }
                        
                        $('#'+idModal).modal('hide');
                        $('#'+idModal).remove();
                    },  "json");
                }
            });
        }
    }

    function saveIndividual(idModal){
        var result = $('#formIndividual-'+idModal).valid();
        if(result){
            var inname = $("#ModalInStakeName-"+idModal).val()
            var inaka = $("#ModalInaka").val()
            var indescription = $("#ModalInDescription-"+idModal).val()
            var inconcern = $("#ModalInConcern-"+idModal).val()

            var inattitude = $("#ModalInAttitude-"+idModal).val();
            var indomainKnowledge = $("#ModalInDomainKnowledge-"+idModal).val();

            var inreports = $("#ModalInReports-"+idModal).tagsinput('items');
            iteminreports = {};
            $.each(inreports, function (index, input) {
                iteminreports[index] = input.value
            });
            var inconsults = $("#ModalInConsults-"+idModal).tagsinput('items');
            iteminconsults = {};
            $.each(inconsults, function (index, input) {
                iteminconsults[index] = input.value
            });
            var inliaises = $("#ModalInLiaises-"+idModal).tagsinput('items');
            iteminliaises = {};
            $.each(inliaises, function (index, input) {
                iteminliaises[index] = input.value
            });
            var indelegate = $("#ModalInDelegate-"+idModal).tagsinput('items');
            itemindelegate = {};
            $.each(indelegate, function (index, input) {
                itemindelegate[index] = input.value
            });
            var indTask = $("#ModalInDTask-"+idModal).tagsinput('items');
            itemdTask = {};
            $.each(indTask, function (index, input) {
                itemdTask[index] = input.value
            });
            var inwishes = $("#ModalInWishes-"+idModal).val()
            var inidProject = $("#idProjectmodalStake-"+idModal).val();
            var inStakeName = $("#inStakeName").val();
            $.ajax({
                type: 'POST',
                url: baseUrl + "stakeholder/saveIndividual",
                data: {
                    name: inname,
                    aka: inaka,
                    description: indescription,
                    concern: inconcern,
                    attitude: inattitude,
                    domainKnowledge: indomainKnowledge,
                    reports: iteminreports,
                    consults: iteminconsults,
                    liaises: iteminliaises,
                    delegate: itemindelegate,
                    dTask: itemdTask,
                    wishes: inwishes,
                    idProject: inidProject
                },
                success: function (data) {
                    Stakeholder.clear();
                    $.post(baseUrl+"task/findStake",{
                    project : inidProject,
                    stakeNameEdit : inStakeName
                    }, function(data){
                        var auto = createJSON(data);
                        var n = createString(auto);
                        Stakeholder.local = JSON.parse(n);
                        Stakeholder.initialize(true);

                        if (typeof Stakeholder_Edit !== 'undefined') {
                            Stakeholder_Edit.local = JSON.parse(n);
                            Stakeholder_Edit.initialize(true);
                        }
    
                        $('#'+idModal).modal('hide');
                        $('#'+idModal).remove();
                    },  "json");
                }
            })
        }
    }

    function saveRole(idModal){
        var result = $('#formRole-'+idModal).valid();
        if(result){
            var rname = $("#ModalRoleStakeName-"+idModal).val()
            var raka = $("#ModalRoleAka-"+idModal).val()
            var isA = $("#ModalRoleIsA-"+idModal).val()
            
            var rdescription = $("#ModalRoleDescription-"+idModal).val()
            var rconcern = $("#ModalRoleConcern-"+idModal).val()

            var PlayerType = $("#PlayeModalRolePlayerTyperType-"+idModal).val();
            var RolePlayer = $("#ModalRoleRoleplayer-"+idModal).val();
            
            var rreports = $("#ModalRoleReports-"+idModal).tagsinput('items');
            itemrreports = {};
            $.each(rreports, function (index, input) {
                itemrreports[index] = input.value
            });
            var rconsults = $("#ModalRoleConsults-"+idModal).tagsinput('items');
            itemrconsults = {};
            $.each(rconsults, function (index, input) {
                itemrconsults[index] = input.value
            });
            var rliaises = $("#ModalRoleLiaises-"+idModal).tagsinput('items');
            itemrliaises = {};
            $.each(rliaises, function (index, input) {
                itemrliaises[index] = input.value
            });
            var rdelegate = $("#ModalRoleDelegate-"+idModal).tagsinput('items');
            itemrdelegate = {};
            $.each(rdelegate, function (index, input) {
                itemrdelegate[index] = input.value
            });
            var rdTask = $("#ModalRoleDTask-"+idModal).tagsinput('items');
            itemdTask = {};
            $.each(rdTask, function (index, input) {
                itemdTask[index] = input.value
            });
            var rwishes = $("#ModalRoleWishes-"+idModal).val()
            var ridProject = $("#idProjectmodalStake-"+idModal).val();
            var rtype = 3;
            var rolename = $('#edit_role_StakeName').val();
            $.ajax({
                type: 'POST',
                url: baseUrl + "stakeholder/saveRole",
                data: {
                    name: rname,
                    aka: raka,
                    isA: isA,
                    description: rdescription,
                    concern: rconcern,
                    PlayerType: PlayerType,
                    RolePlayer: RolePlayer,
                    reports: itemrreports,
                    consults: itemrconsults,
                    liaises: itemrliaises,
                    delegate: itemrdelegate,
                    dTask: itemdTask,
                    wishes: rwishes,
                    type: rtype,
                    idProject: ridProject
                },
                success: function (data) {
                    Stakeholder.clear();
                    $.post(baseUrl+"task/findStake",{
                    project : ridProject,
                    stakeNameEdit : rolename
                    }, function(data){
                        var auto = createJSON(data);
                        var n = createString(auto);
                        Stakeholder.local = JSON.parse(n);
                        Stakeholder.initialize(true);

                        if (typeof Stakeholder_Edit !== 'undefined') {
                            Stakeholder_Edit.local = JSON.parse(n);
                            Stakeholder_Edit.initialize(true);
                        }

                        $('#'+idModal).modal('hide');
                        $('#'+idModal).remove();
                    },  "json");
                }
            });
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
    item ["value"] = 1;
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
          if(item[0]==1){
                if(tag.value!=1){
                      $textinput.tagsinput('remove', { value: tag.value, text: tag.text });
                }
          }else{
                if(tag.value==1){
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

function validateModalOrganisation(idModal){
    var  form = $('#formOrganisation-'+idModal).validate({
            rules: {
                ModalOStakeName: {
                    required: true,
                    remote: {
                        url: baseUrl+"stakeholder/checkDupNameStake",
                        type: "post",
                        data: {
                            StakeName: function () {
                                // console.log($("#ModalOStakeName-"+idModal).val());
                                return $("#ModalOStakeName-"+idModal).val()
                            },
                            idProject: function (){
                                return $("#idProjectmodalStake-"+idModal).val()
                            },
                            typeStake: function(){
                                if ($("#ModalOFocal-"+idModal).is(':checked'))
                                    return 1;
                                else
                                    return 0;
                            }
                        }
                    }
                },  
            },
            messages: {
                ModalOStakeName: {
                    required: "Stakeholder name is required",
                    remote: jQuery.validator.format("{0} is already taken.")
                }
            }
        });
    return form;
}

function validateModalIndividual(idModal){
    var  form = $('#formIndividual-'+idModal).validate({
            rules: {
                ModalInStakeName: {
                    required: true,
                    remote: {
                        url: baseUrl+"stakeholder/checkDupNameStake",
                        type: "post",
                        data: {
                            StakeName: function () {
                                // console.log($("#ModalOStakeName-"+idModal).val());
                                return $("#ModalInStakeName-"+idModal).val()
                            },
                            idProject: function (){
                                return $("#idProjectmodalStake-"+idModal).val()
                            },
                            typeStake: function(){
                                    return 2;  
                            }
                        }
                    }
                },  
            },
            messages: {
                ModalInStakeName: {
                    required: "Stakeholder name is required",
                    remote: jQuery.validator.format("{0} is already taken.")
                }
            }
        });
    return form;
}

function validateModalRole(idModal){
    var  form = $('#formRole-'+idModal).validate({
            rules: {
                ModalRoleStakeName: {
                    required: true,
                    remote: {
                        url: baseUrl+"stakeholder/checkDupNameStake",
                        type: "post",
                        data: {
                            StakeName: function () {
                                // console.log($("#ModalOStakeName-"+idModal).val());
                                return $("#ModalRoleStakeName-"+idModal).val()
                            },
                            idProject: function (){
                                return $("#idProjectmodalStake-"+idModal).val()
                            },
                            typeStake: function(){
                                    return 3;  
                            }
                        }
                    }
                },  
            },
            messages: {
                ModalRoleStakeName: {
                    required: "Stakeholder name is required",
                    remote: jQuery.validator.format("{0} is already taken.")
                }
            }
        });
    return form;
}

//-------------------------------- clone show detail modal ----------------------------------- //
function cloneModalDetailTask(taskId) {
    if(taskId==="1"){
        return;
    }else{
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
	
}

function setFormIdInModalTaskDetail(idModal, newModal){
    newModal.find('#showTaskName').attr('id', 'showTaskName-'+idModal);
    newModal.find('#parent').attr('id', 'parent-'+idModal);
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
    $('#parent-'+idModal).html(data.mom);

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
    if(resId==="1"){
        return;
    }else{
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
    if(collaId==="1"){
        return;
    }else{
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
    }
    
     
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

// show Stakholder detail by modal
function cloneModalDetailStake(stakeId){
    if(stakeId==="1"){
        return;
    }else{
        var modal = $('#showStake');
        var newModal = modal.clone();

        //gen id
        var idModal = new Date().getTime();
        newModal.attr("id", idModal);
        newModal.attr("style", "z-index: " + zindex++);
        
        //set INPUT ID
        setFormInModalStakeDetail(idModal, newModal);

        //append it to modal
        modal.after(newModal);
        callDataStake(stakeId, idModal);

        //show modal
        var modalId = "#" + idModal;
        $(modalId).modal("show");
    }
};

function setFormInModalStakeDetail(idModal, newModal){
    newModal.find('#showStakeName').attr('id', 'showStakeName-'+idModal);
    newModal.find('#showStakeOrganization').attr('id', 'showStakeOrganization-'+idModal);
    newModal.find('#showStakeAka').attr('id', 'showStakeAka-'+idModal);
    newModal.find('#showStakeDescription').attr('id', 'showStakeDescription-'+idModal);
    newModal.find('#showStakeConcern').attr('id', 'showStakeConcern-'+idModal);

    newModal.find('#showStakeRepresentative').attr('id', 'showStakeRepresentative-'+idModal);
    newModal.find('#showStakeReports').attr('id', 'showStakeReports-'+idModal);
    newModal.find('#showStakeConsults').attr('id', 'showStakeConsults-'+idModal);
    newModal.find('#showStakeLiaises').attr('id', 'showStakeLiaises-'+idModal);
    newModal.find('#showStakeDelegate').attr('id', 'showStakeDelegate-'+idModal);
    newModal.find('#showStakeDtask').attr('id', 'showStakeDtask-'+idModal);
    
    newModal.find('#showStakeWishes').attr('id', 'showStakeWishes-'+idModal);

    newModal.find('#showStakeAttitude').attr('id', 'showStakeAttitude-'+idModal);
    newModal.find('#showStakeDomainKnowledge').attr('id', 'showStakeDomainKnowledge-'+idModal);

    newModal.find('#showStakeIsA').attr('id', 'showStakeIsA-'+idModal);
    newModal.find('#showStakePlayerType').attr('id', 'showStakePlayerType-'+idModal);
    newModal.find('#showStakeRoleType').attr('id', 'showStakeRoleType-'+idModal);

  
}

function  callDataStake(stakeId, idModal){
    $.post(baseUrl+"stakeholder/showDetailStake",{
        stakeId :stakeId
    }, function(data){
        setStakeModalDetail(data, idModal);
    }, "json");
}
function setStakeModalDetail(data, idModal){
    var empty = '<label style="font-size: 10px; font-style : italic">This Field is Empty.</label>';

    $('#showStakeName-'+idModal).html(data.name);
    if(data.name == null || data.name == "") $('#showStakeName-'+idModal).html(empty);

    $('#showStakeOrganization-'+idModal).html(data.OrganisationName);
    if(data.OrganisationName == null || data.OrganisationName == "") $('#showStakeOrganization-'+idModal).html(empty);

    $('#showStakeAka-'+idModal).html(data.aka);
    if(data.aka == null || data.aka == "") $('#showStakeAka-'+idModal).html(empty);


    $('#showStakeDescription-'+idModal).html(data.description);
    if(data.description == null || data.description == "") $('#showStakeDescription-'+idModal).html(empty);


    $('#showStakeConcern-'+idModal).html(data.concern);
    if(data.concern == null || data.concern == "") $('#showStakeConcern-'+idModal).html(empty);

   
    $('#showStakeWishes-'+idModal).html(data.wishes);
    if(data.wishes == null || data.wishes == "") $('#showStakeWishes-'+idModal).html(empty);

    $('#showStakeIsA-'+idModal).html(data.isA);
    if(data.isA == null || data.isA == "") $('#showStakeIsA-'+idModal).html(empty);


    var representative = data.representative;
    var strRepresentative = "";
    $.each(representative, function( index, value ) {
        strRepresentative += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailStake(\''+value.id+'\')">'+value.name+'</a>';
    });
    $('#showStakeRepresentative-'+idModal).html(strRepresentative);
    if(data.representative == null || data.representative== "") $('#showStakeRepresentative-'+idModal).html(empty);
 

    var reports = data.reports;
    var strReports = "";
    $.each(reports, function( index, value ) {
        strReports += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailStake(\''+value.id+'\')">'+value.name+'</a>';
    });
    $('#showStakeReports-'+idModal).html(strReports);
    if(data.reports == null || data.reports== "") $('#showStakeReports-'+idModal).html(empty);
 
    
    var consults = data.consults;
    var strConsults = "";
    $.each(consults, function( index, value ) {
        strConsults += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailStake(\''+value.id+'\')">'+value.name+'</a>';
    });
    $('#showStakeConsults-'+idModal).html(strConsults);
    if(data.consults == null || data.consults== "") $('#showStakeConsults-'+idModal).html(empty);
 

    var liaises = data.liaises;
    var strLiaises = "";
    $.each(liaises, function( index, value ) {
        strLiaises += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailStake(\''+value.id+'\')">'+value.name+'</a>';
    });
    $('#showStakeLiaises-'+idModal).html(strLiaises);
    if(data.liaises == null || data.liaises== "") $('#showStakeLiaises-'+idModal).html(empty);
 

    var delegate = data.delegate;
    var strDelegate = "";
    $.each(delegate, function( index, value ) {
        strDelegate += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailStake(\''+value.id+'\')">'+value.name+'</a>';
    });
    $('#showStakeDelegate-'+idModal).html(strDelegate);
    if(data.delegate == null || data.delegate== "") $('#showStakeDelegate-'+idModal).html(empty);
 

    var dTask = data.dTask;
    var strDTask = "";
    $.each(dTask, function( index, value ) {
        strDTask += '<a href="#" class="labelCo labelInfo info-task" onclick="cloneModalDetailStake(\''+value.id+'\')">'+value.name+'</a>';
    });
    $('#showStakeDtask-'+idModal).html(strDTask);
    if(data.dTask == null || data.dTask== "") $('#showStakeDtask-'+idModal).html(empty);
 
    
    


}



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