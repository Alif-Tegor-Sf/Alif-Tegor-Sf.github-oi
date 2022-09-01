$(document).ready(function () {
    $('.header').height($(window).height());
})
$(document).ready(function () {
    console.log("document loaded");
});
$(window).on("load", function () {
    console.log("window loaded");
});
$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    });
    $("#show").click(function () {
        $("p").show();
    });
});
$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideDown("slow");
    });
});