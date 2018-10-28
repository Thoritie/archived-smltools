var projectid = $("#idProject").val();
var stakeid = $("#idStake").val();
//modal 

function showModalNewStakeholder() {
    $("#createStakeholder").modal("show");
};

function showModalNewTask() {
    $("#createTask").modal("show");
};
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

    $("#create_organisation").validate({
        rules: {
            OStakeName: {
                required: true,
                remote: {
                    url: baseUrl + "stakeholder/checkDupNameStake",
                    type: "post",
                    data: {
                        StakeName: function () {
                            return $("#OStakeName").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        },
                        typeStake: function () {
                            if ($('#focal').is(':checked'))
                                typeOrgan = 1;
                            else
                                typeOrgan = 0;
                            
                            return typeOrgan
                        },
                    }
                }
            },
        },
        messages: {
            OStakeName: {
                required: "stakeholder name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    })

    $("#create_individual").validate({
        rules: {
            inStakeName: {
                required: true,
                remote: {
                    url: baseUrl + "stakeholder/checkDupNameStake",
                    type: "post",
                    data: {
                        StakeName: function () {
                            return $("#inStakeName").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        },
                        typeStake: function () {
                            return 2
                        },
                    }
                }
            },
        },
        messages: {
            inStakeName: {
                required: "stakeholder name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    })

    $("#create_role").validate({
        rules: {
            rStakeName: {
                required: true,
                remote: {
                    url: baseUrl + "stakeholder/checkDupNameStake",
                    type: "post",
                    data: {
                        StakeName: function () {
                            return $("#rStakeName").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        },
                        typeStake: function () {
                            return 3
                        },
                    }
                }
            },
        },
        messages: {
            rStakeName: {
                required: "stakeholder name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    })

    $.post(baseUrl + "stakeholder/findStake", {
        project: projectid
    }, function (data) {

        var auto = createJSON(data);
        var n = createString(auto);
        Stakeholder = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Stakeholder.initialize();

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

        var rolePlayRole = $('#role_play_role');
        rolePlayRole.tagsinput({
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


    $.post( baseUrl+"task/findResource",{
        project : projectid
    }, function(data){
        var auto = createJSON(data);
        var n = createString(auto);

        Resource = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Resource.initialize();
    },  "json");

    $.post(baseUrl + "stakeholder/findRepresent", {
        project: projectid
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


    }, "json");

    $.post(baseUrl + "stakeholder/findDtask", {
        project: projectid
    }, function (data) {

        var auto = createJSON(data);
        var n = createString(auto);
        Tasks = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: JSON.parse(n)
        });
        Tasks.initialize();

        var OdTask = $('#OdTask');
        OdTask.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Tasks.ttAdapter(),
                templates: {
                    empty: '<div id="nomatch" class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });

        var indTask = $('#indTask');
        indTask.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Tasks.ttAdapter(),
                templates: {
                    empty: '<div id="nomatch" class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });

        var rdTask = $('#rdTask');
        rdTask.tagsinput({
            itemValue: 'value',
            itemText: 'text',
            typeaheadjs: {
                name: 'name',
                displayKey: 'text',
                source: Tasks.ttAdapter(),
                templates: {
                    empty: '<div id="nomatch" class="empty-message text-info" onclick="cloneModalStakeholder($(\'#createStakeholder\'))"> No matches.</div>'
                }
            }
        });


    }, "json");

    ///saveOrganisation
    $('#SaveOr').click(function () {
        if ($("#create_organisation").valid()) {
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
        var dTask = $("#OdTask").tagsinput('items');
        itemdTask = {};
        $.each(dTask, function (index, input) {
            itemdTask[index] = input.value
        });
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
                dTask: itemdTask,
                wishes: wishes,
                type: type,
                idProject: idProject
            },
            success: function (data) {
                window.location.href = baseUrl+"stakeholder";
            }
        })
    }
    });

    ///saveIndividual
    $('#Savein').click(function () {
        if ($("#create_individual").valid()) {
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
            var indTask = $("#indTask").tagsinput('items');
            itemdTask = {};
            $.each(indTask, function (index, input) {
                itemdTask[index] = input.value
            });
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
                    dTask: itemdTask,
                    wishes: inwishes,
                    type: intype,
                    idProject: inidProject
                },
                success: function (data) {
                    window.location.href = baseUrl+"stakeholder";
                }
            })
        }
    });

    ///saveRole
    $('#saveR').click(function () {
        if ($("#create_role").valid()) {
            var rname = $("#rStakeName").val()
            var raka = $("#raka").val()
            var isA = $("#isA").val()
            var rdescription = $("#rdescription").val()
            var rconcern = $("#rconcern").val()
            var rolePlayerType = $('#role_playerType:checked').val();
            var roleNoStake = $("#role_number_of_stakeholder").val();
            var RolePlayer = $("#role_RolePlayer  option:selected").val();
            var roleTF = $("#role_TF  option:selected").val();
            var rolePlayRole = $("#role_play_role").tagsinput('items');
            itemRolePlayRole = {};
            $.each(rolePlayRole, function (index, input) {
                itemRolePlayRole[index] = input.value
            });
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
            var rdTask = $("#rdTask").tagsinput('items');
            itemdTask = {};
            $.each(rdTask, function (index, input) {
                itemdTask[index] = input.value
            });
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
                    PlayerType: rolePlayerType,
                    NoStake: roleNoStake,
                    playRole: itemRolePlayRole,
                    RolePlayer: RolePlayer,
                    roleTF :roleTF,
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
                    window.location.href = baseUrl+"stakeholder";
                }
            })
        }
    });


    // ---------------------------------------EDITSTAKE-------------------------------------------------------

    $("#edit_organisation").validate({
        rules: {
            edStakeName: {
                required: true,
                remote: {
                    url: baseUrl + "stakeholder/checkDupNameEditStake",
                    type: "post",
                    data: {
                        StakeName: function () {
                            return $("#edStakeName").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        },
                        typeStake: function () {
                            if ($('#focal').is(':checked'))
                                typeOrgan = 1;
                            else
                                typeOrgan = 0;
                            
                            return typeOrgan
                        },
                        idStake: function () {
                            return $("#idStake").val()
                        }
                    }
                }
            },
        },
        messages: {
            OStakeName: {
                required: "stakeholder name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    })


    $('#Save_edit_Organ').click(function () {
        if ($("#edit_organisation").valid()) {
            var name = $("#edStakeName").val()
            var Organisation = $("#OrganName").val()
            var aka = $("#Oaka").val()
            var description = $("#Odescription").val()
            var concern = $("#Oconcern").val()
            var representative = $("#edOrepresentative").tagsinput('items');
            itemrepresentative = {};
            $.each(representative, function (index, input) {
                itemrepresentative[index] = input.value
            });
            var reports = $("#edOreports").tagsinput('items');
            itemreports = {};
            $.each(reports, function (index, input) {
                itemreports[index] = input.value
            });
            var consults = $("#edOconsults").tagsinput('items');
            itemconsults = {};
            $.each(consults, function (index, input) {
                itemconsults[index] = input.value
            });
            var liaises = $("#edOliaises").tagsinput('items');
            itemliaises = {};
            $.each(liaises, function (index, input) {
                itemliaises[index] = input.value
            });
            var delegate = $("#edOdelegate").tagsinput('items');
            itemdelegate = {};
            $.each(delegate, function (index, input) {
                itemdelegate[index] = input.value
            });
            var dTask = $("#edOdTask").tagsinput('items');
            itemdTask = {};
            $.each(dTask, function (index, input) {
                itemdTask[index] = input.value
            });
            var wishes = $("#Owishes").val()
            var idProject = $("#idProject").val();
            var stakeid = $("#idStake").val();
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
                    dTask: itemdTask,
                    wishes: wishes,
                    type: type,
                    idProject: idProject,
                    idStake: stakeid
                },
                success: function (data) {
                    window.location.href = baseUrl + "stakeholder";
                }
            })
        }
    });

    $("#edit_individual").validate({
        rules: {
            edinStakeName: {
                required: true,
                remote: {
                    url: baseUrl + "stakeholder/checkDupNameEditStake",
                    type: "post",
                    data: {
                        StakeName: function () {
                            return $("#inStakeName").val()
                        },
                        idProject: function () {
                            return $("#idProject").val()
                        },
                        typeStake: function () {
                            return 2
                        },
                        idStake: function () {
                            return $("#idStake").val()
                        }
                    }
                }
            },
        },
        messages: {
            OStakeName: {
                required: "stakeholder name is required",
                remote: jQuery.validator.format("{0} is already taken.")
            }
        }
    })

     ///saveIndividual
    $('#save_edit_individual').click(function () {
        if ($("#edit_individual").valid()) {
            var inname = $("#inStakeName").val()
            var inaka = $("#inaka").val()
            var indescription = $("#indescription").val()
            var inconcern = $("#inconcern").val()

            var inattitude = $("#attitude  option:selected").val();
            var indomainKnowledge = $("#domainKnowledge  option:selected").val();

            var inreports = $("#edinreports").tagsinput('items');
            iteminreports = {};
            $.each(inreports, function (index, input) {
                iteminreports[index] = input.value
            });
            var inconsults = $("#edinconsults").tagsinput('items');
            iteminconsults = {};
            $.each(inconsults, function (index, input) {
                iteminconsults[index] = input.value
            });
            var inliaises = $("#edinliaises").tagsinput('items');
            iteminliaises = {};
            $.each(inliaises, function (index, input) {
                iteminliaises[index] = input.value
            });
            var indelegate = $("#edindelegate").tagsinput('items');
            itemindelegate = {};
            $.each(indelegate, function (index, input) {
                itemindelegate[index] = input.value
            });
            var indTask = $("#edindTask").tagsinput('items');
            itemdTask = {};
            $.each(indTask, function (index, input) {
                itemdTask[index] = input.value
            });
            var inwishes = $("#inwishes").val()
            var inidProject = $("#idProject").val();
            var stakeid = $("#idStake").val();
            var intype = 2;
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
                    dTask: itemdTask,
                    wishes: inwishes,
                    type: intype,
                    idProject: inidProject,
                    idStake: stakeid
                },
                success: function (data) {
                    window.location.href = baseUrl + "stakeholder";
                }
            })
        }
    });

    ///saveRole
    $('#saveedR').click(function () {
        var rname = $("#rStakeName").val()
        var raka = $("#raka").val()
        var isA = $("#isA").val()

        var rdescription = $("#rdescription").val()
        var rconcern = $("#rconcern").val()

        var PlayerType = $("#PlayerType  option:selected").val();
        var RolePlayer = $("#RolePlayer  option:selected").val();

        var rreports = $("#edrreports").tagsinput('items');
        itemrreports = {};
        $.each(rreports, function (index, input) {
            itemrreports[index] = input.value
        });
        var rconsults = $("#edrconsults").tagsinput('items');
        itemrconsults = {};
        $.each(rconsults, function (index, input) {
            itemrconsults[index] = input.value
        });
        var rliaises = $("#edrliaises").tagsinput('items');
        itemrliaises = {};
        $.each(rliaises, function (index, input) {
            itemrliaises[index] = input.value
        });
        var rdelegate = $("#edrdelegate").tagsinput('items');
        itemrdelegate = {};
        $.each(rdelegate, function (index, input) {
            itemrdelegate[index] = input.value
        });
        var rdTask = $("#edrdTask").tagsinput('items');
        itemdTask = {};
        $.each(rdTask, function (index, input) {
            itemdTask[index] = input.value
        });
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
                dTask: itemdTask,
                wishes: rwishes,
                type: rtype,
                idProject: ridProject,
                idStake: stakeid
            },
            success: function (data) {
                window.location.href = baseUrl + "stakeholder";
            }
        })
    });
});