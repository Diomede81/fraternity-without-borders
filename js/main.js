
$(document).ready(function(){



    $('#fullpage').fullpage({

        anchors :['video-section','first-section','second-section','third-section','fourth-section','fifth-section']

    });


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";

}


});