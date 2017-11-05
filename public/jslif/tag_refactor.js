$(document).ready(function () {
    //plugin function
    $.fn.extend({
        createTaginput: function (data, name) {
            $(this).tagsinput({
                itemValue: 'value',
                itemText: 'text',
                typeaheadjs: {
                    name: name,
                    displayKey: "text",
                    source: this.bindData(data)
                }
            })
        },
        bindData: function (data) {
            data = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: jQuery.parseJSON(data)
            });
            data.initialize();
            return data;
        }
    });

    $.post("findStake", {}, function (data) {
        var jsonObj = [];
        $.each(data, function (i, data) {
            jsonObj.push({
                "value": i++,
                "text": data.name,
                "continent": "",
            });
        });

         //เรียกใช้การสร้าง taginput
        $('#tag1').createTaginput(jsonObj, "task");

    }, "json");

});