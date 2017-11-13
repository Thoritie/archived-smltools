$(document).ready(function () {
    $("#editTask-form").validate({
        rules: {
            Edname: "required",
            EdisA: "required",
            EdDescription: "required",
            Edincludes: "required",
            Edowner: "required",
            Edcollaburator: "required",
            Edregulator: "required",
            Eduses: "required",
            Edproduces: "required",
            EdownerToBe: "required",
            EdcollaboratorToBe: "required",
            EdtoUse: "required",
            EdtoProduce: "required",
        }
    });
});