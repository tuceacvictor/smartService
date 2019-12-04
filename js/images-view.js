$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});


$(function() {
    $('.apple-price-btn').on('click', function() {
       
        $('#apple-prices-modal').modal('show');
    });
});



$(function() {
    $('.samsung-price-btn').on('click', function() {
      
        $('#samsung-prices-modal').modal('show');
    });
});


$(function() {
    $('.other-price-btn').on('click', function() {
       
        $('#other-prices-modal').modal('show');
    });
});