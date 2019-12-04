$(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 2,
      centerMode: true,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      }
      ]
    });
  });

