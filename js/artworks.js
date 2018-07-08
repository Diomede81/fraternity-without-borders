
$.getJSON('../../js/artworks_descriptions.json').done(function(data){

    // The below mechanism populates the artwork page dynamically

    var baseSource="../../img/customevents/graffitti/";
    var artworkHTMLMainContainer = $('#artworks-sale-main-row-container');
    var artworkHTMLRowContainer = $('.artworks-sale-main-row');

    for (var i=1; i < data['artworks'].length ; i++){

        $(artworkHTMLRowContainer).clone().appendTo(artworkHTMLMainContainer);
        $(artworkHTMLMainContainer).append(artworkHTMLRowContainer);
        $(artworkHTMLRowContainer).find('.picture-overlay-container img').attr('src',baseSource + data['artworks'][i]['thumbnail']);
        $(artworkHTMLRowContainer).find('.generic-item-text-info-container h2').html(data['artworks'][i]['title']);
        $(artworkHTMLRowContainer).find('.generic-item-text-info-container h3 b price').html(data['artworks'][i]['price']);
        $(artworkHTMLRowContainer).find('.artworks-items-buttons-container').children('form').children('input[name=hosted_button_id]').attr('value',data['artworks'][i]['paypal_value']);

        if(data['artworks'][i]['name']=== 'photo_7' || data['artworks'][i]['name']=== 'photo_8'){
            $(artworkHTMLRowContainer).find('.picture-overlay-container img').addClass('special-image')
        }
    }

    // The below populates dinamically the modal window when a user clicks on the "more info" overlay on the artwork's thumbnail picture

    $(document).on('click','.image-overlay-information a', function(e){

        var source = $(e.currentTarget).parent('div').siblings('img').prop('src');
        var modalTextElement = $('#picture-description-modal').find('.item-description-modal-footer p');
        var sourceIndex = (source.indexOf('j')-1);
        var commentIndex = (source.indexOf('_') - 5);

        source = source.slice(0,sourceIndex);
        source += "_HR.jpg";

        var title = $(e.currentTarget).parent('div').parent('div').siblings('.generic-item-text-info-container').children('h2').html();

        $('#picture-description-modal').find('h5').html(title);

        $('#picture-description-modal').find('img').attr('src',source);

        var comment= source.substring(commentIndex,sourceIndex);

        $(modalTextElement).html(findDescription(comment));

    });

    // The below function finds the picture description in the Artworks object and return the description string

function findDescription(imageName){
    for (var i=0; i < data['artworks'].length ; i++) {
        if(data['artworks'][i]['name'] === imageName){
            var description =  data['artworks'][i]['description']
        }
    }
    return description
}
});
