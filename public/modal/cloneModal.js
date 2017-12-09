var zindex = 2000;
var listModal = [];

function cloneModal($modal) {
    var newModal = $modal.clone();

    //gen id
    var idModal = new Date().getTime();
    newModal.attr("id", idModal);
    newModal.attr("style", "z-index: " + zindex++);
    
    
    //set onclick in button
    setFormIdInModal(idModal, newModal);
//    var onClickText = "cloneModal($('#" + idModal + "'))";
//    newModal.find('.btn.btn-info').attr('onclick',onClickText);

    //append to modal
    $modal.after(newModal);
    initResourseData(idModal);
    
    //show modal
    var modalId = "#" + idModal;
    $(modalId).modal("show");
    
    //add id to list for using after
//    listModal.push(idModal);
}

function initResourseData(idModal){
	var ModalincludesResource = $('.ModalincludesResource-'+idModal);
    ModalincludesResource.tagsinput({
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
}

function setFormIdInModal(idModal, newModal){
	newModal.find('#Modalresourcename').attr('id', 'Modalresourcename-'+idModal);
	newModal.find('#ModalDesResource').attr('id', 'ModalDesResource-'+idModal);
	newModal.find('#ModalincludesResource').addClass(' ModalincludesResource-'+idModal);
	newModal.find('#ModalincludesResource').attr('id', 'ModalincludesResource-'+idModal);
	newModal.find('#ModalrOwnerResource').attr('id', 'ModalrOwnerResource-'+idModal);
	newModal.find('#ModalpOwnerResource').attr('id', 'ModalpOwnerResource-'+idModal);
	newModal.find('#ModalmaintainerResource').attr('id', 'ModalmaintainerResource-'+idModal);
	
	var onClickSave = "saveResourse('"+ idModal + "')";
	var idSaveModal = 'saveResourceformModal-'+idModal;
	newModal.find('#saveResourceformModal').attr('id', idSaveModal);
	newModal.find('#'+idSaveModal).attr('onclick', onClickSave);
}

function saveResourse(idModal){
	var resourcename = $("#Modalresourcename-"+idModal).val();
//    var Description = $("#ModalDesResource-"+idModal).val();
//    var includes = $("#ModalincludesResource-"+idModal).tagsinput('items')
//    item4 = {};
//    $.each(includes, function(index, input){
//        item4 [index] = input.value
//    });
//
//    var rOwner =$("#ModalrOwnerResource-"+idModal).tagsinput('items')
//    item1 = {};
//    $.each(rOwner, function(index, input){
//        item1 [index] = input.value
//    });
//
//    var pOwner = $("#ModalpOwnerResource-"+idModal).tagsinput('items')
//    item2 = {};
//    $.each(rOwner, function(index, input){
//        item2 [index] = input.value
//    });
//
//    var maintainer = $("#ModalmaintainerResource-"+idModal).tagsinput('items')
//    item3 = {};
//    $.each(rOwner, function(index, input){
//        item3 [index] = input.value
//    });

    var idProject = $("#idProjectmodalResource").val();

    $.ajax({
        type:'POST',
        url: baseUrl+"task/saveResourceFormModal",
        data:{
            resourcename: resourcename,
//            Description: Description,
//            includes: item4,
//            rOwner : item1,
//            pOwner : item2,
//            maintainer: item3,
            idProject : idProject
        },
        success:function(data){
            Resource.clear();
            $.post(baseUrl+"task/findResource",{
                    project : projectid
                    }, function(data){
                      console.log(data);
                        var auto = createJSON(data);
                        var n = createString(auto);
                        
                        Resource.local = JSON.parse(n);
                        Resource.initialize(true);
                        
                        console.log(n);
                        
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

$(document).on('hide.bs.modal', "div.createResource", function() {
	var vm = $(this);
	var id = vm.prop('id');
});