var Resource;
var Stakeholder;
var Tasks;
var projectid = $("#idProject").val();
//modal 

function showModalNewStakeholder() {
    $("#createStakeholder").modal("show");
};

function showModalNewTask() {
    $("#createTask").modal("show");
};
$(document).ready(function () {
    function createJSON(data) {
        jsonObj = [];
        $.each(data, function (index, data) {

            item = {}
            item["value"] = data._id.$id;
            item["text"] = data.name;

            jsonObj.push(item);
        });

        item = {}
        item["value"] = 0;
        item["text"] = "?";

        jsonObj.push(item);

        return jsonObj;
    }

    function createString(auto) {
        return JSON.stringify(auto)
    }


    var project = "1";     //input project id .val()

    $.post(baseUrl + "stakeholder/findStake", {
        project: project
    }, function (data) {

        var auto = createJSON(data);
        var n = createString(auto);
        Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Stakeholder.initialize();

        var Orepresentative = $('#Orepresentative');
        Orepresentative.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    empty: '<div id="nomatch" class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });

        var Oreports = $('#Oreports');
        Oreports.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    highlight: true,
                    empty: '<div class="empty-message text-info add-stakeholder" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });

        var Oconsults = $('#Oconsults');
        Oconsults.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    highlight: true,
                    empty: '<div class="empty-message text-info add-stakeholder" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });



        var Oliaises = $('#Oliaises');
        Oliaises.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    empty: '<div class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });



        var Odelegate = $('#Odelegate');
        Odelegate.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    empty: '<div class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                },
            }
        });

        var inreports = $('#inreports');
        inreports.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    highlight: true,
                    empty: '<div class="empty-message text-info add-stakeholder" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });

        var inconsults = $('#inconsults');
        inconsults.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    highlight: true,
                    empty: '<div class="empty-message text-info add-stakeholder" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });



        var inliaises = $('#inliaises');
        inliaises.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    empty: '<div class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });



        var indelegate = $('#indelegate');
        indelegate.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Stakeholder.ttAdapter(),
                templates: {
                    empty: '<div class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                },
            }
        });

    }, "json");
    ///saveOrganisation
    $('#SaveOr').click(function () {
        var name = $("#OStakeName").val()
        var Organisation = $("#OrganName").val()
        var aka = $("#Oaka").val()
        var description = $("#Odescription").val()
        var concern = $("#Oconcern").val()
        var representative = $("#Orepresentative").tagsinput('items');
        itemrepresentative = {};
        $.each(representative, function (index, input) {
            itemrepresentative[index] = input.value
            });
        var reports = $("#Oreports").tagsinput('items');
        itemreports = {};
        $.each(reports, function (index, input) {
            itemreports[index] = input.value
            });
        var consults = $("#Oconsults").tagsinput('items');
        itemconsults = {};
        $.each(consults, function (index, input) {
            itemconsults[index] = input.value
            });
        var liaises = $("#Oliaises").tagsinput('items');
        itemliaises = {};
        $.each(liaises, function (index, input) {
            itemliaises[index] = input.value
            });
        var delegate = $("#Odelegate").tagsinput('items');
        itemdelegate = {};
        $.each(delegate, function (index, input) {
            itemdelegate[index] = input.value
            });
        var dTask = $("#OdTask").val()
        var wishes = $("#Owishes").val()
        var idProject = $("#idProject").val();
        var type;
        if ($('#focal').is(':checked'))
            type = 1;
        else
            type = 0;
        $.ajax({
            type: 'POST',
            url: baseUrl + "stakeholder/save",
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
                dTask: dTask,
                wishes: wishes,
                type: type,
                idProject: idProject
            },
            success: function (data) {
                $.redirect(baseUrl + "stakeholder/index", {});
            }
        })
    });

    ///saveIndividual
    $('#savein').click(function () {
        var name = $("#intakeName").val()
        var aka = $("#inaka").val()
        var description = $("#indescription").val()
        var concern = $("#inconcern").val()

        var attitude = $("#attitude").val();
        var attitude = $("#domainKnowledge").val();

        var reports = $("#inreports").tagsinput('items');
        itemreports = {};
        $.each(reports, function (index, input) {
            itemreports[index] = input.value
        });
        var consults = $("#inconsults").tagsinput('items');
        itemconsults = {};
        $.each(consults, function (index, input) {
            itemconsults[index] = input.value
        });
        var liaises = $("#inliaises").tagsinput('items');
        itemliaises = {};
        $.each(liaises, function (index, input) {
            itemliaises[index] = input.value
        });
        var delegate = $("#indelegate").tagsinput('items');
        itemdelegate = {};
        $.each(delegate, function (index, input) {
            itemdelegate[index] = input.value
        });
        var dTask = $("#indTask").val()
        var wishes = $("#inwishes").val()
        var idProject = $("#idProject").val();
        var type=2;
        $.ajax({
            type: 'POST',
            url: baseUrl + "stakeholder/save",
            data: {
                name: name,
                aka: aka,
                description: description,
                concern: concern,
                attitude: attitude,
                domainKnowledge: domainKnowledge,
                reports: itemreports,
                consults: itemconsults,
                liaises: itemliaises,
                delegate: itemdelegate,
                dTask: dTask,
                wishes: wishes,
                type: type,
                idProject: idProject
            },
            success: function (data) {
                $.redirect(baseUrl + "stakeholder/index", {});
            }
        })
    });
});