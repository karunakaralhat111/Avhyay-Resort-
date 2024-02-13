$(document).ready(function () {
  // Set the interval for auto-sliding (adjust the time in milliseconds as needed)
  var interval = 5000; // 5000 milliseconds = 5 seconds

  // Get the carousel element
  var carousel = $("#carouselExampleFade");

  // Start the carousel
  carousel.carousel();

  // Set an interval to move to the next slide
  setInterval(function () {
    carousel.carousel("next");
  }, interval);
});