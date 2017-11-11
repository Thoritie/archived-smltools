$(document).ready(function () {

    function createJSON(data) {
        jsonObj = [];
        var i = 2;
        $.each(data, function (index, data) {

            item = {}
            item["value"] = i;
            item["text"] = data.name;
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

    $.post("findUser", {
    }, function (data) {
        var auto = createJSON(data);
        console.log(auto);
        var n = createString(auto);
        tagPermission(n);
    }, "json");


});
