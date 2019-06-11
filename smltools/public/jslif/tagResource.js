$(document).ready(function() {
    //validate
    
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
    $("#createResource-form").validate({
        rules: {
            resourcename: {
                required: true,
                remote: {
                    url:  baseUrl+"resource/checkDupplicateResourceName",
                    type: "post",
                    data: {
                        resourcename: function () {
                            return $("#resourcename").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
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

    $("#editResource").validate({
        rules: {
            editResName: {
                required: true,
                remote: {
                    url:  baseUrl+"resource/checkDupplicateResourceEditName",
                    type: "post",
                    data: {
                        resourcename: function () {
                            return $("#editResName").val()
                        },
                        idProject: function () {
                            return $("#idProjectEdit").val()
                        },
                        idResource: function () {
                            return $("#idResourceEdit").val()
                        }
                    }
                }
            },
        },
        messages: {
            editResName: {
                required: "Resource name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    });


    var project = $("#idProject").val();
    $.post( baseUrl+"task/findStake",{
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

        var rOwner = $('#rOwner');
        rOwner.tagsinput({
            itemValue: 'value',
            itemText:'text',
            typeaheadjs : {
                name :'name',
                displayKey:'text',
                source : Stakeholder.ttAdapter(),
                templates :{
                    empty:'<div id="nomatch" class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });

        var pOwner = $('#pOwner');
        pOwner.tagsinput({
            itemValue: 'value',
            itemText:'text',
            typeaheadjs : {
                name :'name',
                displayKey:'text',
                source : Stakeholder.ttAdapter(),
                templates :{
                    empty:'<div id="nomatch" class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });

        var maintainer = $('#maintainer');
        maintainer.tagsinput({
            itemValue: 'value',
            itemText:'text',
            typeaheadjs : {
                name :'name',
                displayKey:'text',
                source : Stakeholder.ttAdapter(),
                templates :{
                    empty:'<div id="nomatch" class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });
    },  "json");

    $.post( baseUrl+"task/findResource",{
        project : project
    }, function(data){
        var auto = createJSON(data);
        var n = createString(auto);

        Resource = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Resource.initialize();

        var includes = $('#includes');
        includes.tagsinput({
            itemValue: 'value',
            itemText:'text',
            typeaheadjs : {
                name :'name',
                displayKey:'text',
                source : Resource.ttAdapter(),
                templates :{
                    empty:'<div class="empty-message text-info resourse-emptry" onclick="cloneModalResource($(\'#createResource\'))"> No matches.</div>'
                }
            }
        });

    },  "json");


    $.post( baseUrl+"task/findTask",{
        project : project
    }, function(data){
        var auto = createJSON(data);
        var n = createString(auto);

        Tasks = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Tasks.initialize();
    },  "json");

    // save resource
    $('#saveResource').click(function (){
        if($("#createResource-form").valid()){
            var resourcename = $("#resourcename").val();
            var Description = $("#Description").val();
            var idProject = $("#idProject").val();

            var includes =$("#includes").tagsinput('items')
            item4 = {};
            $.each(includes, function(index, input){
                item4 [index] = input.value
            });

            var rOwner =$("#rOwner").tagsinput('items')
            item1 = {};
            $.each(rOwner, function(index, input){
                item1 [index] = input.value
            });

            var pOwner =$("#pOwner").tagsinput('items')
            item2 = {};
            $.each(pOwner, function(index, input){
                item2 [index] = input.value
            });

            var maintainer =$("#maintainer").tagsinput('items')
            item3 = {};
            $.each(maintainer, function(index, input){
                item3 [index] = input.value
            });

            $.ajax({
                type:'POST',
                url: baseUrl+"resource/save",
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
                    window.location.href=baseUrl+"resource";
                }
            })

        }

    });


    $('#saveEditResource').click(function (){
        if($("#editResource").valid()){
            var resourcename = $("#editResName").val();
            var Description = $("#editResDesCription").val();
            var idProject = $("#idProjectEdit").val();
            var idResource = $("#idResourceEdit").val();
            var includes =$("#Editincludes").tagsinput('items')
            item4 = {};
            $.each(includes, function(index, input){
                item4 [index] = input.value
            });

            var rOwner =$("#EditrOwner").tagsinput('items')
            item1 = {};
            $.each(rOwner, function(index, input){
                item1 [index] = input.value
            });

            var pOwner =$("#EditpOwner").tagsinput('items')
            item2 = {};
            $.each(pOwner, function(index, input){
                item2 [index] = input.value
            });

            var maintainer =$("#Editmaintainer").tagsinput('items')
            item3 = {};
            $.each(maintainer, function(index, input){
                item3 [index] = input.value
            });

            $.ajax({
                type:'POST',
                url:  baseUrl+"resource/save",
                data:{
                    resourcename: resourcename,
                    Description: Description,
                    includes: item4,
                    rOwner : item1,
                    pOwner : item2,
                    maintainer: item3,
                    idProject : idProject,
                    idResource : idResource
                },
                success:function(data){
                    window.location.href=baseUrl+"resource";
                }
            })
        }

    });
});