$(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 2,
      centerMode: true,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      reponsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
        }
      }
      ]
    });
  });