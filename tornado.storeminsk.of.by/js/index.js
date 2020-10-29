$(".slider").slick({
  dots: false,
  arrows: true,
  appendArrows: ".slider-arrows",
  prevArrow: '<span class="triangle-left"></span>',
  nextArrow: '<span class="triangle-right"></span>',
});

$(".new-slider").slick({
  dots: false,
  arrows: true,
  appendArrows: ".new-slider-arrows",
  prevArrow: '<span class="triangle-left"></span>',
  nextArrow: '<span class="triangle-right"></span>',
});

$(".rew-slider").slick({
  dots: false,
  arrows: true,
  appendArrows: ".rew-slider-arrows",
  prevArrow: '<span class="triangle-left"></span>',
  nextArrow: '<span class="triangle-right"></span>',
});



$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      '<span class="arrow-owl triangle-left"></span>',
      '<span class="arrow-owl triangle-right"></span>',
    ],
  });
});