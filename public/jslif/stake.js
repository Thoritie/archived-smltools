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


    var project = $("#idProject").val();;     //input project id .val()

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

        var rreports = $('#rreports');
        rreports.tagsinput({
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

        var rconsults = $('#rconsults');
        rconsults.tagsinput({
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



        var rliaises = $('#rliaises');
        rliaises.tagsinput({
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



        var rdelegate = $('#rdelegate');
        rdelegate.tagsinput({
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
    $('#Savein').click(function () {
        var inname = $("#inStakeName").val()
        var inaka = $("#inaka").val()
        var indescription = $("#indescription").val()
        var inconcern = $("#inconcern").val()

        var inattitude = $("#attitude  option:selected").val();
        var indomainKnowledge = $("#domainKnowledge  option:selected").val();

        var inreports = $("#inreports").tagsinput('items');
        iteminreports = {};
        $.each(inreports, function (index, input) {
            iteminreports[index] = input.value
        });
        var inconsults = $("#inconsults").tagsinput('items');
        iteminconsults = {};
        $.each(inconsults, function (index, input) {
            iteminconsults[index] = input.value
        });
        var inliaises = $("#inliaises").tagsinput('items');
        iteminliaises = {};
        $.each(inliaises, function (index, input) {
            iteminliaises[index] = input.value
        });
        var indelegate = $("#indelegate").tagsinput('items');
        itemindelegate = {};
        $.each(indelegate, function (index, input) {
            itemindelegate[index] = input.value
        });
        var indTask = $("#indTask").val()
        var inwishes = $("#inwishes").val()
        var inidProject = $("#idProject").val();
        var intype=2;
        $.ajax({
            type: 'POST',
            url: baseUrl + "stakeholder/save",
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
                dTask: indTask,
                wishes: inwishes,
                type: intype,
                idProject: inidProject
            },
            success: function (data) {
                $.redirect(baseUrl + "stakeholder/index", {});
            }
        })
    });

    ///saveRole
    $('#saveR').click(function () {
        var rname = $("#rStakeName").val()
        var raka = $("#raka").val()
        var isA = $("#isA").val()
        
        var rdescription = $("#rdescription").val()
        var rconcern = $("#rconcern").val()

        var PlayerType = $("#PlayerType  option:selected").val();
        var RolePlayer = $("#RolePlayer  option:selected").val();
        
        var rreports = $("#rreports").tagsinput('items');
        itemrreports = {};
        $.each(rreports, function (index, input) {
            itemrreports[index] = input.value
        });
        var rconsults = $("#rconsults").tagsinput('items');
        itemrconsults = {};
        $.each(rconsults, function (index, input) {
            itemrconsults[index] = input.value
        });
        var rliaises = $("#rliaises").tagsinput('items');
        itemrliaises = {};
        $.each(rliaises, function (index, input) {
            itemrliaises[index] = input.value
        });
        var rdelegate = $("#rdelegate").tagsinput('items');
        itemrdelegate = {};
        $.each(rdelegate, function (index, input) {
            itemrdelegate[index] = input.value
        });
        var rdTask = $("#rdTask").val()
        var rwishes = $("#rwishes").val()
        var ridProject = $("#idProject").val();
        var rtype = 3;
        $.ajax({
            type: 'POST',
            url: baseUrl + "stakeholder/save",
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
                dTask: rdTask,
                wishes: rwishes,
                type: rtype,
                idProject: ridProject
            },
            success: function (data) {
                $.redirect(baseUrl + "stakeholder/index", {});
            }
        })
    });
});