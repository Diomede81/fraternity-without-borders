<<<<<<< HEAD
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
=======

$(document).ready(function(){



    $('#fullpage').fullpage({

        anchors :['first-section','second-section','third-section','fourth-section','fifth-section']

    });


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";

}


});
>>>>>>> 78d2d26ee422f0aa44daa232a2d00f6518757e64
