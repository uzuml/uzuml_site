
$("document").ready(function() {

    $("#header_bottom").hover(function() {
        $("#title").css("color", "#366097");
    });

    $("#header_bottom").mouseleave(function() {
        $("#title").css("color", "black");
    });
});

