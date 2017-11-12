$(document).ready(function () {

    function createJSON(data) {
        jsonObj = [];
        var i = 2;
        $.each(data, function (index, data) {

            item = {}
            item["value"] = i;
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
        console.log(auto);
        var n = createString(auto);
        tagPermission(n);
    }, "json");

    $('#saveproject').click(function () {
        var projectname = $("#projectname").val();
        var description = $("#description").val();
        var permission = $("#permission").tagsinput('items')
        item1 = {};
        $.each(permission, function (index, input) {
            item1[index] = input.index
        });
        $.post("save", {
            projectname: projectname,
            description: description,
            permission: item1,
        }, function (data) {

        }, "json");
    });

});
