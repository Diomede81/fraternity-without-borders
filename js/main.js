
$(document).ready(function(){


    $('#fullpage').fullpage({

        anchors :['video-section','first-section','second-section','third-section','fourth-section','fifth-section']

    });



    $(".closebtn").click(function(){
        $("#myNav").css("height", "0%");
    });

    $("#menu_vertical").click(function(){
        $("#myNav").css("height", "100%");
    });

var string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1);

	if (string.substring(string.lastIndexOf("/")+1) != "index.html") {
		$(window).scroll(function() {
			if($(window).scrollTop() > 20) {
				$("#navigationbar").css("background-color", "white");	
				$("#navigationbar").css("box-shadow", "0px 5px 5px lightgrey");	
				$("#quote").css("color", "black");	
				$("#quote").css("text-shadow", "none");	
				$("#menu_vertical").css("color", "black");	
				$("#menu_vertical").css("text-shadow", "none");	
				$("li a").css("color", "black");	
				$("li a").css("text-shadow", "none");	
			}
			else {
				$("#navigationbar").css("background-color", "transparent");	
				$("#navigationbar").css("box-shadow", "none");	
				$("#quote").css("color", "white");	
				$("#quote").css("text-shadow", "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black");	
				$("#menu_vertical").css("color", "white");	
				$("#menu_vertical").css("text-shadow", "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black");	
				$("li a").css("color", "white");	
				$("li a").css("text-shadow", "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black");	
			}
		});					
	}		
});
    

