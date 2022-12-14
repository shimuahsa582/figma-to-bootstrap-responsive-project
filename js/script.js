///////////////////// Banner part ar slider code //////////////
$("#banner_slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
///////////////  client part ar slider code //////////////////
$(".client_01").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  centerMode: true,
  centerPadding: "0",
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class=" prev fa-solid fa-angle-left"></i>',
  nextArrow: '<i class=" next fa-solid fa-angle-right"></i>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
///////////////////////// Counter part///////////////////////
$(".count").counterUp({
  delay: 10,
  time: 1000,
});
///////////////////////////Page a button ///////////////////
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
///////////////////////// Video add ////////////////////
new VenoBox({
  selector: ".my-video-links",
});
