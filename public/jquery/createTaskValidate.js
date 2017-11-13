$(document).ready(function () {
    $("#createTask-form").validate({
        rules: {
            taskname: "required",
            isA: "required",
            Description: "required",
            includes: "required",
            owner: "required",
            collaburator: "required",
            regulator: "required",
            uses: "required",
            produces: "required",
            ownerToBe: "required",
            collaboratorToBe: "required",
            toUse: "required",
            toProduce: "required",

        }
    });
});