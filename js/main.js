(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function (e) {
    e.preventDefault();
    offcanvasOpen();
  });
  $(".offcanvas-menu a:not(.anchor)").click(function (e) {
    e.preventDefault();
    offcanvasClose();
  });
  $(".close-offcanvas").click(function () {
    e.preventDefault();
    offcanvasClose();
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      offcanvasClose();
    }
  });
  function offcanvasOpen() {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  }
  function offcanvasClose() {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  }

  // sticky-menu
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 5) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  $(window).on("load resize", function () {
    $(".header-section").height($(".header-in").outerHeight());
    $("body").css("--header-height", $(".header-in").outerHeight() + "px");
  });

  //one-page-nav
  var top_offset = $(".header-area").height() - 10;
  $(".main-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset,
  });

  $(".page-menu").onePageNav({
    currentClass: "active",
    scrollOffset: 0,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
    scrollChange: false,
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
