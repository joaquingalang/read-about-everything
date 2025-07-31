$(".thumbnail-preview").hide();

$("#thumbnail-preview-field").change(function () {
    console.log($(this).val());

    $(".thumbnail-preview").attr("src", $(this).val());
    $(".thumbnail-preview").show();
});

$(".thumbnail-preview").on("error", function () {
    $(this).hide();
});