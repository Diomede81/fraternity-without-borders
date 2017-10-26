$(document).ready(function(){
    $("#menu_vertical").click(function(){
        $("#myNav").css("height", "100%");
    });
});

$(document).ready(function(){
    $(".closebtn").click(function(){
        $("#myNav").css("height", "0%");
    });
});
