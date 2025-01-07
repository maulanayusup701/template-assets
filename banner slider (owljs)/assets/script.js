$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000, // 5 detik antar slide
    smartSpeed: 1000, // 1 detik animasi transisi
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    nav: false,
    navText: [
      '<button class="btn btn-dark"><i class="bi bi-arrow-left"></i></button>',
      '<button class="btn btn-dark"><i class="bi bi-arrow-right"></i></button>',
    ],
    dots: true,
    // animateOut: "fadeOut",
    // animateIn: "fadeIn",
  });
});
