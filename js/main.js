
$(document).ready(function(){


    $('#fullpage').fullpage({

        anchors :['video-section','first-section','second-section','third-section','fourth-section','fifth-section','sixth-section','seventh-section'],
        lazyLoading: true

    });

    $('#fullpagedonate').fullpage({

        anchors :['first-section','second-section']

    });

    $('#ourwork').fullpage({

        anchors :['video-section','first-section','second-section','third-section','fourth-section','mobile-video-section']

    });

    $('#whoweare').fullpage({

        anchors :['video-section','first-section','mobile-video-section']

    });

    $('#events-page').fullpage({


        navigationPosition: 'right',

        css : true,

        loopHorizontal : true,

        controlArrows:true,

        verticalCentered : true,

        sectionsColor : ['#000', '#fff']

    });




    $(".closebtn").click(function(){
        $("#myNav").css("height", "0%");
    });

    $("#menu_vertical").click(function(){
        $("#myNav").css("height", "100%");
    });

    $(document).on('click','.sound-icon-volumeup',function(e){

        console.log("Done");

        e.preventDefault();

        console.log($(this).siblings('.my-video'));

        var video = $(this).siblings('.my-video').get(0);

        if(video.muted === true){

            video.muted = false;

            $('.sound-icon-volumeup').children('img').fadeOut("fast");

            $('.sound-icon-volumeup').children('img').attr('src','../img/soundicons/13.png');
            $('.sound-icon-volumeup').children('img').fadeIn('slow');
        }
        else{

            video.muted = true;
            $('.sound-icon-volumeup').children('img').fadeOut("fast");
            $('.sound-icon-volumeup').children('img').attr('src','../img/soundicons/high-volume.png');
            $('.sound-icon-volumeup').children('img').fadeIn('slow');

        }

    })

});


