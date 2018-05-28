$(document).ready(function(){

    $(document).on('click','.image-overlay-information a', function(e){

        var source = $(e.currentTarget).parent('div').siblings('img').prop('src');

        var title = $(e.currentTarget).parent('div').parent('div').siblings('.generic-item-text-info-container').children('h2').html();

        $('#picture-description-modal').find('h5').html(title);

        $('#picture-description-modal').find('img').attr('src',source);

    });

});