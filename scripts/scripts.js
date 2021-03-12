// Really only using this for slider functionality

//init review slider
$(".review-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick",
    },
    {
      breakpoint: 767,
      settings: { infinite: true, slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
});
