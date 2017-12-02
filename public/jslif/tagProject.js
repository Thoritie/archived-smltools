$(document).ready(function () {
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
    $("#createProject-form").validate({
        rules: {
            projectname: {
                required: true,
                remote: {
                    url: "checkDup",
                    type: "post",
                    data: {
                        projectname: function () {
                            return $("#projectname").val()
                        }
                    }
                }
            },
        },
        messages: {
            projectname: {
                required: "Project name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    });
    
    function createJSON(data) {
        jsonObj = [];
        var i = 2;
        $.each(data, function (index, data) {

            item = {}
            item["value"] = data._id.$id;
            item["text"] = data.username;
            item["continent"] = "";
            item["index"] = data._id.$id;
            i++
            jsonObj.push(item);
        });
        return jsonObj;
    }
    function createString(auto) {
        return JSON.stringify(auto)
    }

    function tagPermission(n) {
        var users = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });

        users.initialize();

        var permission = $('#permission');
        permission.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                username: 'username',
                displayKey: 'text',
                source: users.ttAdapter(),
                templates: {
                    empty: '<div class="empty-message text-info"> No matches.</div>'
                }
            }
        });
    }
    var session = $("#session").val();
    $.post("findUser", {
        session : session
    }, function (data) {
        var auto = createJSON(data);
       
        var n = createString(auto);
        tagPermission(n);
    }, "json");

    $('#saveproject').click(function () {
    	if($("#createProject-form").valid()){
    		var projectname = $("#projectname").val();
            var description = $("#description").val();
            var permission = $("#permission").tagsinput('items')
            item1 = {};
            if(permission != undefined && permission.length > 0){
	            $.each(permission, function (index, input) {
	                item1[index] = input.index
	            });
            }
            $.ajax({
                type: 'POST',
                url: "save",
                data: {
                    projectname: projectname,
                    description: description,
                    permission: item1,
                },
                success: function (data) {
//                	$.redirect(baseUrl+"project", {});
                    window.location.href = baseUrl+"project";
                }
            })
    	}
    });

});
