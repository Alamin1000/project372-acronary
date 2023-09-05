(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

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
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
